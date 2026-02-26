export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="mb-20" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight">
          Crafting the <span className="text-accent-blue italic">Future</span> <br /> 
          with Artificial Intelligence.
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mb-12">
          A collection of experimental projects, research, and production-ready AI solutions 
          built at the intersection of design and technology.
        </p>
      </section>

      <section id="projects" className="bento-grid grid-cols-2 md:grid-cols-4" aria-label="Featured projects and stats">
        {/* Large Feature */}
        <div className="bento-item col-span-4 md:col-span-2 row-span-2 flex flex-col justify-end" role="article">
          <div className="text-highlight-lime text-xs font-bold tracking-widest uppercase mb-2">Featured Project</div>
          <h3 className="text-3xl font-bold mb-4">Neural Canvas Engine</h3>
          <p className="text-text-secondary">Generative AI for real-time architectural visualization.</p>
        </div>

        {/* Medium Grid Items */}
        <div id="abilities" className="bento-item col-span-4 md:col-span-2" role="article">
          <h3 className="text-xl font-bold mb-2">Machine Learning Research</h3>
          <p className="text-text-secondary text-sm">Exploring latent space representation in medical imaging.</p>
        </div>

        <div className="bento-item col-span-2 md:col-span-1" role="status" aria-label="99% Accuracy">
          <div className="text-3xl font-bold text-accent-blue mb-2">99%</div>
          <p className="text-text-secondary text-xs uppercase tracking-wider">Accuracy</p>
        </div>

        <div className="bento-item col-span-2 md:col-span-1" role="status" aria-label="12+ Papers published">
          <div className="text-3xl font-bold text-highlight-lime mb-2">12+</div>
          <p className="text-text-secondary text-xs uppercase tracking-wider">Papers</p>
        </div>

        {/* Small Items */}
        <div id="lab" className="bento-item col-span-4 md:col-span-2" role="article">
          <h3 className="text-xl font-bold mb-2">Lab Experiments</h3>
          <p className="text-text-secondary text-sm">Weekly updates on AI prototypes and micro-interactions.</p>
        </div>
      </section>
    </div>
  );
}
