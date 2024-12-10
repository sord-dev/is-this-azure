import axios from 'axios';
import { JSDOM } from 'jsdom';

// Define interfaces for better type safety and flexibility
interface ScraperOptions {
  timeout?: number;
  headers?: Record<string, string>;
}

interface WebScraperInterface {
  querySelectAll(url: string, selector: string): Promise<string[]>;
  querySelect(url: string, selector: string): Promise<string>;
  querySelectAttribute(url: string, selector: string, attribute: string): Promise<string>;
}

export default class WebScraper implements WebScraperInterface {
  private httpClient: Axios.AxiosInstance;

  constructor(options: ScraperOptions = {}) {
    this.httpClient = axios.create({
      timeout: options.timeout || 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ...options.headers
      }
    });
  }

  private async fetchDocument(url: string): Promise<Document> {
    try {
      const response = await this.httpClient.get(url);
      const dom = new JSDOM(response.data as string);
      return dom.window.document;
    } catch (error) {
      console.error(`Failed to fetch URL: ${url}`, error);
      throw new Error(`Scraping failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async querySelectAll(url: string, selector: string): Promise<string[]> {
    const document = await this.fetchDocument(url);
    const elements = document.querySelectorAll(selector);

    return Array.from(elements)
      .map((element) => element.textContent)
      .filter((text): text is string => text !== null);
  }

  async querySelect(url: string, selector: string): Promise<string> {
    const document = await this.fetchDocument(url);
    const element = document.querySelector(selector);

    return element?.textContent || '';
  }

  async querySelectAttribute(url: string, selector: string, attribute: string): Promise<string> {
    const document = await this.fetchDocument(url);
    const element = document.querySelector(selector);

    return element?.getAttribute(attribute) || '';
  }
}

export { WebScraper, WebScraperInterface, ScraperOptions };