/* -------------------- DATA -------------------- */
const CHANNELS = {
  IPTV: [
    { name: 'KAPAMILYA', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd', keyId: 'bd17afb5dc9648a39be79ee3634dd4b8', key: '3ecf305d54a7729299b93a3d69c02ea5', type: 'mpd', logo: '' },   
    { name: '3RsTV', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.ibb.co/nN0VGRY8/Chat-GPT-Image-Oct-4-2025-05-05-12-AM-1.png' },
    { name: '3rsSinePinoy', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210267/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.ibb.co/2Y83j9Dx/3rs-Sine-Pinoy.png' },
    { name: 'STAR TELEVISION', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210731/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.imgur.com/tSwdUjj.png' }, 
    { name: 'CinePlex Asia', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210632/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.imgur.com/tSwdUjj.png' },   
    { name: 'JUZT-TV BOX', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210639/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://juzt-tv.vercel.app/your-logo.png' },
    { name: 'Sony Sine', url: 'https://a-cdn.klowdtv.com/live1/cine_720p/chunks.m3u8', type: 'hls', logo: '' },   
    { name: 'Blast Movies', url: 'https://amg19223-amg19223c7-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c7-amgplt0351/playlist.m3u8', type: 'hls', logo: '' },
    { name: 'Free Movies', url: 'https://amg01553-amg01553c2-samsung-ph-7163.playouts.now.amagi.tv/playlist1080p.m3u8', type: 'hls', logo: '' },
    { name: 'Free Movies plus', url: 'https://s8host2.localnow.api.cms.amdvids.com/v1/manifest/c189661feba961c19bc5fb60b57879ee9b84548a/config10/e5d6b75d-253b-4a05-8ed0-f1570f23619e/2.m3u8', type: 'hls', logo: '' },
    { name: 'Horror TV', url: 'https://streams2.sofast.tv/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/93dc292b-cbcf-4988-ab97-94feced4c14b/1c649e10-e1a9-4e50-9f2d-878ba27d0032/1.m3u8 ', type: 'hls', logo: '' }
  ],
  RADIO: [
    { name: '106.3 Yes FM Dagupan', url: 'https://yesfmdagupan.radioca.st/;', type: 'mp3', logo: 'https://i.ibb.co/yBqNhTZN/raryo.jpg' },
    { name: '98.3 Love Radio Dagupan', url: 'https://loveradiodagupan.radioca.st/;', type: 'mp3', logo: 'https://i.ibb.co/yBqNhTZN/raryo.jpg' },
    { name: '90.7 Love Radio', url: 'https://azura.loveradio.com.ph/listen/love_radio_manila/radio.mp3', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/141/dzmb-love-radio-907-fm.fd6dd832.png' },
    { name: '95.5 Eagle FM', url: 'http://n0c.radiojar.com/yus0r2bghd3vv?rj-ttl=5&rj-tok=AAABl4NB7pwAuUwQgelXY74u7w', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/550/eagle-fm-955.31726a37.jpg' },
    { name: '96.3 Easy Rock', url: 'https://azura.easyrock.com.ph/listen/easy_rock_manila/radio.mp3', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/138/dwrk-963-easy-rock.c2c03660.png' }
  ]
};

/* -------------------- STATE -------------------- */
let hls = null;
let shakaPlayer = null;
let drawerTimer = null;
let currentIPTV = null;  // {name, url, type, keyId?, key?}
let currentRadio = null; // {name, url, type}

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
  if (!exists) {
    list.push(entry);
    saveMyList(list);
    alert('Saved to MyList!');
    renderMyListGrid();
  } else {
    alert('Already in MyList.');
  }
}

/* -------------------- CLEANUP -------------------- */
function destroyPlayers() {
  if (hls) { try { hls.destroy(); } catch (e) { } hls = null; }
  if (shakaPlayer) { try { shakaPlayer.destroy(); } catch (e) { } shakaPlayer = null; }
  document.getElementById('video-player').innerHTML = '';
}
function stopRadio() {
  const a = document.getElementById('audio-player');
  if (a) { try { a.pause(); a.src = ''; } catch (e) { } }
}

/* -------------------- RENDER LISTS -------------------- */
function renderIPTVList(filter = '') {
  const list = document.getElementById('iptv-list');
  const q = (filter || '').toLowerCase();
  list.innerHTML = '';
  CHANNELS.IPTV.filter(ch => ch.name.toLowerCase().includes(q))
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

/* -------------------- PLAYERS -------------------- */
function sanitizeHex(s) { return (s || '').replace(/^0x/i, '').replace(/\s+/g, '').toLowerCase(); }
function isHex32(s) { return /^[0-9a-f]{32}$/i.test(s || ''); }

async function playIPTV(channel) {
  destroyPlayers();
  stopRadio();

  const wrap = document.getElementById('video-player');
  const video = document.createElement('video');
  video.setAttribute('playsinline', '');
  video.setAttribute('controls', '');
  video.style.width = '100%';
  video.style.height = '100%';
  wrap.appendChild(video);

  try {
    if (channel.type === 'hls' || /\.m3u8(\?|$)/i.test(channel.url)) {
      if (Hls.isSupported()) {
        hls = new Hls({ maxBufferLength: 30 });
        hls.on(Hls.Events.ERROR, (_, data) => console.warn('[HLS]', data));
        hls.loadSource(channel.url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = channel.url;
        await video.play().catch(() => {});
      } else {
        alert('HLS not supported.');
      }
      currentIPTV = { name: channel.name, url: channel.url, type: channel.type };
      return;
    }

    if (channel.type === 'mpd' || /\.mpd(\?|$)/i.test(channel.url)) {
      shaka.polyfill.installAll();
      if (!shaka.Player.isBrowserSupported()) {
        alert('Shaka: browser not supported.');
        return;
      }
      shakaPlayer = new shaka.Player(video);
      shakaPlayer.addEventListener('error', e => {
        const err = e.detail || e || {};
        console.error('[Shaka] error:', err);
        if (err.code === 6007 || /LICENSE|KEY|DRM/i.test(err.message || '')) {
          alert('DRM/ClearKey error: encrypted stream, missing key. Try playing from Live TV and save again.');
        }
      });

      if (channel.keyId && channel.key) {
        const kid = sanitizeHex(channel.keyId);
        const key = sanitizeHex(channel.key);
        if (isHex32(kid) && isHex32(key)) {
          shakaPlayer.configure({ drm: { clearKeys: { [kid]: key } } });
          console.log('[Shaka] Using ClearKey (hex)', { kid, key });
        } else {
          shakaPlayer.configure({ drm: { clearKeys: { [channel.keyId]: channel.key } } });
          console.warn('[Shaka] Keys not hex-32, passing raw (maybe base64).');
        }
      }

      await shakaPlayer.load(channel.url);
      await video.play().catch(() => {});
      currentIPTV = {
        name: channel.name, url: channel.url, type: channel.type,
        ...(channel.keyId ? { keyId: channel.keyId } : {}),
        ...(channel.key ? { key: channel.key } : {})
      };
      return;
    }

    if (channel.type === 'mp4' || /\.mp4(\?|$)/i.test(channel.url)) {
      video.src = channel.url;
      await video.play().catch(() => {});
      currentIPTV = { name: channel.name, url: channel.url, type: channel.type };
      return;
    }

    alert('Stream type not supported.');
  } catch (err) {
    console.error('[Player] fatal:', err);
    alert('Playback error. See console for details.');
  }
}

function playRadio(channel) {
  destroyPlayers();
  const audio = document.getElementById('audio-player');
  audio.src = channel.url;
  audio.play().catch(() => {});
  currentRadio = { name: channel.name, url: channel.url, type: channel.type };
}

/* -------------------- MYLIST -------------------- */
function renderMyListGrid() {
  const grid = document.getElementById('mylist-grid');
  if (!grid) return;
  const list = loadMyList();
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = `<div class="card"><p>No entries. Use “☆ Save” on IPTV or Radio to add.</p></div>`;
    return;
  }
  list.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <div>
        <h4>${item.name}</h4>
        <p style="margin:6px 0 10px;opacity:.8;">Type: ${item.type.toUpperCase()}</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn" data-i="${idx}" data-action="play">Play</button>
        <button class="btn" data-i="${idx}" data-action="remove">Remove</button>
      </div>
    `;
    el.querySelectorAll('button').forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.i; const action = btn.dataset.action;
        const arr = loadMyList();
        const target = arr[i];
        if (!target) return;
        if (action === 'play') {
          playEntryFromMyList(target);
        } else if (action === 'remove') {
          arr.splice(i, 1); saveMyList(arr); renderMyListGrid();
        }
      };
    });
    grid.appendChild(el);
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
}

function showHome() {
  hideAll();
  document.getElementById('home-sec').classList.remove('hidden');
}

function showIPTV() {
  hideAll();
  document.getElementById('iptv-sec').classList.remove('hidden');
  renderIPTVList();
  openIPTVDdrawer();
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

/* -------------------- CHAT DEMO -------------------- */
function sendMsg() {
  const box = document.getElementById('chat-box');
  const input = document.getElementById('chat-text');
  const txt = (input.value || '').trim();
  if (!txt) return;
  const div = document.createElement('div');
  div.className = 'msg';
  div.textContent = txt;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
  input.value = '';
}

/* -------------------- INIT & WIRING -------------------- */
document.addEventListener('DOMContentLoaded', () => {
  showHome();
  renderIPTVList(); // pre-render
  renderMyListGrid();

  document.getElementById('open-drawer-btn').addEventListener('click', openIPTVDdrawer);
  document.getElementById('iptv-search').addEventListener('input', (e) => renderIPTVList(e.target.value));

  document.getElementById('save-to-mylist-btn').addEventListener('click', () => {
    if (!currentIPTV) { alert('No active IPTV channel.'); return; }
    addToMyList(currentIPTV);
  });

  document.getElementById('save-radio-btn').addEventListener('click', () => {
    if (!currentRadio) { alert('No active radio stream.'); return; }
    addToMyList(currentRadio);
  });

  // Auto-upgrade existing MyList entries with missing ClearKeys
  (function upgradeMyList() {
    const arr = loadMyList();
    let changed = false;
    const upgraded = arr.map(it => {
      const before = JSON.stringify(it);
      const after = ensureKeysForMPD({ ...it });
      if (JSON.stringify(after) !== before) changed = true;
      return after;
    });
    if (changed) {
      saveMyList(upgraded);
      console.log('[MyList] Upgraded entries with missing ClearKeys.');
      renderMyListGrid();
    }
  })();
});