export interface MovieItemInterface {
  title: string;
  id: string;
  imageSource: string;
  rating: number;
  time: any;
  genre: string;
  age: string;
}

export interface MovieItemsInterface {
  data: MovieItemInterface[];
}
