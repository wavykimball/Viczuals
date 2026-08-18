import svgPaths from "./svg-tv510gpvhq";
type ComponentProps = {
  className?: string;
  property1?: "cancel-01" | "equal-sign" | "plus-sign";
};

function Component({ className, property1 = "plus-sign" }: ComponentProps) {
  if (property1 === "equal-sign") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative size-[40px]"} data-name="Property 1=equal-sign">
        <div className="absolute inset-[28.13%_11.46%_28.12%_11.46%]" data-name="elements">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.5" preserveAspectRatio="none" viewBox="0 0 30.8333 17.5" width="30.8333">
            <g id="elements">
              <path clipRule="evenodd" d={svgPaths.pe4f8470} fill="white" fillRule="evenodd" id="Vector 4809 (Stroke)" />
              <path clipRule="evenodd" d={svgPaths.p3a219350} fill="white" fillRule="evenodd" id="Vector 4810 (Stroke)" />
            </g>
          </svg>
        </div>
      </button>
    );
  }
  if (property1 === "cancel-01") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative size-[40px]"} data-name="Property 1=cancel-01">
        <div className="absolute inset-[17.71%]" data-name="elements">
          <svg className="absolute block inset-0 size-full" fill="none" height="25.8333" preserveAspectRatio="none" viewBox="0 0 25.8333 25.8333" width="25.8333">
            <g id="elements">
              <path clipRule="evenodd" d={svgPaths.p3ea7fa00} fill="white" fillRule="evenodd" id="Vector (Stroke)" />
            </g>
          </svg>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "overflow-clip relative size-[40px]"} data-name="Property 1=plus-sign">
      <div className="absolute inset-[16.67%]" data-name="elements">
        <div className="absolute inset-[-4.69%]">
          <svg className="block size-full" fill="none" height="29.1667" preserveAspectRatio="none" viewBox="0 0 29.1667 29.1667" width="29.1667">
            <g id="elements">
              <path d={svgPaths.p28fa4960} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
        <g id="Icon">
          <path d={svgPaths.p3bdb9620} fill="white" id="Vector" stroke="#E6E6E6" strokeWidth="0.363636" />
          <g id="Group 41681">
            <path d={svgPaths.p791b400} fill="black" id="Viczuals" />
            <path d={svgPaths.p20985870} fill="white" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1360px]">
      <Icon />
      <Component className="block cursor-pointer overflow-clip relative shrink-0 size-[40px]" property1="cancel-01" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_01)</p>
      <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Home</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_02)</p>
      <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">About</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_03)</p>
      <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Projects</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_04)</p>
      <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Services</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_05)</p>
      <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Contact</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[48px] items-start not-italic py-[8px] relative shrink-0 text-center text-white tracking-[-0.08px] w-[203px] whitespace-nowrap">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[64px] items-start px-[40px] py-[24px] relative size-full">
      <Frame7 />
      <Frame6 />
    </div>
  );
}