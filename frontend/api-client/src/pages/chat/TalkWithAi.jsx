import React, { useState } from "react";
import api from "../../services/api"; // Adjust the import path as necessary

function TalkWithAi() {
  const [prompt, setPrompt] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const askAi = async () => {
    try {
      ///ask-ai-options?prompt=Witch is capital Cyprus
      const response = await api.get(`ask-ai-options`, { params: { prompt } });
      const data = await response.data;

      console.log(data);
      setChatResponse(data);
    } catch (error) {
      console.log("Error generating response: ", error);
    }
  };
  return (
    <div>
      <h2>Talk with AI!!!!</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt for AI"
      />

      <button onClick={askAi}>Ask AI</button>
      <div className="output">
        <p>{chatResponse}</p>
      </div>
    </div>
  );
}

export default TalkWithAi;
