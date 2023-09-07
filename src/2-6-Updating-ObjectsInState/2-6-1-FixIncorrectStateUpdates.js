import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleNameChange(e) {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input
          name="firstName"
          value={player.firstName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={player.lastName}
          onChange={handleNameChange}
        />
      </label>
    </>
  );
}
