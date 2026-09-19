const services = [
  { icon:'web', title:'Web Design', desc:'Crafting visually stunning and highly functional websites that capture your brand essence.' },
  { icon:'extension', title:'Creative Development', desc:'Building custom digital products from concept to launch with innovative interactions.' },
  { icon:'grain', title:'3D & Interactive', desc:'Developing immersive three-dimensional experiences that push the boundaries of the web.' },
  { icon:'slow_motion_video', title:'Motion Design', desc:'Bringing brands to life through expressive animation and kinetic typography.' },
  { icon:'branding_watermark', title:'Branding', desc:'Developing cohesive brand identities that work across digital and physical touchpoints.' },
  { icon:'psychology', title:'AI / Interactive Experiences', desc:'Integrating AI to create personalized, adaptive, and engaging user experiences.' },
];

export default function Services() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">OUR SERVICES</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500">
              <div className="h-32 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                <span className="material-icons text-5xl text-primary/40">{s.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}