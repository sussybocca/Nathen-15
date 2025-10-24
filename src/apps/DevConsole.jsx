// src/apps/DevConsole.jsx
import React, { useState } from "react";
import { saveApp } from "../utils/storage";

const DevConsole = ({ onAppCreated }) => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("🆕");

  const createApp = () => {
    if (!name) return;

    // Simple placeholder component for user app
    const component = () => <div style={{ padding: "10px" }}>This is {name}</div>;

    const newApp = {
      id: Date.now(),
      name,
      emoji,
      component,
    };

    saveApp(newApp);
    onAppCreated && onAppCreated(newApp); // update HomeScreen dynamically
    setName("");
    setEmoji("🆕");
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>DevConsole / App Builder</h2>
      <input
        type="text"
        placeholder="App Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        style={{ width: "50px", textAlign: "center" }}
      />
      <button onClick={createApp} style={{ marginLeft: "10px" }}>
        Create App
      </button>
    </div>
  );
};

export default DevConsole;
