let totalGeral = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidadeResgatar = document.getElementById('quantidade');
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let total = document.getElementById('valor-total');

    if (quantidade == '') {
        alert('Informe uma quantidade válida!');
        return;
    }
    else if (quantidade == 0) {
        alert('Adicione pelo menos 1 item!');
        return;
    }
 
    let produtoValorUnitario = produto.split('R$')[1];
    let nomeProduto = produto.split('-')[0];
    let preçoProduto = quantidade * produtoValorUnitario;
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preçoProduto}</span>
  </section>`;
  totalGeral = totalGeral + preçoProduto;
  total.innerHTML = 'R$' + totalGeral;

  quantidadeResgatar.value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}