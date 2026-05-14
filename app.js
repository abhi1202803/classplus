const templates = [
  {
    id: "birthday-spark",
    title: "Birthday Spark",
    category: "Birthday",
    status: "Free",
    layout: "layout-birthday",
    headline: "Happy Birthday",
    note: "A bright little celebration"
  },
  {
    id: "anniversary-rose",
    title: "Rose Hour",
    category: "Anniversary",
    status: "Premium",
    layout: "layout-anniversary",
    headline: "Happy Anniversary",
    note: "Warm, romantic, and polished"
  },
  {
    id: "festival-glow",
    title: "Festival Glow",
    category: "Festivals",
    status: "Premium",
    layout: "layout-festival",
    headline: "Shubh Utsav",
    note: "Festive greeting with rich colors"
  },
  {
    id: "new-year",
    title: "Midnight Toast",
    category: "New Year",
    status: "Free",
    layout: "layout-newyear",
    headline: "Happy New Year",
    note: "Crisp, modern social card"
  },
  {
    id: "gratitude",
    title: "Thank You Note",
    category: "Thank You",
    status: "Free",
    layout: "layout-thanks",
    headline: "Thank You",
    note: "Soft and sincere"
  },
  {
    id: "daily-wish",
    title: "Morning Route",
    category: "Daily",
    status: "Premium",
    layout: "layout-commute",
    headline: "Good Morning",
    note: "Everyday wish template"
  }
];

const state = {
  category: "All",
  selectedId: templates[0].id,
  name: "Ananya Kapoor",
  photo: "",
  login: "Guest"
};

const grid = document.querySelector("#templateGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const nameInput = document.querySelector("#nameInput");
const photoInput = document.querySelector("#photoInput");
const profilePreview = document.querySelector("#profilePreview");
const avatarPicker = document.querySelector(".avatar-picker");
const avatarInitials = document.querySelector("#avatarInitials");
const shareSelected = document.querySelector("#shareSelected");
const premiumDialog = document.querySelector("#premiumDialog");
const closePremium = document.querySelector("#closePremium");
const upgradeButton = document.querySelector("#upgradeButton");
const toast = document.querySelector("#toast");

const palette = {
  "layout-birthday": ["#1e655f", "#123f4b", "#251b32", "#f8d572", "#f4826f"],
  "layout-anniversary": ["#783f6d", "#c85b55", "#ecb75d", "#ffffff"],
  "layout-festival": ["#7d2c1f", "#c4662c", "#f2bf55", "#ffffff"],
  "layout-newyear": ["#17233d", "#0d7c78", "#d8a23a", "#ffffff"],
  "layout-thanks": ["#335c67", "#fff0c7", "#e09f3e", "#202124"],
  "layout-commute": ["#2b303a", "#5f7a61", "#c5a880", "#ffffff"]
};

function initials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "ME";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function updateProfileVisuals() {
  avatarInitials.textContent = initials(state.name);
  if (state.photo) {
    profilePreview.src = state.photo;
    avatarPicker.classList.add("has-image");
  } else {
    profilePreview.removeAttribute("src");
    avatarPicker.classList.remove("has-image");
  }
}

function renderCategories() {
  const categories = ["All", ...new Set(templates.map((template) => template.category))];
  categoryTabs.innerHTML = categories
    .map(
      (category) =>
        `<button type="button" class="${category === state.category ? "active" : ""}" data-category="${category}" role="tab" aria-selected="${category === state.category}">${category}</button>`
    )
    .join("");
}

function profileBadge() {
  const image = state.photo
    ? `<img src="${state.photo}" alt="" />`
    : `<span class="initials">${initials(state.name)}</span>`;
  return `<div class="profile-badge">${image}<span>${state.name}</span></div>`;
}

function renderTemplates() {
  const shown =
    state.category === "All"
      ? templates
      : templates.filter((template) => template.category === state.category);

  grid.innerHTML = shown
    .map(
      (template) => `
        <article class="template-card ${template.id === state.selectedId ? "selected" : ""}" data-id="${template.id}">
          <span class="status-pill">${template.status}</span>
          <div class="template-stage ${template.layout}">
            ${profileBadge()}
            <div class="wish-copy">
              <p>From ${state.name}</p>
              <h3>${template.headline}</h3>
            </div>
          </div>
          <div class="template-meta">
            <div>
              <strong>${template.title}</strong>
              <span>${template.note}</span>
            </div>
            <button type="button" data-action="${template.status === "Premium" ? "premium" : "select"}">
              ${template.status === "Premium" ? "Unlock" : "Use"}
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function drawTemplate(ctx, template, profileImage) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const colors = palette[template.layout];

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(0.58, colors[1]);
  gradient.addColorStop(1, colors[2]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.24;
  ctx.fillStyle = colors[3] || "#fff";
  ctx.beginPath();
  ctx.arc(width * 0.78, height * 0.18, width * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 8;
  ctx.strokeRect(width * 0.09, height * 0.1, width * 0.62, height * 0.38);
  ctx.restore();

  ctx.fillStyle = "#ffffff";
  if (template.layout === "layout-thanks") ctx.fillStyle = "#202124";
  ctx.font = "900 34px Segoe UI, Arial";
  ctx.fillText(`From ${state.name}`, 70, height - 215);

  ctx.font = "900 86px Segoe UI, Arial";
  const words = template.headline.split(" ");
  let y = height - 135;
  let line = "";
  words.forEach((word, index) => {
    const test = `${line} ${word}`.trim();
    if (ctx.measureText(test).width > width - 140 && line) {
      ctx.fillText(line, 70, y);
      y += 88;
      line = word;
    } else {
      line = test;
    }
    if (index === words.length - 1) ctx.fillText(line, 70, y);
  });

  const badgeX = width - 330;
  const badgeY = 54;
  ctx.fillStyle = "rgba(255,255,255,0.24)";
  roundRect(ctx, badgeX, badgeY, 276, 74, 38);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.arc(badgeX + 37, badgeY + 37, 27, 0, Math.PI * 2);
  ctx.clip();
  if (profileImage) {
    ctx.drawImage(profileImage, badgeX + 10, badgeY + 10, 54, 54);
  } else {
    ctx.fillStyle = "#fff";
    ctx.fillRect(badgeX + 10, badgeY + 10, 54, 54);
    ctx.fillStyle = "#202124";
    ctx.font = "900 20px Segoe UI, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(initials(state.name), badgeX + 37, badgeY + 38);
  }
  ctx.restore();

  ctx.fillStyle = template.layout === "layout-thanks" ? "#202124" : "#ffffff";
  ctx.font = "800 25px Segoe UI, Arial";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(state.name, badgeX + 82, badgeY + 47);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

async function exportSelected() {
  const template = templates.find((item) => item.id === state.selectedId) || templates[0];
  if (template.status === "Premium") {
    premiumDialog.showModal();
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  const image = await loadImage(state.photo);
  drawTemplate(ctx, template, image);

  canvas.toBlob(async (blob) => {
    const file = new File([blob], `${template.id}.png`, { type: "image/png" });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: template.title,
        text: `${template.headline} from ${state.name}`,
        files: [file]
      });
      return;
    }

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("Share sheet unavailable here, so the greeting was downloaded.");
  }, "image/png");
}

nameInput.addEventListener("input", (event) => {
  state.name = event.target.value.trim() || "Your Name";
  updateProfileVisuals();
  renderTemplates();
});

photoInput.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.photo = reader.result;
    updateProfileVisuals();
    renderTemplates();
  };
  reader.readAsDataURL(file);
});

document.querySelectorAll("[data-login]").forEach((button) => {
  button.addEventListener("click", () => {
    state.login = button.dataset.login;
    document.querySelectorAll("[data-login]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    showToast(`${state.login} profile is ready for preview.`);
  });
});

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategories();
  renderTemplates();
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".template-card");
  if (!card) return;
  const template = templates.find((item) => item.id === card.dataset.id);
  if (!template) return;

  if (template.status === "Premium") {
    state.selectedId = template.id;
    renderTemplates();
    premiumDialog.showModal();
    return;
  }

  state.selectedId = template.id;
  renderTemplates();
  showToast(`${template.title} selected.`);
});

shareSelected.addEventListener("click", exportSelected);
closePremium.addEventListener("click", () => premiumDialog.close());
upgradeButton.addEventListener("click", () => {
  premiumDialog.close();
  showToast("Premium flow mocked for the internship demo.");
});

document.querySelector('[data-login="Guest"]').classList.add("active");
updateProfileVisuals();
renderCategories();
renderTemplates();
