import React, { useState } from "react";

const EmojiLogoBuilder = ({ onSelect }) => {
  const [emoji, setEmoji] = useState("😀");
  const [color, setColor] = useState("#ffffff");

  const handleSave = () => {
    if (onSelect) onSelect({ logo: emoji, color });
  };

  return (
    <div>
      <h3>Emoji Logo Builder</h3>
      <input
        type="text"
        value={emoji}
        maxLength={2}
        onChange={(e) => setEmoji(e.target.value)}
      />
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <div
        style={{
          fontSize: "5rem",
          color,
          marginTop: "1rem",
          textAlign: "center",
        }}
      >
        {emoji}
      </div>
      <button onClick={handleSave}>Select Logo</button>
    </div>
  );
};

export default EmojiLogoBuilder;
