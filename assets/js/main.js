// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Verifica se o item já existe para não duplicar VIPs, por exemplo
    const itemExistente = carrinho.find(item => item.nome === nome);
    
    if (!itemExistente) {
        carrinho.push({ nome, preco, imagem });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert(`${nome} foi adicionado ao seu carrinho!`);
        atualizarContadorCarrinho();
    } else {
        alert("Este item já está no seu carrinho!");
    }
}

// Função para atualizar o número vermelho no ícone do carrinho
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contadores = document.querySelectorAll('.cart-count'); // Adicione esta classe ao span do contador
    contadores.forEach(span => {
        span.innerText = carrinho.length;
    });
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);