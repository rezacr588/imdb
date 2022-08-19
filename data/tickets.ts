export interface ticketInterface {
  imgSource: string;
  title: string;
  theatre: string;
  date: string;
  time: string;
  hall: string;
  row: string;
  seat: string;
}

export const tickets: ticketInterface[] = [
  {
    imgSource: "/dark-knight-cover.jpg",
    title: "John Wick 3: Parabellum",
    theatre: "Paragon Cinema",
    date: "24 May, 2019",
    time: "8:30 - 10:00 AM",
    hall: "C",
    row: "E",
    seat: "E4, E5",
  },
  {
    imgSource: "/dark-knight-cover.jpg",
    title: "Dark Knight",
    theatre: "Duzce Cinema",
    date: "24 May, 2019",
    time: "8:30 - 10:00 AM",
    hall: "C",
    row: "E",
    seat: "E4, E5",
  },
  {
    imgSource: "/dark-knight-cover.jpg",
    title: "Logan",
    theatre: "Cinematime",
    date: "24 May, 2019",
    time: "8:30 - 10:00 AM",
    hall: "C",
    row: "E",
    seat: "E4, E5",
  },
  {
    imgSource: "/dark-knight-cover.jpg",
    title: "John Wick 2",
    theatre: "Hell Cinema",
    date: "24 May, 2019",
    time: "8:30 - 10:00 AM",
    hall: "C",
    row: "E",
    seat: "E4, E5",
  },
];
