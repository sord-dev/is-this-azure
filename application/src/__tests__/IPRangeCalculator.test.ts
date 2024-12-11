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
        const invalidIps = ["256.256.256.256",
            "192.168.1.256",
            "192.168.1",
            "192.168.1.1.1",
            "192.168.1.-1",
            "192.168.1.abc",
            "192.168.1.1/33",
            "192.168.1.1/abc",
            "192.168.1.1/24/24",
            "192.168.1.1.1/24"
        ]

        invalidIps.forEach(ip => {
            expect(IPRangeCalculator.validateIPv4(ip)).toBe(false);
        });
    });
});