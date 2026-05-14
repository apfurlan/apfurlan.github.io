import React from 'react';

const MechanicsSVG = () => (
  <svg viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <marker id="arr-dark" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#2c3e50" />
      </marker>
      <marker id="arr-red" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#c0392b" />
      </marker>
    </defs>

    {/* ceiling */}
    <rect x="46" y="14" width="68" height="7" fill="#6c757d" rx="1" />
    {[0,1,2,3,4].map(i => (
      <line key={i} x1={52 + i*13} y1="21" x2={46 + i*13} y2="30"
            stroke="#adb5bd" strokeWidth="1.2" />
    ))}

    {/* spring coils */}
    {(() => {
      const x = 80, y0 = 21, coils = 9, coilH = 7, amp = 11;
      const pts = [`M ${x} ${y0}`];
      for (let i = 0; i < coils; i++) {
        const y = y0 + i * coilH;
        pts.push(`C ${x+amp} ${y+coilH*0.25}, ${x-amp} ${y+coilH*0.75}, ${x} ${y+coilH}`);
      }
      return <path d={pts.join(' ')} fill="none" stroke="#3d8bcd" strokeWidth="2.2" strokeLinecap="round" />;
    })()}

    {/* mass block */}
    <rect x="57" y="85" width="46" height="38" fill="#2c6fad" stroke="#1a4f7a" strokeWidth="1.5" rx="3" />
    <text x="72" y="109" fontSize="15" fill="white" fontFamily="serif" fontWeight="bold">M</text>

    {/* gravity arrow */}
    <line x1="80" y1="123" x2="80" y2="150" stroke="#2c3e50" strokeWidth="2" markerEnd="url(#arr-dark)" />

    {/* spring force arrow */}
    <line x1="80" y1="85" x2="80" y2="60" stroke="#c0392b" strokeWidth="2" markerEnd="url(#arr-red)" />
  </svg>
);

export default MechanicsSVG;
