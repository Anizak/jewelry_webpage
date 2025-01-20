import "./App.css";
import { ProductProvider } from "./components/contexts/ProductContext";
import Product from "./components/products/Product";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </>
  );
}

export default App;
