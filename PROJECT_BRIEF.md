# FollowBirds Project Brief

## Product Vision

FollowBirds is a shared birdwatching platform connecting guides and birdwatchers through tours, observations, reports, locations, checklists, and personal birding history.

The product should evolve from a bird database into a birding companion, and later into an operating system for professional birding guides.

Core promise:

> FollowBirds helps guides run birdwatching tours and helps birdwatchers keep every observation forever.

## Strategic Positioning

Primary customer:

- Professional birding guides

Secondary users:

- Birdwatchers joining tours or using the app independently

Revenue is expected to come primarily from guides.

When making product decisions, prioritize:

1. Helping guides run better tours
2. Improving participant experience
3. Strengthening reports and birding history
4. Supporting the Algarve-first strategy
5. Keeping the product simple

Avoid generic social-network features, unnecessary gamification, and feature bloat.

## Geographic Strategy

Current focus:

- Algarve, Portugal

Do not position FollowBirds as worldwide yet.

Strategy:

1. Become the best birdwatching platform in Algarve
2. Expand to Portugal
3. Expand internationally based on guide demand

Depth beats breadth.

Better:

- 50 excellent Algarve hotspots

Worse:

- 500 mediocre worldwide hotspots

## Current Application

Technology:

- Flutter
- Offline-first
- Mobile, tablet, and web

Current modules:

- Birds
- Locations / Tracks / Hotspots
- Checklists

Data is primarily bundled assets.

Images are served from Cloudinary or local/bundled assets where appropriate.

Stable identifiers:

- Bird.speciesCode
- Track.code

## Future Product Direction

The Tours module is expected to become a central pillar.

Core future entities:

- Guide
- Tour Template
- Tour Instance
- Participant
- Observation
- Tour Report

A guide creates reusable tour templates. A scheduled tour creates a tour instance. Participants join through invitation link, QR code, or email invitation.

## Live Tour Experience

During a tour, the guide records observations.

Observation fields:

- Species
- Time
- GPS
- Photos
- Notes

Participants receive:

- Species
- Description
- Photos
- Location
- Time

The experience is collaborative.

## Shared Checklist

Every participant receives a synchronized checklist.

Example:

- 08:42 Booted Eagle
- 09:10 Kentish Plover
- 09:45 Greater Flamingo

Participants can privately mark:

- Seen
- Photographed
- Lifer
- Favorite

Shared observations remain common. Personal marks remain private.

## Automatic Reports

Automatic tour reports are one of the strongest differentiators.

When a tour finishes, FollowBirds generates a report including:

- Tour information
- Guide
- Participants
- Timeline
- Species list
- Photos
- Notes
- Route map
- Weather later if available

Outputs:

- Web report
- PDF
- Shareable link
- Personal archive

Reports become permanent memories.

## Dashboard Philosophy

The dashboard is task-oriented, not content-oriented.

Users do not open the app thinking:

- Show me birds
- Show me tracks

Users think:

- What should I do today?
- What tour is next?
- What birds are active?
- What did I see recently?

Dashboard should focus on:

1. Next or active task
2. Quick actions
3. Seasonal birds
4. Nearby/suggested places
5. Recent activity
6. Bird of the day

## Recommended App Navigation

Mobile:

- Home
- Explore
- Tours later
- Profile

Explore contains:

- Birds
- Locations
- Tracks / Hotspots

Profile contains:

- Checklists
- Reports
- History
- Settings

Avoid excessive top-level tabs.

## Website Strategy

Do not use the Flutter web app as the marketing site.

Use:

- followbirds.com → marketing website
- app.followbirds.com → web application

## Landing Page Goal

A visitor should understand within 5 seconds:

> FollowBirds helps guides run birdwatching tours and helps birdwatchers keep every observation forever.

## Landing Page Primary CTA

Primary:

- Become a Guide

Secondary:

- Open Web App

Additional:

- Download App

## Product Design Principles

Prefer:

- Simplicity
- Clarity
- Offline capability
- Shared experiences
- Real birding workflows
- Algarve depth
- Professional guide value

Avoid:

- Generic social network features
- Unnecessary gamification
- Worldwide expansion before local dominance
- Heavy client-side JavaScript on marketing pages
- Static menus pretending to be dashboards
