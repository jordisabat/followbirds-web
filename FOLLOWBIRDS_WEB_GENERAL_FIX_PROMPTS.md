# FollowBirds Web — General Page Fix Prompts

Use this file before working section by section.

The goal is to improve the full Astro marketing page first: theme, fonts, spacing, layout, visual hierarchy, CTAs, and overall product positioning.

---

## 0. How to use with the code agent

Prompt the agent with:

```text
Read FOLLOWBIRDS_WEB_GENERAL_FIX_PROMPTS.md.
Apply Prompt 1 first.
Keep the page static, fast, responsive and Astro-first.
Do not redesign section content deeply yet. Fix the global page quality, theme, layout, typography and CTA hierarchy.
```

After that, work section by section using the section prompts.

---

## 1. General full-page improvement prompt

```text
We are improving the FollowBirds Astro marketing website.

Task:
Fix the full page globally before working section by section.

Do not rebuild the site from zero.
Do not turn it into a React SPA.
Do not add unnecessary client-side JavaScript.
Do not change the product strategy.

Main positioning:
FollowBirds helps birding guides run better tours and gives every participant a beautiful birdwatching report.

Audience priority:
1. Professional birding guides in Algarve
2. Birdwatchers joining tours

Geographic strategy:
Algarve first. Do not position this as a worldwide generic bird database.

Core story:
Tours → live observations → shared checklists → automatic reports → saved memories.

Global improvements needed:
- Improve visual hierarchy.
- Make CTAs consistent.
- Make guide value clearer.
- Make reports feel like the strongest differentiator.
- Improve typography and spacing.
- Improve responsive layout.
- Remove placeholder-looking elements.
- Make the page feel premium, natural and product-focused.

Primary CTA:
Become a Guide

Secondary CTA:
See Example Report

Tertiary CTA:
Open Web App

Apply this hierarchy across the page.

Do not let “Open Web App” compete visually with “Become a Guide”.

Acceptance criteria:
- The page communicates the value in 5 seconds.
- The page clearly sells guide workflows, not just bird browsing.
- Reports are visually and verbally important.
- The page feels consistent and polished on mobile and desktop.
- No placeholder labels remain visible.
```

---

## 2. Theme and visual direction prompt

```text
Improve the global visual theme of the FollowBirds marketing page.

Design direction:
Premium nature app.
Clean, warm, calm, credible.
More birdwatching platform than generic SaaS landing page.

Use:
- Deep green for primary CTAs.
- Cream/off-white backgrounds.
- Dark readable text.
- Soft natural gradients.
- Rounded cards.
- Subtle shadows.
- High-quality birding/report/app mockup visuals.

Suggested palette:
- Primary green: #2F7D32 or similar deep natural green.
- Dark green: #12351F.
- Cream background: #F7F3E8 or #FAF7EF.
- Soft green background: #EAF3E5.
- Text dark: #142016.
- Muted text: #5E6B60.
- Accent purple only if needed: #6B4FA3.

Avoid:
- Generic SaaS blue.
- Too many gradients.
- Harsh white sections everywhere.
- Heavy shadows.
- Neon colors.
- Corporate stock-photo feeling.

Global body:
- Use a warm off-white base background.
- Alternate sections with subtle cream/green-tinted backgrounds.
- Keep white cards inside soft backgrounds.

Acceptance criteria:
- Page feels visually coherent.
- Primary CTA color is consistent.
- Backgrounds feel natural and premium.
- The site does not look like a default template.
```

---

## 3. Typography prompt

```text
Improve global typography.

Preferred font:
Use Fira Sans if available or easy to add.
Fallback:
Use Inter or system sans-serif.

Typography rules:
- One h1 only.
- Strong h1, clear h2, compact paragraphs.
- Avoid long line lengths.
- Use readable paragraph width around 60–75 characters.
- Use consistent heading spacing.
- Use sentence case for headings unless there is a strong reason.

Suggested scale:
Desktop:
- h1: 56–72 px, line-height 0.95–1.05
- h2: 38–48 px
- h3: 22–28 px
- body: 17–19 px
- small: 14–15 px

Mobile:
- h1: 40–48 px
- h2: 30–36 px
- h3: 21–24 px
- body: 16–17 px

Style:
- Headings should be confident and direct.
- Paragraphs should be short.
- Feature card text should be scannable.

Acceptance criteria:
- Text hierarchy is obvious.
- Hero headline is strong.
- Section headings are consistent.
- Paragraphs are not too wide on desktop.
```

---

## 4. Layout and spacing prompt

```text
Improve global layout and spacing.

Use a consistent max-width container:
- 1120–1200 px for main content.
- Wider only for full-bleed visual sections when needed.

Section padding:
Desktop:
- 96–140 px vertical padding depending on section importance.

Mobile:
- 56–80 px vertical padding.

Grid rules:
- Desktop: 2-column layouts for hero/report/guide/product sections.
- Desktop feature grids: 3 columns where useful.
- Tablet: 2 columns.
- Mobile: single column.

Card rules:
- Consistent border radius: 20–28 px.
- Consistent padding: 24–36 px.
- Use subtle border or shadow, not both heavily.
- Cards should not feel cramped.

Spacing rules:
- Section title and subtitle should have enough bottom margin before cards.
- Buttons should align consistently.
- Avoid uneven gaps between sections.

Acceptance criteria:
- Page rhythm feels intentional.
- Desktop does not feel too narrow or empty.
- Mobile is not cramped.
- Cards align cleanly.
```

---

## 5. CTA system prompt

```text
Create a consistent CTA system across the page.

Primary CTA:
Become a Guide

Secondary CTA:
See Example Report

Tertiary CTA:
Open Web App

Button rules:
- Primary CTA uses solid deep green.
- Secondary CTA uses outline or light button.
- Tertiary CTA is usually a text link or subtle button.
- Do not show too many equal-weight buttons together.

Hero:
- Primary: Become a Guide
- Secondary: See Example Report
- Tertiary: Open Web App as a smaller link

For Guides:
- Join the Guide Program

Report section:
- See Example Report

For Birdwatchers:
- Download App or Open Web App

Final CTA:
- Become a Guide
- See Example Report

Rules:
- Guide CTA must dominate the page.
- “Open Web App” must not dominate the guide CTA.
- Button labels must be consistent.
- Avoid vague labels like “Learn more” when a specific action exists.

Acceptance criteria:
- CTA hierarchy is clear.
- Button styles are consistent.
- Guide recruitment is the main action.
```

---

## 6. Image and mockup prompt

```text
Improve global image and mockup usage.

The page needs visual proof, not decoration.

Priority visuals:
1. App phone mockup with live checklist / observations.
2. Report preview mockup.
3. Guide dashboard mockup.
4. Algarve birding/nature photography.
5. Bird images only where they support the story.

Remove visible placeholder text such as:
- Hero Image Placeholder
- Mockup Placeholder
- Image Placeholder

If real images are not available:
- Build designed placeholder mockups that look intentional.
- Use cards, fake UI rows, species chips, timeline items and report preview blocks.
- Add TODO comments in code for replacing final images.
- Do not display TODO text to users.

Image treatment:
- Use rounded corners.
- Use soft gradients if text overlays an image.
- Avoid text directly over busy imagery.
- Use realistic product UI previews.

Acceptance criteria:
- No placeholder labels are visible.
- Visuals explain the product.
- Report and app mockups look intentional.
```

---

## 7. Copy cleanup prompt

```text
Clean up public-facing copy across the page.

Keep the product story clear:
FollowBirds helps guides run birdwatching tours, share observations and generate beautiful reports.

Do:
- Speak to guides directly.
- Make reports a major differentiator.
- Frame Algarve-first as a strength.
- Keep birdwatcher copy memory-focused.
- Use clear public language.

Do not expose internal strategy.

Remove or rewrite phrases like:
- birdwatchers are secondary users
- final pricing will remain flexible
- guide business model
- roadmap uncertainty

Replace with public copy:
- FollowBirds starts in Algarve so the first guide, bird and location data can be excellent.
- Early guide access is focused on Algarve guides.
- Birdwatchers can explore birds, keep checklists and save birding history.

Tone:
- Professional
- Warm
- Specific
- Not hype-heavy
- Not generic SaaS

Acceptance criteria:
- Copy sounds public-ready.
- Guides feel addressed.
- Algarve-first is positive.
- No internal business language remains.
```

---

## 8. Responsive QA prompt

```text
Audit and improve responsive behavior.

Breakpoints:
- Mobile: < 700 px
- Tablet: 700–1023 px
- Desktop: >= 1024 px

Mobile rules:
- Single column.
- Hero headline visible without awkward wrapping.
- CTAs stack cleanly.
- Mockups fit the screen.
- Cards have enough padding.
- No horizontal overflow.

Tablet rules:
- Use two columns where useful.
- Do not create overly narrow text columns.

Desktop rules:
- Use available width.
- Avoid long full-width text lines.
- Use balanced 2-column sections.
- Feature cards align in grids.

Test:
- 390 px width
- 768 px width
- 1440 px width

Acceptance criteria:
- No horizontal scrolling.
- Header works on mobile.
- Hero works on mobile and desktop.
- Grids collapse cleanly.
- CTAs remain visible and usable.
```

---

## 9. SEO and accessibility prompt

```text
Improve SEO and accessibility for the FollowBirds landing page.

SEO:
- Use one h1.
- Add title and meta description.
- Add Open Graph title, description and image placeholder.
- Add canonical URL placeholder.
- Use semantic HTML: header, main, section, footer.
- Use logical heading order.

Suggested title:
FollowBirds — Birdwatching Tours, Checklists and Reports

Suggested meta description:
FollowBirds helps birding guides run tours and helps birdwatchers save observations, checklists and beautiful reports forever.

Accessibility:
- Buttons and links must have clear labels.
- Images need useful alt text or empty alt if decorative.
- Color contrast must be readable.
- Focus states must be visible.
- Navigation should be keyboard usable.
- FAQ accordion, if used, must be accessible.

Acceptance criteria:
- SEO metadata exists.
- Heading structure is clean.
- CTAs are accessible.
- Images have proper alt attributes.
```

---

## 10. Performance prompt

```text
Improve performance without changing the product design.

Rules:
- Keep Astro static-first.
- Avoid unnecessary React islands.
- Avoid heavy animation libraries.
- Optimize images.
- Use responsive image sizes where possible.
- Lazy-load below-the-fold images.
- Preload only critical hero assets if needed.
- Keep CSS clean and minimal.

Do not:
- Add client-side routing.
- Add large JS bundles.
- Add a global animation framework.
- Hydrate static sections unnecessarily.

Acceptance criteria:
- Page remains fast.
- Most sections render as static HTML/CSS.
- Images are optimized or prepared for optimization.
```

---

## 11. General implementation prompt for the first pass

```text
Apply a first general polish pass to the FollowBirds Astro landing page.

Use these priorities:
1. Fix global theme, typography and spacing.
2. Fix CTA hierarchy.
3. Remove visible placeholder labels.
4. Improve the hero message.
5. Make report/product mockups look intentional.
6. Keep guides as the primary audience.
7. Keep Algarve-first positioning.
8. Ensure mobile and desktop layouts are clean.

Do not deeply rewrite every section yet.
Do not add new complex features.
Do not add unnecessary JS.
Do not change the site into a React SPA.

After the first pass, summarize what changed and what section should be improved next.
```
