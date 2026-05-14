const templates = [
  {
    id: "birthday-spark",
    title: "Candle Glow",
    category: "Birthday",
    status: "Free",
    image:
      "https://images.unsplash.com/photo-1509805735646-2f72b3272a7d?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(18, 19, 24, 0.5)",
    headline: "Happy Birthday",
    note: "Real cake photo from Unsplash"
  },
  {
    id: "birthday-blush",
    title: "Blush Cake",
    category: "Birthday",
    status: "Free",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(92, 32, 54, 0.48)",
    headline: "Birthday Love",
    note: "Soft bakery card"
  },
  {
    id: "birthday-premium",
    title: "Confetti Table",
    category: "Birthday",
    status: "Premium",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(16, 24, 42, 0.5)",
    headline: "Celebrate Big",
    note: "Premium party layout"
  },
  {
    id: "anniversary-rose",
    title: "Golden Hour",
    category: "Anniversary",
    status: "Free",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(55, 31, 40, 0.48)",
    headline: "Forever Us",
    note: "Warm couple photograph"
  },
  {
    id: "anniversary-premium",
    title: "Rose Promise",
    category: "Anniversary",
    status: "Premium",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(80, 24, 38, 0.46)",
    headline: "Happy Anniversary",
    note: "Premium romantic card"
  },
  {
    id: "diwali-candles",
    title: "Diyas",
    category: "Festivals",
    status: "Free",
    image:
      "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(64, 28, 12, 0.48)",
    headline: "Happy Diwali",
    note: "Festival lights from Unsplash"
  },
  {
    id: "festival-glow",
    title: "Sparkler Night",
    category: "Festivals",
    status: "Premium",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(62, 25, 14, 0.5)",
    headline: "Shubh Utsav",
    note: "Premium celebration card"
  },
  {
    id: "holiday-pine",
    title: "Pine Lights",
    category: "Festivals",
    status: "Premium",
    image:
      "https://images.unsplash.com/photo-1481366574263-f643ed72bccc?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(6, 42, 38, 0.5)",
    headline: "Season's Greetings",
    note: "Holiday lights by Joanna Kosinska"
  },
  {
    id: "new-year",
    title: "Midnight Toast",
    category: "New Year",
    status: "Free",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(12, 20, 40, 0.58)",
    headline: "Happy New Year",
    note: "Concert lights photo"
  },
  {
    id: "new-year-premium",
    title: "Firework Sky",
    category: "New Year",
    status: "Premium",
    image:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(15, 18, 36, 0.52)",
    headline: "New Beginnings",
    note: "Premium fireworks card"
  },
  {
    id: "gratitude",
    title: "Wooden Thanks",
    category: "Thank You",
    status: "Free",
    image:
      "https://images.unsplash.com/photo-1608389168343-ba8aa0cb3a63?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(42, 32, 24, 0.44)",
    headline: "Thank You",
    note: "Warm sign photo"
  },
  {
    id: "thank-you-premium",
    title: "Paper Note",
    category: "Thank You",
    status: "Premium",
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(36, 34, 28, 0.42)",
    headline: "With Gratitude",
    note: "Premium stationery look"
  },
  {
    id: "daily-wish",
    title: "Cafe Morning",
    category: "Daily",
    status: "Free",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(60, 42, 28, 0.48)",
    headline: "Good Morning",
    note: "Coffee photo from Unsplash"
  },
  {
    id: "good-luck",
    title: "Clean Desk",
    category: "Daily",
    status: "Premium",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    tint: "rgba(28, 38, 36, 0.48)",
    headline: "Good Luck",
    note: "Premium everyday greeting"
  }
];

const state = {
  category: "All",
  selectedId: templates[0].id,
  name: "Your Name",
  email: "guest@wishcraft.app",
  photo: "",
  login: "Guest"
};

const loginScreen = document.querySelector("#loginScreen");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginNameInput = document.querySelector("#loginNameInput");
const emailInput = document.querySelector("#emailInput");
const loginError = document.querySelector("#loginError");
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
const accountName = document.querySelector("#accountName");
const accountEmail = document.querySelector("#accountEmail");
const previewDialog = document.querySelector("#previewDialog");
const closePreview = document.querySelector("#closePreview");
const previewArtwork = document.querySelector("#previewArtwork");
const previewStatus = document.querySelector("#previewStatus");
const previewTitle = document.querySelector("#previewTitle");
const previewNote = document.querySelector("#previewNote");
const previewUse = document.querySelector("#previewUse");
const previewShare = document.querySelector("#previewShare");
const toast = document.querySelector("#toast");

function initials(name) {
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("") || "ME"
  );
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function updateProfileVisuals() {
  avatarInitials.textContent = initials(state.name);
  accountName.textContent = state.name;
  accountEmail.textContent = state.email;
  if (state.photo) {
    profilePreview.src = state.photo;
    avatarPicker.classList.add("has-image");
  } else {
    profilePreview.removeAttribute("src");
    avatarPicker.classList.remove("has-image");
  }
}

function templateById(id) {
  return templates.find((item) => item.id === id) || templates[0];
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
          <span class="status-pill ${template.status.toLowerCase()}">${template.status}</span>
          <div class="template-stage" style="--photo: url('${template.image}'); --tint: ${template.tint}">
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
            <button type="button">${template.status === "Premium" ? "Unlock" : "Use"}</button>
          </div>
        </article>
      `
    )
    .join("");
}

function cardArtwork(template, className = "template-stage") {
  return `
    <div class="${className}" style="--photo: url('${template.image}'); --tint: ${template.tint}">
      ${profileBadge()}
      <div class="wish-copy">
        <p>From ${state.name}</p>
        <h3>${template.headline}</h3>
      </div>
    </div>
  `;
}

function renderPreview(template) {
  previewArtwork.innerHTML = cardArtwork(template, "template-stage preview-stage");
  previewStatus.textContent = `${template.status} template`;
  previewTitle.textContent = template.title;
  previewNote.textContent = template.note;
  previewUse.textContent = template.status === "Premium" ? "Unlock premium" : "Use this card";
  previewShare.classList.toggle("is-hidden", template.status === "Premium");
}

function openPreview(template) {
  state.selectedId = template.id;
  renderTemplates();
  renderPreview(template);
  previewDialog.showModal();
}

function drawCoverImage(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.width, height / image.height);
  const scaledWidth = image.width * scale;
  const scaledHeight = image.height * scale;
  const offsetX = x + (width - scaledWidth) / 2;
  const offsetY = y + (height - scaledHeight) / 2;
  ctx.drawImage(image, offsetX, offsetY, scaledWidth, scaledHeight);
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

function drawTemplate(ctx, template, profileImage, backgroundImage) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  if (backgroundImage) {
    drawCoverImage(ctx, backgroundImage, 0, 0, width, height);
  } else {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#202124");
    gradient.addColorStop(1, "#cf5c36");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  ctx.fillStyle = template.tint || "rgba(0,0,0,0.48)";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255,255,255,0.38)";
  ctx.lineWidth = 5;
  roundRect(ctx, 58, 58, width - 116, height - 116, 34);
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
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

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 25px Segoe UI, Arial";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(state.name, badgeX + 82, badgeY + 47);
}

function loadImage(src, useCors = false) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const image = new Image();
    if (useCors) image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    try {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    } catch {
      resolve(null);
    }
  });
}

async function createGreetingBlob(template) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  const profileImage = await loadImage(state.photo);
  const background = await loadImage(template.image, true);

  drawTemplate(ctx, template, profileImage, background);
  let blob = await canvasToBlob(canvas);

  if (!blob && background) {
    drawTemplate(ctx, template, profileImage, null);
    blob = await canvasToBlob(canvas);
  }

  return blob;
}

async function shareBlobOrFallback(blob, template) {
  const shareText = `${template.headline} from ${state.name}`;

  if (blob) {
    const file = new File([blob], `${template.id}.png`, { type: "image/png" });
    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ title: template.title, text: shareText, files: [file] });
        showToast("Greeting shared successfully.");
        return;
      } catch (error) {
        if (error.name === "AbortError") {
          showToast("Sharing cancelled.");
          return;
        }
      }
    }

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("Native share is not available here, so the greeting was downloaded.");
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: template.title,
        text: shareText,
        url: window.location.href
      });
      showToast("Greeting link shared.");
      return;
    } catch (error) {
      if (error.name === "AbortError") {
        showToast("Sharing cancelled.");
        return;
      }
    }
  }

  showToast("This browser blocked image sharing. Try Chrome or Safari on mobile.");
}

async function exportSelected() {
  const template = templateById(state.selectedId);
  if (template.status === "Premium") {
    premiumDialog.showModal();
    return;
  }

  showToast("Preparing your greeting...");
  const blob = await createGreetingBlob(template);
  await shareBlobOrFallback(blob, template);
}

function enterApp(method, options = {}) {
  state.login = method;
  state.name = options.name || loginNameInput.value.trim() || "Guest User";
  state.email = options.email || emailInput.value.trim() || "guest@wishcraft.app";
  nameInput.value = state.name;
  updateProfileVisuals();
  renderTemplates();
  loginScreen.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
  showToast(`Welcome, ${state.name}. Pick a template to personalize.`);
}

document.querySelectorAll("[data-auth]").forEach((button) => {
  button.addEventListener("click", () =>
    enterApp(button.dataset.auth, {
      name: loginNameInput.value.trim() || "Guest User",
      email: "guest@wishcraft.app"
    })
  );
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = loginNameInput.value.trim();
  const email = emailInput.value.trim();
  if (!name || !email || !emailInput.checkValidity()) {
    loginError.textContent = "Please enter a valid name and email to continue.";
    return;
  }
  loginError.textContent = "";
  enterApp("Email", { name, email });
});

nameInput.addEventListener("input", (event) => {
  state.name = event.target.value.trim() || "Your Name";
  loginNameInput.value = state.name;
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
  const template = templateById(card.dataset.id);
  if (!template) return;
  openPreview(template);
});

shareSelected.addEventListener("click", exportSelected);
closePremium.addEventListener("click", () => premiumDialog.close());
closePreview.addEventListener("click", () => previewDialog.close());
previewUse.addEventListener("click", () => {
  const template = templateById(state.selectedId);
  if (template.status === "Premium") {
    previewDialog.close();
    premiumDialog.showModal();
    return;
  }

  previewDialog.close();
  showToast(`${template.title} selected.`);
});
previewShare.addEventListener("click", exportSelected);
upgradeButton.addEventListener("click", () => {
  premiumDialog.close();
  showToast("Premium flow mocked for the internship demo.");
});

updateProfileVisuals();
renderCategories();
renderTemplates();
