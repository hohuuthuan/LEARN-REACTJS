import React from 'react';
import styles from "./App.css";
import Header from "./components/header/index";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Slideshow from './components/slider';
import img1 from './components/slider/img/1.jpg';
import img2 from './components/slider/img/2.jpg';
import img3 from './components/slider/img/3.jpg';
import img4 from './components/slider/img/4.jpg';
import img5 from './components/slider/img/5.jpg';
import img6 from './components/slider/img/6.png';

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption six" },
];


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        {/* <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`manual`}
        /> */}

        <Slideshow
          input={collection}
          ratio={`2:1`}
          mode={`automatic`}
          timeout={`2000`}
        />
        <Footer></Footer>
      </div>
    );
  }
}


