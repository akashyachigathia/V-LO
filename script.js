const products = [
  {
    id: "denim",
    name: "T-shirt & straight-leg denim look",
    price: 65,
    category: "Everyday",
    colour: "Indigo / white",
    hex: "#577080",
    image: "creation_3775728843",
    description:
      "A white tee and straight-leg denim, styled with white trainers and a tan shoulder bag.",
  },
  {
    id: "tailoring",
    name: "Relaxed blazer & trouser look",
    price: 129,
    category: "Tailoring",
    colour: "Sand",
    hex: "#c0ae91",
    image: "creation_3775735255",
    description:
      "A relaxed beige blazer and matching trousers, styled with a white top and brown accessories.",
  },
  {
    id: "floral",
    name: "Square-neck floral midi dress",
    price: 59,
    category: "Dresses",
    colour: "Ivory floral",
    hex: "#e6e3d5",
    image: "creation_3775737029",
    description:
      "An ivory floral midi dress with a square neckline. Styled with a straw bag and neutral sandals.",
  },
  {
    id: "black-dress",
    name: "Draped-neck midi dress",
    price: 79,
    category: "Dresses",
    colour: "Black",
    hex: "#232323",
    image: "creation_3775739912",
    description:
      "A black midi dress with a softly draped neckline, styled with a compact black bag and heels.",
  },
  {
    id: "weekend",
    name: "Sweatshirt & leggings look",
    price: 69,
    category: "Everyday",
    colour: "Rose / charcoal",
    hex: "#bd9291",
    image: "creation_3775745730",
    description:
      "A soft pink sweatshirt with charcoal leggings and white trainers for an easy casual look.",
  },
  {
    id: "coat",
    name: "Camel coat & denim look",
    price: 149,
    category: "Tailoring",
    colour: "Camel",
    hex: "#a88460",
    image: "creation_3775757187",
    description:
      "A camel coat over a light knit, dark denim and brown boots, finished with a burgundy scarf.",
  },
  {
    id: "street",
    name: "Oversized tee & cargo look",
    price: 75,
    category: "Everyday",
    colour: "Black / olive",
    hex: "#747a58",
    image: "creation_3775763395",
    description:
      "An oversized black tee with olive cargo trousers, a crossbody bag and black trainers.",
  },
  {
    id: "sari",
    name: "Emerald sari look",
    price: 119,
    category: "Occasion",
    colour: "Emerald",
    hex: "#185840",
    image: "creation_3775773551",
    description:
      "A rich green sari with gold accents and coordinated jewellery for an occasion-ready look.",
  },
  {
    id: "summer",
    name: "Shirt & tailored shorts look",
    price: 79,
    category: "Everyday",
    colour: "White / sand",
    hex: "#d5c9b4",
    image: "creation_3775776330",
    description:
      "A white shirt and tailored beige shorts, styled with a woven bag and neutral sandals.",
  },
   
  {
  id: "burgundy-coat",
  name: "Burgundy coat & knitted dress look",
  price: 139,
  category: "Tailoring",
  colour: "Burgundy / black",
  hex: "#682535",
  image: "large1",
  featuredOnly: true,
  description:
    "A long burgundy coat layered over a black knitted dress, styled with knee-high boots and a black handbag."
},
{
  id: "navy-duffle",
  name: "Navy duffle coat & knitwear look",
  price: 129,
  category: "Tailoring",
  colour: "Navy / grey",
  hex: "#202c40",
  image: "large2",
  featuredOnly: true,
  description:
    "A navy duffle coat layered over a cable-knit jumper, with grey trousers, a checked scarf and brown boots."
}


];
const $ = (s) => document.querySelector(s);
let department = "Women",
  filter = "All",
  saved = [],
  bag = [];
try {
  saved = JSON.parse(localStorage.getItem("velo-saved") || "[]");
  bag = JSON.parse(localStorage.getItem("velo-bag") || "[]");
  if (!Array.isArray(saved) || !Array.isArray(bag)) throw Error();
  saved = saved.filter((id) => products.some((p) => p.id === id));
  bag = bag.filter(
    (x) =>
      products.some((p) => p.id === x.id) &&
      ["XS", "S", "M", "L", "XL"].includes(x.size),
  );
} catch {
  saved = [];
  bag = [];
}
const money = (n) => "£" + n.toFixed(2),
  heart = '<svg><use href="#heart"/></svg>';
function persist() {
  try {
    localStorage.setItem("velo-saved", JSON.stringify(saved));
    localStorage.setItem("velo-bag", JSON.stringify(bag));
  } catch {}
  $("#savedCount").textContent = saved.length || "";
  $("#bagCount").textContent = bag.length || "";
}
function toast(t) {
  $("#toast").textContent = t;
  $("#toast").classList.add("visible");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(
    () => $("#toast").classList.remove("visible"),
    2500,
  );
}
function render() {
 let list =
  department === "Women"
    ? products.filter(
        (p) =>
          !p.featuredOnly &&
          (filter === "All" || p.category === filter)
      )
    : [];
  if ($("#sort").value === "low") list.sort((a, b) => a.price - b.price);
  if ($("#sort").value === "high") list.sort((a, b) => b.price - a.price);
  $("#products").innerHTML = list
    .map(
      (p) =>
        `<article><div class="product-image"><button data-product="${p.id}" aria-label="View ${p.name}"><img src="assets/${p.image}.jpg" alt="${p.name} in ${p.colour}" loading="lazy"></button><button class="save" data-save="${p.id}" aria-label="${saved.includes(p.id) ? "Unsave" : "Save"} ${p.name}" aria-pressed="${saved.includes(p.id)}">${heart}</button></div><div class="product-info"><span class="product-tag">New arrival</span><button data-product="${p.id}">${p.name}</button><span class="product-price">${money(p.price)}</span></div><div class="product-meta"><i class="swatch" style="background:${p.hex}"></i>${p.colour}</div></article>`,
    )
    .join("");
  $("#empty").hidden = !!list.length;
  $("#resultCount").textContent = list.length + " styles";
  $("#collectionTitle").innerHTML =
    department === "Women" ? "New arrivals." : department + " — coming soon.";
  $(".filters").hidden = department !== "Women";
  document
    .querySelectorAll("nav [data-category]")
    .forEach((b) =>
      b.classList.toggle("active", b.dataset.category === department),
    );
  document.querySelectorAll("[data-filter]").forEach((b) => {
    b.classList.toggle("selected", b.dataset.filter === filter);
    b.setAttribute("aria-pressed", b.dataset.filter === filter);
  });
  persist();
}
function open(title, html) {
  video.pause();
  $("#drawerTitle").textContent = title;
  $("#drawerBody").innerHTML = html;
  if (!$("#drawer").open) $("#drawer").showModal();
}
function rows(list, mode) {
  return list
    .map((x, i) => {
      const p = products.find((p) => p.id === (x.id || x));
      return `<div class="drawer-row"><img src="assets/${p.image}.jpg" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)}${x.size ? " · Size " + x.size : ""}</p><button data-product="${p.id}">View piece</button></div><button ${mode === "bag" ? `data-remove="${i}"` : `data-save="${p.id}"`}>Remove</button></div>`;
    })
    .join("");
}
function detail(id) {
  const p = products.find((p) => p.id === id);
  if (!p) return;
  open(
    "A closer look",
    `<div class="detail"><img class="drawer-image" src="assets/${p.image}.jpg" alt="${p.name}"><h3>${p.name}</h3><p class="detail-price">${money(p.price)}</p><div class="detail-colour"><i class="swatch" style="background:${p.hex}" aria-hidden="true"></i><span>Colour: ${p.colour}</span></div><p>${p.description}</p><p id="sizeLabel">Select size</p><div class="sizes" role="group" aria-labelledby="sizeLabel">${["XS", "S", "M", "L", "XL"].map((s) => `<button data-size="${s}" aria-pressed="false">${s}</button>`).join("")}</div><button class="button" id="addBag">Add to bag</button><details class="product-details"><summary>Product & styling details</summary><p>Part of the VÉLO ${p.category.toLowerCase()} edit. The photograph shows the styled look; accessories are styling suggestions.</p></details><p class="drawer-note">Illustrative price for this concept. No purchases or payments are taken.</p></div>`,
  );
  let size;
  document.querySelectorAll("[data-size]").forEach(
    (b) =>
      (b.onclick = () => {
        size = b.dataset.size;
        document.querySelectorAll("[data-size]").forEach((x) => {
          x.classList.toggle("selected", x === b);
          x.setAttribute("aria-pressed", x === b);
        });
      }),
  );
  $("#addBag").onclick = () => {
    if (!size) {
      $("#sizeLabel").textContent = "Please choose a size first.";
      return;
    }
    bag.push({ id, size });
    persist();
    toast("Added to your bag");
    $("#addBag").textContent = "Added ✓";
  };
}
function showBag() {
  open(
    "Your bag",
    bag.length
      ? rows(bag, "bag") +
          `<div class="total"><span>Subtotal</span><b>${money(bag.reduce((s, x) => s + products.find((p) => p.id === x.id).price, 0))}</b></div><p class="drawer-note">Your selection is saved on this device. Checkout is not connected in this concept; no order or payment will be taken.</p>`
      : '<p>Your bag is waiting for an everyday favourite.</p><button class="button" data-browse>Explore the edit ↗</button>',
  );
}
function showSaved() {
  open(
    "Your favourites",
    saved.length
      ? rows(saved, "saved")
      : '<p>Save the pieces you love using the heart on each product.</p><button class="button" data-browse>Explore the edit ↗</button>',
  );
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.category) {
    department = b.dataset.category;
    filter = "All";
    render();
    $("#collection").scrollIntoView({ behavior: "smooth" });
  }
  if (b.dataset.filter) {
    filter = b.dataset.filter;
    render();
  }
  if (b.dataset.product) detail(b.dataset.product);
  if (b.dataset.save) {
    const id = b.dataset.save;
    saved = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
    render();
    if (
      $("#drawer").open &&
      $("#drawerTitle").textContent === "Your favourites"
    )
      showSaved();
  }
  if (b.dataset.remove !== undefined) {
    bag.splice(Number(b.dataset.remove), 1);
    persist();
    showBag();
  }
  if (b.hasAttribute("data-browse")) {
    $("#drawer").close();
    department = "Women";
    filter = "All";
    render();
    $("#collection").scrollIntoView();
  }
  if (b.dataset.look) {
  const image = b.querySelector(".look-image img");
  const heading = b.querySelector(".look-caption h3");

  if (image) {
    const preview = document.createElement("img");

    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt;
    preview.className = "look-preview";

    open(
      heading ? heading.textContent : "A closer look",
      preview.outerHTML
    );
  }
}
  if (b.dataset.action === "bag") showBag();
  if (b.dataset.action === "saved") showSaved();
  if (b.dataset.action === "account")
    open(
      "Welcome to VÉLO",
      '<h3>Your everyday, all in one place.</h3><p class="drawer-note">Account sign-in is not connected in this prototype. Your bag and favourites are saved on this device, so you can keep exploring without an account.</p><button class="button" data-browse>Explore the edit ↗</button>',
    );
  if (b.dataset.action === "search") {
    open(
      "Find your favourite",
      '<label for="searchInput" class="drawer-note">Search the collection</label><input id="searchInput" placeholder="Try floral, denim or tailoring" type="search"><div id="searchResults"></div>',
    );
    const update = () => {
      const q = $("#searchInput").value.trim().toLowerCase(),
        found = products.filter((p) =>
          (p.name + " " + p.colour + " " + p.category)
            .toLowerCase()
            .includes(q),
        );
      $("#searchResults").innerHTML =
        found
          .map(
            (p) =>
              `<div class="drawer-row"><img src="assets/${p.image}.jpg" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)}</p><button data-product="${p.id}">View piece ↗</button></div></div>`,
          )
          .join("") ||
        '<p class="drawer-note">No matching pieces. Try “floral”, “denim” or “tailoring”.</p>';
    };
    $("#searchInput").oninput = update;
    update();
    $("#searchInput").focus();
  }
});
$("#sort").onchange = render;
$("#closeDrawer").onclick = () => $("#drawer").close();
$("#drawer").addEventListener("click", (e) => {
  if (
    e.target === $("#drawer") &&
    e.clientX < $("#drawer").getBoundingClientRect().left
  )
    $("#drawer").close();
});
const video = $("#heroVideo"),
  play = $("#playButton"),
  reduced = matchMedia("(prefers-reduced-motion: reduce)");
let userPaused = reduced.matches;
function syncPlay() {
  play.textContent = video.paused ? "▶" : "Ⅱ";
  play.setAttribute(
    "aria-label",
    video.paused ? "Play fashion video" : "Pause fashion video",
  );
}
play.onclick = () => {
  if (video.paused) {
    userPaused = false;
    video.play().catch(() => toast("Tap play to start the video"));
  } else {
    userPaused = true;
    video.pause();
  }
};
video.onplay = syncPlay;
video.onpause = syncPlay;
video.onended = () => {
  userPaused = true;
  syncPlay();
  play.setAttribute("aria-label", "Replay fashion video");
};
$("#lookButton").onclick = () => {
  detail(currentLook());
};
function currentLook() {
  return video.currentTime < 7
    ? "floral"
    : video.currentTime < 13
      ? "denim"
      : "tailoring";
}
video.addEventListener("timeupdate", () => {
  $("#lookLabel").textContent =
    video.currentTime < 7
      ? "01 / THE FLORAL MIDI"
      : video.currentTime < 13
        ? "02 / OFF-DUTY DENIM"
        : "03 / RELAXED TAILORING";
});
const observer = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) video.pause();
    else if (!userPaused) video.play().catch(() => {});
  },
  { threshold: 0.2 },
);
observer.observe(video);
reduced.addEventListener("change", () => {
  if (reduced.matches) {
    userPaused = true;
    video.pause();
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) video.pause();
});
$("#drawer").addEventListener("close", () => {
  if (!userPaused && !document.hidden) video.play().catch(() => {});
});
render();
