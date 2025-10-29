/* -------------------- DATA -------------------- */
const CHANNELS = {
  IPTV: [
    { name: 'KAPAMILYA', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd', keyId: 'bd17afb5dc9648a39be79ee3634dd4b8', key: '3ecf305d54a7729299b93a3d69c02ea5', type: 'mpd', logo: '' },
    { name: '3RsTV', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.ibb.co/nN0VGRY8/Chat-GPT-Image-Oct-4-2025-05-05-12-AM-1.png' },
    // More IPTV channels...
  ],
  RADIO: [
    { name: '106.3 Yes FM Dagupan', url: 'https://yesfmdagupan.radioca.st/;', type: 'mp3', logo: 'https://i.ibb.co/yBqNhTZN/raryo.jpg' },
    // More radio channels...
  ]
};

/* -------------------- STATE -------------------- */
let hls = null;
let shakaPlayer = null;
let drawerTimer = null;
let currentIPTV = null;
let currentRadio = null;

const MYLIST_KEY = 'threeRS_mylist';

/* -------------------- STORAGE HELPERS -------------------- */
function loadMyList() {
  try { return JSON.parse(localStorage.getItem(MYLIST_KEY) || '[]'); }
  catch (e) { return []; }
}
function saveMyList(arr) {
  localStorage.setItem(MYLIST_KEY, JSON.stringify(arr));
}
function addToMyList(entry) {
  const list = loadMyList();
  const exists = list.some(x => x.name === entry.name && x.type === entry.type);
  if (!exists) { list.push(entry); saveMyList(list); alert('Saved to MyList!'); renderMyListGrid(); }
  else { alert('Nasa MyList na yan.'); }
}

/* -------------------- RENDER LISTS -------------------- */
function renderIPTVList(filter = '') {
  const list = document.getElementById('iptv-list');
  const q = (filter || '').toLowerCase();
  list.innerHTML = '';
  CHANNELS.IPTV
    .filter(ch => ch.name.toLowerCase().includes(q))
    .forEach(ch => {
      const item = document.createElement('div');
      item.className = 'ch-item';
      item.innerHTML = `<div class="ch-title">${ch.name}</div>`;
      item.onclick = () => { playIPTV(ch); restartDrawerAutoHide(); };
      list.appendChild(item);
    });
}

function renderRadioList() {
  const list = document.getElementById('radio-list');
  list.innerHTML = '';
  CHANNELS.RADIO.forEach(ch => {
    const item = document.createElement('div');
    item.className = 'ch-item';
    item.innerHTML = `<div class="ch-title">${ch.name}</div>`;
    item.onclick = () => playRadio(ch);
    list.appendChild(item);
  });
}

/* -------------------- SHOW/HIDE -------------------- */
function hideAll() {
  document.getElementById('home-sec').classList.add('hidden');
  document.getElementById('iptv-sec').classList.add('hidden');
  document.getElementById('radio-sec').classList.add('hidden');
  document.getElementById('mylist-sec').classList.add('hidden');
  document.getElementById('chat-sec').classList.add('hidden');

  closeIPTVDdrawer();
  destroyPlayers();
  stopRadio();

  // Hide drawer for all sections except Live TV
  document.getElementById('iptv-sec').classList.remove('active');
}

function showHome() {
  hideAll();
  document.getElementById('home-sec').classList.remove('hidden');
}

function showIPTV() {
  hideAll();
  const iptvSec = document.getElementById('iptv-sec');
  iptvSec.classList.remove('hidden');
  iptvSec.classList.add('active'); // Only show drawer for Live TV section
  renderIPTVList();
  openIPTVDdrawer(); // Open drawer for Live TV
  if (CHANNELS.IPTV.length) playIPTV(CHANNELS.IPTV[0]); // auto-play first
}

function showRadio() {
  hideAll();
  document.getElementById('radio-sec').classList.remove('hidden');
  renderRadioList();
  if (CHANNELS.RADIO.length) playRadio(CHANNELS.RADIO[0]); // auto-play first
}

function showMyList() {
  hideAll();
  document.getElementById('mylist-sec').classList.remove('hidden');
  renderMyListGrid();
}

function showChat() {
  hideAll();
  document.getElementById('chat-sec').classList.remove('hidden');
}

/* -------------------- DRAWER -------------------- */
function openIPTVDdrawer() {
  const d = document.getElementById('iptv-drawer');
  d.classList.add('open');
  restartDrawerAutoHide();
}

function closeIPTVDdrawer() {
  const d = document.getElementById('iptv-drawer');
  d.classList.remove('open');
  if (drawerTimer) { clearTimeout(drawerTimer); drawerTimer = null; }
}

function restartDrawerAutoHide() {
  const d = document.getElementById('iptv-drawer');
  if (!d.classList.contains('open')) d.classList.add('open');
  if (drawerTimer) clearTimeout(drawerTimer);
  drawerTimer = setTimeout(() => { d.classList.remove('open'); }, 10000); // 10s
}

/* -------------------- INIT & WIRING -------------------- */
document.addEventListener('DOMContentLoaded', () => {
  showHome();
  renderIPTVList(); // pre-render
  renderMyListGrid();

  document.getElementById('open-drawer-btn').addEventListener('click', openIPTVDdrawer);
  document.getElementById('iptv-search').addEventListener('input', (e) => renderIPTVList(e.target.value));

  document.getElementById('save-to-mylist-btn').addEventListener('click', () => {
    if (!currentIPTV) { alert('Walang active IPTV channel.'); return; }
    addToMyList(currentIPTV);
  });

  document.getElementById('save-radio-btn').addEventListener('click', () => {
    if (!currentRadio) { alert('Walang active radio stream.'); return; }
    addToMyList(currentRadio);
  });
});
