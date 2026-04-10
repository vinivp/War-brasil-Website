function copyIP(event) {
  const ip = "hytalewar.com.br:9000";
  navigator.clipboard.writeText(ip).then(() => {
    const msg = document.getElementById("copy-msg");
    msg.style.opacity = "1";
    setTimeout(() => {
      msg.style.opacity = "0";
    }, 3000);

    const targetBtn = event.currentTarget;
    const originalText = targetBtn.innerHTML;
    targetBtn.innerHTML = "<i class='fas fa-check'></i> COPIADO!";
    setTimeout(() => {
      targetBtn.innerHTML = originalText;
    }, 2000);
  });
}
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("nav")
      .addClass("py-2 bg-slate-950 border-yellow-500/40 shadow-2xl")
      .removeClass("py-3 bg-slate-900/80");
  } else {
    $("nav")
      .removeClass("py-2 bg-slate-950 border-yellow-500/40 shadow-2xl")
      .addClass("py-3 bg-slate-900/80");
  }
});

// Rolagem Suave para os links da navegação
$('nav a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const id = $(this).attr("href");
  const targetOffset = $(id).offset().top;

  // O '- 80' serve para a rolagem não cobrir o título da seção com o menu fixo
  $("html, body").animate(
    {
      scrollTop: targetOffset - 80,
    },
    800,
  ); // 800ms é a velocidade da animação
});

// Atualize suas funções JS para usar 'flex' em vez de 'block'
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex"; // Alinhamento centralizado
    document.body.style.overflow = "hidden"; // Trava o scroll do fundo
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Fecha ao clicar fora (no fundo escuro)
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
};
