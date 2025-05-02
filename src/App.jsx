import { useState } from "react";
import { useEffect } from "react";
import { getConfiguration } from "./api/apiMovies";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  const [configuration, setConfiguration] = useState(null);

  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        const response = await getConfiguration();
        setConfiguration(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchConfiguration();
  }, []);

  return !configuration ? (
    "Loading configuration"
  ) : (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
