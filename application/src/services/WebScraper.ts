import axios from 'axios';
import jsdom from 'jsdom';

class WebScraper {
    async querySelectAll(url: string, selector: string): Promise<string[]> {
        const response = await axios.get(url);
        const dom = new jsdom.JSDOM(response.data as string);
        const elements = dom.window.document.querySelectorAll(selector);

        return Array.from(elements)
            .map((element) => element.textContent)
            .filter((text): text is string => text !== null);
    }

    async querySelect(url: string, selector: string): Promise<string> {
        const response = await axios.get(url);
        const dom = new jsdom.JSDOM(response.data as string);
        const element = dom.window.document.querySelector(selector);

        return element?.textContent || '';
    }

    async querySelectAttribute(url: string, selector: string, attribute: string): Promise<string> {
        const response = await axios.get(url);
        const dom = new jsdom.JSDOM(response.data as string);
        const element = dom.window.document.querySelector(selector);

        return element?.getAttribute(attribute) || '';
    }
}

export default WebScraper;