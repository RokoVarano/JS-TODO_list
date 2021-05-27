
export default function navbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('main');

  const link = document.createElement('a');
  link.href = '';
  navbar.appendChild(link);

  const h1 = document.createElement('h1');
  h1.textContent = 'Tasker!';
  link.appendChild(h1);

  return navbar;
}

