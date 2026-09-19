const projects = [
  { id:'01', title:'Project Aurora', desc:'Interactive web experience for a music festival', tags:'WebGL • Interactive • 2023' },
  { id:'02', title:'Nanoverse', desc:'Brand website for a tech startup', tags:'Three.js • Animation • 2024' },
  { id:'03', title:'Kinetic Type', desc:'Motion design showcase', tags:'Motion Design • Typography • 2023' },
  { id:'04', title:'Arctic Flow', desc:'Data visualization dashboard', tags:'WebGL • Data Art • 2024' },
  { id:'05', title:'Lumina', desc:'AR-powered retail experience', tags:'AR • Interactive • 2024' },
  { id:'06', title:'Neural Canvas', desc:'AI-generated art platform', tags:'AI • Creative Coding • 2024' },
];

export default function Work() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">OUR WORK</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.id} href="#" className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                <span className="text-primary/50 text-2xl">PROJECT {p.id}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <span className="text-xs text-primary/70">{p.tags}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}