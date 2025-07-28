interface CardProps {
  title: string;
  description: string;
  buttonText?: string;
  layout: 'horizontal' | 'vertical';
}

function Card({ title, description, buttonText, layout }: CardProps) {
  const isHorizontal = layout === 'horizontal';

  return (
    <div
      className={`[flex-flow:wrap] bg-[#ffffff] box-border content-start flex gap-6 items-start justify-start min-w-60 p-[24px] relative rounded-lg shrink-0 ${
        isHorizontal ? 'w-full' : 'basis-0 grow min-h-px min-w-60'
      }`}
    >
      <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="bg-[#e3e3e3] min-w-40 shrink-0 size-40"></div>
      <div
        className={`basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px p-0 relative shrink-0 ${
          isHorizontal ? 'min-w-40' : ''
        }`}
      >
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
            <p className="block leading-[1.2]">{title}</p>
          </div>
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#757575] text-[16px] w-full">
            <p className="block leading-[1.4]">{description}</p>
          </div>
        </div>
        {buttonText && (
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="bg-[#e3e3e3] relative rounded-lg shrink-0">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[12px] relative">
                <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left text-nowrap">
                  <p className="block leading-none whitespace-pre">{buttonText}</p>
                </div>
              </div>
              <div className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
