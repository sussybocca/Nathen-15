import React from "react";
import DevConsole from "../apps/DevConsole";
import SampleApp from "../apps/SampleApp";
import EmojiLogoBuilder from "./EmojiLogoBuilder";

const Taskbar = ({ openApp }) => {
  return (
    <div className="taskbar">
      <button onClick={() => openApp(DevConsole, "Dev Console")}>
        🖥 Dev Console
      </button>
      <button onClick={() => openApp(SampleApp, "Sample App")}>
        📦 Sample App
      </button>
      <button onClick={() => openApp(EmojiLogoBuilder, "Emoji Logo Builder")}>
        🎨 Emoji Builder
      </button>
    </div>
  );
};

export default Taskbar;
