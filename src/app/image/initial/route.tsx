import { ImageResponse } from 'next/og';
import InitialFrame from '@/renders/initial';

const fonts = {
  medium: fetch('http://localhost:3000/assets/Manrope-Medium.ttf').then((res) => res.arrayBuffer()),
  bold: fetch('http://localhost:3000/assets/Manrope-Bold.ttf').then((res) => res.arrayBuffer()),
  semiBold: fetch('http://localhost:3000/assets/Manrope-SemiBold.ttf').then((res) => res.arrayBuffer()),
  extraBold: fetch('http://localhost:3000/assets/Manrope-ExtraBold.ttf').then((res) => res.arrayBuffer()),
}

export async function GET() {
  return new ImageResponse(
    (
      <InitialFrame />
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