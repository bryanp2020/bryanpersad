
// Mobile nav
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const shown = navMenu.style.display === 'flex' || navMenu.style.display === '';
    if (window.innerWidth < 600) {
      navMenu.style.display = shown ? 'none' : 'flex';
    }
  });
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');
if (storedTheme) document.documentElement.dataset.theme = storedTheme;
else document.documentElement.dataset.theme = prefersDark ? 'dark' : 'dark'; // default dark

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme;
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.body.style.background = next === 'dark' ? 'linear-gradient(180deg,#07101f 0%, #0b1220 100%)' : '#fcfcfd';
    localStorage.setItem('theme', next);
  });
}

// Books data (edit here or load from books.json)
const books = [
  {
    title: "Change Your Mind, Change the Game",
    description: "Mindset frameworks to lead teams and ship meaningful work.",
    image: "assets/img/book1.jpg",
    links: [
      { label: "Amazon", url: "#" },
      { label: "Kindle", url: "#" }
    ]
  },
  {
    title: "Email Marketing Mastery",
    description: "From deliverability to flows: build a program that lasts.",
    image: "assets/img/book2.jpg",
    links: [
      { label: "Amazon", url: "#" },
      { label: "Kindle", url: "#" }
    ]
  },
  {
    title: "Build Better Growth Playbook",
    description: "Acquisition meets retention with real dashboards and KPIs.",
    image: "assets/img/book3.jpg",
    links: [
      { label: "Amazon", url: "#" }
    ]
  }
];

function renderBooks(){
  const grid = document.getElementById('booksGrid');
  if(!grid) return;
  grid.innerHTML = books.map(b => `
    <article class="card">
      <img src="${b.image}" alt="${b.title} book cover" />
      <h3 style="margin:.75rem 0 0">${b.title}</h3>
      <p style="color:var(--muted);margin:.35rem 0 1rem">${b.description}</p>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap">
        ${b.links.map(l => `<a class="btn ghost" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
      </div>
    </article>
  `).join('');
}
renderBooks();

// Contact form (Formspree success UX)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    // Let the normal POST happen, but also show quick feedback
    setTimeout(() => {
      const note = document.createElement('p');
      note.textContent = "Thanks! If this was a test, replace the Formspree URL in index.html.";
      note.style.color = "#93c5fd";
      form.appendChild(note);
    }, 200);
  });
}
