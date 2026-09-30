import './fonts.css';
import './luxury.css';
import pages from './pages.json';
import newPhotos from './new-photos.json';
import menuMarkup from './menu.html?raw';

const BOOK = 'https://reservation.dish.co/widget/hydra-f8b844f5-164e-4183-b5c9-383d0e30f936';
const PDF = '/images/carte-bh---fr-bsk0nuruz1T4k2oi.pdf';
const routes = [
  ['Notre Histoire','/steakhouse-marseille-histoire'],
  ['Horaires & Infos','/horaires-restaurant-vieux-port-marseille'],
  ['Vue Mer & Terrasse','/restaurant-vue-mer-marseille'],
  ['Carte','/carte-restaurant-viande-marseille'],
  ['Nos Spécialités','/steakhouse-vieux-port-marseille-specialites'],
  ['Grillades au Feu de Bois','/grillade-au-feu-de-bois-marseille'],
  ['Halal','/restaurant-halal-marseille'],
  ['Le Brunch','/brunch-marseille-vieux-port'],
  ['Contact','/reservation-steakhouse-marseille'],
];
const path = __SINGLE_PAGE__ ? '/' : location.pathname.replace(/\/$/,'') || '/';
const current = pages[path];
const home = pages['/'];
const esc = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const localImage = url => {
  const source = url.startsWith('/') ? url : '/images/'+new URL(url).pathname.split('/').pop();
  const base = import.meta.env.BASE_URL;
  return base !== '/' && !source.startsWith(base) ? base+source.slice(1) : source;
};
const photo = (url,alt,cls='') => `<img class="${cls}" src="${localImage(url)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
const icon = (name) => {
  const shapes = {clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',phone:'<path d="M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 2-3 2-5 1C9 18 5 14 3 7 2 4 3 3 5 3Z"/>',star:'<path d="m12 3 3 6 6 1-4.5 4.5 1 6.5-5.5-3-5.5 3 1-6.5L3 10l6-1Z"/>',fire:'<path d="M12 2c1 5 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-7 0 4 3 4 3 0Z"/>',check:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',facebook:'<path d="M14 22V13h3l1-4h-4V7c0-1 0-2 2-2h2V2h-3c-4 0-5 2-5 5v2H7v4h3v9"/>',tiktok:'<path d="M14 3v12a5 5 0 1 1-5-5v4a1 1 0 1 0 1 1V3h4c0 4 3 5 6 5v4c-3 0-5-1-6-3"/>'};
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name]||shapes.star}</svg>`;
};
const socials = () => `<div class="socials"><a href="https://www.facebook.com/p/BEEF-HOUSE-VIEUX-PORT-61590243628326/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">${icon('facebook')}</a><a href="https://www.instagram.com/beefhouse.marseille/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">${icon('instagram')}</a><a href="https://www.tiktok.com/@beefhousemarseille" aria-label="TikTok" target="_blank" rel="noopener noreferrer">${icon('tiktok')}</a></div>`;
const link = ([label,url]) => `<a href="${url}" ${path===url?'aria-current="page"':''}>${esc(label)}</a>`;
const buttons = (withMenu=false) => `<div class="actions"><a class="button" href="${BOOK}" target="_blank" rel="noopener noreferrer">Réserver Ma Table</a>${withMenu?`<a class="button outline" href="${PDF}" target="_blank" rel="noopener">Notre Menu</a>`:`<a class="button outline" href="tel:+33688436944">${icon('phone')} 06 88 43 69 44</a>`}</div>`;
const heading = (eyebrow,title) => `<div class="section-heading"><p class="eyebrow">${esc(eyebrow)}</p><h2>${esc(title)}</h2></div>`;
function header(){return `<a class="skip-link" href="#main">Aller au contenu</a><header class="header"><div class="masthead"><a class="masthead-location" href="${routes[2][1]}">${icon('pin')} <span>Marseille, Vieux-Port</span></a><a class="brand" href="/" aria-label="Beef House — Accueil"><span class="wordmark">BEEF HOUSE</span><span class="brand-caption">LA MAISON DU FEU</span></a><a class="masthead-book" href="${BOOK}" target="_blank" rel="noopener noreferrer">Réserver une table</a><button class="mobile-toggle" aria-expanded="false" aria-controls="navigation" aria-label="Ouvrir le menu"><span></span><span></span></button></div><nav id="navigation" aria-label="Navigation principale"><a href="/" ${path==='/'?'aria-current="page"':''}>Accueil</a><div class="dropdown"><button aria-expanded="false" aria-controls="restaurant-links">Le Restaurant <span>⌄</span></button><div class="dropdown-panel" id="restaurant-links">${routes.slice(0,3).map(link).join('')}</div></div><div class="dropdown"><button aria-expanded="false" aria-controls="cuisine-links">Notre Cuisine <span>⌄</span></button><div class="dropdown-panel" id="cuisine-links">${routes.slice(3,8).map(link).join('')}</div></div><a href="${BOOK}" target="_blank" rel="noopener noreferrer">Réservation</a>${link(routes[8])}<a class="header-call" href="tel:+33688436944">${icon('phone')} 06 88 43 69 44</a></nav></header>`;}
function hero(section){const blocks=section.blocks;const isHome=path==='/';const title=blocks.find(b=>b.tag==='h1')?.text||'Beef House';const paragraphs=blocks.filter(b=>b.tag==='p');return `<section class="hero ${isHome?'home-hero':'inner-hero'}" id="hero"><div class="hero-content"><p class="eyebrow">${isHome?'Une maison. Une passion.':esc(paragraphs[0]?.text||'Steakhouse · Vieux-Port')}</p><h1>${isHome?'L’art du feu.<br>Le goût de<br><em>l’exception.</em>':esc(title)}</h1><p class="hero-description">${isHome?'La noblesse de la viande, la maîtrise de la braise. <br>Une expérience singulière, face au Vieux-Port.':paragraphs.slice(1).map(b=>esc(b.text)).join('<br>')}</p>${isHome?`<div class="actions"><a class="button" href="${BOOK}" target="_blank" rel="noopener noreferrer">Réserver une table</a><a class="text-link" href="${routes[3][1]}">Explorer la carte</a></div>`:buttons()}<p class="hero-location">33 Quai des Belges <span aria-hidden="true">—</span> Marseille</p></div><figure class="hero-visual"><img class="hero-image" src="${localImage(section.images[0]||home[0].images[0])}" alt="${isHome?'Pièce de bœuf saisie au feu de bois':'Beef House — '+esc(paragraphs[0]?.text||'Marseille')}" fetchpriority="high"><figcaption><span>${isHome?'La signature Beef House':esc(paragraphs[0]?.text||'Beef House')}</span><span>${isHome?'Au feu de bois':'Vieux-Port, Marseille'}</span></figcaption></figure></section>`;}
function stats(){return `<section class="stats container" aria-label="Beef House en quelques chiffres">${[['clock','7J/7','Ouvert 7j/7 Marseille'],['fire','100%','Grillée au Feu de Bois'],['star','4,9 ★','Avis Google'],['check','+150','Avis 5 Étoiles']].map(([i,n,l])=>`<div>${icon(i)}<strong>${n}</strong><span>${l}</span></div>`).join('')}</section>`;}
function story(section,index=0){const title=section.blocks.find(b=>/^h/.test(b.tag))?.text;const paragraphs=section.blocks.filter(b=>b.tag==='p');const eyebrow=paragraphs.find(b=>b.text.length<40)?.text||'';return `<section class="story container ${index%2?'reverse':''} ${section.images.length?'':'text-only'}" id="${esc(section.id)}">${section.images.length?photo(section.images[0],title||'Beef House Marseille','story-image'):''}<div class="story-copy">${title?heading(eyebrow,title):''}${paragraphs.filter(b=>b.text!==eyebrow).map(b=>`<p>${esc(b.text)}</p>`).join('')}${path==='/'?`<a class="text-link" href="${routes[0][1]}">Découvrir notre histoire <span aria-hidden="true">→</span></a>`:buttons(true)}</div></section>`;}
const dishes=[['Entrecôte','Une pièce généreuse et persillée, saisie au feu de bois.','photos/24-dsc09593.webp'],['Tomahawk','Une pièce spectaculaire à partager.','photos/22-dsc09589.webp'],['Ribeye','La tendreté et le caractère de la viande grillée.','photos/50-dsc06248.webp']];
function specialties(){return `<section class="section specialties" id="specialites"><div class="container">${heading('La sélection','Les pièces de la maison')}<div class="dish-grid">${dishes.map(([name,desc,img],i)=>`<a class="dish-card" href="${routes[4][1]}"><div class="dish-image"><img src="/images/${img}" alt="${name} Beef House" loading="lazy"><span class="dish-number">0${i+1}</span></div><div class="dish-copy"><h3>${name}</h3><p>${desc}</p><span class="dish-discover">Découvrir</span></div></a>`).join('')}</div></div></section>`;}
function reasons(){return `<section class="section container">${heading('Pourquoi Nous Choisir',"L'exigence dans chaque détail")}<div class="reasons">${[['check','Viande Grillée au Feu de Bois'],['fire','Cuisson Feu de Bois'],['pin','Terrasse Vue Vieux-Port'],['star','Expérience Premium']].map(([i,t])=>`<div>${icon(i)}<h3>${t}</h3></div>`).join('')}</div></section>`;}
const uploadedNames=new Set(newPhotos.map(p=>p.original.toLowerCase().replace(/\.[^.]+$/, '')));
const galleryImages=[...newPhotos,...[...new Set(home.find(s=>s.id==='galerie').images)]
  .filter(url=>!uploadedNames.has(new URL(url).pathname.split('/').pop().split('-')[0].toLowerCase()))
  .map(url=>({src:localImage(url),thumb:localImage(url),alt:'Beef House — cuisine et restaurant'}))];
let visiblePhotos=12;
const galleryItem=(p,i)=>`<button class="gallery-item" data-photo="${i}" aria-label="Agrandir la photo ${i+1} : ${esc(p.alt)}"><img src="${localImage(p.thumb)}" alt="${esc(p.alt)}" ${p.width?`width="${p.width}" height="${p.height}"`:''} loading="lazy" decoding="async"><span aria-hidden="true">＋</span></button>`;
function gallery(){return `<section class="section gallery-section" id="galerie"><div class="container">${heading('Instants de la maison','Une expérience visuelle')}<div class="gallery" id="gallery-grid">${galleryImages.slice(0,visiblePhotos).map(galleryItem).join('')}</div><div class="gallery-more"><p class="gallery-status" role="status">${visiblePhotos} photographies sur ${galleryImages.length}</p><button class="button outline" id="load-photos" aria-controls="gallery-grid">Voir plus de photos <span aria-hidden="true">＋</span></button></div></div></section>`;}
function reservation(section){const title=section?.blocks.find(b=>b.tag==='h2')?.text||'Réservez Votre Table Ce Soir';const desc=section?.blocks.filter(b=>b.tag==='p'&&b.text.length>40).map(b=>esc(b.text)).join('<br>')||'Vivez une expérience inoubliable au Vieux-Port de Marseille. Steakhouse, viandes grillées au feu de bois, vue sur le port. Places limitées, réservation conseillée.';return `<section class="reservation section" id="reservation"><div class="container">${heading('Réservation',title)}<p>${desc}</p>${buttons()}</div></section>`;}
function menu(){return `<section class="section menu-section" id="carte"><div class="container">${heading('Notre Menu','La carte')}${menuMarkup}<a class="button outline pdf-link" href="${PDF}" target="_blank" rel="noopener">Télécharger le Menu PDF <span aria-hidden="true">↓</span></a></div></section>`;}
function reviews(){return `<section class="section reviews" id="avis"><div class="container">${heading('Avis Clients','Ils nous ont fait confiance')}<div class="reviews-grid"><figure><div class="stars" aria-label="5 étoiles">★★★★★</div><blockquote>« La nourriture était l'une des meilleures que nous ayons mangée ici à Marseille, et le service était impeccable. Je le recommande vivement. »</blockquote><figcaption><span class="avatar">D</span><div>Dominika B.<small>Avis Google</small></div></figcaption></figure><figure><div class="stars" aria-label="5 étoiles">★★★★★</div><blockquote>« Le service, la cuisine et l'ambiance étaient incroyables ! Nous étions parmi les premiers clients le jour de l'ouverture. Le personnel est attentionné et chaleureux. »</blockquote><figcaption><span class="avatar">C</span><div>Cyrus Z.<small>Avis Google</small></div></figcaption></figure></div></div></section>`;}
function contact(withForm=false){return `<section class="section contact" id="contact-localisation"><div class="container">${heading('Contact & Localisation','Nous Trouver — Beef House Vieux-Port')}<div class="contact-grid"><div class="contact-info">${[['pin','Adresse','33 Quai des Belges, 13001 Marseille'],['phone','Téléphone','<a href="tel:+33688436944">06 88 43 69 44</a>'],['clock','Horaires','Ouvert 7J/7 — 11h00 à 00h00']].map(([i,t,d])=>`<div class="info-card"><span>${icon(i)}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}${buttons(true)}</div><iframe title="Localisation de Beef House au Vieux-Port de Marseille" src="https://maps.google.com/maps?q=BEEF%20HOUSE%20VIEUX%20PORT&t=m&z=13&ie=UTF8&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>${withForm?`<form class="contact-form"><h2>Nous contacter</h2><div class="form-grid"><label>Prénom<input name="firstName" autocomplete="given-name" required></label><label>Nom<input name="lastName" autocomplete="family-name" required></label><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Téléphone<input name="phone" type="tel" autocomplete="tel" required></label><label class="full">Message<textarea name="message" rows="5" required></textarea></label></div><p class="form-hint">Préparez votre demande, puis ouvrez votre application SMS pour l’envoyer au restaurant.</p><button class="button" type="submit">Préparer mon message</button><div class="form-result" hidden role="status"><p>Votre message est prêt. Vous pourrez le vérifier avant de l’envoyer dans votre application SMS.</p><a class="button outline sms-link">Ouvrir le SMS</a></div></form>`:''}</div></section>`;}
function footer(){return `<footer><div class="container footer-grid"><div><a href="/" aria-label="Beef House — Accueil"><span class="footer-wordmark">BEEF HOUSE</span></a><p class="eyebrow">Steakhouse Premium · Vieux-Port · Marseille</p><p>Steakhouse premium au cœur du Vieux-Port de Marseille.<br>Entrecôte, Tomahawk, Ribeye.<br>Viandes cuites au feu de bois. Ouvert 7j/7.</p>${socials()}</div><div><h3>Navigation</h3><div class="footer-links"><a href="/">Accueil</a>${routes.map(link).join('')}</div></div><div><h3>Contact</h3><p>33 Quai des Belges, 13001 Marseille<br>Face au Vieux-Port · Métro à 2 min</p><p><a href="tel:+33688436944">06 88 43 69 44</a></p><p>Ouvert 7J/7 — 11h00 à 00h00<br>Déjeuner & Dîner</p></div></div><p class="copyright">© ${new Date().getFullYear()} Beef House Vieux-Port Marseille · Tous droits réservés</p></footer>`;}
function homepage(){return hero(home[0])+stats()+story(home.find(s=>s.id==='histoire'))+specialties()+reasons()+gallery()+`<section class="quote-section"><blockquote>« Notre mission : proposer la meilleure expérience steakhouse de Marseille, face au Vieux-Port, avec des viandes grillées au feu de bois. »<cite>— L’équipe Beef House</cite></blockquote></section>`+reservation()+menu()+reviews()+contact();}
function subpage(){let result=hero(current[0]);let count=0;for(const section of current.slice(1)){
  if(section.id==='footer'||section.id==='reservation'||section.id==='carte') continue;
  if(section.blocks.some(b=>b.tag==='p'&&b.text.length>40)) result+=story(section,count++);
 }if(path===routes[3][1])result+=menu();
 if(path===routes[4][1])result+=specialties();
 if([routes[1][1],routes[8][1]].includes(path))result+=contact(true);
 else if([routes[0][1],routes[2][1]].includes(path))result+=contact();
 result+=reservation(current.find(s=>s.id==='reservation'));return result;}
document.querySelector('#app').innerHTML=header()+`<main id="main">${current?(path==='/'?homepage():subpage()):`<section class="not-found container"><p class="eyebrow">404</p><h1>Cette page n’existe pas.</h1><a class="button" href="/">Retour à l’accueil</a></section>`}</main>`+footer()+`<dialog class="lightbox" aria-label="Galerie Beef House"><button class="lightbox-close" aria-label="Fermer la photo">×</button><button class="lightbox-prev" aria-label="Photo précédente">‹</button><img alt=""><button class="lightbox-next" aria-label="Photo suivante">›</button><p class="lightbox-count" aria-live="polite"></p></dialog>`;
if (__SINGLE_PAGE__) {
  const sectionIds = ['notre-histoire','horaires','terrasse','carte','nos-pieces','feu-de-bois','halal','brunch','contact-localisation'];
  const targets = Object.fromEntries(routes.map(([,url],i)=>[url,'#'+sectionIds[i]]));
  const details = routes.filter((_,i)=>![3,8].includes(i)).map(([label,url])=>{
    const index=routes.findIndex(r=>r[1]===url);
    const sections=pages[url].filter(s=>!['hero','footer','reservation','carte'].includes(s.id));
    return `<details class="house-detail" id="${sectionIds[index]}"><summary>${esc(label)}<span aria-hidden="true">＋</span></summary><div class="house-detail-body">${sections.map(s=>`${s.blocks.map(b=>/^h/.test(b.tag)?`<h3>${esc(b.text)}</h3>`:`<p>${esc(b.text)}</p>`).join('')}`).join('')}</div></details>`;
  }).join('');
  document.querySelector('#galerie').insertAdjacentHTML('beforebegin',`<section class="section container house-details" aria-label="Découvrir la maison">${heading('La maison','Le goût du détail')}${details}</section>`);
  document.querySelectorAll('a[href]').forEach(a=>{
    const href=a.getAttribute('href');
    if(href==='/') {a.setAttribute('href','#hero');a.removeAttribute('aria-current');}
    else if(targets[href])a.setAttribute('href',targets[href]);
    else if(href.startsWith('/images/'))a.setAttribute('href',localImage(href));
  });
  document.querySelectorAll('img[src^="/images/"]').forEach(img=>img.setAttribute('src',localImage(img.getAttribute('src'))));
  const revealSection=()=>{const target=document.getElementById(location.hash.slice(1));if(target?.matches('details')){target.open=true;target.scrollIntoView({block:'start'});}};
  window.addEventListener('hashchange',revealSection);
  document.addEventListener('click',e=>{
    const anchor=e.target.closest('a[href^="#"]');
    if(!anchor)return;
    const target=document.getElementById(anchor.hash.slice(1));if(target?.matches('details'))target.open=true;
    document.querySelector('#navigation').classList.remove('is-open');
    const toggle=document.querySelector('.mobile-toggle');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Ouvrir le menu');
  });
  revealSection();
}
if(current){document.title=(current[0].blocks.find(b=>b.tag==='h1')?.text||'Beef House')+' | Beef House Marseille';}

const nav=document.querySelector('#navigation');const mobileToggle=document.querySelector('.mobile-toggle');
mobileToggle.addEventListener('click',()=>{const open=mobileToggle.getAttribute('aria-expanded')!=='true';mobileToggle.setAttribute('aria-expanded',String(open));mobileToggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');nav.classList.toggle('is-open',open);});
const dropdowns=[...document.querySelectorAll('.dropdown')];
function closeDropdowns(){dropdowns.forEach(d=>{d.classList.remove('is-open');d.querySelector('button').setAttribute('aria-expanded','false');});}
dropdowns.forEach(d=>{d.querySelector('button').addEventListener('click',()=>{const open=!d.classList.contains('is-open');closeDropdowns();d.classList.toggle('is-open',open);d.querySelector('button').setAttribute('aria-expanded',String(open));});});
document.addEventListener('click',e=>{if(!e.target.closest('.dropdown'))closeDropdowns();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDropdowns();if(nav.classList.contains('is-open')){nav.classList.remove('is-open');mobileToggle.setAttribute('aria-expanded','false');mobileToggle.focus();}}});

const tabs=[...document.querySelectorAll('[data-menu]')];
if(tabs.length){document.querySelector('.bh-tabs').setAttribute('role','tablist');document.querySelector('.bh-tabs').setAttribute('aria-label','Catégories de la carte');
 tabs.forEach((tab,i)=>{const panel=document.getElementById(tab.dataset.menu);tab.id='tab-'+tab.dataset.menu;tab.setAttribute('role','tab');tab.setAttribute('aria-controls',panel.id);panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);tab.setAttribute('aria-selected',String(i===0));tab.tabIndex=i===0?0:-1;
 tab.addEventListener('click',()=>{tabs.forEach(t=>{const active=t===tab;t.classList.toggle('active',active);t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.dataset.menu).classList.toggle('active',active);});});
 tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();tabs[n].click();tabs[n].focus();}});
 });}

const lightbox=document.querySelector('.lightbox');let photoIndex=0;let photoTrigger;
function showPhoto(i){photoIndex=(i+galleryImages.length)%galleryImages.length;lightbox.querySelector('img').src=localImage(galleryImages[photoIndex].src);lightbox.querySelector('img').alt=galleryImages[photoIndex].alt;lightbox.querySelector('.lightbox-count').textContent=`${photoIndex+1} / ${galleryImages.length}`;}
document.querySelector('.gallery')?.addEventListener('click',e=>{const b=e.target.closest('[data-photo]');if(!b)return;photoTrigger=b;showPhoto(Number(b.dataset.photo));lightbox.showModal();document.body.classList.add('modal-open');});
document.querySelector('#load-photos')?.addEventListener('click',e=>{
 const previous=visiblePhotos;visiblePhotos=Math.min(visiblePhotos+12,galleryImages.length);
 document.querySelector('.gallery').insertAdjacentHTML('beforeend',galleryImages.slice(previous,visiblePhotos).map((p,i)=>galleryItem(p,previous+i)).join(''));
 document.querySelector('.gallery-status').textContent=`${visiblePhotos} photographies sur ${galleryImages.length}`;
 document.querySelector(`[data-photo="${previous}"]`).focus({preventScroll:true});
 if(visiblePhotos===galleryImages.length)e.currentTarget.hidden=true;
});
lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>showPhoto(photoIndex-1));
lightbox.querySelector('.lightbox-next').addEventListener('click',()=>showPhoto(photoIndex+1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
lightbox.addEventListener('close',()=>{document.body.classList.remove('modal-open');photoTrigger?.focus();});
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')showPhoto(photoIndex-1);if(e.key==='ArrowRight')showPhoto(photoIndex+1);});
document.querySelector('.contact-form')?.addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;const data=new FormData(form);const message=`Bonjour Beef House,\n${data.get('message')}\n\n${data.get('firstName')} ${data.get('lastName')}\n${data.get('email')}\n${data.get('phone')}`;form.querySelector('.sms-link').href='sms:+33688436944?body='+encodeURIComponent(message);form.querySelector('.form-result').hidden=false;});
