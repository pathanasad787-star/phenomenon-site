export default function Contact() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">GET IN TOUCH</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-muted-foreground mb-8">Ready to create something extraordinary? Let's talk about your project.</p>
          <div className="space-y-6 mb-10">
            <div><span className="font-medium block">Email</span><a href="mailto:hello@phenomenonstudio.com" className="text-primary hover:underline">hello@phenomenonstudio.com</a></div>
            <div><span className="font-medium block">Phone</span><a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></div>
            <div><span className="font-medium block">Location</span><span className="text-muted-foreground">Los Angeles, CA</span></div>
          </div>
          <a href="#" className="btn-primary px-8 py-4 rounded-full text-lg">SEND MESSAGE</a>
        </div>
      </div>
    </section>
  );
}