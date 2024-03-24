import { Button } from "frames.js/next";
import { frames } from "@/lib/frame";
import { fdk } from "@/lib/pinata";

const handleRequest = frames(async (ctx) => {
  const currentBid = ctx.searchParams.bid ? parseInt(ctx.searchParams.bid) : 0;
  const bidConfirmed = ctx.searchParams.confirm;
  const highestBid = currentBid ? currentBid : 1028;

  await fdk.sendAnalytics('dashboard-frame', await ctx.request.json());

  return {
    image: `http://localhost:3000/image/dashboard?high=1028${ currentBid ? `&bid=${currentBid}` : "" }`,
    imageOptions: {
      aspectRatio: '1:1',
    },
    buttons: !bidConfirmed ?
    [
      <Button action="post" target={{ pathname: "/dashboard", query: { bid: highestBid + 5 }}}>
        + 0.005 ETH
      </Button>,
      <Button action="post" target={{ pathname: "/dashboard", query: { bid: highestBid + 50 }}}>
        + 0.05 ETH
      </Button>,
      <Button action="post" target={{ pathname: "/dashboard", query: { bid: highestBid + 500 }}}>
        + 0.5 ETH
      </Button>,
      <Button action="post" target={{ pathname: "/dashboard", query: { bid: highestBid, confirm: true } }}>
        Confirm
      </Button>,
    ] :
    [
      <Button action="tx" target="/txdata" post_url="/tx-success">
        Place Bid
      </Button>,
      <Button action="post" target={{ pathname: "/dashboard" }}>
        Cancel Bid
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;