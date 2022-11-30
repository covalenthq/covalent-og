import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Image from 'next/image'
import WebsiteTemplate from '../../templates/website';


export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(new URL('../../assets/TitilliumWeb-Regular.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');
  const subtitle = searchParams.get('subtitle');
  const bg = searchParams.get('bg');
  const fontData = await font;

  return new ImageResponse(
    ( 
     <WebsiteTemplate 
        title={title ? title : <div style={{display:"flex", flexDirection: "column"}}>One unified API <br></br> One billion possibilities</div>} 
        subtitle={subtitle ? subtitle : "Unified API"} 
        bg={bg ? bg : "covalent-9"}/>
    ),
    {
      width: 1200,
      height: 630,
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
