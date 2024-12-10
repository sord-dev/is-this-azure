import axios from 'axios';
import { Request, Response } from 'express';

import IPRangeCalculator from '../services/IPRangeCalculator';
import WebScraper from '../services/WebScraper';

import { MSMemoryCache } from '../utils/MemoryCache';

const cache = new MSMemoryCache();
interface WebScraperMSResponse {
    address: string;
}

export const getMSDownloadAddress = async (): Promise<WebScraperMSResponse> => { // function to get the IP address list from MS Azure
    const cached = cache.get('ms-download-address');
    if (cached) return cached;

    const webScraper = new WebScraper();
    const address = await webScraper.querySelectAttribute('https://www.microsoft.com/en-us/download/details.aspx?id=56519', 'a[href^="https://download.microsoft.com/download"]', 'href');
    if (typeof address !== 'string') throw new Error('Azure MS IP Address list not found, please check the WebScraper Invocation');
    cache.set('ms-download-address', { address, ttl: 1000 * 60 * 60 * 24 });

    return { address };
}

export const getPublicIPData = async (): Promise<string[]> => {
    const { address } = await getMSDownloadAddress();
    const response = await axios.get(address);
    return response.data as string[];
}

// We have access to a WebScraper service, alongside an already build ip IPRangeCalculator (IPv4 only)

export const getPublicIPs = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getPublicIPData();
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
} 