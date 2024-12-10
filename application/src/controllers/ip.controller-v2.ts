import { Request, Response } from 'express';
import IPRangeCalculator from '../services/IPRangeCalculator';
import WebScraper from '../services/WebScraper';

// function to get the IP address list from MS Azure
// URL = https://www.microsoft.com/en-us/download/details.aspx?id=56519

export const getPublicIPs = async (req: Request, res: Response) => {
    try {
        const webScraper = new WebScraper();
        const ipList = webScraper.querySelect('https://www.microsoft.com/en-us/download/details.aspx?id=56519', 'table tr td:nth-child(1)');
        res.json(ipList);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

// We have access to a WebScraper service, alongside an already build ip IPRangeCalculator (IPv4 only)