// smooth scroll helper
function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// open WhatsApp quick link (example number)
function openWhats(){
  const number = '+48600123456';
  const text = encodeURIComponent('Hi, I want to discuss a website/booking project.');
  window.open('https://wa.me/' + number.replace(/\D/g,'') + '?text=' + text, '_blank');
}

// simple form handler: open mailto with prefilled content (works without backend)
function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const business = document.getElementById('business').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('New request from website: ' + (business || name));
  const body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Business: ' + business + '\n\n' +
    message
  );

  // mailto to your company email
  const mail = 'kitsune.dev.contact@gmail.com';
  window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
}

// add small reveal animation on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el,i)=>{
    el.style.animationDelay = (i*0.08) + 's';
    el.classList.add('visible');
  });
});
