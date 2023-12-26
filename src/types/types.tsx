export type Card = {
    image: string;
    title: string;
    preview: string;
    deadline: string;
    tech: string[];
    git: string;
    deploy: string;
};
  
  export type Info = {
    title: string;
    overview: string;
    screens: string[];
    tech: string[];
    git: string;
    deploy: string;
};
  
  export type Project = {
    id: number;
    cards: Card[];
    infos: Info[];
}
