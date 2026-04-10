function renderizarCarrinho() {
    // Selecionamos o container que deixamos vazio no HTML
    const container = document.getElementById('cart-items-container');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let html = '';
    let total = 0;

    if (carrinho.length === 0) {
        container.innerHTML = `
            <div class="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-white/10">
                <p class="text-gray-500">Seu carrinho está vazio.</p>
                <a href="/index.html" class="text-yellow-500 text-sm underline mt-4 block">Voltar para a loja</a>
            </div>`;
        document.getElementById('total-valor').innerText = "R$ 0,00";
        document.getElementById('subtotal-valor').innerText = "R$ 0,00";
        return;
    }

    carrinho.forEach((item, index) => {
        total += item.preco;
        html += `
            <div class="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex items-center justify-between group hover:border-yellow-500/30 transition">
                <div class="flex items-center gap-6">
                    <img src="${item.imagem}" class="w-20 h-20 rounded-xl object-cover border border-white/10">
                    <div>
                        <h3 class="font-bold text-white uppercase text-sm">${item.nome}</h3>
                        <span class="text-yellow-500 font-bold text-lg block">R$ ${item.preco.toFixed(2)}</span>
                    </div>
                </div>
                <button onclick="removerDoCarrinho(${index})" class="text-gray-600 hover:text-red-500 p-2 transition">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
    document.getElementById('total-valor').innerText = `R$ ${total.toFixed(2)}`;
    document.getElementById('subtotal-valor').innerText = `R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho(); // Recarrega a lista na tela
    if(typeof atualizarContadorCarrinho === 'function') atualizarContadorCarrinho();
}

// Inicializa a página
document.addEventListener('DOMContentLoaded', renderizarCarrinho);