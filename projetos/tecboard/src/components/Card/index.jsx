import "./card.style.css";

export function Card({ card }) {
  return (
    <div className="card">
      <img src={card.img} alt="imagem card" />
      <div className="body">
        <p className="tag">{card.theme.title}</p>
        <p className="date">{card.date.toLocaleDateString("pt-BR")}</p>
        <h4 className="title">{card.title}</h4>
      </div>
    </div>
  );
}
