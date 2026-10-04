import card1 from "../assets/images/card-1.jpg";
import card2 from "../assets/images/card-2.jpg";
import card3 from "../assets/images/card-3.jpg";
import card4 from "../assets/images/card-4.jpg";
import card5 from "../assets/images/card-5.jpg";
import card6 from "../assets/images/card-6.jpg";

export const categories = [
  { id: "popular", label: "Популярные" },
  { id: "author", label: "Авторские" },
  { id: "hikes", label: "Походы" },
  { id: "rafting", label: "Сплавы" },
  { id: "biking", label: "Велопрогулки" },
];

export const tours = [
  { slug: "mountains", title: "Путешествие в горы", price: "от 80 000 руб", cover: card1, categories: ["popular", "hikes"] },
  { slug: "far-from-home", title: "Вдали от дома", price: "от 65 000 руб", cover: card2, categories: ["popular", "author"] },
  { slug: "river-rafting", title: "Сплав по горной реке", price: "от 45 000 руб", cover: card3, categories: ["popular", "rafting"] },
  { slug: "bike-lakes", title: "Велотур по озёрам", price: "от 38 000 руб", cover: card4, categories: ["biking"] },
  { slug: "forest-trek", title: "Поход по заповеднику", price: "от 29 000 руб", cover: card5, categories: ["hikes"] },
  { slug: "coast-trail", title: "Тропа вдоль побережья", price: "от 52 000 руб", cover: card6, categories: ["author", "hikes"] },
];