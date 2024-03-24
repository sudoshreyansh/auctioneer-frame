/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import React from "react";
import { frames } from "@/lib/frame";

const handleRequest = frames(async (ctx) => {
  return {
    image: `http://localhost:3000/image/initial?q=${Math.ceil(Math.random() * 1000000)}`,
    imageOptions: {
      aspectRatio: '1:1',
    },
    buttons: [
      <Button action="link" target="https://opensea.com/">
        View on OpenSea
      </Button>,
      <Button action="post" target={{ pathname: "/dashboard" }}>
        View Auction
      </Button>,
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;