import svgPaths from "./svg-forygbugq2";
import imgThumbnail from "./c7e117527c2ae892a0b25c22975008256076a702.png";
import imgThumbnail1 from "./37e09b597a72c41cc39e6602f03aac9cc86d2bb5.png";
import imgThumbnail2 from "./978de686e9be6dd2d1143a1d8df35e1297cbab64.png";
import imgThumbnail3 from "./f0194639f4f12f3a8f013c880e2b3613d94a0837.png";
import imgThumbnail4 from "./b6eb103c90cde0ba6e1ff8e480ca72aebeba2cdc.png";
import imgThumbnail5 from "./7daa53276dcad3a8739411fa504558c184474f0c.png";
import imgThumbnail6 from "./8d7dd708c2fa16d79f1e0effd26dcaa5484f8caa.png";
import imgThumbnail7 from "./c952ad73338acb476270196f4c1880201a20425b.png";
import imgThumbnail8 from "./8fc45128409e1da62f8989634ce5d5c30d4aec8e.png";
import imgThumbnail9 from "./8c238e4621e35aa63d52b2df93471a2601c3ff12.png";
import imgExtContainer from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImage26 from "./6b0944ba62b54812e6d292d9f03a9bf821bcf309.png";
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
type HeaderProps = {
  className?: string;
  property1?: "Default" | "click";
};

function Header({ className, property1 = "Default" }: HeaderProps) {
  const isClick = property1 === "click";
  return (
    <div className={className || `relative w-[1440px] ${isClick ? "bg-[rgba(255,255,255,0.1)] h-[624px]" : "bg-[rgba(0,0,0,0)]"}`}>
      <div className={`flex size-full ${isClick ? "content-stretch flex-col gap-[64px] items-start px-[40px] py-[24px] relative" : "flex-row items-center"}`}>
        <div className={`content-stretch flex items-center justify-between relative ${isClick ? "shrink-0 w-[1360px]" : "px-[40px] py-[24px] size-full"}`}>
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
          <Component className="block cursor-pointer overflow-clip relative shrink-0 size-[40px]" property1={isClick ? "cancel-01" : undefined} />
        </div>
        {isClick && (
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[48px] items-start not-italic py-[8px] relative shrink-0 text-center text-white tracking-[-0.08px] w-[203px] whitespace-nowrap">
            <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
              <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_01)</p>
              <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Home</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
              <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_02)</p>
              <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">About</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
              <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_03)</p>
              <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Projects</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
              <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_04)</p>
              <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Services</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
              <p className="font-['Lufga:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px]">(_05)</p>
              <p className="font-['Lufga:Medium',sans-serif] leading-[24px] relative shrink-0 text-[40px]">Contact</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
type ProjectCardsProps = {
  className?: string;
  brandName?: string;
  card?: "card 1" | "card 2";
  service?: string;
};

function ProjectCards({ className, brandName = "Mesh Gradient", card = "card 1", service = "Brand Identity" }: ProjectCardsProps) {
  const isCard2 = card === "card 2";
  return (
    <button className={className || "h-[480px] relative w-[628px]"}>
      <div className="flex flex-col justify-center size-full">
        <div className={`content-stretch flex flex-col items-start justify-center relative size-full ${isCard2 ? "" : "gap-[8px]"}`}>
          <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
              <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
              <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail} />
            </div>
            {isCard2 && (
              <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.4)] bottom-0 h-[188px] left-1/2 w-[628px]">
                <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex h-[40px] items-center justify-between leading-[0] left-1/2 not-italic px-[12px] text-left top-[7px] w-[628px] whitespace-nowrap">
                  <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-[20px] text-white tracking-[-0.8px]">
                    <p className="leading-[40px]">Mesh Gradients</p>
                  </div>
                  <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#ffad08] text-[16px] tracking-[-0.64px]">
                    <p className="leading-[40px]">BRAND IDENTITY - (4 Weeks)</p>
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[12px] top-[65px] w-[628px]">
                  <div className="[word-break:break-word] flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6efff] text-[16px] text-left w-[597px]">
                    <p className="leading-[24px]">[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est. [short description here] blorem blipsum dolor sit bamat minim mollit non.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {card === "card 1" && (
            <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
              <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
                <p className="leading-[40px]">{brandName}</p>
              </div>
              <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
                <p className="leading-[40px]">{service}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-px py-[24px] top-[161px] w-[1440px]">
      <p className="[word-break:break-word] font-['Lufga:SemiBold',sans-serif] leading-[70px] not-italic relative shrink-0 text-[64px] text-center text-white tracking-[-1.92px] w-[622px]">Our Projects</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex h-[40px] items-center justify-between leading-[0] left-1/2 not-italic px-[12px] text-left top-[7px] w-[628px] whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-[20px] text-white tracking-[-0.8px]">
        <p className="leading-[40px]">Mesh Gradients</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#ffad08] text-[16px] tracking-[-0.64px]">
        <p className="leading-[40px]">BRAND IDENTITY - (4 Weeks)</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[12px] top-[65px] w-[628px]">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6efff] text-[16px] text-left w-[597px]">
        <p className="leading-[24px]">[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est. [short description here] blorem blipsum dolor sit bamat minim mollit non.</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.4)] bottom-0 h-[188px] left-1/2 w-[628px]">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail1} />
      </div>
      <Frame19 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] h-[480px] items-center relative shrink-0 w-full">
      <ProjectCards className="h-[480px] relative shrink-0 w-[628px]" />
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 5">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Thumbnail />
          </div>
        </div>
      </button>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail2} />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail3} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] h-[480px] items-center relative shrink-0 w-full">
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 6">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail1 />
            <Frame15 />
          </div>
        </div>
      </button>
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 5">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail2 />
            <Frame16 />
          </div>
        </div>
      </button>
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail4} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Thumbnail4() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail5} />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] h-[480px] items-center relative shrink-0 w-full">
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 6">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail3 />
            <Frame17 />
          </div>
        </div>
      </button>
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 5">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail4 />
            <Frame18 />
          </div>
        </div>
      </button>
    </div>
  );
}

function Thumbnail5() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail6} />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Thumbnail6() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail7} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] h-[480px] items-center relative shrink-0 w-full">
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 6">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail5 />
            <Frame21 />
          </div>
        </div>
      </button>
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 5">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail6 />
            <Frame22 />
          </div>
        </div>
      </button>
    </div>
  );
}

function Thumbnail7() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail8} />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Thumbnail8() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]">
        <div className="absolute bg-white inset-0 rounded-tl-[32px] rounded-tr-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[32px] rounded-tr-[32px] size-full" src={imgThumbnail9} />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[40px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[24px] text-left tracking-[-0.96px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-[40px]">Mesh Gradient</p>
      </div>
      <div className="flex flex-col font-['Lufga:Regular',sans-serif] justify-center relative shrink-0 text-[#b5b5b5]">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] h-[480px] items-center relative shrink-0 w-full">
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 5">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail7 />
            <Frame24 />
          </div>
        </div>
      </button>
      <button className="h-[480px] relative shrink-0 w-[628px]" data-name="Component 6">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
            <Thumbnail8 />
            <Frame25 />
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px relative">
      <Frame9 />
      <Frame14 />
      <Frame10 />
      <Frame20 />
      <Frame23 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[80px] top-[344px] w-[1440px]">
      <Frame11 />
    </div>
  );
}

function ViczualsWhiteLogo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[521.657px] left-[calc(50%+0.32px)] top-[calc(50%+155.33px)] w-[1292.637px]" data-name="viczuals white logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="521.657" preserveAspectRatio="none" viewBox="0 0 1292.64 521.657" width="1292.64">
        <g id="viczuals white logo">
          <g id="Viczuals">
            <path d={svgPaths.p16406300} fill="#2C2C2C" />
            <path d={svgPaths.p1c39d000} fill="#2C2C2C" />
            <path d={svgPaths.p24aa5b80} fill="#2C2C2C" />
            <path d={svgPaths.p2dc8080} fill="#2C2C2C" />
            <path d={svgPaths.p12bbe580} fill="#2C2C2C" />
            <path d={svgPaths.p28feb700} fill="#2C2C2C" />
            <path d={svgPaths.p14f9b900} fill="#2C2C2C" />
            <path d={svgPaths.p236eb340} fill="#2C2C2C" />
          </g>
          <path d={svgPaths.p18378680} fill="#2C2C2C" id="Ellipse 2" stroke="#2C2C2C" strokeWidth="2.23008" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#1e2022] content-stretch flex items-center p-[4px] relative rounded-[96px] shrink-0" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="arrow-right-up-line">
        <div className="absolute bottom-[24.91%] left-[24.93%] right-[24.98%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.01387" preserveAspectRatio="none" viewBox="0 0 8.01386 8.01387" width="8.01386">
            <path d={svgPaths.p35420e00} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#e6efff] text-[24px] tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
        About
      </p>
      <Icon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full">
      <Frame />
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#6b7280] text-[24px] tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
        Projects
      </p>
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#6b7280] text-[24px] tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
        Services
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b616e] text-[16px] tracking-[-0.08px] w-full">Menu</p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
        viczuals@gmail.com
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b616e] text-[16px] tracking-[-0.08px] w-full">Email</p>
      <Frame2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="instagram-fill">
        <div className="absolute inset-[8.34%_8.33%_8.33%_8.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3329" preserveAspectRatio="none" viewBox="0 0 13.3329 13.3329" width="13.3329">
            <path d={svgPaths.p12da800} fill="#1E2022" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="twitter-x-fill">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 12 10.6667" width="12">
            <path d={svgPaths.p249ea700} fill="#1E2022" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="linkedin-fill">
        <div className="absolute inset-[12.5%_8.33%_12.5%_12.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.0006" preserveAspectRatio="none" viewBox="0 0 12.7067 12.0006" width="12.7067">
            <path d={svgPaths.pb221d00} fill="#1E2022" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="bg-white relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon1 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon2 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b616e] text-[16px] tracking-[-0.08px] w-full">Social</p>
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[52px] top-[50px] w-[1295px]">
      <Frame7 />
      <Frame26 />
      <Frame6 />
    </div>
  );
}

function InerContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[681px] left-1/2 overflow-clip rounded-[24px] top-[calc(50%-0.5px)] w-[1400px]" data-name="iner container">
      <ViczualsWhiteLogo />
      <Frame8 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] left-[52px] not-italic text-[#6b6b6b] text-[12px] top-[194px] tracking-[0.5px] w-[411px]">
        <p className="leading-[16px]">©2026 Viczuals All Rights Reserved.</p>
      </div>
      <div className="absolute left-[20px] size-[19px] top-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 18" r="9.5" />
        </svg>
      </div>
      <div className="absolute left-[1356px] size-[19px] top-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 20" r="9.5" />
        </svg>
      </div>
      <div className="absolute left-[20px] size-[19px] top-[645px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 18" r="9.5" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[154px] w-[1295px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1295 1" width="1295">
            <line id="Line 4" stroke="#232323" x2="1295" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[1356px] size-[19px] top-[645px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 20" r="9.5" />
        </svg>
      </div>
    </div>
  );
}

function ExtContainer() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[724px] left-1/2 overflow-clip w-[1440px]" data-name="ext container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgExtContainer} />
      </div>
      <div className="-translate-x-1/2 absolute h-[1299px] left-1/2 top-[-182px] w-[1562px]" data-name="image 26">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <InerContainer />
    </div>
  );
}

export default function HeaderVarioUi() {
  return (
    <div className="bg-black relative size-full" data-name="Header - Vario UI">
      <div className="-translate-x-1/2 absolute bg-gradient-to-b from-[8.285%] from-[rgba(20,58,162,0)] h-[836px] left-1/2 to-[79.337%] to-black top-[463px] w-[1440px]" data-name="bg" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[416px] left-[calc(50%+1px)] top-[calc(50%-2736px)] w-[1440px]" data-name="overlay" />
      <Frame3 />
      <Frame4 />
      <ExtContainer />
      <Header className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] left-1/2 top-0 w-[1440px]" />
    </div>
  );
}