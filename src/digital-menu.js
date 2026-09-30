import './fonts.css';
import './digital-menu.css';
import { categories, extras } from './digital-menu-data.js';

const base=import.meta.env.BASE_URL;
let lang=new URLSearchParams(location.search).get('lang')==='en'?1:0;
let query='';
const copy=[
  {menu:'La carte',intro:'Le goût du feu, le plaisir de la table.',welcome:'Bienvenue à votre table',search:'Rechercher un plat ou un ingrédient',all:'Toute la carte',extras:'Accompagnements & sauces',pdf:'Voir la carte PDF',origin:'Origine des viandes : UE',empty:'Aucun plat ne correspond à votre recherche.',reset:'Effacer la recherche',found:'résultat(s)',nav:'Catégories de la carte',top:'Retour en haut',note:'Pour toute question sur un plat ou ses allergènes, notre équipe est à votre disposition.',tag:'Vieux-Port · Marseille',language:'Langue de la carte'},
  {menu:'The menu',intro:'The taste of fire. The pleasure of dining.',welcome:'Welcome to your table',search:'Search for a dish or ingredient',all:'Full menu',extras:'Sides & sauces',pdf:'View the PDF menu',origin:'Origin of meats: EU',empty:'No dishes match your search.',reset:'Clear search',found:'result(s)',nav:'Menu categories',top:'Back to top',note:'For any questions about a dish or its allergens, please ask our team.',tag:'Vieux-Port · Marseille',language:'Menu language'},
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/œ/g,'oe');
const price=n=>new Intl.NumberFormat(lang?'en-IE':'fr-FR',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
const searchIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';

function render(){
  const t=copy[lang];document.documentElement.lang=lang?'en':'fr';document.title=`Beef House — ${t.menu} | Marseille`;
  document.querySelector('#app').innerHTML=`<a class="skip" href="#carte">${t.menu}</a>
  <header class="masthead"><a class="brand" href="#top" aria-label="Beef House"><span>BEEF HOUSE</span><small>VIEUX-PORT · STEAK HOUSE PREMIUM</small></a><div class="language" role="group" aria-label="${t.language}"><button data-lang="0" lang="fr" aria-label="Français" aria-pressed="${lang===0}">FR</button><span>/</span><button data-lang="1" lang="en" aria-label="English" aria-pressed="${lang===1}">EN</button></div></header>
  <main id="top"><section class="intro"><div class="intro-copy"><p class="eyebrow">${t.welcome}</p><h1>${t.menu}<span>.</span></h1><p class="intro-line">${t.intro}</p><p class="location">33 Quai des Belges <span>·</span> Marseille</p></div><figure><img src="${base}images/photos/31-dsc06330.webp" alt="${lang?'Beef grilled over a wood fire':'Viande grillée au feu de bois'}" fetchpriority="high"><figcaption>${lang?'The art of the flame':'L’art de la braise'}</figcaption></figure></section>
  <div class="menu-layout"><aside class="navigation"><p class="eyebrow nav-title">${t.menu}</p><nav aria-label="${t.nav}">${categories.map((c,i)=>`<a href="#${c.id}"><span class="nav-number">0${i+1}</span>${c.short[lang]}</a>`).join('')}<a href="#accompagnements"><span class="nav-number">08</span>${lang?'Sides & sauces':'Accompagnements'}</a></nav><a class="pdf-link" href="${base}menu-beef-house.pdf" target="_blank" rel="noopener">${t.pdf} <span aria-hidden="true">↗</span></a></aside>
  <div class="menu-content" id="carte"><div class="search-row"><label class="search">${searchIcon}<input type="search" id="menu-search" placeholder="${t.search}" aria-label="${t.search}" value="${esc(query)}"><button class="clear-search" aria-label="${t.reset}" ${query?'':'hidden'}>×</button></label><p class="search-status" role="status" aria-live="polite"></p></div><div id="menu-sections"></div><p class="allergen-note">${t.note}</p></div></div></main>
  <footer><div><span class="footer-brand">BEEF HOUSE</span><p>${t.tag}</p></div><p>${t.origin}</p><a href="${base}menu-beef-house.pdf" target="_blank" rel="noopener">${t.pdf} ↗</a><a href="#top">${t.top} ↑</a></footer>`;
  renderSections();
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{
    lang=Number(button.dataset.lang);const url=new URL(location.href);url.searchParams.set('lang',lang?'en':'fr');history.replaceState(null,'',url);render();
  }));
  document.querySelector('#menu-search').addEventListener('input',e=>{query=e.target.value;renderSections();});
  document.querySelector('.clear-search').addEventListener('click',resetSearch);
  document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(query)resetSearch();document.querySelectorAll('nav a').forEach(n=>n.removeAttribute('aria-current'));a.setAttribute('aria-current','location');}));
}
function resetSearch(){query='';document.querySelector('#menu-search').value='';renderSections();}
function renderSections(){
  const t=copy[lang];const term=norm(query.trim());let count=0;
  const html=categories.map((c,index)=>{
    const items=c.items.filter(item=>!term||norm([item[lang],item[3+lang],c.name[lang]].join(' ')).includes(term));count+=items.length;
    if(!items.length)return '';
    return `<section class="menu-section" id="${c.id}" aria-labelledby="title-${c.id}"><header class="category-heading"><span>0${index+1}</span><h2 id="title-${c.id}">${c.name[lang]}</h2><i aria-hidden="true"></i></header><div class="dish-list">${items.map(item=>`<article class="dish"><div><h3>${esc(item[lang])}</h3>${item[3+lang]?`<p>${esc(item[3+lang])}</p>`:''}</div><span class="price">${price(item[2])}</span></article>`).join('')}</div></section>`;
  }).join('');
  const extraGroups=extras.map(group=>({...group,items:group.items.filter(item=>!term||norm(item[lang]+' '+group.name[lang]).includes(term))})).filter(g=>g.items.length);
  count+=extraGroups.reduce((sum,g)=>sum+g.items.length,0);
  document.querySelector('#menu-sections').innerHTML=html+(extraGroups.length?`<section class="menu-section" id="accompagnements"><header class="category-heading"><span>08</span><h2>${t.extras}</h2><i aria-hidden="true"></i></header><div class="extras-grid">${extraGroups.map(group=>`<div class="extras-card"><h3>${group.name[lang]}<span>+${price(group.price)}</span></h3><ul>${group.items.map(item=>`<li>${esc(item[lang])}</li>`).join('')}</ul></div>`).join('')}</div></section>`:'')+(!count?`<div class="empty"><p>${t.empty}</p><button id="reset-results">${t.reset}</button></div>`:'');
  document.querySelector('#reset-results')?.addEventListener('click',resetSearch);
  document.querySelector('.search-status').textContent=term?`${count} ${t.found}`:'';
  document.querySelector('.clear-search').hidden=!query;
}
render();
