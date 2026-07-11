export function SketchBridge({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 600 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#CBD5E0" strokeWidth="1" opacity="0.6">
        <line x1="0" y1="280" x2="600" y2="280"/>
        <line x1="100" y1="200" x2="100" y2="280"/>
        <line x1="500" y1="200" x2="500" y2="280"/>
        <path d="M100 200 Q300 80 500 200" strokeWidth="2" stroke="#A0AEC0"/>
        <path d="M100 220 Q300 100 500 220" strokeWidth="1.5" stroke="#A0AEC0" opacity="0.5"/>
        {[150,200,250,300,350,400,450].map(x => {
          const y = 200 - Math.sin(((x-100)/400) * Math.PI) * 120;
          return <line key={x} x1={x} y1={y} x2={x} y2="280" strokeWidth="0.8" stroke="#CBD5E0"/>;
        })}
        <rect x="80" y="160" width="40" height="120" strokeWidth="1.5" stroke="#718096"/>
        <rect x="480" y="160" width="40" height="120" strokeWidth="1.5" stroke="#718096"/>
        <rect x="85" y="155" width="30" height="15" strokeWidth="1" stroke="#718096"/>
        <rect x="485" y="155" width="30" height="15" strokeWidth="1" stroke="#718096"/>
        <rect x="270" y="240" width="60" height="40" strokeWidth="1" stroke="#718096" opacity="0.4"/>
        <line x1="0" y1="280" x2="80" y2="280"/>
        <line x1="520" y1="280" x2="600" y2="280"/>
      </g>
      <g fill="#4A5568" opacity="0.5" fontSize="8" fontFamily="IBM Plex Mono">
        <text x="20" y="295">S F   B A Y</text>
        <text x="520" y="295">S A N   F R A N C I S C O</text>
      </g>
    </svg>
  );
}

export function SketchCampus({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 500 380" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#4A5568" strokeWidth="1" opacity="0.7">
        {/* Main building */}
        <rect x="150" y="80" width="200" height="220" strokeWidth="1.5"/>
        <rect x="165" y="95" width="40" height="55"/>
        <rect x="220" y="95" width="40" height="55"/>
        <rect x="275" y="95" width="40" height="55"/>
        <rect x="165" y="165" width="40" height="55"/>
        <rect x="220" y="165" width="40" height="55"/>
        <rect x="275" y="165" width="40" height="55"/>
        <rect x="195" y="240" width="110" height="60"/>
        {/* Clock tower */}
        <rect x="225" y="10" width="50" height="75"/>
        <rect x="230" y="15" width="40" height="40"/>
        <circle cx="250" cy="35" r="12" strokeWidth="1.5"/>
        <line x1="250" y1="25" x2="250" y2="35"/>
        <line x1="250" y1="35" x2="258" y2="38"/>
        <polygon points="225,10 250,0 275,10"/>
        {/* Trees */}
        {[60, 420, 80, 400].map((x, i) => (
          <g key={i}>
            <ellipse cx={x} cy={i < 2 ? 180 : 220} rx="20" ry="30" strokeWidth="0.8" opacity="0.6"/>
            <line x1={x} y1={i < 2 ? 210 : 250} x2={x} y2="300" strokeWidth="1"/>
          </g>
        ))}
        {/* Path */}
        <path d="M200 300 Q250 310 300 300" strokeWidth="1" strokeDasharray="3 3"/>
        {/* Students */}
        <circle cx="195" cy="320" r="5"/>
        <line x1="195" y1="325" x2="195" y2="345"/>
        <line x1="188" y1="333" x2="202" y2="333"/>
        <line x1="195" y1="345" x2="190" y2="360"/>
        <line x1="195" y1="345" x2="200" y2="360"/>
        <circle cx="310" cy="320" r="5"/>
        <line x1="310" y1="325" x2="310" y2="345"/>
        <line x1="303" y1="333" x2="317" y2="333"/>
        <line x1="310" y1="345" x2="305" y2="360"/>
        <line x1="310" y1="345" x2="315" y2="360"/>
        {/* Ground */}
        <line x1="0" y1="370" x2="500" y2="370" strokeWidth="1.5"/>
      </g>
    </svg>
  );
}

export function SketchStudents({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#4A5568" strokeWidth="1" opacity="0.75">
        {/* Three students walking */}
        {[80, 200, 320].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={80 + i * 10} r={14 - i}/>
            <path d={`M${x} ${94 + i * 10} L${x} ${150 + i * 10}`} strokeWidth="1.2"/>
            <path d={`M${x - 18} ${120 + i * 10} L${x + 18} ${120 + i * 10}`}/>
            <path d={`M${x} ${150 + i * 10} L${x - 15} ${185 + i * 10}`}/>
            <path d={`M${x} ${150 + i * 10} L${x + 15} ${185 + i * 10}`}/>
            {i === 0 && <rect x={x + 18} y={110} width={20} height={28} strokeWidth="0.8" opacity="0.6"/>}
            {i === 1 && <path d={`M${x + 18} ${130} Q${x + 30} ${118} ${x + 18} ${106}`} strokeWidth="0.8" opacity="0.6"/>}
          </g>
        ))}
        <line x1="0" y1="290" x2="400" y2="290" strokeWidth="1.5"/>
        {/* Background campus elements */}
        <rect x="0" y="120" width="40" height="170" strokeWidth="0.5" opacity="0.3"/>
        <rect x="360" y="100" width="40" height="190" strokeWidth="0.5" opacity="0.3"/>
        <ellipse cx="340" cy="230" rx="15" ry="25" strokeWidth="0.5" opacity="0.3"/>
        <ellipse cx="60" cy="240" rx="15" ry="20" strokeWidth="0.5" opacity="0.3"/>
      </g>
    </svg>
  );
}

export function SketchMeeting({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 440 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#4A5568" strokeWidth="1" opacity="0.75">
        {/* Table */}
        <ellipse cx="220" cy="190" rx="160" ry="60" strokeWidth="1.5"/>
        <line x1="60" y1="190" x2="60" y2="250"/>
        <line x1="380" y1="190" x2="380" y2="250"/>
        <ellipse cx="220" cy="250" rx="160" ry="60" strokeWidth="1.5"/>
        {/* People around table */}
        {[
          [120, 130], [220, 100], [320, 130],
          [100, 200], [340, 200],
          [150, 260], [290, 260]
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y - 25} r={10}/>
            <path d={`M${x} ${y - 15} L${x} ${y + 15}`} strokeWidth="1.2"/>
            <path d={`M${x - 12} ${y} L${x + 12} ${y}`}/>
          </g>
        ))}
        {/* Laptop */}
        <rect x="195" y="155" width="50" height="35" rx="2" strokeWidth="1"/>
        <line x1="185" y1="190" x2="255" y2="190"/>
        {/* Papers */}
        <rect x="145" y="165" width="35" height="25" strokeWidth="0.8" opacity="0.6"/>
        <rect x="260" y="168" width="35" height="25" strokeWidth="0.8" opacity="0.6"/>
      </g>
    </svg>
  );
}

export function SketchFamily({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 400 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#4A5568" strokeWidth="1" opacity="0.75">
        {/* Parents */}
        <circle cx="160" cy="70" r="16"/>
        <path d="M160 86 L160 150"/>
        <path d="M142 118 L178 118"/>
        <path d="M160 150 L148 190"/>
        <path d="M160 150 L172 190"/>
        <circle cx="240" cy="70" r="16"/>
        <path d="M240 86 L240 150"/>
        <path d="M222 118 L258 118"/>
        <path d="M240 150 L228 190"/>
        <path d="M240 150 L252 190"/>
        {/* Children */}
        <circle cx="110" cy="130" r="11"/>
        <path d="M110 141 L110 190"/>
        <path d="M98 163 L122 163"/>
        <path d="M110 190 L102 218"/>
        <path d="M110 190 L118 218"/>
        <circle cx="290" cy="130" r="11"/>
        <path d="M290 141 L290 190"/>
        <path d="M278 163 L302 163"/>
        <path d="M290 190 L282 218"/>
        <path d="M290 190 L298 218"/>
        {/* Small child */}
        <circle cx="200" cy="160" r="8"/>
        <path d="M200 168 L200 205"/>
        <path d="M191 183 L209 183"/>
        <path d="M200 205 L194 225"/>
        <path d="M200 205 L206 225"/>
        {/* Background - campus path */}
        <path d="M0 290 Q200 260 400 290" strokeWidth="1.5"/>
        <ellipse cx="60" cy="270" rx="18" ry="28" strokeWidth="0.6" opacity="0.4"/>
        <ellipse cx="340" cy="265" rx="18" ry="28" strokeWidth="0.6" opacity="0.4"/>
        <rect x="20" y="180" width="30" height="110" strokeWidth="0.5" opacity="0.3"/>
        <rect x="350" y="170" width="30" height="120" strokeWidth="0.5" opacity="0.3"/>
        <line x1="0" y1="308" x2="400" y2="308" strokeWidth="1.5"/>
      </g>
    </svg>
  );
}

export function SketchCampusWide({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 700 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#4A5568" strokeWidth="0.8" opacity="0.6">
        {/* Left building */}
        <rect x="20" y="60" width="120" height="180"/>
        <rect x="30" y="75" width="28" height="38"/>
        <rect x="68" y="75" width="28" height="38"/>
        <rect x="106" y="75" width="28" height="38"/>
        <rect x="30" y="125" width="28" height="38"/>
        <rect x="68" y="125" width="28" height="38"/>
        <rect x="106" y="125" width="28" height="38"/>
        <rect x="65" y="175" width="50" height="65"/>
        <polygon points="20,60 80,20 140,60"/>
        {/* Tower left */}
        <rect x="55" y="0" width="50" height="65"/>
        <circle cx="80" cy="22" r="10" strokeWidth="1"/>
        {/* Center building */}
        <rect x="250" y="40" width="200" height="200"/>
        <rect x="265" y="55" width="35" height="50"/>
        <rect x="315" y="55" width="35" height="50"/>
        <rect x="365" y="55" width="35" height="50"/>
        <rect x="265" y="120" width="35" height="50"/>
        <rect x="315" y="120" width="35" height="50"/>
        <rect x="365" y="120" width="35" height="50"/>
        <rect x="305" y="190" width="90" height="50"/>
        <polygon points="250,40 350,0 450,40"/>
        <rect x="325" y="0" width="50" height="45"/>
        <circle cx="350" cy="18" r="12" strokeWidth="1.2"/>
        {/* Right building */}
        <rect x="560" y="70" width="120" height="170"/>
        <rect x="572" y="85" width="28" height="38"/>
        <rect x="610" y="85" width="28" height="38"/>
        <rect x="572" y="135" width="28" height="38"/>
        <rect x="610" y="135" width="28" height="38"/>
        <rect x="595" y="185" width="50" height="55"/>
        <polygon points="560,70 620,35 680,70"/>
        {/* Trees scattered */}
        {[160,200,220,480,510,530].map((x, i) => (
          <g key={i}>
            <ellipse cx={x} cy={200} rx="14" ry="22" strokeWidth="0.7" opacity="0.7"/>
            <line x1={x} y1="222" x2={x} y2="260" strokeWidth="0.8"/>
          </g>
        ))}
        {/* Path/road */}
        <path d="M0 268 Q350 250 700 268" strokeWidth="1.2"/>
        <line x1="0" y1="275" x2="700" y2="275" strokeWidth="1.5"/>
        {/* Lamp posts */}
        {[140, 350, 560].map(x => (
          <g key={x}>
            <line x1={x} y1="220" x2={x} y2="260" strokeWidth="1.2"/>
            <path d={`M${x} 220 Q${x + 12} 215 ${x + 14} 222`} strokeWidth="1"/>
            <circle cx={x + 14} cy={222} r="2" fill="#4A5568"/>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function SketchStudentsWalking({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 500 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#4A5568" strokeWidth="1" opacity="0.75">
        {[
          { x: 90, y: 60, backpack: true },
          { x: 180, y: 55, backpack: true },
          { x: 280, y: 60, backpack: false },
          { x: 370, y: 58, backpack: true },
          { x: 440, y: 62, backpack: false },
        ].map(({ x, y, backpack }, i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={12 + (i % 2)}/>
            <path d={`M${x} ${y + 12} L${x} ${y + 65}`} strokeWidth="1.2"/>
            <path d={`M${x - 15} ${y + 35} L${x + 15} ${y + 35}`}/>
            <path d={`M${x} ${y + 65} L${x - 14} ${y + 100}`}/>
            <path d={`M${x} ${y + 65} L${x + 14} ${y + 100}`}/>
            {backpack && (
              <rect x={x + 12} y={y + 18} width={16} height={24} rx="2" strokeWidth="0.8" opacity="0.7"/>
            )}
          </g>
        ))}
        <line x1="0" y1="240" x2="500" y2="240" strokeWidth="1.5"/>
        {/* Background elements */}
        <rect x="0" y="60" width="45" height="180" strokeWidth="0.5" opacity="0.25"/>
        <rect x="455" y="50" width="45" height="190" strokeWidth="0.5" opacity="0.25"/>
        <ellipse cx="60" cy="200" rx="16" ry="24" strokeWidth="0.5" opacity="0.3"/>
        <ellipse cx="430" cy="195" rx="16" ry="24" strokeWidth="0.5" opacity="0.3"/>
        <path d="M0 240 Q250 225 500 240" strokeWidth="1" opacity="0.4"/>
      </g>
    </svg>
  );
}
