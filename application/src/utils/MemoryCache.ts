interface MSResponseRecord {
    address: string;
    ttl: number;
}

export class MSMemoryCache {
    private cache: Record<string, MSResponseRecord> = {};
    
    public set(key: string, value: MSResponseRecord): void {
        this.cache[key] = value;
    }
    
    public get(key: string): any {
        if (!this.cache[key]) return null;
        return this.cache[key];
    }
    
    public delete(key: string): void {
        delete this.cache[key];
    }
}