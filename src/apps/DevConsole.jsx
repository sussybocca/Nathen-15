import React, { useState } from "react";
import EmojiLogoBuilder from "../components/EmojiLogoBuilder";
import { saveData, loadData } from "../utils/storage";

const DevConsole = ({ onAppCreated }) => {
  const [appName, setAppName] = useState("");
  const [code, setCode] = useState("");
  const [logo, setLogo] = useState({ logo: "📦", color: "#fff" });

  const createApp = async () => {
    if (!appName || !code) return alert("App name and code required!");
    const newApp = {
      id: Date.now(),
      name: appName,
      component: () => eval(code),
      logo: logo.logo,
      color: logo.color,
    };
    const existing = (await loadData("apps")) || [];
    existing.push(newApp);
    await saveData("apps", existing);
    if (onAppCreated) onAppCreated(newApp);
    alert(`${appName} created!`);
    setAppName("");
    setCode("");
  };

  return (
    <div>
      <h2>Dev Console - Create App</h2>
      <input
        type="text"
        placeholder="App Name"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
      />
      <textarea
        placeholder="Enter JSX code (returns JSX component)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={8}
        style={{ width: "100%", marginTop: "10px" }}
      />
      <EmojiLogoBuilder onSelect={setLogo} />
      <button onClick={createApp} style={{ marginTop: "10px" }}>
        Create App
      </button>
    </div>
  );
};

export default DevConsole;
