document.addEventListener('DOMContentLoaded', () => {
  // Sample Channels for IPTV and Radio
  const CHANNELS = {
    IPTV: [
      { name: 'KAPAMILYA', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd', type: 'mpd', logo: '' },
      { name: '3RsTV', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.ibb.co/nN0VGRY8/Chat-GPT-Image-Oct-4-2025-05-05-12-AM-1.png' },
      { name: '3rsSinePinoy', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210267/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.ibb.co/2Y83j9Dx/3rs-Sine-Pinoy.png' },
      { name: 'STAR TELEVISION', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210731/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.imgur.com/tSwdUjj.png' },
      { name: 'CinePlex Asia', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210632/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.imgur.com/tSwdUjj.png' }
    ],
    RADIO: [
      { name: '106.3 Yes FM Dagupan', url: 'https://yesfmdagupan.radioca.st/;', type: 'mp3', logo: 'https://i.ibb.co/yBqNhTZN/raryo.jpg' },
      { name: '98.3 Love Radio Dagupan', url: 'https://loveradiodagupan.radioca.st/;', type: 'mp3', logo: 'https://i.ibb.co/yBqNhTZN/raryo.jpg' },
      { name: '90.7 Love Radio', url: 'https://azura.loveradio.com.ph/listen/love_radio_manila/radio.mp3', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/141/dzmb-love-radio-907-fm.fd6dd832.png' },
      { name: '95.5 Eagle FM', url: 'http://n0c.radiojar.com/yus0r2bghd3vv?rj-ttl=5&rj-tok=AAABl4NB7pwAuUwQgelXY74u7w', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/550/eagle-fm-955.31726a37.jpg' }
    ]
  };

  // Hide all sections
  function hideAll() {
    document.getElementById('home-sec').classList.add('hidden');
    document.getElementById('iptv-sec').classList.add('hidden');
    document.getElementById('radio-sec').classList.add('hidden');
    document.getElementById('mylist-sec').classList.add('hidden');
    document.getElementById('chat-sec').classList.add('hidden');
    document.getElementById('iptv-drawer').style.display = 'none'; // Hide drawer by default
  }

  // Show Home
  function showHome() {
    hideAll();
    document.getElementById('home-sec').classList.remove('hidden');
  }

  // Show Live TV
  function showIPTV() {
    hideAll();
    document.getElementById('iptv-sec').classList.remove('hidden');
    document.getElementById('iptv-drawer').style.display = 'block'; // Show IPTV drawer
    renderIPTVList();
  }

  // Show Radio
  function showRadio() {
    hideAll();
    document.getElementById('radio-sec').classList.remove('hidden');
    document.getElementById('iptv-drawer').style.display = 'block'; // Show IPTV drawer for Radio
    renderRadioList();
  }

  // Show MyList
  function showMyList() {
    hideAll();
    document.getElementById('mylist-sec').classList.remove('hidden');
  }

  // Show Chatroom
  function showChat() {
    hideAll();
    document.getElementById('chat-sec').classList.remove('hidden');
  }

  // Render IPTV List
  function renderIPTVList() {
    const list = document.getElementById('iptv-list');
    list.innerHTML = ''; // Clear previous list
    CHANNELS.IPTV.forEach(channel => {
      const item = document.createElement('div');
      item.className = 'ch-item';
      item.innerHTML = `<div class="ch-title">${channel.name}</div>`;
      item.onclick = () => { playIPTV(channel); };
      list.appendChild(item);
    });
  }

  // Render Radio List
  function renderRadioList() {
    const list = document.getElementById('radio-list');
    list.innerHTML = ''; // Clear previous list
    CHANNELS.RADIO.forEach(channel => {
      const item = document.createElement('div');
      item.className = 'ch-item';
      item.innerHTML = `<div class="ch-title">${channel.name}</div>`;
      item.onclick = () => { playRadio(channel); };
      list.appendChild(item);
    });
  }

  // Play IPTV Channel
  function playIPTV(channel) {
    const video = document.getElementById('video-player');
    video.src = channel.url;
    video.play();
  }

  // Play Radio Stream
  function playRadio(channel) {
    const audio = document.getElementById('audio-player');
    audio.src = channel.url;
    audio.play();
  }

  // Channel Drawer Toggle (Hide/Show)
  function toggleDrawer() {
    const drawer = document.getElementById('iptv-drawer');
    if (drawer.style.display === 'block') {
      drawer.style.display = 'none';
    } else {
      drawer.style.display = 'block';
    }
  }

  // Add Event Listeners for Buttons
  document.querySelector('a[href="#home-sec"]').addEventListener('click', showHome);
  document.querySelector('a[href="#iptv-sec"]').addEventListener('click', showIPTV);
  document.querySelector('a[href="#radio-sec"]').addEventListener('click', showRadio);
  document.querySelector('a[href="#mylist-sec"]').addEventListener('click', showMyList);
  document.querySelector('a[href="#chat-sec"]').addEventListener('click', showChat);

  // Toggle Drawer Button (for Live TV)
  document.getElementById('open-drawer-btn').addEventListener('click', toggleDrawer);
  
  // Initialize the first section (Home)
  showHome();
});
