import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("ask-ai");

  const handleTabChange = (tab) => {
    //alert(tab);
    setActiveTab(tab);
  };

  return (
    <div>
      <button onClick={() => handleTabChange("ask-ai")}>Talk With Ai</button>
      <button onClick={() => handleTabChange("recipe-generator")}>Generate Recipes</button>
      <button onClick={() => handleTabChange("image-generator")}>Generate Images</button>
      <div>
        {activeTab === "ask-ai" && <h2>Talk with AI</h2>}
        {activeTab === "recipe-generator" && <h2>Generate Recipes</h2>}
        {activeTab === "image-generator" && <h2>Generate Images</h2>}
      </div>
    </div>
  );
}

export default App;
