# Task: Build FollowBirds Astro Landing Page

## Goal

Build the FollowBirds marketing website using Astro.

This is not the Flutter web app.

- Marketing site: followbirds.com
- Web app: app.followbirds.com

Use Astro for a fast, static-first, SEO-friendly landing page.

Do not build a React SPA.

Use React only as Astro islands if a section truly needs interaction.

## Required Stack

Use:

- Astro
- TypeScript
- Static-first pages
- Responsive CSS
- SEO metadata
- Accessible semantic HTML

Use Tailwind only if already configured. Otherwise use clean scoped CSS in Astro components.

Avoid unnecessary client-side JavaScript.

## Suggested Structure

```txt
src/
  pages/
    index.astro
    privacy.astro
    terms.astro

  components/
    Header.astro
    Hero.astro
    HowItWorks.astro
    ForGuides.astro
    ForBirdwatchers.astro
    ExampleTourExperience.astro
    ExampleTourReport.astro
    GuideProgram.astro
    Platforms.astro
    FAQ.astro
    FinalCTA.astro
    Footer.astro

  data/
    faq.ts
    features.ts

  assets/
    images/
```

## Page Sections

Build one landing page with these sections, in this order:

1. Header / Navigation
2. Hero
3. How It Works
4. For Guides
5. For Birdwatchers
6. Example Tour Experience
7. Example Tour Report
8. Guide Program
9. Platforms
10. FAQ
11. Final CTA
12. Footer

Read the section files in `/sections` for detailed requirements.

## Visual Style

Direction:

- Premium nature app
- Clean spacing
- Strong photography
- Soft gradients
- Mobile-first
- Algarve birdwatching feeling

Colors:

- Deep green for primary actions
- Soft cream / off-white backgrounds
- Purple accent only where needed
- Natural warm tones

Typography:

- Use Fira Sans if already available
- Otherwise use a clean system sans-serif fallback

Images:

- Use real birdwatching / Algarve / birds / guide-tour feeling
- Avoid generic corporate stock photography
- Use gradients over images when text sits on top

## SEO Requirements

Add:

- title
- meta description
- Open Graph title
- Open Graph description
- Open Graph image placeholder
- canonical URL placeholder

Suggested title:

> FollowBirds — Birdwatching Tours, Checklists and Reports

Suggested description:

> FollowBirds helps birding guides run tours and helps birdwatchers save observations, checklists and beautiful reports forever.

Use semantic HTML:

- header
- main
- section
- footer
- h1 only once
- logical heading order

## Responsive Requirements

Mobile:

- Single-column sections
- Strong readable hero
- CTAs visible early
- Cards stacked

Tablet:

- Two-column layouts where useful

Desktop:

- Wider hero
- Feature grids
- Report/tour mockups beside text

Do not overcomplicate desktop layout.

## Implementation Rules

Do:

- Build clean Astro components
- Keep sections reusable
- Use static data files for FAQ/features if helpful
- Use real routes/links if they already exist
- Add TODO comments for unknown final URLs
- Keep page fast and mostly static
- Optimize image sizes

Do not:

- Build the Flutter app here
- Add login/auth
- Add dashboard functionality
- Add heavy JS
- Add unnecessary animations
- Add worldwide positioning
- Make birdwatchers the primary business audience
- Turn this into a generic bird database website

## Acceptance Criteria

- Astro site builds successfully
- Landing page is responsive
- Main message is clear within 5 seconds
- Guides are the primary audience
- Algarve-first positioning is clear
- CTAs exist: Become a Guide, Open Web App, Download App
- All required sections exist
- SEO metadata is present
- No unnecessary React SPA behavior
- Page is ready to deploy as a static site
