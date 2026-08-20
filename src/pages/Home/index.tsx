import { useState, useEffect, useRef } from "react";
import svgPaths from "./svgPaths";
import imgImage23 from '@/assets/images/hero_bg.png';
import imgImgFrame from '@/assets/images/home_card_bg_1.png';
import imgImgFrame1 from '@/assets/images/home_card_bg_2.png';
import imgImgFrame2 from '@/assets/images/home_card_bg_3.png';
import imgImgFrame3 from '@/assets/images/home_card_bg_4.png';
import imgThumbnail from '@/assets/images/about_thumbnail.png';
import imgThumbnail1 from '@/assets/images/home_about_img_1.png';
import imgThumbnail2 from '@/assets/images/home_about_img_2.png';
import imgExtContainer from '@/assets/images/home_glow_mask.png';
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

function ImgFrame() {
  return (
    <div className="h-[416px] relative rounded-tl-[30px] rounded-tr-[30px] shrink-0 w-[300px]" data-name="img frame">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
        <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame} />
      </div>
    </div>
  );
}

function ImgFrame1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[326px] relative rounded-tl-[30px] rounded-tr-[30px] w-[300px]" data-name="img frame">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
            <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-center relative shrink-0">
      <ImgFrame />
      <ImgFrame1 />
    </div>
  );
}

function ImgFrame2() {
  return (
    <div className="h-[384px] relative rounded-tl-[30px] rounded-tr-[30px] shrink-0 w-[300px]" data-name="img frame">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
        <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame2} />
      </div>
    </div>
  );
}

function ImgFrame3() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[416px] relative rounded-tl-[30px] rounded-tr-[30px] w-[300px]" data-name="img frame">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
            <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-center relative shrink-0">
      <ImgFrame2 />
      <ImgFrame3 />
    </div>
  );
}

function ImgFrame4() {
  return (
    <div className="h-[278px] relative rounded-tl-[30px] rounded-tr-[30px] shrink-0 w-[300px]" data-name="img frame">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
        <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame} />
      </div>
    </div>
  );
}

function ImgFrame5() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[416px] relative rounded-tl-[30px] rounded-tr-[30px] w-[300px]" data-name="img frame">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
            <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-center relative shrink-0">
      <ImgFrame4 />
      <ImgFrame5 />
    </div>
  );
}

function ImgFrame6() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[359px] relative rounded-tl-[30px] rounded-tr-[30px] w-[300px]" data-name="img frame">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
            <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgFrame7() {
  return (
    <div className="h-[416px] relative rounded-tl-[30px] rounded-tr-[30px] shrink-0 w-[300px]" data-name="img frame">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
        <div className="absolute bg-white inset-0 rounded-tl-[30px] rounded-tr-[30px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[30px] rounded-tr-[30px] size-full" src={imgImgFrame2} />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[8px] h-full items-end justify-center relative shrink-0">
        <ImgFrame6 />
        <ImgFrame7 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-0">
      <Frame29 />
      <Frame30 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  const containerRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(1.2);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    let offset = 0;
    let frameId: number;
    
    const animate = () => {
      offset += speedRef.current;
      
      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0 && offset >= halfWidth) {
        offset -= halfWidth;
      }
      
      el.style.transform = `translate3d(${-offset}px, 0, 0)`;
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const scale = isMobile ? 1.85 : 1;

  return (
    <div 
      className="relative overflow-hidden w-full"
      style={{ height: isMobile ? 770 : 416 }}
      onMouseEnter={() => { speedRef.current = 0.3; }}
      onMouseLeave={() => { speedRef.current = 1.2; }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: isMobile ? `${100 / scale}%` : "100%",
        }}
      >
        <div 
          ref={containerRef}
          className="flex"
          style={{ width: "max-content" }}
        >
          <div className="flex gap-[12px] items-center shrink-0 pr-[12px]">
            <Frame29 />
            <Frame30 />
            <Frame32 />
            <Frame33 />
          </div>
          <div className="flex gap-[12px] items-center shrink-0">
            <Frame29 />
            <Frame30 />
            <Frame32 />
            <Frame33 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="label">
      <p
        className="group-hover:underline [word-break:break-word] font-['Lufga:Medium',sans-serif] not-italic relative shrink-0 text-black whitespace-nowrap"
        style={{ fontSize: isMobile ? 56 : 14, lineHeight: isMobile ? "64px" : "20px" }}
      >Contact Us</p>
    </div>
  );
}

function Label1({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="label">
      <p
        className="group-hover:underline [word-break:break-word] font-['Lufga:Medium',sans-serif] not-italic relative shrink-0 text-white whitespace-nowrap"
        style={{ fontSize: isMobile ? 56 : 14, lineHeight: isMobile ? "64px" : "20px" }}
      >What we do</p>
    </div>
  );
}

function Frame48({ isMobile }: { isMobile: boolean }) {
  const handleContactClick = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatWeDoClick = () => {
    const el = document.getElementById("services-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="content-stretch flex items-start relative shrink-0" style={{ gap: isMobile ? 48 : 12 }}>
      <div
        onClick={handleContactClick}
        className="group cursor-pointer bg-white relative rounded-[1000px] shrink-0"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full" style={{ padding: isMobile ? 36 : 8 }}>
            <Label isMobile={isMobile} />
          </div>
        </div>
      </div>
      <div
        onClick={handleWhatWeDoClick}
        className="group cursor-pointer relative rounded-[1000px] shrink-0"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full" style={{ padding: isMobile ? 36 : 8, gap: isMobile ? 16 : 8 }}>
            <Label1 isMobile={isMobile} />
            <div className="relative shrink-0" style={{ width: isMobile ? 64 : 20, height: isMobile ? 64 : 20 }} data-name="arrow-right-s-line">
              <div className="absolute inset-0 overflow-clip" data-name="arrow-right-s-line">
                <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 6.48185 10.6066" width="100%">
                    <path d={svgPaths.p3b549c00} fill="white" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative content-stretch flex flex-col items-center"
      style={{ gap: isMobile ? 70 : 24, width: isMobile ? 1440 : 880 }}
    >
      <p
        className="[word-break:break-word] font-['Lufga:Bold',sans-serif] not-italic relative shrink-0 text-center text-white tracking-[-1.92px]"
        style={{
          fontSize: isMobile ? 148 : 64,
          lineHeight: isMobile ? "152px" : "70px",
          width: isMobile ? 1400 : 622,
        }}
      >Strategic Creative Growth Agency</p>
      <Frame48 isMobile={isMobile} />
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative content-stretch flex flex-col items-center w-[1440px]">
      <p className="[word-break:break-word] font-['Lufga:Bold',sans-serif] leading-[70px] not-italic relative shrink-0 text-[64px] text-center text-white tracking-[-1.92px] w-[622px]">Our Projects</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative content-stretch flex flex-col items-center w-[1440px]">
      <p className="[word-break:break-word] font-['Lufga:Bold',sans-serif] leading-[70px] not-italic relative shrink-0 text-[64px] text-center text-white tracking-[-1.92px] w-[622px]">About Us</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative content-stretch flex flex-col items-center w-[1440px]">
      <p className="[word-break:break-word] font-['Lufga:Bold',sans-serif] leading-[70px] not-italic relative shrink-0 text-[64px] text-center text-white tracking-[-1.92px] w-[622px]">Our Services</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative content-stretch flex flex-col items-center w-[1440px]">
      <p className="[word-break:break-word] font-['Lufga:Bold',sans-serif] leading-[70px] not-italic relative shrink-0 text-[64px] text-center text-white tracking-[-1.92px] w-[622px]">Send Us A Message</p>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-bl-[80px] rounded-tl-[80px]" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-bl-[80px] rounded-tl-[80px]">
        <div className="absolute bg-white inset-0 rounded-bl-[80px] rounded-tl-[80px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-bl-[80px] rounded-tl-[80px] size-full" src={imgThumbnail} />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Lufga:Bold',sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-black tracking-[-1.28px] w-full">
        <p className="leading-[40px]">Mesh Gradients</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">Client name/company, 2023.</p>
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="wrap">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[16px]">View project</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow_forward">
        <div className="absolute inset-[18.36%_17.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.1233" preserveAspectRatio="none" viewBox="0 0 10.3883 10.1233" width="10.3883">
            <path d={svgPaths.pf3f7b80} fill="#141414" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3d3d3d] text-[16px] tracking-[-0.32px] w-[min-content]">
        <p className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi. Proin in sagittis dolor.</p>
      </div>
      <Wrap />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <Content3 />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" height="0.5" preserveAspectRatio="none" viewBox="0 0 528 0.5" width="528">
            <path d="M0 0.25H528" id="divider" stroke="#E1E1E1" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Content4 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-[#666] text-[12px] tracking-[-0.24px] w-full">
        <p className="leading-[16px]">TIMELINE</p>
      </div>
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">4 Weeks</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-[#666] text-[12px] tracking-[-0.24px] w-full">
        <p className="leading-[16px]">SERVICES</p>
      </div>
      <div className="flex flex-col font-['Lufga:Medium',sans-serif] justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">Animation, Creative Direction, Web Design</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="content">
      <Content6 />
      <Content7 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#ffe6b2] flex-[1_0_0] h-full min-w-px relative rounded-br-[80px] rounded-tr-[80px]" data-name="content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-between pl-[40px] pr-[16px] py-[32px] relative size-full">
          <Content2 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#ffad08] content-stretch flex gap-[24px] h-[520px] items-start p-[24px] rounded-[100px] shrink-0 sticky top-0 w-[1240px]" data-name="content">
      <Thumbnail />
      <Content1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute bottom-0 h-[1746.11181640625px] left-[calc(50%+0.11px)] top-0">
      <div className="-translate-x-1/2 flex h-[636.687px] items-center justify-center pointer-events-auto sticky top-0 w-[1389.737px]">
        <div className="flex-none rotate-[-3.27deg]">
          <div className="content-stretch flex flex-col items-start pointer-events-auto px-[60px] py-[20px] relative top-0">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Lufga:Bold',sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-black tracking-[-1.28px] w-full">
        <p className="leading-[40px]">Mesh Gradients</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">Client name/company, 2023.</p>
      </div>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="wrap">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[16px]">View project</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow_forward">
        <div className="absolute inset-[18.36%_17.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.1233" preserveAspectRatio="none" viewBox="0 0 10.3883 10.1233" width="10.3883">
            <path d={svgPaths.pf3f7b80} fill="#141414" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3d3d3d] text-[16px] tracking-[-0.32px] w-[min-content]">
        <p className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi. Proin in sagittis dolor.</p>
      </div>
      <Wrap1 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <Content11 />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" height="0.5" preserveAspectRatio="none" viewBox="0 0 528 0.5" width="528">
            <path d="M0 0.25H528" id="divider" stroke="#E1E1E1" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Content12 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#666] text-[12px] tracking-[-0.24px] w-full">
        <p className="leading-[16px]">TIMELINE</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">5 Weeks</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#666] text-[12px] tracking-[-0.24px] w-full">
        <p className="leading-[16px]">SERVICES</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">Animation, Creative Direction, Web Design</p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Lufga:Medium',sans-serif] gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="content">
      <Content14 />
      <Content15 />
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[#e6efff] flex-[1_0_0] h-full min-w-px relative rounded-bl-[80px] rounded-tl-[80px]" data-name="content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-between pl-[40px] pr-[16px] py-[32px] relative size-full">
          <Content10 />
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-br-[80px] rounded-tr-[80px]" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[80px] rounded-tr-[80px]">
        <div className="absolute bg-[#762626] inset-0 rounded-br-[80px] rounded-tr-[80px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-br-[80px] rounded-tr-[80px] size-full" src={imgThumbnail1} />
      </div>
      <div className="absolute inset-[-64.53%_-258.61%_-210.15%_-223.61%]" data-name="background" />
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-[#085aff] content-stretch flex gap-[24px] h-[520px] items-start p-[24px] rounded-[100px] shrink-0 sticky top-0 w-[1240px]" data-name="content">
      <Content9 />
      <Thumbnail1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute bottom-0 h-[1217.73181640625px] left-1/2 top-[528.38px]">
      <div className="-translate-x-1/2 flex h-[696.293px] items-center justify-center pointer-events-auto sticky top-0 w-[1410.186px]">
        <div className="flex-none rotate-[5.88deg]">
          <div className="content-stretch flex flex-col items-start pointer-events-auto px-[60px] py-[20px] relative top-0">
            <Content8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-bl-[80px] rounded-tl-[80px]" data-name="thumbnail">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[80px] rounded-tl-[80px] size-full" src={imgThumbnail2} />
    </div>
  );
}

function Content19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Lufga:Bold',sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-black tracking-[-1.28px] w-full">
        <p className="leading-[40px]">Mesh Gradients</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">Client name/company, 2023.</p>
      </div>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="wrap">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[16px]">View project</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow_forward">
        <div className="absolute inset-[18.36%_17.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.1233" preserveAspectRatio="none" viewBox="0 0 10.3883 10.1233" width="10.3883">
            <path d={svgPaths.pf3f7b80} fill="#141414" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3d3d3d] text-[16px] tracking-[-0.32px] w-[min-content]">
        <p className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi. Proin in sagittis dolor.</p>
      </div>
      <Wrap2 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <Content19 />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" height="0.5" preserveAspectRatio="none" viewBox="0 0 528 0.5" width="528">
            <path d="M0 0.25H528" id="divider" stroke="#E1E1E1" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Content20 />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#666] text-[12px] tracking-[-0.24px] w-full">
        <p className="leading-[16px]">TIMELINE</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">6 Weeks</p>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#666] text-[12px] tracking-[-0.24px] w-full">
        <p className="leading-[16px]">SERVICES</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#141414] text-[14px] tracking-[-0.28px] w-full">
        <p className="leading-[16px]">Animation, Creative Direction, Web Design</p>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Lufga:Medium',sans-serif] gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="content">
      <Content22 />
      <Content23 />
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[80px]" data-name="content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-between pl-[40px] pr-[16px] py-[32px] relative size-full">
          <Content18 />
          <Content21 />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] h-[520px] items-start p-[24px] rounded-[100px] shrink-0 sticky top-0 w-[1240px]" data-name="content">
      <Thumbnail2 />
      <Content17 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute bottom-0 h-[614.1818164062499px] left-[calc(50%-0.06px)] top-[1131.93px]">
      <div className="-translate-x-1/2 flex h-[614.186px] items-center justify-center pointer-events-auto sticky top-0 w-[1381.4px]">
        <div className="flex-none rotate-[-2.3deg]">
          <div className="content-stretch flex flex-col items-center justify-center pointer-events-auto px-[60px] py-[20px] relative top-0">
            <Content16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative h-[1746.112px] w-[1410.186px]">
      <Frame43 />
      <Frame42 />
      <Frame41 />
    </div>
  );
}

function SketchAnnotationElementBrushPenAbstractWindLine() {
  return (
    <div className="absolute h-[280px] left-0 top-0 w-[588px]" data-name="Sketch-annotation-element-brush-pen-abstract-wind-line-1">
      <div className="absolute inset-[-14.29%_-22.11%_-19.46%_-17.69%]">
        <svg className="block size-full" fill="none" height="374.474" preserveAspectRatio="none" viewBox="0 0 822 374.474" width="822">
          <g id="Sketch-annotation-element-brush-pen-abstract-wind-line-1">
            <path d={svgPaths.p9edca00} fill="#CCD4D6" id="Vector" />
            <path d={svgPaths.p3cb1eb00} fill="#CCD4D6" id="Vector_2" />
            <path d={svgPaths.p2c9ee000} fill="#CCD4D6" id="Vector_3" />
            <g id="Ellipse 3">
              <mask fill="white" id="path-4-inside-1_0_131">
                <path d={svgPaths.p1ec6f300} />
              </mask>
              <path d={svgPaths.p1ec6f300} fill="#A78ED9" fillOpacity="0.8" mask="url(#path-4-inside-1_0_131)" stroke="#A78ED9" strokeWidth="4" />
            </g>
            <circle cx="614" cy="161" fill="#F5D63D" fillOpacity="0.8" id="Ellipse 4" r="31" stroke="#F2CC0D" strokeWidth="2" />
            <rect fill="#66BBCC" fillOpacity="0.8" height="98" id="Rectangle 3" stroke="#40AABF" strokeWidth="2" transform="rotate(-15 60.2247 278.589)" width="98" x="60.2247" y="278.589" />
            <path d={svgPaths.p138a2100} fill="#EC799F" fillOpacity="0.8" id="Polygon 2" stroke="#EC799F" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TrackChanges() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="track_changes">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="track_changes">
          <path d={svgPaths.p19520e00} fill="#E54D80" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <TrackChanges />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[16px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[32px]">
      <Icon />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c2122] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Videography</p>
      </div>
    </div>
  );
}

function QueryStats() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="query_stats">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="query_stats">
          <path d={svgPaths.pd40c700} fill="#6A40BF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <QueryStats />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323c3e] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Brand Videos</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[22px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[168px]">
      <Icon1 />
      <Frame3 />
    </div>
  );
}

function Addchart() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="addchart">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="addchart">
          <path d={svgPaths.pfc4a900} fill="#F2CC0D" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <Addchart />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323c3e] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Animation</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[179px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[97px]">
      <Icon2 />
      <Frame4 />
    </div>
  );
}

function Summarize() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="summarize">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="summarize">
          <path d={svgPaths.p1d51dd72} fill="#40AABF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <Summarize />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Icon3 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c2122] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Brand Guidelines</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex items-center justify-center left-[192px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[208px]">
      <Frame2 />
    </div>
  );
}

function ImgIllustration() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e9eced] h-[280px] left-[calc(50%-1.17px)] overflow-clip rounded-[24px] top-[184px] w-[383px]" data-name="img/illustration">
      <SketchAnnotationElementBrushPenAbstractWindLine />
      <div className="absolute h-[280px] left-0 mix-blend-multiply opacity-2 top-0 w-[588px]" data-name="noise" />
      <Frame1 />
      <Frame13 />
      <Frame19 />
      <Frame14 />
    </div>
  );
}

function Card() {
  return (
    <div className="drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex-[1_0_0] h-[480px] min-w-px overflow-clip relative rounded-[24px]" data-name="card">
      <ImgIllustration />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] left-[23px] not-italic text-[24px] text-white top-[56px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[32px]">Content Creation</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-192.67px)] not-italic text-[16px] text-white top-[124px] w-[367px]">
        <p className="leading-[24px]">[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.</p>
      </div>
    </div>
  );
}

function SketchAnnotationElementBrushPenAbstractWindLine1() {
  return (
    <div className="absolute h-[280px] left-0 top-0 w-[588px]" data-name="Sketch-annotation-element-brush-pen-abstract-wind-line-1">
      <div className="absolute inset-[-14.29%_-22.11%_-19.46%_-17.69%]">
        <svg className="block size-full" fill="none" height="374.474" preserveAspectRatio="none" viewBox="0 0 822 374.474" width="822">
          <g id="Sketch-annotation-element-brush-pen-abstract-wind-line-1">
            <path d={svgPaths.p9edca00} fill="#CCD4D6" id="Vector" />
            <path d={svgPaths.p3cb1eb00} fill="#CCD4D6" id="Vector_2" />
            <path d={svgPaths.p2c9ee000} fill="#CCD4D6" id="Vector_3" />
            <g id="Ellipse 3">
              <mask fill="white" id="path-4-inside-1_0_156">
                <path d={svgPaths.p1ec6f300} />
              </mask>
              <path d={svgPaths.p1ec6f300} fill="#8DB3FF" mask="url(#path-4-inside-1_0_156)" stroke="#5A90FF" strokeWidth="4" />
            </g>
            <circle cx="614" cy="161" fill="#F5D63D" fillOpacity="0.8" id="Ellipse 4" r="31" stroke="#F2CC0D" strokeWidth="2" />
            <rect fill="#66BBCC" fillOpacity="0.8" height="98" id="Rectangle 3" stroke="#40AABF" strokeWidth="2" transform="rotate(-15 60.2247 278.589)" width="98" x="60.2247" y="278.589" />
            <path d={svgPaths.p138a2100} fill="#EC799F" fillOpacity="0.8" id="Polygon 2" stroke="#EC799F" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TrackChanges1() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="track_changes">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="track_changes">
          <path d={svgPaths.p19520e00} fill="#E54D80" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <TrackChanges1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[16px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[32px]">
      <Icon4 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c2122] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Logo Design</p>
      </div>
    </div>
  );
}

function QueryStats1() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="query_stats">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="query_stats">
          <path d={svgPaths.pd40c700} fill="#6A40BF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <QueryStats1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323c3e] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Visual Identity</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[22px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[168px]">
      <Icon5 />
      <Frame6 />
    </div>
  );
}

function Addchart1() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="addchart">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="addchart">
          <path d={svgPaths.pfc4a900} fill="#F2CC0D" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <Addchart1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323c3e] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Brand Strategy</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[179px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[97px]">
      <Icon6 />
      <Frame7 />
    </div>
  );
}

function Summarize1() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="summarize">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="summarize">
          <path d={svgPaths.p1d51dd72} fill="#40AABF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <Summarize1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Icon7 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c2122] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Brand Guidelines</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex items-center justify-center left-[192px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[208px]">
      <Frame8 />
    </div>
  );
}

function ImgIllustration1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e9eced] h-[280px] left-[calc(50%-2.5px)] overflow-clip rounded-[24px] top-[184px] w-[383px]" data-name="img/illustration">
      <SketchAnnotationElementBrushPenAbstractWindLine1 />
      <div className="absolute h-[280px] left-0 mix-blend-multiply opacity-2 top-0 w-[588px]" data-name="noise" />
      <Frame5 />
      <Frame15 />
      <Frame20 />
      <Frame16 />
    </div>
  );
}

function Card1() {
  return (
    <div className="border-[#e6efff] border-dashed border-l flex-[1_0_0] h-[480px] min-w-px overflow-clip relative shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)]" data-name="card">
      <ImgIllustration1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] left-[21.67px] not-italic text-[#e6efff] text-[24px] top-[56px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[32px]">Brand Identity</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-194px)] not-italic text-[#e6efff] text-[16px] top-[124px] w-[367px]">
        <p className="leading-[24px]">[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.</p>
      </div>
    </div>
  );
}

function SketchAnnotationElementBrushPenAbstractWindLine2() {
  return (
    <div className="absolute h-[280px] left-0 top-0 w-[588px]" data-name="Sketch-annotation-element-brush-pen-abstract-wind-line-1">
      <div className="absolute inset-[-14.29%_-22.11%_-19.46%_-17.69%]">
        <svg className="block size-full" fill="none" height="374.474" preserveAspectRatio="none" viewBox="0 0 822 374.474" width="822">
          <g id="Sketch-annotation-element-brush-pen-abstract-wind-line-1">
            <path d={svgPaths.p9edca00} fill="#CCD4D6" id="Vector" />
            <path d={svgPaths.p3cb1eb00} fill="#CCD4D6" id="Vector_2" />
            <path d={svgPaths.p2c9ee000} fill="#CCD4D6" id="Vector_3" />
            <g id="Ellipse 3">
              <mask fill="white" id="path-4-inside-1_0_122">
                <path d={svgPaths.p1ec6f300} />
              </mask>
              <path d={svgPaths.p1ec6f300} fill="#FFBD39" mask="url(#path-4-inside-1_0_122)" stroke="#FFAD08" strokeWidth="4" />
            </g>
            <circle cx="614" cy="161" fill="#F5D63D" fillOpacity="0.8" id="Ellipse 4" r="31" stroke="#F2CC0D" strokeWidth="2" />
            <rect fill="#66BBCC" fillOpacity="0.8" height="98" id="Rectangle 3" stroke="#40AABF" strokeWidth="2" transform="rotate(-15 60.2247 278.589)" width="98" x="60.2247" y="278.589" />
            <path d={svgPaths.p138a2100} fill="#EC799F" fillOpacity="0.8" id="Polygon 2" stroke="#EC799F" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TrackChanges2() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="track_changes">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="track_changes">
          <path d={svgPaths.p19520e00} fill="#E54D80" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <TrackChanges2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[16px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[32px]">
      <Icon8 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c2122] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Auto-Track Changes</p>
      </div>
    </div>
  );
}

function QueryStats2() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="query_stats">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="query_stats">
          <path d={svgPaths.pd40c700} fill="#6A40BF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <QueryStats2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323c3e] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Analytical Stats</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[22px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[168px]">
      <Icon9 />
      <Frame10 />
    </div>
  );
}

function Addchart2() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="addchart">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="addchart">
          <path d={svgPaths.pfc4a900} fill="#F2CC0D" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <Addchart2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323c3e] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Custom Analytics</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex gap-[16px] items-center justify-center left-[179px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[97px]">
      <Icon10 />
      <Frame11 />
    </div>
  );
}

function Summarize2() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="summarize">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="summarize">
          <path d={svgPaths.p1d51dd72} fill="#40AABF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="bg-white overflow-clip relative rounded-[99px] shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)] shrink-0 size-[32px]" data-name="icon">
      <Summarize2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Icon11 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c2122] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Report Log</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(148,165,168,0.25)] flex items-center justify-center left-[219px] pl-[8px] pr-[16px] py-[8px] rounded-[99px] top-[208px]">
      <Frame12 />
    </div>
  );
}

function ImgIllustration2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e9eced] h-[280px] left-[calc(50%-1.83px)] overflow-clip rounded-[24px] top-[184px] w-[383px]" data-name="img/illustration">
      <SketchAnnotationElementBrushPenAbstractWindLine2 />
      <div className="absolute h-[280px] left-0 mix-blend-multiply opacity-2 top-0 w-[588px]" data-name="noise" />
      <Frame9 />
      <Frame17 />
      <Frame21 />
      <Frame18 />
    </div>
  );
}

function Card2() {
  return (
    <div className="border-[#e6efff] border-dashed border-l flex-[1_0_0] h-[480px] min-w-px overflow-clip relative shadow-[0px_2px_4px_0px_rgba(148,165,168,0.25)]" data-name="card">
      <ImgIllustration2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Medium',sans-serif] justify-center leading-[0] left-[22.33px] not-italic text-[#e6efff] text-[24px] top-[56px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[32px]">Digital Marketing</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-193.33px)] not-italic text-[#e6efff] text-[16px] top-[124px] w-[367px]">
        <p className="leading-[24px]">[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative content-stretch flex gap-[24px] items-center justify-center px-[48px] w-[1440px]">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Lufga:Medium',sans-serif] relative shrink-0 text-[18px] text-black tracking-[-0.24px] w-full">Open Live Chat</p>
      <p className="font-['Lufga:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#40444c] text-[14px] text-ellipsis tracking-[-0.08px] w-full">Donezo to feel like a natural extension of your</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#085aff] text-[14px] tracking-[-0.08px] whitespace-nowrap">Send Message</p>
      <div className="relative shrink-0 size-[16px]" data-name="arrow-right-s-line">
        <div className="absolute inset-0 overflow-clip" data-name="arrow-right-s-line">
          <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="8.48525" preserveAspectRatio="none" viewBox="0 0 5.18548 8.48525" width="5.18548">
              <path d={svgPaths.pea43800} fill="#085AFF" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="chat-smile-3-line">
            <div className="absolute inset-0 overflow-clip" data-name="chat-smile-3-line">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="26.6667" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667" width="26.6667">
                  <path d={svgPaths.p30ade500} fill="black" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <Frame24 />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Lufga:Medium',sans-serif] relative shrink-0 text-[18px] text-black tracking-[-0.24px] w-full">Read FAQs</p>
      <p className="font-['Lufga:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#40444c] text-[14px] text-ellipsis tracking-[-0.08px] w-full">Donezo to feel like a natural extension of your</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Lufga:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b616e] text-[14px] tracking-[-0.08px] underline whitespace-nowrap">Learn more</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="question-line">
            <div className="absolute inset-0 overflow-clip" data-name="question-line">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="26.6667" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667" width="26.6667">
                  <path d={svgPaths.p34206300} fill="black" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <Frame26 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] h-full items-center min-w-px relative">
      <Frame22 />
      <Frame25 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative content-stretch flex h-[262px] items-center justify-center px-[80px] w-[1440px]">
      <Frame23 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">CONTENT CREATION</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group1 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">BRAND IDENTITY</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group2 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">DIGITAL MARKETING</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group3 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">CONTENT CREATION</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group4 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">BRAND IDENTITY</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[64px] items-center left-[calc(50%+0.24px)] top-1/2">
      <Frame49 />
      <Frame50 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative bg-[#085aff] h-[140px] overflow-clip w-full">
      <style>{`
        @keyframes blueBandTickerAnimation1 {
          0% { transform: translate3d(0, -50%, 0); }
          100% { transform: translate3d(-50%, -50%, 0); }
        }
        .blue-ticker-wrapper-1 {
          display: flex;
          position: absolute;
          top: 50%;
          left: 0;
          width: max-content;
          animation: blueBandTickerAnimation1 28s linear infinite;
        }
      `}</style>
      <div className="blue-ticker-wrapper-1">
        <div className="flex gap-[64px] items-center shrink-0 pr-[64px]">
          <Frame49 />
          <Frame50 />
          <Frame55 />
          <Frame56 />
          <Frame57 />
        </div>
        <div className="flex gap-[64px] items-center shrink-0">
          <Frame49 />
          <Frame50 />
          <Frame55 />
          <Frame56 />
          <Frame57 />
        </div>
      </div>
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

function Icon12() {
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
      <Icon12 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
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

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[44px] items-start justify-center py-[32px] relative size-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
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

function Icon14() {
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

function Icon15() {
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

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px py-[32px] relative">
      <div className="bg-white relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon13 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon14 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-center left-[64px] top-[18px] w-[1283px]">
      <Frame37 />
      <Frame35 />
    </div>
  );
}

function InerContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[681px] left-1/2 overflow-clip rounded-[24px] top-[calc(50%-0.5px)] w-[1400px]" data-name="iner container">
      <ViczualsWhiteLogo />
      <Frame38 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] left-[64px] not-italic text-[#6b6b6b] text-[12px] top-[164px] tracking-[0.5px] w-[411px]">
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
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[139px] w-[1295px]">
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage23} />
      </div>
      <InerContainer />
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group5 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">CONTENT CREATION</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group6 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">BRAND IDENTITY</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group7 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">DIGITAL MARKETING</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group8 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">CONTENT CREATION</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[30px] relative shrink-0 w-[25.295px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 25.2951 30" width="25.2951">
        <g id="Group 41681">
          <path d={svgPaths.p96dcd00} fill="white" id="Viczuals" />
          <path d={svgPaths.p377f8980} fill="#085AFF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Group9 />
      <div className="[word-break:break-word] flex flex-col font-['Lufga:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.61px] uppercase whitespace-nowrap">
        <p className="leading-[25px]">BRAND IDENTITY</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[64px] items-center left-[calc(50%+0.24px)] top-1/2">
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
      <Frame64 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative bg-[#085aff] h-[140px] overflow-clip w-full">
      <style>{`
        @keyframes blueBandTickerAnimation2 {
          0% { transform: translate3d(0, -50%, 0); }
          100% { transform: translate3d(-50%, -50%, 0); }
        }
        .blue-ticker-wrapper-2 {
          display: flex;
          position: absolute;
          top: 50%;
          left: 0;
          width: max-content;
          animation: blueBandTickerAnimation2 28s linear infinite;
        }
      `}</style>
      <div className="blue-ticker-wrapper-2">
        <div className="flex gap-[64px] items-center shrink-0 pr-[64px]">
          <Frame60 />
          <Frame61 />
          <Frame62 />
          <Frame63 />
          <Frame64 />
        </div>
        <div className="flex gap-[64px] items-center shrink-0">
          <Frame60 />
          <Frame61 />
          <Frame62 />
          <Frame63 />
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [heroHeight, setHeroHeight] = useState<number | string>('auto');

  useEffect(() => {
    const updateHeight = () => {
      const zoom = Math.min(1, window.innerWidth / 1440);
      const viewportHeight = window.innerHeight;
      
      // Calculate height in design pixels to fit viewport minus top padding (120px)
      const requiredDesignHeight = viewportHeight / zoom - 120;
      
      // Keep a minimum height to prevent overlapping on very short viewports
      setHeroHeight(Math.max(840, requiredDesignHeight));
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight, { passive: true });
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="bg-black flex flex-col items-center gap-[100px] w-full pt-[120px] pb-[40px] relative" data-name="Header - Vario UI">
      {/* Background images */}
      <div className="absolute inset-x-0 h-[1279px] top-0 pointer-events-none" data-name="image 23">
        <img alt="" className="w-full h-full object-cover pointer-events-none" src={imgImage23} />
      </div>
      <div className="absolute bg-gradient-to-b from-[8.285%] from-[rgba(20,58,162,0)] h-[836px] inset-x-0 to-[79.337%] to-black top-[463px] pointer-events-none" data-name="bg" />

      {/* 1. Hero Section */}
      <div 
        className="flex flex-col items-center justify-between w-full relative z-10 box-border pb-[45px]"
        style={{ height: heroHeight }}
      >
        <div className="h-[40px]" />
        <Frame39 />
        <Frame34 />
      </div>

      {/* 2. About Us Section */}
      <div id="about-section" className="flex flex-col items-center gap-[60px] w-full relative z-10">
        <Frame46 />
        <p className="[word-break:break-word] font-['Lufga:Regular',sans-serif] leading-[normal] not-italic text-[32px] text-center text-white tracking-[-0.32px] w-[1179px]">A digital creative studio focused on building thoughtful brands and digital experiences. By combining strategy, design, creativity, and technology, we help ambitious businesses stand out, connect with their audience, and grow with confidence. Our approach blends insight-driven thinking with purposeful execution to create work that is both visually compelling and strategically effective and purposeful.</p>
        <Frame58 />
      </div>

      {/* 3. Our Projects Section */}
      <div id="projects-section" className="flex flex-col items-center gap-[60px] w-full relative z-10">
        <Frame40 />
        <Frame45 />
        <Frame52 />
      </div>

      {/* 4. Our Services Section */}
      <div id="services-section" className="flex flex-col items-center gap-[60px] w-full relative z-10">
        <Frame44 />
        <Frame47 />
      </div>

      {/* 5. Send Us A Message Section */}
      <div id="contact-section" className="flex flex-col items-center gap-[60px] w-full relative z-10">
        <Frame53 />
        <Frame54 />
      </div>

      <Header className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] left-1/2 top-0 w-[1440px] z-50" />
    </div>
  );
}