let produto

let carrinhoDeCompras = document.getElementById('lista-produtos');
carrinhoDeCompras.textContent = ''; // Esvaziar o carrinho de compras de inicio

document.getElementById('valor-total').textContent = 'R$0'; // Zerar o valor total de inicio
let totall = document.getElementById('valor-total');

function adicionar() {
  let quantidadeResgatar = document.getElementById('quantidade');
  let quantidade = document.getElementById('quantidade').value; // Resgatar o valor inserido em Qntd. e armazenar em uma variável
  produto = document.getElementById('produto').value; // Resgatar o produto inserido e armazenar em uma variável

  // Verificar se quantidade é igual a null e em caso verdadeiro exibir um alerta pedindo para inserir um valor
  if (quantidade == '') {
    alert('Informe uma quantidade válida!');
    return;
  }
  //Verificar se quantidade é igual a 0 e em caso verdadeiro exibir um alerta pedindo para inserir um valor maior que zero
  else if (quantidade == 0) {
    alert('Adicione pelo menos 1 item!');
    return;
  }

  let produtoComQuantidade = quantidade + 'x' + '  ' + produto; // Fica, por exemplo: 2x Celular


   if (produto == 'Fone de ouvido - R$100') {
    precoUnitario = 100;
    carrinhoDeCompras.innerHTML += "<span>" + produtoComQuantidade + "</span>"; // Mostrar o produto adicionado no carrinho
    carrinhoDeCompras.classList.add('texto-medio-azul'); // Adicionar efeito de cor azul ao texto do produto
   }
   else if (produto == 'Celular - R$1400') {
    precoUnitario = 1400;
    carrinhoDeCompras.innerHTML += "<span>" + produtoComQuantidade + "</span>"; // Mostrar o produto adicionado no carrinho
    carrinhoDeCompras.classList.add('texto-medio-azul'); // Adicionar efeito de cor azul ao texto do produto
   }
   else {
    precoUnitario = 5000;
    carrinhoDeCompras.innerHTML += "<span>" + quantidade + 'x' + '  ' + 'Oculos VR' + "</span>"; // Mostrar o produto adicionado no carrinho
    carrinhoDeCompras.classList.add('texto-medio-azul'); // Adicionar efeito de cor azul ao texto do produto
   }

   // Extrair o valor atual do total e converter para número
  let valorAtualTotal = parseFloat(totall.textContent.replace('R$', ''));

  // Calcular o valor total do produto adicionado
  let valorProdutoAdicionado = quantidade * precoUnitario;

  // Somar o valor total do produto adicionado ao valor atual do total
  let novoTotal = valorAtualTotal + valorProdutoAdicionado;

  // Atualizar o texto do total
  totall.textContent = 'R$' + novoTotal.toFixed(2); //toFixed(2) para exibir 2 casas decimais

  // Resetar o valor do campo de entrada da quantidade para zero
  quantidadeResgatar.value = 0;
}

function limpar() {
  carrinhoDeCompras.textContent = '';
  totall.textContent = 'R$0';
}