
/* ---------- Data ---------- */
const videos = [
  {
    id:"bbb", title:"Big Buck Bunny - Official Blender Open Movie (4K)",
    channel:"Blender", subs:"2.4M subscribers",
    views:"12M views", date:"12 years ago",
    duration:"9:56",
    cat:"animation",
    thumb:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    desc:"Big Buck Bunny is a 2008 animated short film produced by the Blender Foundation. The movie was made freely available as part of the open source Blender animation suite. It follows the adventures of a giant rabbit with a heart bigger than himself."
  },
  {
    id:"edream", title:"Elephants Dream - The first Blender Open Movie",
    channel:"Blender Open Movies",
    subs:"436K subscribers",
    views:"3.1M views", date:"14 years ago",
    duration:"10:54",
    cat:"animation",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Elephants_Dream_s5_both.jpg/640px-Elephants_Dream_s5_both.jpg",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    desc:"Elephants Dream is the first open movie produced by the Blender Foundation. It explores a surreal mechanical world and the relationship between two characters, Proog and Emo."
  },
  {
    id:"joyrides", title:"For Bigger Joyrides - Cinematic Test Sample",
    channel:"Google Sample Videos",
    subs:"1.1M subscribers",
    views:"8.6M views", date:"10 years ago",
    duration:"15:10",
    cat:"mixes",
    thumb:"https://dummyimage.com/640x360/1f1f1f/ffffff&text=For+Bigger+Joyrides&font-size=24",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    desc:"A 4K cinematic test sample used by developers to validate adaptive streaming, codec performance, and player UI integration."
  },
  {
    id:"sintel", title:"Sintel - Durian Open Movie Trailer",
    channel:"Blender Open Movies",
    subs:"987K subscribers",
    views:"5.4M views", date:"13 years ago",
    duration:"14:48",
    cat:"animation",
    thumb:"https://dummyimage.com/640x360/2a2a2a/ffffff&text=Sintel&font-size=28",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    desc:"Sintel is the third open movie by the Blender Foundation, following an epic fantasy adventure as she searches for her lost dragon companion, Scales."
  },
  {
    id:"tears", title:"Tears of Steel - Mango Open Movie (Live Action + VFX)",
    channel:"Blender Open Movies",
    subs:"612K subscribers",
    views:"2.7M views", date:"11 years ago",
    duration:"12:14",
    cat:"animation",
    thumb:"https://dummyimage.com/640x360/303030/ffffff&text=Tears+of+Steel&font-size=22",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    desc:"Tears of Steel was produced by the Blender Foundation to showcase open-source VFX pipelines, combining live-action footage with CGI environments and characters."
  },
  {
    id:"subaru", title:"Subaru Outback On Street And Dirt - Sample Asset",
    channel:"Google Sample Videos",
    subs:"230K subscribers",
    views:"540K views", date:"10 years ago",
    duration:"1:01",
    cat:"mixes",
    thumb:"https://dummyimage.com/640x360/181818/ffffff&text=Subaru+Outback&font-size=22",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    desc:"Subaru Outback On Street And Dirt — short test clip used to evaluate player buffering and seek performance on slower connections."
  },
  {
    id:"volkswagen", title:"Volkswagen GTI Review - Sample Asset",
    channel:"Google Sample Videos",
    subs:"178K subscribers",
    views:"320K views", date:"10 years ago",
    duration:"0:32",
    cat:"mixes",
    thumb:"https://dummyimage.com/640x360/1c1c1c/ffffff&text=Volkswagen+GTI&font-size=22",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    desc:"Volkswagen GTI Review — quick 30s sample used in early HLS / DASH tutorials and adaptive bitrate demos."
  },
  {
    id:"gopro", title:"GoPro HERO - Adventure Reel Sample",
    channel:"Google Sample Videos",
    subs:"412K subscribers",
    views:"910K views", date:"9 years ago",
    duration:"2:24",
    cat:"live",
    thumb:"https://dummyimage.com/640x360/292929/ffffff&text=GoPro+HERO&font-size=24",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/GoProHD.mp4",
    desc:"GoPro HERO adventure reel — action sequence clip often used as a benchmark for low-light video playback performance."
  }
];

/* ---------- Rendering ---------- */
const grid = document.getElementById("grid");

// Deterministic HSL color derived from a channel name string.
function chipColor(channel){
  let h=0;
  for(let i=0;i<channel.length;i++) h=(h*31+channel.charCodeAt(i))>>>0;
  return `hsl(${h%360} 60% 45%)`;
}

function channelAvatar(channel, id){
  const initials = channel.split(/\s+/).slice(0,2).map(s=>s[0]).join("").toUpperCase();
  const bg = chipColor(channel);
  const idAttr = id ? ` id="${id}"` : "";
  return `<div class="ch"${idAttr} style="background:${bg}">${initials}</div>`;
}

function videoCard(v){
  return `
  <article class="card" data-id="${v.id}" data-cat="${v.cat}">
    <div class="thumb">
      <img loading="lazy" src="${v.thumb}" alt="${v.title.replace(/"/g,'&quot;')}">
      <span class="duration">${v.duration}</span>
    </div>
    <div class="info">
      ${channelAvatar(v.channel)}
      <div class="meta">
        <h3 class="title">${v.title}</h3>
        <div class="sub">
          <span class="ch-name">${v.channel}</span>
          <span>${v.views} &middot; ${v.date}</span>
        </div>
      </div>
    </div>
  </article>`;
}

function adCard(){
  // Injected as a Sponsored card
  return `
  <article class="card ad" data-id="ad-2447509">
    <div class="thumb ad-thumb">
      <div class="ad-badge">Advertisement</div>
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#181818;color:#aaa;font-size:12px;padding:10px;text-align:center">
        <iframe data-aa="2447509" src="//acceptable.a-ads.com/2447509/?size=Adaptive" style="border:0;width:100%;height:100%;display:block" loading="lazy" referrerpolicy="no-referrer"></iframe>
      </div>
    </div>
    <div class="info">
      <span class="ad-info-icon" aria-hidden="true">i</span>
      <div class="meta">
        <h3 class="title">Advertisement</h3>
        <div class="sub">
          <span>A-ADS Self-Serve Network</span>
          <span>Sponsored</span>
        </div>
      </div>
    </div>
  </article>`;
}

// Compact Advertisement card sized to slot into the "Up next" sidebar.
// The ad shows only while a video is playing (added inside openVideo()).
function adRecCard(){
  return `
  <div class="rec-card ad-rec" aria-label="Sponsored content">
    <div class="thumb ad-thumb-rec">
      <span class="ad-tag">Ad</span>
      <iframe data-aa="2447509" src="//acceptable.a-ads.com/2447509/?size=Adaptive" style="border:0;width:100%;height:100%;display:block;background:#f8f8f8" loading="lazy" referrerpolicy="no-referrer"></iframe>
    </div>
    <div class="meta">
      <h4 class="title">Sponsored content</h4>
      <div class="sub"><span class="ch-name">Advertisement</span></div>
    </div>
  </div>`;
}

function render(category){
  const filtered = category === "all" ? videos : videos.filter(v => v.cat === category);
  let html = "";
  filtered.forEach(v => { html += videoCard(v); });
  grid.innerHTML = html;
}
render("all");

/* ---------- Filter chips ---------- */
document.getElementById("chipBar").addEventListener("click",(e)=>{
  const t = e.target.closest(".chip");
  if(!t) return;
  document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
  t.classList.add("active");
  render(t.dataset.cat);
});

/* ---------- Drawer ---------- */
const drawer = document.getElementById("drawer");
document.getElementById("menuBtn").addEventListener("click",()=>{
  drawer.classList.toggle("open");
});

/* ---------- Watch overlay ---------- */
const overlay = document.getElementById("overlay");
const playerVideo = document.getElementById("playerVideo");
const watchTitle = document.getElementById("watchTitle");
const watchViews = document.getElementById("watchViews");
const watchDate = document.getElementById("watchDate");
const watchChName = document.getElementById("watchChName");
const watchChSubs = document.getElementById("watchChSubs");
const watchChAvatar = document.getElementById("watchChAvatar");
const watchDescription = document.getElementById("watchDescription");
const recList = document.getElementById("recList");
const closeWatch = document.getElementById("closeWatch");

function openVideo(v){
  playerVideo.src = v.src;
  playerVideo.poster = v.thumb;
  playerVideo.play().catch(()=>{});
  watchTitle.textContent = v.title;
  watchViews.textContent = v.views;
  watchDate.textContent = v.date;
  watchChName.textContent = v.channel;
  watchChSubs.textContent = v.subs;
  // Re-query the DOM each call so a stale reference never drifts after outerHTML swap.
  const prevAv = document.getElementById("watchChAvatar");
  if(prevAv) prevAv.outerHTML = channelAvatar(v.channel, "watchChAvatar");
  watchDescription.innerHTML = `<div class="stats">${v.views} &middot; ${v.date}</div>${v.desc}`;

  recList.innerHTML = adRecCard() + videos.filter(x=>x.id!==v.id).slice(0,5).map(x=>`
    <div class="rec-card" data-id="${x.id}">
      <div class="thumb"><img loading="lazy" src="${x.thumb}" alt=""><span class="duration">${x.duration}</span></div>
      <div class="meta">
        <h4 class="title">${x.title}</h4>
        <div class="sub"><span class="ch-name">${x.channel}</span><span>${x.views} &middot; ${x.date}</span></div>
      </div>
    </div>`).join("");

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePlayer(){
  overlay.classList.remove("open");
  playerVideo.pause();
  playerVideo.removeAttribute("src");
  playerVideo.load();
  document.body.style.overflow = "";
}

grid.addEventListener("click",(e)=>{
  const t = e.target.closest(".card");
  if(!t) return;
  const id = t.dataset.id;
  const v = videos.find(x=>x.id===id);
  if(v) openVideo(v);
});

recList.addEventListener("click",(e)=>{
  const t = e.target.closest(".rec-card");
  if(!t) return;
  const v = videos.find(x=>x.id===t.dataset.id);
  if(v) openVideo(v);
});

closeWatch.addEventListener("click",closePlayer);
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape" && overlay.classList.contains("open")) closePlayer(); });

/* ---------- Search (demo) ---------- */
document.querySelector(".search-shell input").addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    const q = e.currentTarget.value.trim().toLowerCase();
    if(!q){ render("all"); document.querySelector('.chip[data-cat="all"]').click(); return; }
    const found = videos.filter(v=> v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q));
    if(found.length === 0){
      grid.innerHTML = `<div style="color:#aaa;padding:60px 40px;text-align:center;font-size:18px">No results for &ldquo;${q.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}&rdquo;<div style="font-size:13px;color:#717171;margin-top:8px">Try different keywords or check the spelling.</div></div>`;
    } else {
      grid.innerHTML = found.map(videoCard).join("");
    }
  }
});
