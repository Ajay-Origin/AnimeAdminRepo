export class Anime {
    public static createEmpty(): Anime {
        return new Anime();
    }
    constructor(
        public mal_id: number = 0, 
        public rank: number = 0, 
        public title: string = '',
        public url: string = '',
        public image_url: string = '',
        public type: string = '',
        public episodes: number = 0,
        public start_date: Date = new Date(),
        public end_date?: Date,
        public members: number = 0,
        public score: number = 0,
        ) 
        {}
  }