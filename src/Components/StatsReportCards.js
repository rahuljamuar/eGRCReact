import React from "react";

const cards = [
  { card: "card1", name: "item 1", value: "2540" },
  { card: "card2", name: "item 2", value: "120" },
  { card: "card3", name: "item 3", value: "656" },
  { card: "card4", name: "item 4", value: "9540" },
  { card: "card1", name: "item 5", value: "10" },
  { card: "card3", name: "item 6", value: "8540" },
];
const StatsReportCard = () => {
  return (
    <div className="charts__right__cards">
      {cards.map((card) => (
        <div className={card.card}>
          <h1>{card.name}</h1>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
};
export default StatsReportCard;
