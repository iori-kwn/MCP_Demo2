function Hero() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex flex-col items-center justify-start px-16 py-40 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-center">
        <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[#1e1e1e] text-[72px] tracking-[-2.16px] w-full">
          <p className="block leading-[1.2]">Title</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#757575] text-[32px] w-full">
          <p className="block leading-[1.2]">Subtitle</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
