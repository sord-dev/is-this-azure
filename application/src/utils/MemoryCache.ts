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
export class MSMemoryCache {
    private cache: Record<string, MSResponseRecord> = {};
    
    /**
     * Set a key-value pair in the cache
     * @param key The key to store the value under
     * @param value The value to store
     * @returns void
    */
    public set(key: string, value: MSResponseRecord): void {
        this.cache[key] = value;
    }
    
    /**
     * Get a value from the cache
     * @param key The key to retrieve the value for
     * @returns any
    */
    public get(key: string): any {
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
}