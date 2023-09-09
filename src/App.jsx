// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./Context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main style={{ marginTop: "6rem" }}>
        <div className="loading"></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
