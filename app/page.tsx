export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Impact burst behind text */}
      <div className="absolute inset-0 impact-burst" />
      
      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines" />

      {/* Top hazard stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes" />

      {/* Testing badge */}
      <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 border border-warning/30 bg-warning/5 rounded font-mono text-xs text-warning/80 uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-warning pulse-dot" />
        Testing in Progress
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Main title */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-warning text-glow tracking-tight">
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

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-warning/20" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-warning/20" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-warning/20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-warning/20" />
    </main>
  );
}
