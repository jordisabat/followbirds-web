# Task: Build FollowBirds Flutter Home Hero

## Goal

Build the top hero area for the FollowBirds Home page.

This task is only for the Home hero/card area, not the full dashboard.

Do not build:

- Weather
- Search
- Full dashboard
- Tours
- Guide roles

## Main Component

Use a reusable shared hero card template:

- HomeHeroCard

It should support different card data types:

- Seasonal Birds
- Suggested Track / Hotspot
- Continue Checklist

## Mobile vs Desktop Behavior

Mobile:

- Use manual swipe carousel
- Show one card at a time
- Show dots only if 2+ real cards exist
- No autoplay

Tablet/Desktop:

- Prefer visible cards/grid/row
- Do not force carousel when space is available
- No fake dots on desktop

Breakpoints suggestion:

- `< 700 px`: mobile carousel
- `700–1023 px`: tablet 2-column if possible
- `>= 1024 px`: visible row/grid

## Carousel Rules

- Manual only
- No autoplay
- No timed slide changes
- User changes cards by horizontal swipe
- Dots indicate current card
- Dots may be tappable
- Hide dots if there is only one card
- Start from highest-priority available card on each app open

Hero priority:

1. Continue Checklist if active
2. Seasonal Birds
3. Suggested Track / Hotspot

## Shared Card Template

Each card has:

- Eyebrow label
- Title
- Subtitle / context / stats line
- CTA label
- CTA destination
- Background image
- Optional metadata

Do not only swap button text and picture. Each card type needs its own meaningful title, subtitle, CTA, destination, and image.

## Card Type: Seasonal Birds

Purpose:

- Show what birds are relevant now

Example:

```txt
GOOD MORNING
Spring Migration
142 species likely now in the Algarve
[Explore seasonal birds]
```

CTA:

- Explore seasonal birds

Destination:

- Birds page filtered by season if available
- Otherwise Birds page with TODO

Season mapping:

- March–May: Spring Migration
- June–August: Summer Birding
- September–November: Autumn Migration
- December–February: Winter Birding

Species count:

- Prefer data-driven count from `bird_regions.json`
- Count species likely present now in Algarve
- Do not hardcode count if data exists

Wording:

- If inside Algarve: `{count} species likely now in the Algarve`
- If outside Algarve: `{count} species in the Algarve seasonal guide`
- If location unknown: `Explore birds active this season`

Only say “likely” if the data supports reliable presence.

## Card Type: Suggested Track / Hotspot

Purpose:

- Help the user decide where to go birdwatching

Example:

```txt
SUGGESTED WALK
Ria Formosa — East Trail
Wetlands · 4.8 km · Good for waders
[Explore this track]
```

CTA:

- Explore this track
- View hotspot
- View nearby hotspots

Destination:

- Track/hotspot detail page if available
- Otherwise Locations page with TODO

Subtitle should use track/hotspot-specific info:

- distance
- habitat
- difficulty
- duration
- reason

Do not mechanically show only “number of tracks” unless this card links to a general list.

## Card Type: Continue Checklist

Purpose:

- Help the user continue what they started

Show only if an active or recent checklist exists.

Example:

```txt
CONTINUE CHECKLIST
Ria Formosa
24 species · Last updated 2 h ago
[Continue checklist]
```

CTA:

- Continue checklist

Destination:

- Checklist detail/edit page

Subtitle should include:

- species count
- last updated
- checklist location/name

## Background Image Treatment

Use a full-card background image with a gradient overlay.

Image:

- Fills card using `BoxFit.cover`
- Aligns right using `Alignment.centerRight`
- Bird or important subject should sit on the right side
- Left side should have soft/empty background for text

Gradient:

- Overlay above image, below text
- Direction left to right
- Left side high opacity for readability
- Middle soft fade
- Right side mostly transparent

Example gradient:

```dart
LinearGradient(
  begin: Alignment.centerLeft,
  end: Alignment.centerRight,
  colors: [
    overlayColor.withOpacity(0.98),
    overlayColor.withOpacity(0.86),
    overlayColor.withOpacity(0.35),
    Colors.transparent,
  ],
  stops: [0.0, 0.38, 0.65, 1.0],
)
```

Text width:

- Mobile: 55–62% of card width
- Tablet/Web: 45–55% of card width

Hero image recommended size:

- Recommended: 1600 × 900 px
- Minimum: 1200 × 675 px
- High quality: 2400 × 1350 px
- Ratio: 16:9

## Acceptance Criteria

- Hero cards are reusable
- Manual carousel only on mobile
- No autoplay
- Dots only for 2+ real cards on mobile
- Desktop/tablet uses visible layout when possible
- Background image + gradient keeps text readable
- Seasonal card can use data-driven species count
- No weather appears
- Works offline and with fallback data
