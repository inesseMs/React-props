import React from "react";
import Player from "./Player";
import players from "./players";

function PlayersList() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
      }}
    >
      
    <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "62px",
            fontWeight: "900",
            letterSpacing: "4px",
            background: "linear-gradient(90deg, #FFD700, #FF6B00, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "8px",
          }}
        >
          FIFA 90's Legends
        </h1>
        <p
          style={{
            color: "#aaa",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            fontSize: "15px",
            letterSpacing: "3px",
            marginBottom: "36px",
          }}
        >
          — Icons of the Beautiful Game —
        </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {players.map((player) => (
          <Player key={player.name} {...player} />
        ))}
      </div>
    </div>
  </div> 
  );
}

export default PlayersList;
