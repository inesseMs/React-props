import React from "react";

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <div
      style={{
        width: "220px",
        border: "3px solid gold",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#1a1a2e",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h2 style={{ fontSize: "18px", color: "gold", marginBottom: "6px" }}>
        {name}
      </h2>
      <p style={{ margin: "4px 0", fontSize: "14px" }}> {team}</p>
      <p style={{ margin: "4px 0", fontSize: "14px" }}> {nationality}</p>
      <p style={{ margin: "4px 0", fontSize: "14px" }}>👕 #{jerseyNumber}</p>
      <p style={{ margin: "4px 0", fontSize: "14px" }}> Age: {age}</p>
    </div>
  );
}

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Club",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  
};

export default Player;
