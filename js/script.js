const t = document.querySelector('.menu-toggle'), n = document.getElementById('mainnav');
t.addEventListener('click', () => {
  const open = n.classList.toggle('open');
  t.setAttribute('aria-expanded', open);
  t.textContent = open ? '✕' : '☰';
});
const root = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches;

function paintToggle() {
  const dark = isDark();
  themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeBtn.querySelector('use').setAttribute('href', dark ? '#i-sun' : '#i-moon');
}

themeBtn.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  paintToggle();
});
systemDark.addEventListener('change', paintToggle);
paintToggle();

var checkIn = null;
var checkOut = null;

var picker = new Litepicker({
  element: document.querySelector('#datePicker'),
  numberOfMonths: 2,
  numberOfColumns: 2,
  singleMode: false,
  minDays: 1,
  minDate: new Date(),
  format: 'DD MMM YYYY',
  onSelect: function(date1, date2) {
    checkIn  = date1;
    checkOut = date2;
  }
});