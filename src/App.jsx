import { Catalog } from "./components/Catalog/Catalog";
import { Collection } from "./components/Collection/Collection";
import { Collection2018 } from "./components/Collection2018/Collection2018";
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
    </>
  );
}

export default App;
