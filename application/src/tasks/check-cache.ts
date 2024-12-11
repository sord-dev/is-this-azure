import cron from 'node-cron'
import cache from '../services/MemoryCache';

// Clear expired records every day at midnight
cron.schedule('0 0 * * *', () => { cache.clearExpired(); });