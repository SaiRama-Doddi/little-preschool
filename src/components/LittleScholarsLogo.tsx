import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textPosition?: 'right' | 'bottom';
  variant?: 'color' | 'white' | 'dark';
}

export default function LittleScholarsLogo({
  className = '',
  size = 'md',
  showText = true,
  textPosition = 'right',
  variant = 'color'
}: LogoProps) {
  // Dimensions based on size rating
  const sizeMap = {
    xs: { width: 36, height: 36 },
    sm: { width: 48, height: 48 },
    md: { width: 64, height: 64 },
    lg: { width: 96, height: 96 },
    xl: { width: 140, height: 140 }
  };

  const dims = sizeMap[size];

  // Path coordinates for crest elements
  return (
    <div className={`inline-flex items-center gap-3 ${textPosition === 'bottom' ? 'flex-col text-center' : 'flex-row'} ${className}`}>
      <svg
        width={dims.width}
        height={dims.height}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Laurel Garland Background */}
        <g id="laurel-garland">
          {/* Leaves Left */}
          <path d="M 110,210 Q 70,300 130,410" stroke="#373A98" strokeWidth="6" strokeLinecap="round" fill="none" opacity={variant === 'white' ? 0.3 : 0.8} className={variant === 'white' ? 'stroke-white' : 'stroke-brand-blue'} />
          
          {/* Detailed Leaf Paths Left */}
          <path d="M 110,210 Q 95,190 90,205 Q 100,220 110,210" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 98,240 Q 80,225 78,240 Q 90,250 98,240" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 88,275 Q 68,265 65,280 Q 80,290 88,275" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 82,310 Q 60,305 58,320 Q 75,325 82,310" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 84,345 Q 62,345 60,360 Q 78,362 84,345" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 94,380 Q 74,385 75,400 Q 90,395 94,380" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 110,410 Q 95,420 98,435 Q 112,422 110,410" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 132,435 Q 120,450 126,462 Q 138,445 132,435" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 160,455 Q 150,472 158,482 Q 168,462 160,455" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />

          {/* Leaves Right */}
          <path d="M 390,210 Q 430,300 370,410" stroke="#373A98" strokeWidth="6" strokeLinecap="round" fill="none" opacity={variant === 'white' ? 0.3 : 0.8} className={variant === 'white' ? 'stroke-white' : 'stroke-brand-blue'} />
          
          {/* Detailed Leaf Paths Right */}
          <path d="M 390,210 Q 405,190 410,205 Q 400,220 390,210" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 402,240 Q 420,225 422,240 Q 410,250 402,240" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 412,275 Q 432,265 435,280 Q 420,290 412,275" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 418,310 Q 440,305 442,320 Q 425,325 418,310" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 416,345 Q 438,345 440,360 Q 422,362 416,345" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 406,380 Q 426,385 425,400 Q 410,395 406,380" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 390,410 Q 405,420 402,435 Q 388,422 390,410" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 368,435 Q 380,450 374,462 Q 362,445 368,435" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
          <path d="M 340,455 Q 350,472 342,482 Q 332,462 340,455" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />

          {/* Bottom Star */}
          <polygon points="250,462 256,478 272,478 259,488 264,504 250,494 236,504 241,488 228,478 244,478" fill="#373A98" className={variant === 'white' ? 'fill-white' : 'fill-brand-blue'} />
        </g>

        {/* Inner Shield */}
        <g id="shield-group">
          {/* White Outer Border Shield */}
          <path
            d="M 140,130 C 140,110 360,110 360,130 C 360,250 350,330 250,390 C 150,330 140,250 140,130 Z"
            fill={variant === 'white' ? 'transparent' : '#FFFDF7'}
            stroke={variant === 'white' ? '#FFFFFF' : '#373A98'}
            strokeWidth="12"
            strokeLinejoin="round"
          />

          {/* Core Blue Shield Background */}
          <path
            d="M 152,142 C 152,128 348,128 348,142 C 348,245 338,318 250,374 C 162,318 152,245 152,142 Z"
            fill={variant === 'white' ? 'rgba(255, 255, 255, 0.15)' : '#373A98'}
            stroke={variant === 'white' ? '#FFFFFF' : '#FFFFFF'}
            strokeWidth="4"
          />
        </g>

        {/* Dynamic Monogram: L and Swan */}
        <g id="monogram">
          {/* Golden Letter L */}
          <path
            d="M 230,195 L 230,305 C 230,314 235,322 245,322 L 290,322 C 295,322 295,335 290,335 L 230,335 C 215,335 212,320 212,305 L 212,195 C 212,190 230,190 230,195 Z"
            fill="#F4B223"
            className={variant === 'white' ? 'fill-white' : 'fill-brand-yellow'}
          />

          {/* Graceful White Swan Silhouette */}
          <path
            d="M 295,215 
               C 310,230 318,255 318,285 
               C 318,320 290,340 260,340 
               C 285,340 305,325 305,295 
               C 305,270 295,255 285,245 
               C 275,235 264,228 264,212
               C 264,200 274,195 280,195
               C 285,195 292,198 290,204
               C 287,210 274,210 274,215
               C 274,220 285,225 295,228
               C 302,230 305,226 303,222
               C 301,218 295,215 295,215 Z"
            fill="#FFFFFF"
          />

          {/* Swan wing detail overlay (elegant lines) */}
          <path
            d="M 195,175
               C 170,220 185,280 238,285
               C 200,285 180,260 178,225
               C 176,195 190,185 195,175 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <path
            d="M 190,200
               C 172,235 185,285 225,290
               C 195,285 180,265 178,235
               C 176,215 185,205 190,200 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
          <path
            d="M 185,225
               C 175,250 185,285 215,290
               C 195,285 182,270 180,250
               C 178,235 182,230 185,225 Z"
            fill="#FFFFFF"
            opacity="0.6"
          />
        </g>

        {/* Graduation cap */}
        <g id="graduation-cap">
          {/* Mortarboard Diamond */}
          <polygon
            points="250,135 320,165 250,195 180,165"
            fill="#F4B223"
            stroke="#FFFFFF"
            strokeWidth="3"
            className={variant === 'white' ? 'fill-white' : 'fill-brand-yellow'}
          />
          {/* Cap Base under */}
          <path
            d="M 215,177 C 215,190 285,190 285,177 L 285,183 C 285,195 215,195 215,183 Z"
            fill="#DB9E19"
            className={variant === 'white' ? 'fill-slate-200' : 'fill-brand-yellow-hover'}
          />
          {/* Mortarboard Tassel */}
          <path
            d="M 250,165 L 315,168 L 320,200 L 324,200 L 322,175 C 322,170 315,165 315,165 Z"
            fill="#F4B223"
            stroke="#FFFFFF"
            strokeWidth="1"
            className={variant === 'white' ? 'fill-white' : 'fill-brand-yellow'}
          />
        </g>

        {/* Tagline Ribbon Text Area inside shield (Arch) */}
        <g id="tagline-text">
          <text
            x="250"
            y="390"
            fill={variant === 'white' ? '#FFFFFF' : '#373A98'}
            fontSize="26"
            fontWeight="900"
            letterSpacing="1.5"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
          >
            INSPIRING
          </text>
          <text
            x="250"
            y="418"
            fill={variant === 'white' ? '#FFFFFF' : '#373A98'}
            fontSize="22"
            fontWeight="900"
            letterSpacing="1.5"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
          >
            FUTURE LEADERS
          </text>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col select-none">
          <span
            className={`font-brand font-bold tracking-tight leading-none ${
              size === 'xs' ? 'text-sm' : size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-3xl'
            } ${
              variant === 'white' ? 'text-white' : variant === 'dark' ? 'text-gray-900' : 'text-brand-blue'
            }`}
          >
            LITTLE SCHOLARS
          </span>
          <span
            className={`font-sans font-semibold tracking-widest uppercase mt-0.5 leading-none ${
              size === 'xs' ? 'text-[8px]' : size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-[11px]' : size === 'lg' ? 'text-sm' : 'text-base'
            } ${
              variant === 'white' ? 'text-white/80' : variant === 'dark' ? 'text-gray-500' : 'text-brand-yellow'
            }`}
          >
            INTERNATIONAL PRESCHOOL
          </span>
        </div>
      )}
    </div>
  );
}
