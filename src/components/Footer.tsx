export default function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <a href="/" className="text-xl font-bold">Phenomenon Studio</a>
          <div className="flex gap-6">
            {['Work','About','Services','Contact'].map(l => (
              <a key={l} href={`/${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Phenomenon Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}