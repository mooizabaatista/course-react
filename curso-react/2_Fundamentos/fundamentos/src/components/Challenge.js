const Challenge = () => {
  const handleCalcular = () => {
    var valA = parseInt(document.getElementById("valA").value);
    var valB = parseInt(document.getElementById("valB").value);
    var result = document.getElementById("resultado");
    result.innerHTML = `${valA} + ${valB} = ${valA + valB}`;
  };

  return (
    <>
      <div>
        <h3>Challenge</h3>
      </div>
      <div>
        <label htmlFor="valA">Digite o valor A</label>
        <br />
        <input
          type="number"
          name="valA"
          placeholder="Digite aqui o valor A..."
          id="valA"
        />
        <br />
        <br />
        <label htmlFor="valA">Digite o valor B</label>
        <br />
        <input
          type="number"
          name="valB"
          placeholder="Digite aqui o valor B..."
          id="valB"
        />
        <br />
        <br />
        <button onClick={handleCalcular}>Calcular</button>
        <br />
        <br />
        <h3 id="resultado"> </h3>
        <br />
        <br />
      </div>
    </>
  );
};

export default Challenge;
