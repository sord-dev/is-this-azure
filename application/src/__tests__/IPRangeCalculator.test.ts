import IPRangeCalculator from "../services/IPRangeCalculator";

describe('IPRangeCalculator', () => {
    it('Should validate a correct IP address', async () => {
        const validIps = [
            "192.168.1.1",
            "10.0.0.1",
            "172.16.0.1",
            "8.8.8.8",
            "1.1.1.1",
            "192.0.2.1",
            "198.51.100.1",
            "203.0.113.1",
            "192.168.0.0",
            "255.255.255.255"
        ];

        validIps.forEach(ip => {
            expect(IPRangeCalculator.validateIPv4(ip)).toBe(true);
        });
    });

    it('Should invalidate an incorrect IP address', async () => {
        const invalidIps = [
            "256.256.256.256",
            "192.168.1.256",
            "192.168.1",
            "192.168.1.1.1",
            "192.168.1.-1",
            "192.168.1.abc",
            "192.168.1.1/33",
            "192.168.1.1/abc",
            "192.168.1.1/24/24",
            "192.168.1.1.1/24"
        ];

        invalidIps.forEach(ip => {
            expect(IPRangeCalculator.validateIPv4(ip)).toBe(false);
        });
    });

    it('Should calculate IPv4 range correctly', async () => {
        const range = IPRangeCalculator.calculateIPv4Range("192.168.1.0", 24);
        expect(range.networkAddress).toBe("192.168.1.0");
        expect(range.broadcastAddress).toBe("192.168.1.255");
        expect(range.firstUsableAddress).toBe("192.168.1.1");
        expect(range.lastUsableAddress).toBe("192.168.1.254");
    });

    it('Should increment IPv4 address correctly', async () => {
        expect(IPRangeCalculator.incrementIPv4("192.168.1.1")).toBe("192.168.1.2");
        expect(IPRangeCalculator.incrementIPv4("192.168.1.255")).toBe("192.168.2.0");
    });

    it('Should decrement IPv4 address correctly', async () => {
        expect(IPRangeCalculator.decrementIPv4("192.168.1.1")).toBe("192.168.1.0");
        expect(IPRangeCalculator.decrementIPv4("192.168.2.0")).toBe("192.168.1.255");
    });

    it('Should generate IPv4 range correctly', async () => {
        const range = IPRangeCalculator.generateIPv4Range("192.168.1.1", "192.168.1.5");
        expect(range).toEqual([
            "192.168.1.1",
            "192.168.1.2",
            "192.168.1.3",
            "192.168.1.4",
            "192.168.1.5"
        ]);
    });

    it('Should compare IPv4 addresses correctly', async () => {
        expect(IPRangeCalculator.compareIPv4("192.168.1.1", "192.168.1.2")).toBe(-1);
        expect(IPRangeCalculator.compareIPv4("192.168.1.2", "192.168.1.1")).toBe(1);
        expect(IPRangeCalculator.compareIPv4("192.168.1.1", "192.168.1.1")).toBe(0);
    });
});