import { FigmaIcon } from './icons/FigmaIcon';

function Header() {
  const navigationItems = ['Products', 'Solutions', 'Community', 'Resources', 'Pricing', 'Contact'];

  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="[flex-flow:wrap] box-border content-center flex gap-6 items-center justify-start overflow-clip p-[32px] relative w-full">
        {/* Logo */}
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0">
          <div className="h-[35px] relative shrink-0 w-10">
            <FigmaIcon />
          </div>
        </div>

        {/* Navigation */}
        <div className="[flex-flow:wrap] basis-0 box-border content-start flex gap-2 grow items-start justify-end min-h-px min-w-px p-0 relative shrink-0">
          {navigationItems.map((item) => (
            <div
              key={item}
              className="bg-neutral-100 box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative rounded-lg shrink-0"
            >
              <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left text-nowrap">
                <p className="block leading-none whitespace-pre">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-[178px]">
          <div className="basis-0 bg-[#e3e3e3] grow min-h-px min-w-px relative rounded-lg shrink-0">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative w-full">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left text-nowrap">
                <p className="block leading-none whitespace-pre">Log in</p>
              </div>
            </div>
            <div className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-lg" />
          </div>
          <div className="basis-0 bg-[#2c2c2c] grow min-h-px min-w-px relative rounded-lg shrink-0">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative w-full">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-100 text-nowrap">
                <p className="block leading-none whitespace-pre">Sign up</p>
              </div>
            </div>
            <div className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-lg" />
          </div>
        </div>
      </div>
      <div className="absolute border-[#d9d9d9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default Header;
