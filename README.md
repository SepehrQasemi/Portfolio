# Sepehr Portfolio (ATA CRM Delivery Hub)

Static HTML/CSS/JS portfolio for the final ATA CRM project submission.

## Pages
- `index.html`: landing and project snapshot
- `travaux.html`: practical assignments from the module
- `cours.html`: course concepts used in implementation
- `certifications.html`: validated skills and outcomes
- `projet-final.html`: complete ATA CRM project page (includes demo flow + screenshots)
- `deliverables.html`: centralized download and evidence links
- `ressources.html`: official technical references
- `a-propos.html`: profile and contact

## Linked Deliverables
- Portfolio repository: https://github.com/SepehrQasemi/Portfolio
- CRM repository: https://github.com/SepehrQasemi/crm-food-trading
- CRM demo: https://web-brown-delta-70.vercel.app
- Portfolio (GitHub Pages): https://sepehrqasemi.github.io/Portfolio/
- CRM compliance matrix: https://github.com/SepehrQasemi/crm-food-trading/blob/main/docs/final-compliance-checklist.md
- CRM baseline freeze: https://github.com/SepehrQasemi/crm-food-trading/blob/main/docs/release-baseline-v1.md
- CRM QA proof: https://github.com/SepehrQasemi/crm-food-trading/blob/main/docs/qa-proof-2026-03-11.md

## Useful folders
- Reports / documents: `assets/files/`
- CRM screenshots: `assets/screenshots/`
- Styles: `assets/css/style.css`
- Shared script: `assets/js/main.js`

## Local usage
Open `index.html` in a browser (or use VS Code Live Server).

## GitHub Pages publishing
1. Push to `main`
2. GitHub -> Settings -> Pages
3. Source: Deploy from a branch
4. Branch: `main`, folder: `/ (root)`

## Governance
- CI workflow: `.github/workflows/ci.yml` (`lint-build`)
- Protected branch: `main`
- Required check before merge: `lint-build`

## Language policy
- Current website language: English only
- No public presentation page in portfolio navigation
