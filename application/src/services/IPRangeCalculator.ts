class IPRangeCalculator {
    /**
     * Convert an IP address to its binary representation
     * @param {string} ip - IP address to convert
     * @returns {string} Binary representation of the IP
     */
    static toBinary(ip: string): string {
      // Check if IPv4 or IPv6
      if (ip.includes('.')) {
        return ip.split('.').map(octet => 
          parseInt(octet).toString(2).padStart(8, '0')
        ).join('');
      } else if (ip.includes(':')) {
        return ip.split(':').map(hex => 
          parseInt(hex, 16).toString(2).padStart(16, '0')
        ).join('');
      }
      throw new Error('Invalid IP address format');
    }
  
    /**
     * Validate an IPv4 address
     * @param {string} ip - IP address to validate
     * @returns {boolean} Whether the IP is valid
     */
    static validateIPv4(ip: string): boolean {
      const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
      if (!ipv4Regex.test(ip)) return false;
      
      return ip.split('.').every(octet => {
        const num = parseInt(octet, 10);
        return num >= 0 && num <= 255;
      });
    }
  
    /**
     * Validate an IPv6 address
     * @param {string} ip - IP address to validate
     * @returns {boolean} Whether the IP is valid
     */
    static validateIPv6(ip: string): boolean {
      const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
      return ipv6Regex.test(ip);
    }
  
    /**
     * Calculate network and broadcast addresses for IPv4
     * @param {string} ip - Base IP address
     * @param {number} cidr - CIDR notation (subnet mask)
     * @returns {Object} Network and broadcast addresses
     */
    static calculateIPv4Range(ip: string, cidr: number): { networkAddress: string, broadcastAddress: string, firstUsableAddress: string, lastUsableAddress: string } {
      if (!this.validateIPv4(ip)) {
        throw new Error('Invalid IPv4 address');
      }
  
      if (cidr < 0 || cidr > 32) {
        throw new Error('Invalid CIDR notation');
      }
  
      const ipParts = ip.split('.').map(Number);
      const subnetMask = this.createSubnetMask(cidr);
      const networkAddress = ipParts.map((part, i) => part & subnetMask[i]);
      
      const broadcastAddress = networkAddress.map((part, i) => 
        part | (~subnetMask[i] & 255)
      );
  
      return {
        networkAddress: networkAddress.join('.'),
        broadcastAddress: broadcastAddress.join('.'),
        firstUsableAddress: this.incrementIPv4(networkAddress.join('.')),
        lastUsableAddress: this.decrementIPv4(broadcastAddress.join('.'))
      };
    }
  
    /**
     * Create subnet mask for IPv4
     * @param {number} cidr - CIDR notation
     * @returns {number[]} Subnet mask as array of octets
     */
    static createSubnetMask(cidr: number): number[] {
      const mask = Array(32).fill(0).fill(1, 0, cidr);
      return [
        parseInt(mask.slice(0, 8).join(''), 2),
        parseInt(mask.slice(8, 16).join(''), 2),
        parseInt(mask.slice(16, 24).join(''), 2),
        parseInt(mask.slice(24, 32).join(''), 2)
      ];
    }
  
    /**
     * Increment an IPv4 address
     * @param {string} ip - IPv4 address to increment
     * @returns {string} Next IP address
     */
    static incrementIPv4(ip: string): string {
      const parts = ip.split('.').map(Number);
      for (let i = 3; i >= 0; i--) {
        if (parts[i] < 255) {
          parts[i]++;
          break;
        }
        parts[i] = 0;
      }
      return parts.join('.');
    }
  
    /**
     * Decrement an IPv4 address
     * @param {string} ip - IPv4 address to decrement
     * @returns {string} Previous IP address
     */
    static decrementIPv4(ip: string): string {
      const parts = ip.split('.').map(Number);
      for (let i = 3; i >= 0; i--) {
        if (parts[i] > 0) {
          parts[i]--;
          break;
        }
        parts[i] = 255;
      }
      return parts.join('.');
    }
  
    /**
     * Generate IP range for IPv4
     * @param {string} start - Starting IP address
     * @param {string} end - Ending IP address
     * @returns {string[]} Array of IP addresses in the range
     */
    static generateIPv4Range(start: string, end: string): string[] {
      if (!this.validateIPv4(start) || !this.validateIPv4(end)) {
        throw new Error('Invalid IPv4 addresses');
      }
  
      const range = [];
      let current = start;
      while (this.compareIPv4(current, end) <= 0) {
        range.push(current);
        current = this.incrementIPv4(current);
      }
      return range;
    }
  
    /**
     * Compare two IPv4 addresses
     * @param {string} ip1 - First IP address
     * @param {string} ip2 - Second IP address
     * @returns {number} -1, 0, or 1 depending on comparison
     */
    static compareIPv4(ip1: string, ip2: string): number {
      const parts1 = ip1.split('.').map(Number);
      const parts2 = ip2.split('.').map(Number);
  
      for (let i = 0; i < 4; i++) {
        if (parts1[i] < parts2[i]) return -1;
        if (parts1[i] > parts2[i]) return 1;
      }
      return 0;
    }
  }

  
  // Note: IPv6 methods would be similar but more complex due to hexadecimal representation