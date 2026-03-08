export interface Competence {
    nom: string;
    description: string;
    niveau: number; // Pourcentage 0-100
    iconName?: string;
    techs?: {
        name: string;
        iconName: string;
    }[];
}
