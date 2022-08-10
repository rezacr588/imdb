export interface NotificationItemInterface {
  content: string;
  createdAt: Date;
  type: string;
  id: string;
}
let aDay = 24 * 60 * 60 * 1000;
let anHour = 60 * 60 * 1000;
let aMinute = 60 * 1000;

export const notifications: NotificationItemInterface[] = [
  {
    id: "sadasd",
    content: "Congrat! You booked John Wick 3 movie ticket successfully.",
    createdAt: new Date(Date.now() - aDay),
    type: "congrats",
  },
  {
    id: "dassad",
    content:
      "Hi Morgan. This is just a reminder for your movie today in 13:45 PM.",
    createdAt: new Date(Date.now() - anHour),
    type: "reminder",
  },
  {
    id: "xczxc",
    content: "You’ve got an cashback for the past ticket booking.",
    createdAt: new Date(Date.now() - aMinute),
    type: "money",
  },
  {
    id: "hjkhjkhjkj",
    content: "You just got the discount 30% for booking a movie in this week.",
    createdAt: new Date(Date.now() - 5 * aMinute),
    type: "discount",
  },
  {
    id: "sadcxxcv",
    content: "Congrat! You booked John Wick 3 movie ticket successfully.",
    createdAt: new Date(Date.now() - 2 * aDay),
    type: "congrats",
  },
];
