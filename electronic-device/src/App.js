import Header from "./components/header/index";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
