import svgPaths from "./svgPaths";
import imgExtContainer from '@/assets/images/footer_glow_mask.png';
import imgImage26 from '@/assets/images/footer_mesh_gradient.png';
import imgHeroBg from '@/assets/images/hero_bg.png';

function MobileFooter({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  const handleProjectsClick = () => {
    if (onNavigate) onNavigate('projects');
  };
  const handleServicesClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('services-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };
  const handleAboutClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('about-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:viczuals@gmail.com';
  };

  return (
    <div className="relative bg-black w-[1360px] overflow-hidden rounded-[80px] flex flex-col pt-[150px] pb-[400px] px-[80px] gap-[80px] z-10 shadow-[0px_-20px_60px_rgba(0,0,0,0.5)]" data-name="mobile footer">
      <div className="absolute left-[40px] size-[38px] top-[40px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 19 19"><circle cx="9.5" cy="9.5" fill="#8DB3FF" r="9.5" /></svg>
      </div>
      <div className="absolute right-[40px] size-[38px] top-[40px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 19 19"><circle cx="9.5" cy="9.5" fill="#8DB3FF" r="9.5" /></svg>
      </div>
      
      <div className="flex flex-col gap-[60px] z-10 mt-[20px]">
        <p className="font-['Lufga:Medium',sans-serif] text-[#6b6b6b] text-[48px] m-0">Menu</p>
        <div onClick={handleAboutClick} className="flex items-center gap-[24px] cursor-pointer w-max">
          <p className="font-['Lufga:Medium',sans-serif] text-white text-[64px] m-0">About</p>
          <div className="bg-[#242424] rounded-full p-[16px] flex items-center justify-center">
             <svg className="block size-[32px]" fill="none" viewBox="0 0 8.01386 8.01387"><path d={svgPaths.p35420e00} fill="white" /></svg>
          </div>
        </div>
        <div onClick={handleServicesClick} className="flex items-center gap-[24px] cursor-pointer w-max">
          <p className="font-['Lufga:Medium',sans-serif] text-white text-[64px] m-0">Services</p>
          <div className="bg-[#242424] rounded-full p-[16px] flex items-center justify-center">
             <svg className="block size-[32px]" fill="none" viewBox="0 0 8.01386 8.01387"><path d={svgPaths.p35420e00} fill="white" /></svg>
          </div>
        </div>
        <div onClick={handleProjectsClick} className="flex items-center gap-[24px] cursor-pointer w-max">
          <p className="font-['Lufga:Medium',sans-serif] text-white text-[64px] m-0">Projects</p>
          <div className="bg-[#242424] rounded-full p-[16px] flex items-center justify-center">
             <svg className="block size-[32px]" fill="none" viewBox="0 0 8.01386 8.01387"><path d={svgPaths.p35420e00} fill="white" /></svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] z-10 mt-[40px]">
        <p className="font-['Lufga:Medium',sans-serif] text-[#6b6b6b] text-[48px] m-0">Email</p>
        <p onClick={handleEmailClick} className="font-['Lufga:Medium',sans-serif] text-white text-[64px] m-0 tracking-[1px] cursor-pointer w-max">viczuals@gmail.com</p>
      </div>

      <div className="flex flex-col gap-[60px] z-10 mt-[40px]">
        <p className="font-['Lufga:Medium',sans-serif] text-[#6b6b6b] text-[48px] m-0">Social</p>
        <div className="flex items-center gap-[40px]">
          <div className="bg-white rounded-full flex items-center justify-center size-[120px] cursor-pointer hover:bg-neutral-200 transition-colors">
             <svg className="block size-[48px]" fill="none" viewBox="0 0 13.3329 13.3329"><path d={svgPaths.p12da800} fill="#1E2022" /></svg>
          </div>
          <div className="bg-white rounded-full flex items-center justify-center size-[120px] cursor-pointer hover:bg-neutral-200 transition-colors">
             <svg className="block size-[48px]" fill="none" viewBox="0 0 12 10.6667"><path d={svgPaths.p249ea700} fill="#1E2022" /></svg>
          </div>
          <div className="bg-white rounded-full flex items-center justify-center size-[120px] cursor-pointer hover:bg-neutral-200 transition-colors">
             <svg className="block size-[48px]" fill="none" viewBox="0 0 12.7067 12.0006"><path d={svgPaths.pb221d00} fill="#1E2022" /></svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[60px] mt-[80px] mb-[60px] z-10">
        <div className="w-full h-[2px] bg-[#232323]"></div>
        <p className="font-['Lufga:Regular',sans-serif] text-[#6b6b6b] text-[36px] m-0 tracking-[1px]">©2026 Viczuals All Rights Reserved.</p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[1300px] pointer-events-none z-0" style={{ aspectRatio: '1292.64 / 521.657' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1292.64 521.657">
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

      <div className="absolute left-[40px] size-[38px] bottom-[40px] z-10">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 19 19"><circle cx="9.5" cy="9.5" fill="#8DB3FF" r="9.5" /></svg>
      </div>
      <div className="absolute right-[40px] size-[38px] bottom-[40px] z-10">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 19 19"><circle cx="9.5" cy="9.5" fill="#8DB3FF" r="9.5" /></svg>
      </div>
    </div>
  );
}

function ViczualsWhiteLogo() {
  return (
    <div 
      className="-translate-x-1/2 -translate-y-1/2 absolute pointer-events-none"
      style={{
        left: '50%',
        top: 'calc(50% + 155.33px)',
        width: '92%',
        aspectRatio: '1292.64 / 521.657',
      }}
      data-name="viczuals white logo"
    >
      <svg className="block size-full" fill="none" viewBox="0 0 1292.64 521.657">
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

function Frame({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('about-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };
  return (
    <div onClick={handleClick} className="group cursor-pointer content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="group-hover:underline [word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#e6efff] text-[24px] tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
        About
      </p>
      <div className="overflow-hidden transition-all duration-200 opacity-0 scale-0 w-0 group-hover:opacity-100 group-hover:scale-100 group-hover:w-[24px] flex items-center">
        <Icon />
      </div>
    </div>
  );
}

function Frame1({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  const handleProjectsClick = () => {
    if (onNavigate) onNavigate('projects');
  };
  const handleServicesClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('services-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };
  return (
    <div className="content-stretch flex gap-[24px] h-[40px] items-center relative shrink-0 w-full">
      <Frame onNavigate={onNavigate} />
      
      <div onClick={handleProjectsClick} className="group cursor-pointer content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
        <p className="group-hover:underline [word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#e6efff] text-[24px] tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
          Projects
        </p>
        <div className="overflow-hidden transition-all duration-200 opacity-0 scale-0 w-0 group-hover:opacity-100 group-hover:scale-100 group-hover:w-[24px] flex items-center">
          <Icon />
        </div>
      </div>

      <div onClick={handleServicesClick} className="group cursor-pointer content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
        <p className="group-hover:underline [word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#e6efff] text-[24px] tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
          Services
        </p>
        <div className="overflow-hidden transition-all duration-200 opacity-0 scale-0 w-0 group-hover:opacity-100 group-hover:scale-100 group-hover:w-[24px] flex items-center">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Frame5({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b616e] text-[16px] tracking-[-0.08px] w-full">Menu</p>
      <Frame1 onNavigate={onNavigate} />
    </div>
  );
}

function Frame2() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:viczuals@gmail.com';
  };
  return (
    <div onClick={handleEmailClick} className="cursor-pointer group content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <p className="group-hover:underline [word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"liga" 0' }}>
        viczuals@gmail.com
      </p>
    </div>
  );
}

function Frame7() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="transition-colors duration-200 cursor-pointer bg-white hover:bg-neutral-200 relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon1 />
          </div>
        </div>
      </div>
      <div className="transition-colors duration-200 cursor-pointer bg-white hover:bg-neutral-200 relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon2 />
          </div>
        </div>
      </div>
      <div className="transition-colors duration-200 cursor-pointer bg-white hover:bg-neutral-200 relative rounded-[96px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <Icon3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Lufga:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b616e] text-[16px] tracking-[-0.08px] w-full">Social</p>
      <Frame3 />
    </div>
  );
}

function Frame6({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  return (
    <div className="absolute content-stretch flex justify-between items-start left-[52px] right-[52px] top-[50px]">
      <Frame5 onNavigate={onNavigate} />
      <Frame7 />
      <Frame4 />
    </div>
  );
}

function InerContainer({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  return (
    <div 
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-black overflow-clip rounded-[24px]" 
      style={{
        left: '50%',
        top: '50%',
        width: 'calc(100% - 40px)',
        height: 'calc(100% - 40px)',
      }}
      data-name="iner container"
    >
      <ViczualsWhiteLogo />
      <Frame6 onNavigate={onNavigate} />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lufga:Regular',sans-serif] justify-center leading-[0] left-[52px] not-italic text-[#6b6b6b] text-[12px] top-[194px] tracking-[0.5px] w-[411px]">
        <p className="leading-[16px]">©2026 Viczuals All Rights Reserved.</p>
      </div>
      <div className="absolute left-[20px] size-[19px] top-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 18" r="9.5" />
        </svg>
      </div>
      <div className="absolute right-[20px] size-[19px] top-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 20" r="9.5" />
        </svg>
      </div>
      <div className="absolute left-[20px] size-[19px] bottom-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 18" r="9.5" />
        </svg>
      </div>
      <div className="absolute h-0 left-[52px] right-[52px] top-[154px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1295 1" width="100%">
            <line id="Line 4" stroke="#232323" x2="100%" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute right-[20px] size-[19px] bottom-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#8DB3FF" id="Ellipse 20" r="9.5" />
        </svg>
      </div>
    </div>
  );
}

export default function ExtContainer({ onNavigate, isMobile }: { onNavigate?: (page: 'home' | 'projects') => void, isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="relative w-full flex justify-center p-[40px]" data-name="ext container">
        {/* Blue background elements */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-black inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgExtContainer} />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" data-name="hero bg">
          <img alt="" className="w-full h-full object-cover" src={imgHeroBg} />
        </div>
        
        {/* Black footer content */}
        <MobileFooter onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="relative size-full" data-name="ext container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgExtContainer} />
      </div>
      <div className="absolute h-[1299px] inset-x-0 top-[-182px] pointer-events-none" data-name="image 26">
        <img alt="" className="w-full h-full object-cover" src={imgImage26} />
      </div>
      <InerContainer onNavigate={onNavigate} />
    </div>
  );
}