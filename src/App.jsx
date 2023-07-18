import logo from './logo.svg';
import './App.css';
import Canvas from "./Canvas";
import image from "./image.jpg";
import {blackwhite} from "./utils";
import {useEffect, useState} from "react";

function App() {

  const processImage = (imageData) => {
    return blackwhite(imageData)
  }

return (
    <div className="App">
      <header className="header">
        <h1 class="heading">Фильтр "black and white"</h1>
      </header>
      <Canvas image={image} processImage={processImage}/>
    </div>
);
}

export default App;
