import type { StoryStepContent } from './story.types';

export const storyContent: StoryStepContent[] = [
  {
    id: 'discover',
    headline: 'Discover what matters today.',
    text: 'Seasonal birds, nearby places and your latest birding activity — all in one place.',
    screenshot: {
      src: '~/assets/images/story/phone/home.png',
      alt: 'FollowBirds home dashboard with seasonal birds, nearby places and recent activity',
    },
    scrollIndicator: true,
  },
  {
    id: 'birds',
    headline: 'Know what you are looking at.',
    text: 'Explore local species with photos, identification details, habitats and seasonal information for Algarve.',
    screenshot: {
      src: '~/assets/images/story/phone/birds.png',
      alt: 'FollowBirds bird list screen',
    },
  },
  {
    id: 'bird-detail',
    headline: 'Deep dive into every species.',
    text: 'Explore local species with photos, identification details, habitats and seasonal information for Algarve.',
    screenshot: {
      src: '~/assets/images/story/phone/bird-detail.png',
      alt: 'FollowBirds bird detail screen with species information and seasonal presence',
    },
  },
  {
    id: 'locations',
    headline: 'Find the right place to go.',
    text: 'Explore Algarve hotspots, suggested tracks and observation points before heading into the field.',
    screenshot: {
      src: '~/assets/images/story/phone/locations-map.png',
      alt: 'FollowBirds map showing birdwatching locations and hotspots in Algarve',
    },
  },
  {
    id: 'location-detail',
    headline: 'See what a location has to offer.',
    text: 'Explore Algarve hotspots, suggested tracks and observation points before heading into the field.',
    screenshot: {
      src: '~/assets/images/story/phone/location-detail.png',
      alt: 'FollowBirds location detail screen',
    },
  },
  {
    id: 'personal-checklist',
    headline: 'Shared sightings. Personal memories.',
    text: 'Mark each bird as seen, photographed, a lifer or a favorite while your personal choices remain private.',
    screenshot: {
      src: '~/assets/images/story/phone/checklists.png',
      alt: 'FollowBirds personal checklist with seen, photographed, lifer and favorite options',
    },
  },
  {
    id: 'join-tour',
    headline: 'One tour. One shared experience.',
    text: 'Join a guided birdwatching tour through an invitation link or QR code and follow the experience live.',
    screenshot: {
      src: '',
      alt: 'FollowBirds guided tour invitation screen',
    },
  },
  {
    id: 'live-sightings',
    headline: 'The guide records once. Everyone follows.',
    text: 'Species, time, location, photos and guide notes appear instantly in one shared tour timeline.',
    screenshot: {
      src: '',
      alt: 'FollowBirds live birdwatching tour timeline with shared observations',
    },
  },
  {
    id: 'report',
    headline: 'Every tour becomes a story worth keeping.',
    text: 'FollowBirds turns the shared timeline into a beautiful report with species, photos, notes, route and memories.',
    screenshot: {
      src: '',
      alt: 'FollowBirds completed birdwatching tour report summary',
    },
  },
  {
    id: 'guide-path',
    headline: 'Run better birdwatching tours.',
    text: 'Create reusable tours, share live observations and give every guest a professional report.',
    screenshot: {
      src: '',
      alt: 'FollowBirds guide dashboard with tours, participants and reports',
    },
  },
  {
    id: 'birdwatcher-path',
    headline: 'Keep every birding memory.',
    text: 'Join tours, follow shared sightings and keep your checklists, favorites and reports in one place.',
    screenshot: {
      src: '',
      alt: 'FollowBirds personal birding history with checklists and reports',
    },
  },
];