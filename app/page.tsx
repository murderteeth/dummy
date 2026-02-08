export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Impact burst behind text */}
      <div className="absolute inset-0 impact-burst" />
      
      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines" />

      {/* Static noise overlay */}
      <div className="absolute inset-0 static-noise" />

      {/* Cracked glass overlay */}
      <div className="absolute inset-0 crack-overlay" />

      {/* Top hazard stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes" />

      {/* Damage badge */}
      <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 border border-red-500/50 bg-red-500/10 rounded font-mono text-xs text-red-400 uppercase tracking-wider danger-glow">
        <span className="w-2 h-2 rounded-full bg-red-500 pulse-danger" />
        System Damaged
      </div>

      {/* Main content with flicker */}
      <div className="relative z-10 text-center px-4 screen-flicker">
        {/* Main title with glitch effect */}
        <h1 
          className="text-7xl sm:text-8xl md:text-9xl font-black text-warning text-glow tracking-tight glitch-text"
          data-text="DUMMY"
        >
          DUMMY
        </h1>
        
        {/* Tagline */}
        <p className="mt-4 text-lg sm:text-xl text-zinc-400 font-mono">
          Crash test dummy for coding agents
        </p>

        {/* Subtext */}
        <p className="mt-8 text-sm text-zinc-600 font-mono uppercase tracking-widest">
          Break things here
        </p>
      </div>

      {/* Bottom hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-stripes" />

      {/* Corner accents - knocked loose */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-warning/20 corner-damaged-tl" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-warning/20 corner-damaged-tr" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-warning/20 corner-damaged-bl" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-warning/20 corner-damaged-br" />
    </main>
  );
}
