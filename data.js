/* ---------- Shared video catalog ----------
 * Single source of truth used by both:
 *   - index.html   (the / homepage, sorted by addedAt desc)
 *   - watch/       (the /watch/?id=ID page)
 *
 * Kept as a classic (non-module) script so it loads synchronously and the
 * `videos` symbol is available as a top-level const on `window`.
 */
const videos = [
  {
    id:"bbb", title:"Big Buck Bunny - Official Blender Open Movie (4K)",
    channel:"Blender", subs:"2.4M subscribers",
    views:"12M views", date:"12 years ago",
    duration:"9:56",
    cat:"animation",
    addedAt: Date.now() - 8*86400000,
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
    addedAt: Date.now() - 7*86400000,
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
    addedAt: Date.now() - 6*86400000,
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
    addedAt: Date.now() - 5*86400000,
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
    addedAt: Date.now() - 4*86400000,
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
    addedAt: Date.now() - 3*86400000,
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
    addedAt: Date.now() - 2*86400000,
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
    addedAt: Date.now() - 1*86400000,
    thumb:"https://dummyimage.com/640x360/292929/ffffff&text=GoPro+HERO&font-size=24",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/GoProHD.mp4",
    desc:"GoPro HERO adventure reel — action sequence clip often used as a benchmark for low-light video playback performance."
  },
  {
    id:"sintelAlt", title:"Newly added - Sintel re-cut preview",
    channel:"CodeTube Editorial",
    subs:"11K subscribers",
    views:"4.2K views", date:"2 days ago",
    duration:"3:42",
    cat:"animation",
    addedAt: Date.now(),
    thumb:"https://dummyimage.com/640x360/454545/ffffff&text=New+Today&font-size=28",
    src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    desc:"A freshly-added short preview re-cut of Sintel — surfacing as the brand-new top pick on Home."
  }
];
