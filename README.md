# Smart Shopping List Organiser

A static website that sorts a shopping list by supermarket aisle order.

## Aisle order

1. Salad / fruit
2. Meat
3. Cheese & milk
4. Curry sauce, ingredients, spices
5. Crisps
6. Coke

Unknown or low-confidence items are moved into **Needs review**.

## Features

- Larger built-in food taxonomy for common UK shopping terms
- Alias handling, including brands and common misspellings
- Typo-tolerant fuzzy matching using Damerau-Levenshtein distance
- Logic overrides for strong category words such as `curry sauce`, `chicken`, `brie`, `coke`
- Confidence scoring with an adjustable review threshold
- Custom rules saved in browser localStorage
- Export/import custom rules as JSON
- Copy and download sorted list
- Works locally, no build step required

## Run locally

Open `index.html` in a browser.

## Deploy

Upload these files to any static host:

- `index.html`
- `styles.css`
- `app.js`

Suitable options include GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any basic web hosting package.

## Improving classification

The built-in dictionary is intentionally editable inside `app.js` under `TAXONOMY`. Add more phrases to the appropriate aisle array.

For personal household rules, use the website's **Custom rules** section. These are stored locally in the browser and can be exported/imported.
