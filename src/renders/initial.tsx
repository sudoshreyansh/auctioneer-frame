export default function InitialFrame() {
  return (
    <div tw="bg-black text-white h-full w-full flex flex-col items-center pt-10">
      <div tw="flex items-center bg-[#00744a] py-2 px-6 rounded-full">
        <div tw="w-4 h-4 rounded-full bg-[#00FFA3]"></div>
        <div tw="text-3xl pl-5">7 days long</div>
      </div>
      <div tw="flex w-[55%] h-[55%] pt-15 justify-center">
        <img
          tw="object-contain h-full"
          style={{ transform: "rotate(4deg)" }}
          src="https://i.seadn.io/gae/02IxXnRqlsiWM_Tbmz_Ef6JbIhu0r4AfPpKDtA5uj9KllOTd4ZdlJOzR6Q420vZK3ajc0svNF3c_9buMcguUR9ZEqiio8XOVIURp2RM?auto=format&dpr=1"
          />
      </div>
      <div tw="flex flex-col justify-center items-center w-full pt-20 pb-10">
        <div tw="flex text-7xl pb-10 font-bold" style={{ fontFamily: 'ManropeExtrabold' }}>
          BAYC NFT #0032
        </div>
        <div tw="flex flex-col w-2/5">
          <div tw="flex text-4xl justify-between w-full" style={{ fontFamily: 'ManropeSemibold' }}>
            <div tw="pr-10">Auction Start:</div>
            <div>0.02 ETH</div>
          </div>
          <div tw="flex text-4xl justify-between w-full" style={{ fontFamily: 'ManropeSemibold' }}>
            <div tw="pr-10">Last Sale:</div>
            <div>1.72 ETH</div>
          </div>
          <div tw="flex text-4xl justify-between w-full" style={{ fontFamily: 'ManropeSemibold' }}>
            <div tw="pr-10">Collection Floor:</div>
            <div>0.08 ETH</div>
          </div>
        </div>
      </div>
    </div>
  )
}