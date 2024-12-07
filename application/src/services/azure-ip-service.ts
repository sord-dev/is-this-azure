import axios from 'axios';
import { AzureIpServiceResponse } from '../types/azure-ip-service';


export default class AzureIpService {
    private cachedResponse: any;
    public servicesIndex: Array<string>;

    constructor() {
        this.cachedResponse = null;
        this.servicesIndex = [];
    }

    async getIpRanges() {
        const response = await axios.get('https://download.microsoft.com/download/7/1/D/71D86715-5596-4529-9B13-DA13A5DE5B63/ServiceTags_Public_20241125.json');
        const data = response.data as AzureIpServiceResponse;
        
        this.cachedResponse = data;
        this.servicesIndex = data.values.map((value: any) => value.name);
        return data;
    }

    async getIps() {
        if (!this.cachedResponse) {
            console.log('Fetching data from Azure');
            return await this.getIpRanges();
        }

        console.log('Fetching data from cache');
        return this.cachedResponse;
    }

    async getIpsByService(service: string) {
        const response = await this.getIps();
        const serviceIps = response.values.filter((value: any) => value.name === service);
        return serviceIps;
    }

    async identifyIp(ip: string) {
        const response = await this.getIps();

        const service = response.values.find((value: any) => {
            return value.properties.addressPrefixes.find((address: string) => {
                const [prefix, range] = address.split('/');

                if (range === '32') {
                    return ip === prefix;
                }

                // Calculate the range of the IP address
                const ipParts = ip.split('.');
                const addressParts = prefix.split('.');
                const ipNumber = ipParts.reduce((acc, part, index) => {
                    return acc + parseInt(part) * Math.pow(256, 3 - index);
                }, 0);

                const addressNumber = addressParts.reduce((acc, part, index) => {
                    return acc + parseInt(part) * Math.pow(256, 3 - index);
                }, 0);

                const rangeNumber = Math.pow(2, 32 - parseInt(range));
                const endRange = addressNumber + rangeNumber;

                return ipNumber >= addressNumber && ipNumber <= endRange;
            });
        });


        return { isIp: !!service, service };
    }

    async getServicesIndex() {
        if(!this.servicesIndex.length) {
            const response = await this.getIps();
            this.servicesIndex = response.values.map((value: any) => value.name);
        }

        return this.servicesIndex;
    }
}