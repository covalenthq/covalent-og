import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Image from 'next/image'
import WebsiteTemplate from '../../templates/website';
import TwitterTemplate from '../../templates/twitter';



export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(new URL('../../assets/TitilliumWeb-Light.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');
  const subtitle = searchParams.get('subtitle');
  const bg = searchParams.get('bg');
  const twitter = searchParams.get('twitter');
  const fontData = await font;

  return new ImageResponse(
    ( 
      <>
        {!twitter ? 
          <WebsiteTemplate 
          title={title ? title : <div style={{display:"flex", flexDirection: "column"}}>One unified API <br></br> One billion possibilities</div>} 
          subtitle={subtitle ? subtitle : "Unified API"} 
          bg={bg ? bg : "covalent-14"}/>  
          :
          <TwitterTemplate 
            title={title ? title : <div style={{display:"flex", flexDirection: "column"}}>One unified API <br></br> One billion possibilities</div>} 
            subtitle={subtitle ? subtitle : "Unified API"} 
            bg={bg ? bg : "covalent-14"}/>
        }
      </>
    ),
    {
      width: twitter ? 800 : 1200,
      height: twitter ? 800 : 600,
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
