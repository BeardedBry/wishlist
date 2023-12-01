import { parse } from 'node-html-parser';
import createMetaScraper from 'metascraper';
import metascraperAmazon from 'metascraper-amazon';
import metascraperImage from 'metascraper-image';
import metascraperTitle from 'metascraper-title';
import metascraperDescription from 'metascraper-description';
import metascraperUrl from 'metascraper-url';

export async function POST(req: Request) {
    
    // const metascraper = require('metascraper')([ require('metascraper-amazon')()])
    // const metascraper = createMetaScraper([ metascraperAmazon() ])
    const metascraper = createMetaScraper([
        metascraperAmazon(), 
        metascraperImage(), 
        metascraperTitle(), 
        metascraperDescription(), 
        metascraperUrl() 
    ]);
    
    const reqBody = await req.json()
    // console.log('urls ', urls);
    
    const getLinksMeta = async (urls: string[]) => {
        if (urls.length === 0) return []
        
        let metaLink = null;
        
        try {
            for (const url of urls) {
                
                const response = await fetch(url)
                const body = await response.text()
  

                metaLink = await metascraper({ html: body, url: url });
            }

            // console.log('linksMeta ', linksMeta)
            if(!metaLink) {
                return new Response(JSON.stringify({error: 'No meta tags found'}), {status: 400})
            }
        
            return new Response(JSON.stringify(metaLink), {status: 200})

        } catch (error) {
            console.log(error)
            return new Response(JSON.stringify({error: error?.message}), {status: 500})
        }
    }

    return getLinksMeta([reqBody.url]);
}