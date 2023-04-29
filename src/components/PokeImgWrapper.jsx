import React from "react";

export default function PokeImgWrapper({ img }) {
  return (
    <div className="poke-img-wrapper">
      <img src={img}></img>
    </div>
  );
}
