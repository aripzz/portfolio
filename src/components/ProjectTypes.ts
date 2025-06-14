export interface Project {
    id: string;
    image: string;
    title: string;
    shortDescription: string;
    techs: string[];
    detail: {
        description: string;
        techs: string[];
        features: string[];
        links: {
            live: string;
            github: string;
        };
    };
}