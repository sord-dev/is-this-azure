interface MSResponseRecord {
    address: string;
    ttl: number;
}

/**
 * Memory Cache for Microsoft Azure IP Address List
 * @class MSMemoryCache
 * @public set
 * @public get
 * @public delete
 * @private cache
 */
class MSMemoryCache {
    private cache: Record<string, MSResponseRecord> = {};
    
    /**
     * Set a key-value pair in the cache
     * @param key The key to store the value under
     * @param MSResponseRecord The value to store
     * @returns void
     */
    public set(key: string, value: MSResponseRecord): void {
        this.cache[key] = value;
    }
    
    /**
     * Get a value from the cache
     * @param key The key to retrieve the value for
     * @returns MSResponseRecord | undefined
    */
    public get(key: string): MSResponseRecord | undefined {
        return this.cache[key];
    }
    
    /**
      * Delete a value from the cache
      * @param key The key to delete the value for
      * @returns void
    */
    public delete(key: string): void {
        delete this.cache[key];
    }

    /**
      * Check for expired records and delete them
      * @returns void
    */
    public clearExpired(): void {
        const now = Date.now();
        for (const key in this.cache) {
            if (this.cache[key].ttl < now) {
                delete this.cache[key];
            }
        }
    }
}

export default new MSMemoryCache();