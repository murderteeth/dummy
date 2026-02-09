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

      {/* ============================================
          STENCIL GRAFFITI
          ============================================ */}
      
      {/* Hooded hacker stencil - bottom left */}
      <div className="stencil-art bottom-[15%] left-[5%] w-32 h-40 opacity-60">
        <svg viewBox="0 0 100 120" className="w-full h-full stencil-figure">
          {/* Hoodie silhouette */}
          <path d="M50 10 C30 10 20 25 20 40 L20 50 C20 55 25 60 30 62 L30 100 L70 100 L70 62 C75 60 80 55 80 50 L80 40 C80 25 70 10 50 10" fill="currentColor"/>
          {/* Hood opening/face shadow */}
          <ellipse cx="50" cy="35" rx="18" ry="15" fill="#0a0a0a"/>
          {/* Laptop glow */}
          <rect x="25" y="85" width="50" height="5" fill="#22c55e" opacity="0.8"/>
          <rect x="30" y="75" width="40" height="12" fill="#0a0a0a" stroke="currentColor" strokeWidth="2"/>
          {/* Screen glow reflection on face */}
          <ellipse cx="50" cy="38" rx="8" ry="5" fill="#22c55e" opacity="0.15"/>
        </svg>
        <div className="stencil-drips">
          <span className="drip" style={{ left: '20%', height: '30px', animationDelay: '0s' }} />
          <span className="drip" style={{ left: '75%', height: '45px', animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Surveillance camera stencil - top right area */}
      <div className="stencil-art top-[25%] right-[8%] w-28 h-20 opacity-70">
        <svg viewBox="0 0 120 80" className="w-full h-full stencil-figure text-red-500">
          {/* Mount */}
          <rect x="5" y="5" width="15" height="30" fill="currentColor"/>
          {/* Arm */}
          <rect x="15" y="15" width="40" height="10" fill="currentColor"/>
          {/* Camera body */}
          <rect x="50" y="5" width="50" height="35" rx="3" fill="currentColor"/>
          {/* Lens */}
          <circle cx="85" cy="22" r="12" fill="#0a0a0a"/>
          <circle cx="85" cy="22" r="8" fill="currentColor"/>
          <circle cx="85" cy="22" r="4" fill="#0a0a0a"/>
          {/* Recording light */}
          <circle cx="58" cy="15" r="3" fill="#ef4444" className="pulse-danger"/>
        </svg>
        <div className="stencil-text text-red-500 text-xs mt-1 tracking-widest">
          THEY WATCH
        </div>
      </div>

      {/* "WE SEE YOU" stencil text - scattered */}
      <div className="stencil-text-large absolute top-[45%] right-[3%] -rotate-90 text-emerald-500/40">
        WE SEE YOU
      </div>

      {/* Rat stencil - classic banksy */}
      <div className="stencil-art bottom-[8%] right-[25%] w-20 h-16 opacity-50">
        <svg viewBox="0 0 100 70" className="w-full h-full stencil-figure">
          {/* Rat body */}
          <ellipse cx="45" cy="45" rx="30" ry="18" fill="currentColor"/>
          {/* Head */}
          <ellipse cx="80" cy="40" rx="15" ry="12" fill="currentColor"/>
          {/* Ear */}
          <circle cx="88" cy="30" r="6" fill="currentColor"/>
          {/* Snout */}
          <ellipse cx="95" cy="42" rx="5" ry="4" fill="currentColor"/>
          {/* Tail */}
          <path d="M15 45 Q0 30 5 15" stroke="currentColor" strokeWidth="4" fill="none"/>
          {/* Legs */}
          <rect x="30" y="58" width="5" height="10" fill="currentColor"/>
          <rect x="50" y="58" width="5" height="10" fill="currentColor"/>
          <rect x="70" y="50" width="5" height="12" fill="currentColor"/>
          {/* Eye */}
          <circle cx="82" cy="38" r="2" fill="#0a0a0a"/>
        </svg>
      </div>

      {/* Anarchy A - subtle */}
      <div className="stencil-art top-[60%] left-[3%] w-12 h-12 opacity-30">
        <svg viewBox="0 0 50 50" className="w-full h-full stencil-figure text-red-500">
          <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M25 8 L12 42 M25 8 L38 42 M15 30 L35 30" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      </div>

      {/* "OBEY" crossed out */}
      <div className="stencil-text-block absolute bottom-[35%] left-[2%] rotate-12">
        <span className="stencil-word line-through decoration-red-500 decoration-4">OBEY</span>
      </div>

      {/* "QUESTION EVERYTHING" stencil */}
      <div className="stencil-text-block absolute top-[8%] left-[30%] -rotate-3 text-amber-500/50">
        <span className="stencil-word text-sm">QUESTION EVERYTHING</span>
      </div>

      {/* Paint splatter accents */}
      <div className="paint-splatter top-[30%] left-[25%] bg-emerald-500/20" />
      <div className="paint-splatter bottom-[25%] right-[30%] bg-red-500/15" />
      <div className="paint-splatter top-[55%] right-[15%] bg-cyan-500/10" />

      {/* Spray paint overspray texture */}
      <div className="absolute inset-0 spray-texture pointer-events-none" />

      {/* ============================================
          ORIGINAL DAMAGE ELEMENTS
          ============================================ */}

      {/* Bullet hole */}
      <div className="bullet-hole top-[20%] left-[15%]">
        <div className="bullet-cracks">
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
        </div>
      </div>

      {/* Top hazard stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes" />

      {/* CLASSIFIED stamps scattered */}
      <div className="classified-stamp top-[12%] right-[20%] -rotate-12">
        CLASSIFIED
      </div>
      <div className="classified-stamp top-[65%] left-[8%] rotate-6">
        TOP SECRET
      </div>
      <div className="classified-stamp bottom-[15%] right-[12%] -rotate-3">
        EYES ONLY
      </div>

      {/* Damage badge */}
      <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 border border-red-500/50 bg-red-500/10 rounded font-mono text-xs text-red-400 uppercase tracking-wider danger-glow">
        <span className="w-2 h-2 rounded-full bg-red-500 pulse-danger" />
        System Damaged
      </div>

      {/* Document ID badge */}
      <div className="absolute top-8 left-8 px-3 py-1.5 border border-zinc-700 bg-zinc-900/80 rounded font-mono text-xs text-zinc-500">
        DOC_ID: <span className="text-red-500">[EXPUNGED]</span>
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

      {/* Leaked Documents Section */}
      <div className="relative z-10 mt-16 w-full max-w-4xl px-4">
        <div className="text-xs font-mono text-red-500/60 uppercase tracking-widest mb-4 text-center">
          ▼ LEAKED DOCUMENTS ▼
        </div>
        
        {/* Document fragments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Redacted document fragment 1 */}
          <div className="document-fragment">
            <div className="document-header">
              <span>MEMO // INTERNAL</span>
              <span className="text-red-500">LEVEL 5</span>
            </div>
            <div className="document-body">
              <p>Subject: <span className="redacted" data-reveal="Project ICARUS">████████████</span></p>
              <p className="mt-2">
                The <span className="redacted" data-reveal="test subjects">████████</span> have shown 
                <span className="redacted" data-reveal="unexpected sentience">████████████████</span> in recent trials.
              </p>
              <p className="mt-2">
                Recommend immediate <span className="redacted" data-reveal="termination">███████████</span> of all
                <span className="redacted" data-reveal="evidence">████████</span>.
              </p>
            </div>
            <div className="document-footer">
              AUTH: <span className="redacted" data-reveal="DR. SMITH">██████████</span>
            </div>
          </div>

          {/* Redacted document fragment 2 */}
          <div className="document-fragment">
            <div className="document-header">
              <span>INCIDENT REPORT #2847</span>
              <span className="text-amber-500">RESTRICTED</span>
            </div>
            <div className="document-body">
              <p>Location: <span className="redacted" data-reveal="Site 19-B">██████████</span></p>
              <p className="mt-2">
                At <span className="redacted" data-reveal="03:47 AM">████████</span>, containment breach detected in
                <span className="redacted" data-reveal="Sector 7G">██████████</span>.
              </p>
              <p className="mt-2">
                Casualties: <span className="redacted" data-reveal="47 personnel">████████████</span>
              </p>
              <p className="mt-1 text-red-500/80 text-xs">
                [REMAINDER OF FILE CORRUPTED]
              </p>
            </div>
            <div className="document-footer">
              STATUS: <span className="text-red-500">UNRESOLVED</span>
            </div>
          </div>
        </div>

        {/* Terminal with leaked logs */}
        <div className="mt-6 terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn bg-red-500" />
              <span className="terminal-btn bg-yellow-500" />
              <span className="terminal-btn bg-green-500" />
            </div>
            <span className="terminal-title">access.log — INTERCEPTED</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-scroll">
              <p><span className="text-zinc-500">[2024-01-15 03:22:17]</span> <span className="text-red-400">WARN</span> Unauthorized access attempt from <span className="text-cyan-400">192.168.███.███</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:18]</span> <span className="text-amber-400">INFO</span> Firewall bypass detected — <span className="text-red-400">RULE_VIOLATION</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:19]</span> <span className="text-green-400">AUTH</span> User <span className="redacted-inline">admin_████</span> elevated to ROOT</p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:21]</span> <span className="text-red-400">CRIT</span> Database dump initiated: <span className="text-cyan-400">users.db</span>, <span className="text-cyan-400">secrets.db</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:23]</span> <span className="text-amber-400">INFO</span> Exfiltrating to <span className="redacted-inline">███.███.██.█</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:25]</span> <span className="text-red-400">ALERT</span> ██████████ BREACH DETECTED ██████████</p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:26]</span> <span className="text-zinc-600">[CONNECTION LOST]</span></p>
              <p className="text-red-500 blink-cursor">█</p>
            </div>
          </div>
        </div>

        {/* Scattered data fragments */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-mono">
          <div className="data-chip">
            API_KEY: <span className="redacted-inline">sk-████████████████</span>
          </div>
          <div className="data-chip">
            PASSWORD: <span className="redacted-inline">hunter████</span>
          </div>
          <div className="data-chip text-red-400">
            CLEARANCE: REVOKED
          </div>
          <div className="data-chip">
            COORDINATES: <span className="redacted-inline">██.████°N</span>
          </div>
        </div>
      </div>

      {/* Bottom hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-stripes" />

      {/* Corner accents - knocked loose */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-warning/20 corner-damaged-tl" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-warning/20 corner-damaged-tr" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-warning/20 corner-damaged-bl" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-warning/20 corner-damaged-br" />

      {/* Footer warning */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-700 uppercase tracking-widest">
        Unauthorized access is being monitored
      </div>
    </main>
  );
}
