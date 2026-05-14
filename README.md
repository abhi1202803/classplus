# Wishcraft Studio

A polished static web app for creating personalized greeting cards and wishes. Users can enter a name, add a profile photo, preview that identity across categorized templates, unlock premium-template messaging, and export/share a merged greeting image.

## Features

- Guest, Google, and Email login entry points for the demo flow
- Dedicated login page before the app workspace
- Profile setup with name and profile picture
- Categorized free and premium greeting templates for birthdays, anniversaries, festivals, daily wishes, and more
- Real Unsplash photography used as card backgrounds
- Live preview with automatic name and avatar overlay
- Free and premium template states
- Premium upsell popup for locked templates
- Canvas-based image export with native Web Share API support and download fallback
- Fully static deployment suitable for GitHub Pages

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Demo Flow

1. Choose Guest, Google, or Email.
2. Add a name and optionally upload a profile photo.
3. Browse categories and select a free template.
4. Click a premium template to view the subscription popup.
5. Click **Share selected** to generate a merged image and open the native share sheet, with download fallback on desktop browsers.

## Image Credits

Template photography is sourced from Unsplash search results for birthday cakes, Diwali lights, couple flowers, thank-you notes, morning coffee, New Year celebrations, and holiday lights. Photographer names are noted inside the template descriptions where available.

## Deploy On GitHub Pages

This repository is ready for GitHub Pages because the app is plain HTML, CSS, and JavaScript at the repository root.

1. Push the `main` branch to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose `main` and `/root`.

The app will be available at:

```text
https://abhi1202803.github.io/classplus/
```
