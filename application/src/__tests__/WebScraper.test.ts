import WebScraper from '../services/WebScraper';

describe('WebScraper', () => {
    it('Should return MS Download Link', async () => {
        const scraper = new WebScraper();
        const links = await scraper.querySelectAttribute('https://www.microsoft.com/en-us/download/details.aspx?id=56519', 'a[href^="https://download.microsoft.com/download"]', 'href');
        expect(typeof links).toBe('string');
    });

    it('Should return Content from Google Search Button', async () => {
        const scraper = new WebScraper();
        const value = await scraper.querySelectAttribute('https://www.google.com/', 'input[value="Google Search"]', 'value');
        expect(value).toEqual('Google Search');
    });
});