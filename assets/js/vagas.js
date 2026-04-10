        // Mude para 'true' para abrir as vagas ou 'false' para fechar
        const vagasAbertas = false; 

        const container = document.getElementById('conteudo-vagas');

        if (vagasAbertas) {
            container.innerHTML = `
                <h1 class="font-fantasy text-3xl text-yellow-500 mb-2 uppercase">Recrutamento Aberto</h1>
                <p class="text-gray-400 text-sm mb-8">Buscamos novos heróis para a nossa linhagem real. Preencha com sabedoria.</p>
                
                <form id="form-recrutamento" class="space-y-4" onsubmit="enviarFormulario(event)">
                    <div>
                        <label class="block text-xs uppercase tracking-widest text-yellow-600 mb-1">Nome / Nick</label>
                        <input type="text" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-yellow-500 outline-none transition">
                    </div>
                    <div>
                        <label class="block text-xs uppercase tracking-widest text-yellow-600 mb-1">Discord (Ex: user#0000)</label>
                        <input type="text" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-yellow-500 outline-none transition">
                    </div>
                    <div>
                        <label class="block text-xs uppercase tracking-widest text-yellow-600 mb-1">Por que quer entrar na Staff?</label>
                        <textarea rows="4" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-yellow-500 outline-none transition"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl transition uppercase tracking-widest">
                        Enviar Candidatura
                    </button>
                </form>

                <div id="msg-sucesso" class="hidden text-center py-10 animate-fade">

                <div class="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                    <i class="fas fa-check text-4xl text-green-500"></i>
                </div>
                <h2 class="font-fantasy text-2xl text-green-500 mb-2 uppercase">Missão Cumprida!</h2>
                <p class="text-gray-400">Sua candidatura foi enviada aos soberanos. <br> Fique atento ao seu Discord, entraremos em contato em breve.</p>
                <button onclick="window.location.href='/index.html'" class="mt-8 text-yellow-500 border border-yellow-500/30 px-6 py-2 rounded-lg hover:bg-yellow-500/10 transition">
                    Voltar ao Início
                </button>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="text-center py-12">
                    <div class="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-slate-700">
                        <span class="text-4xl">🔒</span>
                    </div>
                    <h1 class="font-fantasy text-3xl text-gray-500 mb-4 uppercase">Portões Fechados</h1>
                    <p class="text-gray-400 leading-relaxed">
                        No momento, a nossa equipe está completa. <br> 
                        Fique atento ao nosso <span class="text-indigo-400">Discord</span> para futuros anúncios de recrutamento.
                    </p>
                </div>
            `;
        }

        function enviarFormulario(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Aqui você pegaria os dados se fosse enviar para um e-mail ou banco de dados
    const btn = event.target.querySelector('button');
    btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> ENVIANDO...";
    btn.disabled = true;

    // Simula um tempo de carregamento de 1.5 segundos para dar realismo
    setTimeout(() => {
        const formulario = document.getElementById('form-recrutamento');
        const sucesso = document.getElementById('msg-sucesso');
        const tituloVagas = document.querySelector('h1'); // Seleciona o título "Recrutamento Aberto"
        const descVagas = document.querySelector('p');   // Seleciona a descrição

        // Esconde o formulário e os textos de instrução
        formulario.classList.add('hidden');
        if(tituloVagas) tituloVagas.classList.add('hidden');
        if(descVagas) descVagas.classList.add('hidden');

        // Mostra a mensagem de sucesso
        sucesso.classList.remove('hidden');
    }, 1500);
}