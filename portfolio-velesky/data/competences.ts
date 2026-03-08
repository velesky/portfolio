import { Competence } from "@/types/competence";

export const competences: Competence[] = [
    {
        nom: "BACKEND",
        description: "Ma spécialité. APIs REST, logique serveur, bases de données, architecture propre.",
        niveau: 80,
        iconName: "Server",
        techs: [
            { name: "Node.js", iconName: "Server" },
            { name: "APIs REST", iconName: "Link" },
            { name: "PostgreSQL", iconName: "Database" },
            { name: "Architecture", iconName: "ShieldCheck" },
        ],
    },
    {
        nom: "FRONTEND",
        description: "React, Next.js 15, Tailwind CSS — appris en autonomie, affiné avec l'IA.",
        niveau: 72,
        iconName: "Code",
        techs: [
            { name: "React", iconName: "Layers" },
            { name: "Next.js", iconName: "Zap" },
            { name: "Tailwind", iconName: "Wind" },
            { name: "Responsive", iconName: "Smartphone" },
        ],
    },
    {
        nom: "MOBILE",
        description: "Flutter & Dart, Riverpod, Hive — apps hors-ligne pour le marché ivoirien.",
        niveau: 68,
        iconName: "Smartphone",
        techs: [
            { name: "Flutter", iconName: "Smartphone" },
            { name: "Dart", iconName: "Target" },
            { name: "Riverpod", iconName: "Waves" },
            { name: "Hive (Offline)", iconName: "Database" },
        ],
    },
    {
        nom: "VIBE & UI",
        description: "GSAP, Framer Motion, Three.js, dark UX — créer des interfaces qui résonnent.",
        niveau: 75,
        iconName: "Palette",
        techs: [
            { name: "GSAP", iconName: "Activity" },
            { name: "Framer", iconName: "MousePointer2" },
            { name: "Three.js", iconName: "Box" },
            { name: "Dark UX", iconName: "Sparkles" },
        ],
    },
    {
        nom: "IA-DRIVEN",
        description: "Prompting avancé, intégration LLM dans le workflow, l'IA comme partenaire.",
        niveau: 85,
        iconName: "Bot",
        techs: [
            { name: "Prompting", iconName: "MessageSquare" },
            { name: "LLM", iconName: "Cpu" },
            { name: "Agents", iconName: "Bot" },
            { name: "Workflow", iconName: "Zap" },
        ],
    },
    {
        nom: "OUTILLAGE",
        description: "TypeScript, Git, Zustand, React Query, Zod, Prisma, Supabase, Vite, Vercel.",
        niveau: 78,
        iconName: "Wrench",
        techs: [
            { name: "TypeScript", iconName: "FileCode" },
            { name: "Git", iconName: "GitBranch" },
            { name: "Zustand", iconName: "Layers" },
            { name: "Prisma", iconName: "Database" },
            { name: "Supabase", iconName: "Cloud" },
            { name: "Vercel", iconName: "Triangle" },
            { name: "Vite", iconName: "Zap" },
            { name: "React Query", iconName: "RefreshCw" },
            { name: "Zod", iconName: "CheckCircle2" },
        ],
    },
];
