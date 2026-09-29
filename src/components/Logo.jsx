import logo from '../assets/logo.svg';

export default function Logo({ width = "w-[120px]" }) {
  return (
    // <div className={`flex items-center gap-3 ${className}`}>
    //   {/* Sira Fortress / Arch & Open Book Emblem */}
    //   <svg className="h-full w-auto" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     {/* Open Book Base */}
    //     <path d="M 10,95 Q 40,80 80,95 Q 120,80 150,95 L 150,105 Q 120,90 80,105 Q 40,90 10,105 Z" fill="#2D3136" />
    //     <path d="M 15,90 Q 45,75 80,90 Q 115,75 145,90 L 145,95 Q 115,80 80,95 Q 45,80 15,95 Z" fill="#334B68" />
        
    //     {/* Fortress Towers */}
    //     <path d="M 25,85 L 25,35 L 45,35 L 45,45 L 60,45 L 60,35 L 80,35 L 80,85 Z" fill="#D25327" />
    //     <path d="M 80,85 L 80,30 L 100,30 L 100,40 L 115,40 L 115,30 L 135,30 L 135,85 Z" fill="#D25327" />
        
    //     {/* Central Arch Doorways */}
    //     <path d="M 40,85 L 40,60 C 40,50 65,50 65,60 L 65,85 Z" fill="#FAF8EF" />
    //     <path d="M 95,85 L 95,55 C 95,45 120,45 120,55 L 120,85 Z" fill="#FAF8EF" />
    //   </svg>
      
    //   <div className="flex flex-col leading-tight">
    //     <span className="font-extrabold text-[#334B68] tracking-wider text-sm md:text-base font-heading">
    //       ADEN VOLUNTEER
    //     </span>
    //     <span className="font-black text-[#334B68] tracking-widest text-lg md:text-xl font-heading -mt-1">
    //       NETWORK
    //     </span>
    //   </div>
    // </div>

    // <div className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="Aden Volunteer Network Logo" className={`object-contain ${width} h-auto`} />

    // </div>



  );
}