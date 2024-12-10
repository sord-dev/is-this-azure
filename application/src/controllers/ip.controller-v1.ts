import AzureIpService from "../services/azure-ip-service";
const azureIpService = new AzureIpService();

export async function getIps(req: any, res: any) {
    try {
        const ips = await azureIpService.getIps();
        res.json(ips);

    } catch (error: any) {
        res.status(500).json({ error: error.message, location: error.location });
    }
}

export async function getIpsByService(req: any, res: any) {
    try {
        const service = req.params.service;
        const ips = await azureIpService.getIpsByService(service);
        res.json(ips);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function identifyIp(req: any, res: any) {
    try {
        const ip = req.params.ip;
        const result = await azureIpService.identifyIp(ip);

        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function getServicesIndex(req: any, res: any) {
    try {
        const services = await azureIpService.getServicesIndex();
        res.json({ count: services.length, services });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}