import { Roboto } from "next/font/google";
import cn from "classnames";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import "@/styles/common.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "YourTour",
  description:
    "Идеальные путешествия, выбери или создай тур, путешествуй вместе с нами",
  keywords: "путешествия, туры, походы, сплавы, велопрогулки",
};

const RootLayout = () => (
  <html lang="ru">
    <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
    <body className={cn("body", roboto.className)}>
      <Header />
      <Main />
      <Footer />
    </body>
  </html>
);

export default RootLayout;
