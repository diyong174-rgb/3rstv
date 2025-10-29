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
  if (!exists) {
    list.push(entry);
    saveMyList(list);
    alert('Saved to MyList!');
    renderMyListGrid();
  } else {
    alert('Already in MyList.');
  }
}

/* -------------------- RENDER LISTS -------------------- */
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

function playRadio(channel) {
  destroyPlayers();
  const audio = document.getElementById('audio-player');
  audio.src = channel.url;
  audio.play().catch(() => {});

  const titleEl = document.getElementById('radio-title');
  const logoEl = document.getElementById('radio-logo');
  if (titleEl) titleEl.textContent = channel.name || 'Now Playing';
  if (logoEl) logoEl.src = channel.logo || 'https://via.placeholder.com/96x96?text=RADIO';

  currentRadio = { name: channel.name, url: channel.url, type: channel.type };
}
