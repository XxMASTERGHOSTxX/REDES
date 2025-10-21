//texto
fetch('text/Redes ponto a ponto.txt')
  .then(response => response.text())
  .then(text => {
    document.getElementById('conteudo-txt').innerHTML = text; // aqui interpretamos HTML
  })
  .catch(error => {
    console.error("Erro ao carregar o arquivo:", error);
    document.getElementById('conteudo-txt').textContent = "Não foi possível carregar o arquivo.";
  });