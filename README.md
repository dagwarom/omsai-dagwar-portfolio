# Omsai Dagwar Portfolio

## Local Development

```sh
npm install
npm run dev
```

The app runs with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

## Build

```sh
npm run build
```

## Notes

- The `tailwind-plus` folder is kept as design inspiration.
- Keep the project structure and shared components intact unless you are making a deliberate UI change.
- The contact form sends submissions to the Formspree endpoint stored in `VITE_FORMSPREE_ENDPOINT`.
- Each message is delivered to the email address connected to that Formspree form.
