// menu ativo

const links = document.querySelectorAll('.header-menu a');
const ATIVO = 'ativo';

function ativarLink(link){
  const url = location.href;
  const href = link.href;
   
  if(url.includes(href)){
    link.classList.add(ATIVO);
  }
}

links.forEach(ativarLink);


// parametros url 

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
  const element = document.getElementById(parametro);
  if(element){
  element.checked = true;
  }
}

parametros.forEach(ativarProduto);

// perguntas frequentes 

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const dd = document.getElementById(controls);

  dd.classList.toggle(ATIVO);
  const ativa = dd.classList.contains(ATIVO);

  pergunta.setAttribute('aria-expanded', ativa);

}

function eventosPerguntas(items){
  items.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// galeria imagens 

const galeria = document.querySelectorAll(".nimbus-imgs img");
const galeriaContainer = document.querySelector('.nimbus-imgs');
const tamanhoTela = window.innerWidth;


function trocaImg(event){
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 475px)").matches;
    if(media) {
    galeriaContainer.prepend(img);
  } 
}

function eventosImg (items){
  items.addEventListener('click', trocaImg);
}

galeria.forEach(eventosImg);