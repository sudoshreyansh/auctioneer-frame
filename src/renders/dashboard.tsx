export default function DashboardFrame({ currentBid, highestBid }: {
  currentBid?: string;
  highestBid: string;
}) {
  return (
    <div tw="bg-black text-white h-full w-full flex flex-col items-center pt-10">
      <div tw="flex items-center bg-[#00744a] py-2 px-6 rounded-full">
        <div tw="w-4 h-4 rounded-full bg-[#00FFA3]"></div>
        <div tw="text-3xl pl-5">3 days remaining</div>
      </div>
      <div tw="flex flex-col justify-center items-center w-full pt-20 pb-10 grow">
        <div tw="flex text-7xl pb-20 font-bold" style={{ fontFamily: 'ManropeExtrabold' }}>
          BAYC NFT #0032
        </div>
        <div tw="flex flex-col w-full">
          <div tw="flex text-4xl justify-center w-full items-end" style={{ fontFamily: 'ManropeSemibold' }}>
            <div tw="w-1/2 flex justify-end pr-10">Highest Bid:</div>
            <div tw="flex text-5xl w-1/2 items-end" style={{ fontFamily: 'ManropeBold' }}>
              <div tw="flex">
                { highestBid } ETH
              </div>
              <div tw="flex text-4xl text-[#00FFA3] pl-10 items-center">
                <div>12.65 %</div>
              </div>
            </div>
          </div>
          <div tw="flex text-4xl pt-2 justify-center w-full items-end" style={{ fontFamily: 'ManropeSemibold' }}>
            <div tw="pr-10 w-1/2"></div>
            <div tw="text-4xl w-1/2" style={{ fontFamily: 'ManropeBold' }}>by @farcaster</div>
          </div>
        </div>

        <div tw="flex flex-col w-3/5 pt-12">
          <div tw="flex text-4xl justify-center w-full items-end" style={{ fontFamily: 'ManropeSemibold' }}>
            <div tw="w-1/2 flex justify-end pr-10">Your Bid:</div>
            <div tw="text-5xl w-1/2" style={{ fontFamily: 'ManropeBold' }}>0 ETH</div>
          </div>
        </div>

        {
          currentBid ?
          <div tw="grow flex flex-col justify-center items-center text-5xl">
            <div tw="pb-4">
              Confirm the bid amount:
            </div>
            <div tw="flex">
              { currentBid } ETH
            </div>
          </div> :
          <div tw="grow flex flex-col justify-center items-center text-5xl">
            <div tw="pb-4">
              What you're waiting for?
            </div>
            <div>
              Let's place a bid!
            </div>
          </div>
        }

        <div tw="flex justify-center w-3/5 text-4xl">
          🔥🔥 &nbsp; 7 bidders
        </div>
        <div tw="flex justify-center w-3/5 text-4xl pt-2">
          🔥🔥🔥 &nbsp; 102 spectators
        </div>
      </div>
    </div>
  )
}