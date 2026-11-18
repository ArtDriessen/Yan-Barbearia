/*
 * CONFIGURAÇÃO DA BARBEARIA
 * Edite aqui os dados do site (telefone, serviços, fotos...).
 * Não é preciso mexer no restante do código.
 */
window.SITE_CONFIG = {
  nome: "Barbearia Yan Moreira",

  // Número com código do país (55) + DDD + número, só dígitos
  whatsapp: "5541997671662",
  telefoneExibicao: "(41) 99767-1662",

  instagram: "https://www.instagram.com/yanmoreira_barbearia/",

  endereco: "PR-412, 5090 - Ipanema, Pontal do Paraná - PR, 83255-000",

  // Serviços exibidos no site e no formulário de agendamento
  servicos: [
    {
      nome: "Corte masculino",
      descricao: "Cortes clássicos e modernos feitos na tesoura e na máquina, do jeito que você pedir.",
      icone: "✂️"
    },
    {
      nome: "Degradê",
      descricao: "Degradê na régua (fade) com transição limpa, do baixo ao alto.",
      icone: "💈"
    },
    {
      nome: "Barba",
      descricao: "Barba alinhada e modelada, com acabamento na navalha.",
      icone: "🧔"
    },
    {
      nome: "Corte + Barba",
      descricao: "O combo completo: cabelo e barba no mesmo horário.",
      icone: "⭐"
    },
    {
      nome: "Desenhos e riscos",
      descricao: "Freestyle, desenhos e riscos personalizados para quem quer um visual único.",
      icone: "🎨"
    },
    {
      nome: "Acabamento premium",
      descricao: "Pezinho, contornos e detalhes finalizados com precisão.",
      icone: "✨"
    }
  ],

  // Fotos da galeria (arquivos dentro de assets/img)
  galeria: [
    { src: "assets/img/corte-barba.jpg",          alt: "Degradê com barba alinhada" },
    { src: "assets/img/corte-degrade.jpg",        alt: "Corte social com degradê baixo" },
    { src: "assets/img/corte-nuca.jpg",           alt: "Risco desenhado na nuca" },
    { src: "assets/img/corte-social.jpg",         alt: "Degradê com cabelo crespo" },
    { src: "assets/img/barbeiro-trabalhando.jpg", alt: "Barbeiro finalizando um corte na máquina" },
    { src: "assets/img/corte-desenho.jpg",        alt: "Degradê com desenho freestyle" }
  ]
};
