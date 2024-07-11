import { useState } from "react";
import "./App.css";
import clsx from "clsx";

function App() {
  const [activePanel, setActivePanel] = useState("panel1");

  const handlePanelClick = (panelId: string) => {
    setActivePanel(activePanel === panelId ? "" : panelId);
  };
  return (
    <>
      <div className="container">
        <div
          className={clsx("panel", {
            active: activePanel === "panel1",
          })}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1718506921663-ee4571a3f92e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          onClick={() => handlePanelClick("panel1")}
        >
          <h3> Discover new horizons</h3>
        </div>
        <div
          className={clsx("panel", {
            active: activePanel === "panel2",
          })}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1720524270904-43dc519c1b65?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          onClick={() => handlePanelClick("panel2")}
        >
          <h3>Unveil the Adventure</h3>
        </div>
        <div
          className={clsx("panel", {
            active: activePanel === "panel3",
          })}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1720247522784-ba24b938534d?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          onClick={() => handlePanelClick("panel3")}
        >
          <h3>Journey Beyond Limits</h3>
        </div>
        <div
          className={clsx("panel", {
            active: activePanel === "panel4",
          })}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1719583112932-d2426a3196ae?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          onClick={() => handlePanelClick("panel4")}
        >
          <h3>Wander with Wonder</h3>
        </div>
        <div
          className={clsx("panel", {
            active: activePanel === "panel5",
          })}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1718308055947-2f3d8d5ea983?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          onClick={() => handlePanelClick("panel5")}
        >
          <h3>Embrace the Unknown</h3>
        </div>
      </div>
    </>
  );
}

export default App;
