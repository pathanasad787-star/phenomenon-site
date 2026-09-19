export default function About() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">ABOUT US</h2>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold mb-6">OUR STORY</h3>
            <p className="mb-6">Founded in 2020, Phenomenon Studio began as a collective of passionate designers and developers who believed that digital experiences should evoke emotion and wonder.</p>
            <p className="mb-6">Our work blends cutting-edge technology with artistic vision to create experiences that don't just function—they resonate.</p>
          </div>
          <div className="space-y-8">
            {[['01','Creative Development','Building bespoke digital products that marry aesthetics with functionality.'],['02','3D Experiences','Crafting immersive three-dimensional worlds that users can explore and interact with.'],['03','Brand Experiences','Transforming brand identities into dynamic digital presences.']].map(([num, title, desc]) => (
              <div key={num} className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"><span className="text-primary text-2xl">{num}</span></div>
                <div><h4 className="font-semibold mb-2">{title}</h4><p className="text-sm text-muted-foreground">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}