'use client';
import { useParams } from 'next/navigation';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = {
    id: id || '01', title: 'Project Aurora', category: 'Interactive Web Experience', year: '2023',
    description: 'An immersive web experience for a music festival combining WebGL, interactive elements, and responsive design.',
    challenge: 'The client needed a website to immerse visitors in the festival atmosphere.',
    approach: 'We developed a custom WebGL-based interactive experience that responds to user input.',
    process: ['Research and discovery','Concept development','Technical prototyping','Design refinement','Development and testing','Launch and optimization'],
    results: [{metric:'Engagement',value:'85%',description:'Average time on site increased by 85%'},{metric:'Conversion',value:'40%',description:'Ticket purchases increased by 40%'},{metric:'Satisfaction',value:'92%',description:'User satisfaction rating of 9.2/10'}],
  };
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative h-[60vh] mb-16 rounded-2xl overflow-hidden bg-gradient-to-b from-primary/10 to-transparent flex items-end">
          <div className="absolute inset-0 flex items-center justify-center text-primary/20 text-9xl font-bold">{project.title.charAt(0)}</div>
          <div className="relative p-8">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg text-foreground/70">{project.category} • {project.year}</p>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div><h3 className="text-xl font-semibold mb-4">The Challenge</h3><p className="text-muted-foreground">{project.challenge}</p></div>
            <div><h3 className="text-xl font-semibold mb-4">Our Approach</h3><p className="text-muted-foreground">{project.approach}</p></div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.process.map((step, i) => (
              <div key={i} className="p-6 bg-card/50 border border-border/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3"><span className="text-primary">{i+1}</span></div>
                <h4 className="font-semibold">{step}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Results</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {project.results.map((r, i) => (
              <div key={i} className="p-8 bg-card/50 border border-border/50 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">{r.value}</div>
                <div className="text-sm font-medium">{r.metric}</div>
                <p className="text-xs text-muted-foreground mt-2">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}