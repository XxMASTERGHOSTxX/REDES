function carregarTexto(caminho, id) {
  fetch(caminho)
    .then(response => response.text())
    .then(text => {
      // Remove quebras de linha e múltiplos espaços
      const textoFormatado = text
        .replace(/\r?\n|\r/g, ' ')     // remove quebras de linha
        .replace(/\s{2,}/g, ' ')       // reduz múltiplos espaços
        .trim();                       // remove espaços no início e fim

      document.getElementById(id).innerHTML = textoFormatado;
    })
    .catch(error => {
      console.error("Erro ao carregar o arquivo:", error);
      document.getElementById(id).textContent = "Não foi possível carregar o arquivo.";
    });
}

// Chamadas
carregarTexto('./text/Arquiteturas e tipos de redes.txt', 'conteudo-txt');
carregarTexto('./text/Redes ponto a ponto.txt', 'conteudo-txt2');
carregarTexto('./text/Tipos de Redes.txt', 'conteudo-txt3');
carregarTexto('./text/Topologias de rede.txt', 'conteudo-txt4');
carregarTexto('./text/Redes cliente_servidor.txt', 'conteudo-txt5');

//botao
const dropdown = document.querySelector('.dropdown');
const menu = dropdown.querySelector('.dropdown-content');

let timeout;

// Mostrar menu ao entrar
dropdown.addEventListener('mouseenter', () => {
  clearTimeout(timeout); // cancela qualquer timeout pendente
  menu.style.display = 'block';
  setTimeout(() => menu.style.opacity = '1', 10); // animação suave
});

// Esconder menu com delay ao sair
dropdown.addEventListener('mouseleave', () => {
  timeout = setTimeout(() => {
    menu.style.opacity = '0';
    setTimeout(() => menu.style.display = 'none', 300); // esperar animação
  }, 100); // 0.5s de delay
});