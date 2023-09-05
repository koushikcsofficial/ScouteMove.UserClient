import Adds from "./components/Adds/Adds";
import Article from "./components/Article/Article";
import ArticleSlider from "./components/ArticleSlider/ArticleSlider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MoreArticle from "./components/MoreArticle/MoreArticle";
import Slider from "./components/Slider/Slider";
import Sponser from "./components/Sponser/Sponser";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/home" element={<>
          <Header />
          <Hero />
          <Slider />
          <Article />
          <Adds />
          <MoreArticle />
          <ArticleSlider />
          <Sponser />
          <Footer />
        </>} />

      </Routes>

    </>
  );
}

export default App;
