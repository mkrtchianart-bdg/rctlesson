import React from "react";
import "./App.css";
import MainSection from "./components/MainSection";
import { data } from "./consts/dataArray";
import List from "./components/list";
import {names} from "./consts/listArray";

function App() {

  return (
    <div className="app">
      <h1>From Design to Implementation</h1>
      <div className="sections-container">
        {data.map((section, index) => {
          return (
            <MainSection
              key={index}
            title={section.title}
            button={section.button}
            />
          );
        })}
      </div>
      <List items={names} />
    </div>
  );
}

export default App;
