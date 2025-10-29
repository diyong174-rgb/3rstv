/* -------------------- SHOW/HIDE -------------------- */
function hideAll() {
  document.getElementById('home-sec').classList.add('hidden');
  document.getElementById('iptv-sec').classList.add('hidden');
  document.getElementById('radio-sec').classList.add('hidden');
  document.getElementById('mylist-sec').classList.add('hidden');
  document.getElementById('chat-sec').classList.add('hidden');

  // Ensure the drawer is closed
  closeIPTVDdrawer();
  destroyPlayers();
  stopRadio();

  // Remove 'active' class from Live TV, which makes the drawer visible
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
  iptvSec.classList.add('active');  // Only make the drawer appear when Live TV is active
  renderIPTVList();
  openIPTVDdrawer();  // Open drawer for Live TV
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
