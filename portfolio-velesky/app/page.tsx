import { projets } from "@/data/projets";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-background text-foreground">
      <h1 className="text-6xl md:text-8xl font-bebas tracking-wider text-accent mb-4">
        VELESKY
      </h1>
      <p className="max-w-md font-dm-mono text-text-muted mb-8 italic">
        "Vibe coder" based in Abidjan. Building modular and scalable experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="p-6 rounded-2xl border border-border-subtle bg-surface hover:border-accent transition-colors duration-300 group"
          >
            <h3 className="text-2xl font-bebas text-foreground mb-2 group-hover:text-accent transition-colors">
              {projet.titre}
            </h3>
            <p className="text-sm text-text-muted font-dm-mono">{projet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
