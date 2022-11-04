const Events = () => {
  const handleEventCorreto = (e) => {
    alert("Sou um evento recomendado.");
  };

  const renderSomething = (x) => {
    if (x.toLowerCase() === "admin") {
      return <p>ADMIN</p>;
    } else {
      return <p>USER</p>;
    }
  };

  return (
    <>
      <div>
        <header>
          <h1>Events</h1>
        </header>
        <br />
        <div>
          <h3>Função acima do return</h3>
          <p>
            Este tipo de função é o mais indicado para as aplicações feitas em
            react. Como benefício temos um código limpo e claro.
          </p>
          <button onClick={handleEventCorreto}>Função feita na lógica</button>
        </div>
        <br />
        <div>
          <h3>Função inline com código pequeno</h3>
          <p>Este tipo de função é aceitavel em determinados casos.</p>
          <button onClick={() => alert("Sou um código pequeno.")}>
            Função inline pequena
          </button>
        </div>
        <br />
        <div>
          <h3>Função de bloco</h3>
          <p>
            Este tipo de função é o menos indicado para as aplicações feitas em
            react. <br />
            Acaba misturando código com o HTML tornando muito difícil para a
            compreensão.
          </p>
          <button
            onClick={() => {
              alert("Sou uma função de bloco. :(");
            }}
          >
            Função de bloco
          </button>
        </div>
        <br />
        <div>{renderSomething("admin")}</div>
      </div>
    </>
  );
};

export default Events;
