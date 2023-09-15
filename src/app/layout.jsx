import "@/styles/common.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export const metadata = {
  title: "YourTour",
  description: "Идеальные путешествия, выбери или создай тур, путешествуй вместе с нами",
  keywords: "путешествия, туры, походы, сплавы, велопрогулки",
};

const RootLayout = () => (
  <html lang="ru">
    <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
    <body className="body">
      <Header />
      <Main />
      <Footer />
    </body>
  </html>
);

export default RootLayout;
