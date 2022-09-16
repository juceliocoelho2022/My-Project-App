function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <h1>Idade:{idade}</h1>
      <p>Profissao:{profissao}</p>
    </div>
  );
}

export default Pessoa;
