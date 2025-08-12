export default function AppsSvg() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto max-w-md mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="300" fill="url(#gradient1)" rx="20" />
      
      {/* Mobile phone frame */}
      <rect x="50" y="40" width="120" height="200" rx="20" fill="#1f2937" />
      <rect x="60" y="55" width="100" height="170" rx="10" fill="#374151" />
      
      {/* App icons on phone */}
      <rect x="70" y="65" width="20" height="20" rx="4" fill="#f59e0b" />
      <rect x="100" y="65" width="20" height="20" rx="4" fill="#3b82f6" />
      <rect x="130" y="65" width="20" height="20" rx="4" fill="#10b981" />
      
      <rect x="70" y="95" width="20" height="20" rx="4" fill="#ef4444" />
      <rect x="100" y="95" width="20" height="20" rx="4" fill="#8b5cf6" />
      <rect x="130" y="95" width="20" height="20" rx="4" fill="#f97316" />
      
      <rect x="70" y="125" width="20" height="20" rx="4" fill="#06b6d4" />
      <rect x="100" y="125" width="20" height="20" rx="4" fill="#84cc16" />
      <rect x="130" y="125" width="20" height="20" rx="4" fill="#ec4899" />
      
      {/* Tablet frame */}
      <rect x="200" y="60" width="150" height="120" rx="15" fill="#1f2937" />
      <rect x="210" y="70" width="130" height="100" rx="8" fill="#374151" />
      
      {/* App grid on tablet */}
      <rect x="220" y="80" width="25" height="25" rx="5" fill="#f59e0b" />
      <rect x="255" y="80" width="25" height="25" rx="5" fill="#3b82f6" />
      <rect x="290" y="80" width="25" height="25" rx="5" fill="#10b981" />
      
      <rect x="220" y="115" width="25" height="25" rx="5" fill="#ef4444" />
      <rect x="255" y="115" width="25" height="25" rx="5" fill="#8b5cf6" />
      <rect x="290" y="115" width="25" height="25" rx="5" fill="#f97316" />
      
      {/* Floating app icons */}
      <circle cx="80" cy="20" r="8" fill="#06b6d4" opacity="0.8" />
      <circle cx="320" cy="30" r="6" fill="#84cc16" opacity="0.8" />
      <circle cx="360" cy="200" r="10" fill="#ec4899" opacity="0.8" />
      <circle cx="30" cy="250" r="7" fill="#f59e0b" opacity="0.8" />
      
      {/* Connection lines */}
      <path d="M 100 200 Q 150 220 200 180" stroke="#6366f1" strokeWidth="2" opacity="0.6" />
      <path d="M 170 120 Q 180 100 200 120" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}