import DashboardFrame from '@/renders/dashboard';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

const fonts = {
  medium: fetch('http://localhost:3000/assets/Manrope-Medium.ttf').then((res) => res.arrayBuffer()),
  bold: fetch('http://localhost:3000/assets/Manrope-Bold.ttf').then((res) => res.arrayBuffer()),
  semiBold: fetch('http://localhost:3000/assets/Manrope-SemiBold.ttf').then((res) => res.arrayBuffer()),
  extraBold: fetch('http://localhost:3000/assets/Manrope-ExtraBold.ttf').then((res) => res.arrayBuffer()),
}

function toDisplayEth(a: string): string {
  const int = parseInt(a);
  return (int / 1000).toFixed(3);
}

export async function GET(req: NextRequest) {
  const currentBid = req.nextUrl.searchParams.get('bid');
  const highestBid = req.nextUrl.searchParams.get('high') ?? "0000";

  return new ImageResponse(
    (
      <DashboardFrame
        currentBid={currentBid ? toDisplayEth(currentBid) : undefined}
        highestBid={toDisplayEth(highestBid)}
        />
    ),
    {
      width: 1200,
      height: 1200,
      fonts: [
        {
          name: 'Manrope',
          data: await fonts.medium,
          style: 'normal',
        },
        {
          name: 'ManropeBold',
          data: await fonts.bold,
          style: 'normal',
        },
        {
          name: 'ManropeSemibold',
          data: await fonts.semiBold,
          style: 'normal',
        },
        {
          name: 'ManropeExtrabold',
          data: await fonts.extraBold,
          style: 'normal',
        },
      ],
    },
  );
}