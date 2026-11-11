// The page and all navigation remain usable without JavaScript.
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
let statusTimeout;

if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    clearTimeout(statusTimeout);
    try {
      const emailLink = document.querySelector('.contact-email');
      await navigator.clipboard.writeText(emailLink.getAttribute('href').replace('mailto:', ''));
      copyStatus.textContent = 'Email copied to clipboard.';
    } catch {
      copyStatus.textContent = 'Please select the email address to copy it.';
    }
    statusTimeout = setTimeout(() => { copyStatus.textContent = ''; }, 4000);
  });
}

const navLinks = [...document.querySelectorAll('.main-nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

function updateActiveSection() {
  const offset = 150;
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) activeSection = section;
  }
  // A short final section may never reach the top of a tall viewport.
  if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeSection = sections[sections.length - 1];
  }
  for (const link of navLinks) {
    if (activeSection && link.getAttribute('href') === `#${activeSection.id}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

let scrollQueued = false;
window.addEventListener('scroll', () => {
  if (scrollQueued) return;
  scrollQueued = true;
  window.requestAnimationFrame(() => {
    updateActiveSection();
    scrollQueued = false;
  });
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
window.addEventListener('load', updateActiveSection);
updateActiveSection();
