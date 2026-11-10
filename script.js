const products = [
  {
    id: "denim",
    name: "Pearl-Embellished Oversized Jumper — Black",
    price: 65,
    category: "Everyday",
    colour: "Black / Sand",
    hex: "#1d1d1d",
    image: "Black pearl sweater winter fashion portrait.png",
    description:
      "Oversized jumper in a soft, brushed knit with cream pearl-style beads scattered across the body and sleeves. Round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem. Styled with ivory wide-leg trousers and black ankle boots.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "tailoring",
    name: "Relaxed blazer & trouser look",
    price: 129,
    category: "Tailoring",
    colour: "Sand",
    hex: "#c0ae91",
    image: "Relaxed blazer & trouser look.png",
    description:
      "A relaxed beige blazer and matching trousers create a coordinated tailoring look. A white top keeps the palette light, with brown accessories completing an outfit that moves easily from daytime plans to an evening out.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "floral",
    name: "Oversized High-Neck Jumper",
    price: 59,
    category: "Dresses",
    colour: "Olive Green",
    hex: "#8f8d07",
    image: "Olive sweater, tailored trousers.png",
    description:
      "An ivory midi dress with a delicate blue floral pattern, a square neckline and shoulder straps. The skirt falls below the knee, styled here with a straw bag and neutral sandals for a light summer look.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "black-dress",
    name: "Long Tailored Coat",
    price: 79,
    category: "Dresses",
    colour: "Camel",
    hex: "#c49703",
    image: "Camel layers in soft studio light.png",
    description:
      "Long camel coat with notched lapels, long sleeves and side pockets. An open front reveals an ivory cable-knit roll-neck jumper underneath. Styled with dark indigo jeans and brown Chelsea boots.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "weekend",
    name: "Sweatshirt & leggings look",
    price: 69,
    category: "Everyday",
    colour: "Rose / charcoal",
    hex: "#bd9291",
    image: "Sweatshirt & leggings look.png",
    description:
      "A pink sweatshirt paired with charcoal leggings for a relaxed everyday outfit. The loose-looking top contrasts with the close-fitting leggings, while white trainers and a black bag complete the casual styling.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "coat",
    name: "Camel coat & denim look",
    price: 149,
    category: "Tailoring",
    colour: "Camel",
    hex: "#a88460",
    image: "Camel coat & denim look.png",
    description:
      "A camel coat layered over a light-coloured knit and dark blue jeans. A burgundy scarf adds colour around the neckline, while brown boots give the outfit a coordinated winter finish.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "street",
    name: "Fair Isle Knit Jumper",
    price: 75,
    category: "Everyday",
    colour: "Beige, Black & Cream",
    hex: "#747a58",
    image: "Beige Fair Isle Knitwear Look.png",
    description:
      "Relaxed-fit jumper in a brushed knit with geometric patterns across the shoulders, chest and lower sleeves. Round, rib-trimmed neckline, long sleeves and ribbing at the cuffs and hem. Styled with ivory corduroy trousers and tan ankle boots.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "sari",
    name: "Double-Breasted Peacoat",
    price: 119,
    category: "Occasion",
    colour: "Charcoal Grey",
    hex: "#323333",
    image: "Burgundy Knit Winter Studio Look.png",
    description:
      "Short charcoal-grey coat with wide notched lapels, a double-breasted button front and button-tab cuffs. Layered over a burgundy rib-knit roll-neck jumper. Styled with a grey checked midi skirt, opaque black tights and black knee-high boots.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "summer",
    name: "Zip-Through Teddy Fleece Jacket",
    price: 79,
    category: "Everyday",
    colour: "Taupe",
    hex: "#d5c9b4",
    image: "Taupe teddy jacket studio fashion look.png",
    description:
      "Relaxed-fit jacket in textured teddy fleece with a high stand collar and tonal front zip. Long sleeves, two large front patch pockets and a straight hem. Styled with black straight-leg jeans and dark brown chunky Chelsea boots.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },

  {
    id: "burgundy-coat",
    name: "Burgundy coat & black dress look",
    price: 139,
    category: "Tailoring",
    colour: "Burgundy / black",
    hex: "#682535",
    image: "large1.jpg",
    featuredOnly: true,
    description:
      "A long burgundy coat layered over a black dress for a tonal winter look. The open-front styling reveals the darker outfit underneath, with knee-high black boots and a structured handbag completing the silhouette.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "navy-duffle",
    name: "Navy duffle coat & knitwear look",
    price: 129,
    category: "Tailoring",
    colour: "Navy / grey",
    hex: "#202c40",
    image: "large2.jpg",
    featuredOnly: true,
    description:
      "A navy duffle coat styled with a textured jumper, grey trousers and a checked scarf. The layered look pairs deep navy with soft grey for an understated winter outfit, finished with brown boots.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "brown-jacket",
    name: "Brown jacket & trouser look",
    price: 119,
    category: "Tailoring",
    colour: "Brown / cream",
    hex: "#886447",
    image: "large3.jpg",
    featuredOnly: true,
    description:
      "A brown jacket layered over a cream top and paired with tan trousers. The combination of warm neutral shades creates a coordinated everyday outfit, finished with dark boots.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
  {
    id: "charcoal-coat",
    name: "Charcoal coat & denim look",
    price: 149,
    category: "Tailoring",
    colour: "Charcoal / indigo",
    hex: "#454748",
    image: "Charcoal.png",
    featuredOnly: true,
    description:
      "A long charcoal coat layered over a cream jumper and blue jeans. A burgundy scarf introduces a warm accent against the darker outerwear, while brown boots complete the winter styling.",
    // Replace null only with confirmed information for this product.
    specifications: {
      includedItems: null, // e.g. "Coat only" once confirmed
      modelHeight: null,
      modelSize: null,
      measurementSize: null,
      sleeveLengthCm: null,
      shoulderWidthCm: null,
      backLengthCm: null,
      length: null,
      sleeveStyle: null,
      fit: null,
      collar: null,
      composition: null,
      lining: null,
      care: null,
      safety: null,
    },
  },
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
            filter === "All" ||
            (filter === "Winter"
              ? p.featuredOnly || p.id === "coat"
              : p.category === filter),
        )
      : [];
  if ($("#sort").value === "low") list.sort((a, b) => a.price - b.price);
  if ($("#sort").value === "high") list.sort((a, b) => b.price - a.price);
  $("#products").innerHTML = list
    .map(
      (p) =>
        `<article><div class="product-image"><button data-product="${p.id}" aria-label="View ${p.name}">${productPhoto(p)}</button><button class="save" data-save="${p.id}" aria-label="${saved.includes(p.id) ? "Unsave" : "Save"} ${p.name}" aria-pressed="${saved.includes(p.id)}">${heart}</button></div><div class="product-info"><span class="product-tag">New arrival</span><button data-product="${p.id}">${p.name}</button><span class="product-price">${money(p.price)}</span></div><div class="product-meta"><i class="swatch" style="background:${p.hex}"></i>${p.colour}</div></article>`,
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
  renderFeatured();
  persist();
}
function open(title, html) {
  $("#drawerTitle").textContent = title;
  $("#drawerBody").innerHTML = html;
  if (!$("#drawer").open) $("#drawer").showModal();
}
function rows(list, mode) {
  return list
    .map((x, i) => {
      const p = products.find((p) => p.id === (x.id || x));
      return `<div class="drawer-row">${productPhoto(p)}<div><h3>${p.name}</h3><p>${money(p.price)}${x.size ? " · Size " + x.size : ""}</p><button data-product="${p.id}">View piece</button></div><button ${mode === "bag" ? `data-remove="${i}"` : `data-save="${p.id}"`}>Remove</button></div>`;
    })
    .join("");
}

// These native accordions work with the existing .product-details CSS.
function escapeProductText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function productInformation(p) {
  const s = p.specifications || {};
  const placeholder = "Not yet confirmed (placeholder)";
  const value = (v) => v === null || v === undefined || v === "" ? placeholder : v;
  const measurement = (v) => {
    if (v === null || v === undefined || v === "") return placeholder;
    const size = s.measurementSize ? `Size ${s.measurementSize}` : "size not yet confirmed";
    return `${v} cm (${size})`;
  };
  const rows = (items) => `<dl>${items.map(([label, text]) =>
    `<dt><strong>${escapeProductText(label)}</strong></dt><dd>${escapeProductText(value(text))}</dd>`
  ).join("")}</dl>`;
  const section = (title, content) => `<details class="product-details"><summary>${title}</summary>${content}</details>`;
  return [
    section("Product details", rows([
      ["Collection", p.category], ["Colour", p.colour],
      ["What's included", s.includedItems], ["Length", s.length],
      ["Sleeve length", s.sleeveStyle], ["Collar", s.collar]
    ])),
    section("Size & fit", rows([
      ["Model height", s.modelHeight], ["Model wears", s.modelSize],
      ["Fit", s.fit], ["Measurement size", s.measurementSize],
      ["Sleeve measurement", measurement(s.sleeveLengthCm)],
      ["Shoulder width", measurement(s.shoulderWidthCm)],
      ["Back length", measurement(s.backLengthCm)]
    ]) + '<p class="drawer-note">Measurements are not available yet. The size options in this concept are illustrative.</p>'),
    section("Material & care", rows([
      ["Composition", s.composition], ["Lining", s.lining], ["Care instructions", s.care]
    ])),
    section("Product safety", rows([["Supplier safety information", s.safety]]))
  ].join("");
}

function detail(id) {
  const p = products.find((p) => p.id === id);
  if (!p) return;
  open(
    "A closer look",
    `<div class="detail">${productPhoto(p, "drawer-image")}<h3>${p.name}</h3><p class="detail-price">${money(p.price)}</p><div class="detail-colour"><i class="swatch" style="background:${p.hex}" aria-hidden="true"></i><span>Colour: ${p.colour}</span></div><p>${p.description}</p><p id="sizeLabel">Select size</p><div class="sizes" role="group" aria-labelledby="sizeLabel">${["XS", "S", "M", "L", "XL"].map((s) => `<button data-size="${s}" aria-pressed="false">${s}</button>`).join("")}</div><button class="button" id="addBag">Add to bag</button>${productInformation(p)}<p class="drawer-note">Illustrative price for this concept. No purchases or payments are taken.</p></div>`,
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
    $("#collection").hidden = false;
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
    $("#collection").hidden = false;
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

      open(heading ? heading.textContent : "A closer look", preview.outerHTML);
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
              `<div class="drawer-row">${productPhoto(p)}<div><h3>${p.name}</h3><p>${money(p.price)}</p><button data-product="${p.id}">View piece ↗</button></div></div>`,
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
render();

function productPhoto(p, className = "") {
  const filename = /\.(jpg|jpeg|png|webp)$/i.test(p.image)
    ? p.image
    : `${p.image}.jpg`;

  return `
    <img
      class="${className}"
      src="assets/${filename}"
      alt="${p.name}"
      loading="lazy"
    >
  `;
}

function renderFeatured() {
  $("#featured").innerHTML = products
    .filter((p) => p.featuredOnly)
    .map(
      (p) =>
        `<article class="featured-card"><button class="photo-button" data-product="${p.id}" aria-label="View ${p.name}">${productPhoto(p)}</button><div class="featured-title"><button data-product="${p.id}">${p.name}</button><span>${money(p.price)}</span></div><div class="featured-bottom"><span>${p.colour}</span><button class="save" data-save="${p.id}" aria-label="${saved.includes(p.id) ? "Remove from" : "Add to"} wishlist: ${p.name}" aria-pressed="${saved.includes(p.id)}">${heart}</button></div></article>`,
    )
    .join("");
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.shop) {
    department = "Women";
    filter = b.dataset.shop;
    render();
    $("#collection").hidden = false;
    $("#collection").scrollIntoView({ behavior: "smooth" });
  }
  if (b.dataset.info) {
    const content = {
      Contact:
        "VÉLO is a portfolio store concept. Customer support is not connected.",
      Delivery:
        "This is a demonstration store. No orders are shipped and no delivery fees are charged.",
      Returns:
        "Purchases are not enabled in this concept, so no returns are processed.",
      "Size guide":
        "XS, S, M, L and XL are demonstration options. Product-specific measurements should be added before this store accepts orders.",
      "Our story":
        "VÉLO explores considered clothing and easy everyday dressing through a clean, accessible shopping experience.",
      Materials:
        "Material descriptions in this concept follow the supplied reference. Confirm composition and care instructions with the supplier before selling.",
    };
    open(b.dataset.info, `<p>${content[b.dataset.info]}</p>`);
  }
});
$("#newsletter").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#newsletterStatus").textContent =
    "Thanks for your interest. Newsletter signup is not connected in this demo; your email has not been submitted.";
});
$("#drawer").addEventListener(
  "close",
  () => (document.body.style.overflow = ""),
);
$("#drawer").addEventListener("toggle", () => {
  document.body.style.overflow = $("#drawer").open ? "hidden" : "";
});
