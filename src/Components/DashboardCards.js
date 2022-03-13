import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function DashboradCards() {
  const itemList = [
    {
      ItemName: "Item 1",
      title: "20",
      icon: "fa fa-tachometer fa-2x text-white",
      card: "card-compo",
    },
    {
      ItemName: "Item 2",
      title: "101",
      icon: "fa fa-hdd-o fa-2x text-white",
      card: "card-1",
    },
    {
      ItemName: "Item 3",
      title: "0",
      icon: "fa fa-thumbs-up fa-2x text-white",
      card: "card-2",
    },
    {
      ItemName: "Item 4",
      title: "0",
      icon: "fa fa-thumbs-up fa-2x text-white",
      card: "card-3",
    },
    {
      ItemName: "Item 5",
      title: "0",
      icon: "fa fa-thumbs-up fa-2x text-white",
      card: "card-4",
    },
    {
      ItemName: "Item 6",
      title: "0",
      icon: "fa fa-calendar fa-2x text-white",
      card: "card-5",
    },
    {
      ItemName: "Item 7",
      title: "0",
      icon: "fa fa-info-circle fa-2x text-white",
      card: "card-6",
    },
    {
      ItemName: "Item 8",
      title: "0",
      icon: "fa fa-info-circle fa-2x text-white",
      card: "card-7",
    },
  ];

  return (
    <div className="main__cards">
      {itemList.map((item) => (
        <div className={item.card}>
          <i className={item.icon} aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text-primary-p">{item.ItemName}</p>
            <span className="font-bold text-title">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
