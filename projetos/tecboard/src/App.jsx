import "./App.css";
import { useState } from "react";
import { Banner } from "./components/Bannes";
import { Card } from "./components/Card";
import { EventForm } from "./components/EventForm";
import { ThemeField } from "./components/ThemeField";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// In React, components are functions.

function App() {
  const themes = [
    {
      id: 0,
      title: "front-end",
    },
    {
      id: 1,
      title: "back-end",
    },
    {
      id: 2,
      title: "devops",
    },
    {
      id: 3,
      title: "inteligência artificial",
    },
    {
      id: 4,
      title: "data science",
    },
    {
      id: 5,
      title: "cloud",
    },
  ];

  const [cards, setCards] = useState([
    {
      img: "imagem_1.png",
      theme: themes[0],
      date: new Date(),
      title: "Mulheres no Front",
    },
    {
      img: "imagem_2.png",
      theme: themes[0],
      date: new Date(),
      title: "Pixel & Code",
    },
    {
      img: "imagem_3.png",
      theme: themes[1],
      date: new Date(),
      title: "Back-End Masters",
    },
    {
      img: "imagem_4.png",
      theme: themes[1],
      date: new Date(),
      title: "Code to Core",
    },
    {
      img: "imagem_5.png",
      theme: themes[1],
      date: new Date(),
      title: "Server Side Summit",
    },
    {
      img: "imagem_6.png",
      theme: themes[2],
      date: new Date(),
      title: "DevOps Evolution",
    },
    {
      img: "imagem_7.png",
      theme: themes[3],
      date: new Date(),
      title: "Deep Learning Days",
    },
    {
      img: "imagem_8.png",
      theme: themes[3],
      date: new Date(),
      title: "IA na palma da mão",
    },
    {
      img: "imagem_9.png",
      theme: themes[3],
      date: new Date(),
      title: "IA Segura e Acessível",
    },
    {
      img: "imagem_10.png",
      theme: themes[4],
      date: new Date(),
      title: "Data Pulse",
    },
    {
      img: "imagem_11.png",
      theme: themes[4],
      date: new Date(),
      title: "Data Revolution",
    },
    {
      img: "imagem_12.png",
      theme: themes[4],
      date: new Date(),
      title: "Driven by Data",
    },
    // {
    //   img: "imagem_13.png",
    //   theme: themes[4],
    //   date: new Date(),
    //   title: "SQL Summit",
    // },
    {
      img: "imagem_14.png",
      theme: themes[5],
      date: new Date(),
      title: "SkyTech Summit",
    },
    {
      img: "imagem_15.png",
      theme: themes[5],
      date: new Date(),
      title: "Mundo Cloud",
    },
  ]);

  function addCards(card) {
    // cards.push(card);
    // console.log(cards);
    setCards([...cards, card]);
  }

  return (
    <>
      <Header />
      <main>
        <Banner />
        <EventForm themes={themes} addCards={addCards} />
        <section className="container">
          {themes.map(function (theme) {
            if (
              !cards.some((card) => {
                return card.theme.id == theme.id;
              })
            ) {
              return null;
            }
            return (
              <section key={theme.id}>
                <ThemeField theme={theme.title} />
                <div className="events">
                  {cards
                    .filter((card) => theme.id == card.theme.id)
                    .map((card, index) => {
                      return <Card card={card} key={index} />;
                    })}
                </div>
              </section>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
