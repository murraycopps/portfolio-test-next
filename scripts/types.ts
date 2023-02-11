type Class = {
    _id: string;
    name: string;
    url: string;
    description: string;
    images: string[];
    videos: string[];
    thumbnail?: string;
  }

  type Game = {
    name: string;
    url: string;
    description: string;
    color?: string;
  };


  export type { Class, Game }