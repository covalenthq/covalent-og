import { ImageResponse } from '@vercel/og';
import { NextRequest, NextResponse } from 'next/server';
import WebsiteTemplate from '../../templates/website';
import TwitterTemplate from '../../templates/twitter';
import BannerTemplate from '../../templates/banner';
import DatoTemplate from '../../templates/dato';
import GenericTemplate from '../../templates/generic';



export const config = {
  runtime: 'edge',
};

const font = fetch(new URL('../../assets/TitilliumWeb-Light.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title');
    const subtitle = searchParams.get('subtitle');
    const bg = searchParams.get('bg');
    const twitter = searchParams.get('twitter');
    const banner = searchParams.get('banner');
    const dato = searchParams.get('dato');  
    const generic = searchParams.get('generic');  

    const fontData = await font;
    const requestHeaders = new Headers(req.headers)

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    response.headers.set('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)

    return new ImageResponse(
      ( 
        <>
          {twitter ? 
            <TwitterTemplate 
              title={title ? title : <div style={{display:"flex", flexDirection: "column"}}>One unified API <br></br> One billion possibilities</div>} 
              subtitle={subtitle ? subtitle : "Unified API"} 
              bg={bg ? bg : "covalent-14"}/>
          : banner ?
            <BannerTemplate 
              img={`https://www.datocms-assets.com/${dato}`}
              title={title ? title : <div style={{display:"flex", flexDirection: "column"}}>One unified API <br></br> One billion possibilities</div>} 
              subtitle={subtitle ? subtitle : "Unified API"} 
              bg={bg ? bg : "covalent-14"}/>
          : generic ?
            <GenericTemplate 
                img={`https://www.datocms-assets.com/${dato}`}
            />  
          : dato ?
            <DatoTemplate 
              img={`https://www.datocms-assets.com/${dato}`}
              title={title ? title : <div style={{display:"flex", flexDirection: "column"}}>One unified API <br></br> One billion possibilities</div>} 
              subtitle={subtitle ? subtitle : "Unified API"} 
              bg={bg ? bg : "covalent-14"}/>  
          :
            <WebsiteTemplate 
              title={title ? title : <div style={{display:"flex", flexDirection: "column"}}>One unified API <br></br> One billion possibilities</div>} 
              subtitle={subtitle ? subtitle : "Unified API"} 
              bg={bg ? bg : "covalent-14"}/>  
          }
        </>
      ),
      {
        width: twitter ? 800 : banner ? 1920 : 1200,
        height: twitter ? 800 : banner ? 1080 : 600,
        fonts: [
          {
            name: "'Titillium Web', sans-serif",
            data: fontData,
            style: 'normal'
          }
        ]
      },
    );
  }
  catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}