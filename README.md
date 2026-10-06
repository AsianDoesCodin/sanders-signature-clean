# Sanders Signature Clean demo studio

Six interactive website concepts for Sanders Signature Clean, LLC, presented in a comparison gallery with desktop/mobile previews and fullscreen exploration.

[Live studio](https://sanders-signature-clean.vercel.app/) · [Business source](https://cm.hsvchamber.org/list/member/sanders-signature-clean-llc-44464)

## Local development

Use Node.js 24.

```sh
npm ci
npm run dev
```

The development server runs at `http://127.0.0.1:5173/`.

```sh
npm run build
npm run preview
```

The production output is `dist/`; the preview runs at `http://127.0.0.1:4173/`.

## Deployment

The Vercel project is `sanders-signature-clean` in the Joshua Sajor workspace (`joshua-sajor`). It builds the repository root with `npm ci` and `npm run build`, serving `dist/`. The intended production branch is `main`.

The repository contains the source and optimized public assets. Local verification captures, original image archives, dependencies, build output, and deployment metadata are excluded from Git.

## Demo behavior

All six concepts include usable demo journeys. Enquiries stay in browser memory and send no messages. Brand identities are proposals; imagery includes AI-generated illustrations. Verified business information is shared in `src/data.js`.
