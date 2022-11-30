import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Image from 'next/image'
import WebsiteTemplate from '../../templates/website';


export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');
  const subtitle = searchParams.get('subtitle');
  const bg = searchParams.get('bg');

  return new ImageResponse(
    ( 
     <WebsiteTemplate title={title ? title : "One unified API One billion possibilities"} subtitle={subtitle ? subtitle : "Unified API"} bg={bg ? bg : "covalent-9"}/>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
