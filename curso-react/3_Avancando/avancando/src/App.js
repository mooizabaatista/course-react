import "./App.css";
import Image02 from "./assets/image02.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <h2>
        Imagem em <pre>SRC/ASSETS</pre>
      </h2>
      <img src={Image02} alt="lalala" />
      <h2>
        Imagem em <pre>PUBLIC</pre>
        <img src="/image02.jpg" alt="" />
      </h2>
    </div>
  );
}

export default App;
