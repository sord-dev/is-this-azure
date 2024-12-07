export type AzureIpServiceResponse = {
    values: Array<{
        name: string, id: string, properties: {
            changeNumber: number,
            region: string,
            platform: string,
            systemService: string,
            addressPrefixes: Array<string>,
            networkFeatures: Array<string>,
        }
    }>
}