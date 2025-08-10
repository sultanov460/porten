import { Brands } from "./components/Brands/Brands";
import { Catalog } from "./components/Catalog/Catalog";
import { Collection } from "./components/Collection/Collection";
import { Collection2018 } from "./components/Collection2018/Collection2018";
import { Footer } from "./components/Footer/Footer";
import { HeaderBottom } from "./components/HeaderBottom/HeaderBottom";
import { HeaderTop } from "./components/HeaderTop/HeaderTop";
import { Hero } from "./components/Hero/HEro";

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <Hero />
      <Collection />
      <Collection2018 />
      <Catalog />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
