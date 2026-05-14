# Technical Approach

## Problem Solving

The product requirement centers on creating personalized greeting cards where a user's name and profile picture are automatically placed on selected greeting templates. The implementation keeps the visual preview and final exported image aligned by using shared template data for both the DOM preview and the canvas export.

Each template stores:

- Category
- Free or premium status
- Visual layout class
- Greeting headline
- Supporting note

The live grid renders cards from this shared data. When the user changes their name or uploads a profile image, the state updates once and all previews re-render immediately.

## Image Overlay Logic

The browser preview uses regular HTML and CSS:

- The template background is drawn with layered CSS backgrounds.
- The user's name is placed in a glass-style badge.
- The uploaded profile image appears as a circular avatar.
- If no photo is uploaded, initials are generated from the user's name.

For sharing, the app creates a single merged image using the Canvas API:

1. Create a 1080 × 1350 canvas for social-card output.
2. Draw the selected template background and decorative shapes.
3. Draw the greeting headline and sender name.
4. Draw the user avatar or generated initials.
5. Convert the canvas to a PNG blob.
6. Share via the Web Share API when available, otherwise download the PNG.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas API
- Web Share API
- GitHub Pages for hosting

No third-party frontend framework is required, which keeps the submission lightweight and easy to review.

## Challenges

The main challenge is keeping the live preview and export output consistent. A full production app would likely use a single rendering pipeline or server-side composition, but for this task the shared template configuration keeps the two paths synchronized while staying simple enough for a static deployment.

Another challenge is sharing behavior across browsers. Mobile browsers commonly support native file sharing, while many desktop browsers do not. The app handles this by falling back to a PNG download.

## Future Improvements

- Add real authentication through Firebase, Supabase, or OAuth providers.
- Store user profiles and recent exports.
- Add a backend image-rendering service for exact preview/export parity.
- Integrate payments for premium subscriptions.
- Add admin tooling for uploading new template backgrounds.
- Add analytics for template usage and share conversion.
