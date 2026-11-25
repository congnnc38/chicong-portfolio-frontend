// Bản tiếng Anh của nội dung website (trang /en). Cấu trúc giống hệt profile.ts.
// Sửa nội dung tiếng Việt ở profile.ts thì nhớ sửa phần tương ứng ở đây.

import type { Job, Project } from './profile';

export const profile = {
  name: 'Ngô Nguyễn Chí Công',
  shortName: 'Chí Công',
  title: 'Frontend Developer',
  intro:
    'With 5 years of experience, I build web interfaces and mobile apps for newsrooms, businesses and content platforms: from shared components and editors to server-side rendering, SEO and performance.',
  about: [
    'I started out as a UI/UX Designer before moving into code. My strength is the frontend: Next.js, React, TypeScript, shared components and packages reused across products, server-side rendering, technical SEO and responsive layouts that hold up across browsers. The design background keeps the interface careful down to the details.',
    'I can also work on the backend (NestJS, Node.js, Prisma, PostgreSQL, Redis, Socket.IO), so working with API teams is smooth and I can ship a whole feature on my own when needed. Since 2025 I have been at NetSpace, building the front ends of the AntCMS ecosystem for newsrooms (VietPress, Góc Nhìn Mới, phobienphapluat.vn), a shared E-magazine template library, the kol.gov.vn portal and React Native mobile apps for Thien Khoi Group.',
  ],
  cv: { href: '/CV-Ngo-Nguyen-Chi-Cong-EN.pdf', fileName: 'CV-Ngo-Nguyen-Chi-Cong-EN.pdf' },
  contact: {
    email: 'congnnc38@gmail.com',
    phone: '+84 33 224 9402',
    phoneHref: 'tel:+84332249402',
    linkedin: 'https://www.linkedin.com/in/ngonguyenchicong',
    linkedinLabel: 'in/ngonguyenchicong',
  },
  education: {
    school: 'Hanoi University of Industry',
    major: 'Information Technology',
  },
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],
};

export const projects: Project[] = [
  {
    id: 'kolhub',
    name: 'KOL Hub',
    summary: 'Campaign marketplace connecting brands with KOLs and MCNs',
    role: 'Fullstack',
    kind: 'platform',
    period: '10/2026 – present',
    link: { href: 'https://kolhub-dev.netspace.vn/', label: 'kolhub-dev.netspace.vn', note: 'dev build' },
    description:
      'Brands post briefs; KOLs and MCNs apply, submit drafts, submit post links and confirm payments. A Super Admin reviews profiles, channels, campaigns, tickets and violation complaints.',
    stack: ['TanStack Start', 'React 19', 'TypeScript', 'Tailwind 4', 'shadcn/ui', 'oRPC', 'Drizzle', 'Bun'],
    contributions: [
      'The TikTok/YouTube channel verification sheet: per-item scan progress, pass or fail results, and only passing channels move on to the review queue.',
      'The KOL Safety account-linking consent page and an admin settings page: how many items to scan, scan time, how many days to keep the list.',
      'Behind it: account linking via SSO, scan results received through webhooks, and the API contract documentation between the two systems.',
    ],
  },
  {
    id: 'multi-client',
    name: 'AntCMS Multi-client',
    summary: 'Monorepo of news sites sharing one CMS',
    role: 'Frontend',
    kind: 'news',
    period: '10/2026 – present',
    link: { href: 'https://phobienphapluat-web-dev.antcms.vn/', label: 'phobienphapluat.vn', note: 'dev build' },
    description:
      'Each news site has its own design but shares AntCMS and a server-side API service layer. Includes a script that generates a new site from a starter site. The first site is phobienphapluat.vn.',
    stack: ['Next.js 16', 'Server Components', 'React 19', 'TypeScript 6', 'Tailwind 4', 'Turborepo', 'pnpm', 'Vitest'],
    contributions: [
      'Rebuilt the entire phobienphapluat.vn interface and wired it to the AntCMS API.',
      'Full-screen flipbook view for the print magazine; added Video, Longform, Podcast and MGID ad blocks.',
      'Set up the monorepo architecture, the server-side @antcms/api-client package and shared config packages (Tailwind, ESLint, TypeScript).',
      'A new-site generator script; one Dockerfile shared by every site.',
    ],
  },
  {
    id: 'kol-safety',
    name: 'KOL Safety',
    summary: 'AI moderation for Vietnamese video content',
    role: 'Fullstack',
    kind: 'platform',
    period: '07/2026 – present',
    link: { href: 'https://safety.netspace.vn/', label: 'safety.netspace.vn' },
    description:
      'Gives every video a 0–100 Safety Score and labels it Safe / Grey area / Violation, with reasons, second-by-second evidence and suggested fixes. Checks videos before they are posted and audits TikTok/YouTube channels in bulk.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind 4', 'NestJS', 'Prisma', 'BullMQ'],
    contributions: [
      'A YouTube Studio–style workspace for TikTok/YouTube channels: filters, multi-select, scan queue, pagination.',
      'Pulled the channel rail (ChannelRail) and platform logos into components shared by both platforms; a progress bar for long-video scans.',
      'Skeleton loaders instead of a spinner, and fixed table column widths so the list doesn’t jump when data arrives.',
      'On the API side: a 3-stage YouTube channel audit, the Titan crawler integration, and the Digital Culture Code of Conduct applied to scoring.',
    ],
  },
  {
    id: 'netevent',
    name: 'NetEvent',
    summary: 'SaaS platform for creating and running events',
    role: 'Fullstack',
    kind: 'platform',
    period: '07/2026',
    link: { href: 'https://event.netspace.vn/', label: 'event.netspace.vn' },
    description:
      'Replaces stitching together Google Forms, Excel, landing-page builders, QR scanners and manual emails. Made up of a public registration site, an admin CMS and an API, each on its own subdomain.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Radix UI', 'Tailwind', 'dnd-kit', 'Recharts', 'Prisma 7'],
    contributions: [
      'Landing editor: cover image cropping, automatic WebP conversion, font preview; the public registration form and ticket pages.',
      'Camera QR check-in split into two steps, look up then confirm, with an attendee details modal.',
      'An event overview with real figures and an activity log; the whole admin made responsive, and a scrolling bug on mobile Safari fixed.',
      'Behind it: the monorepo foundation, configurable role groups, OTP and reminder emails, Dockerfile, migrations, CI.',
    ],
  },
  {
    id: 'tkg-mobile',
    name: 'TKG Proptech & Thien Khoi HRM',
    summary: 'Two mobile apps for Thien Khoi Group’s brokers and staff',
    role: 'Mobile',
    kind: 'mobile',
    period: '06 – 07/2026',
    linkNote: 'iOS and Android apps for the Thien Khoi Group team',
    description:
      'TKG Proptech helps consultants and brokers manage property inventory, consignments, transactions and disputes. Thien Khoi HRM manages staff across the Region, Capital, branch, division and department structure: recruitment, training, events and permissions. Thien Khoi Group was named a Top 5 Proptech 2026 for the ecosystem that includes these two apps.',
    stack: ['React Native 0.78', 'TypeScript', 'React Navigation', 'TanStack Query', 'Zustand', 'MMKV', 'React Hook Form', 'Firebase'],
    contributions: [
      'TKG Proptech: rebuilt the property inventory screen from Figma, including listing cards, search bar, quick filters and sorting, filters by source type and signing date, and the “Million-dollar” and “Steady cash flow” tags.',
      'Thien Khoi HRM: quick event filter tabs with counts, shown or hidden by permission; participant scoping by Region, Capital, Division and Department matching each role’s permissions; attendance lists with search, filters and Excel export.',
      'Unsaved-changes warnings for 28 create and edit screens across both apps; dispute forms pre-filled from the data just entered.',
      'A “Thien Khoi ecosystem” menu section with deep links between the two apps; fixed the image slideshow viewer.',
    ],
  },
  {
    id: 'thienviet-id',
    name: 'Thien Viet ID',
    summary: 'Shared account and utilities app for the Thien Viet system',
    role: 'Fullstack',
    kind: 'mobile',
    period: '06/2026',
    linkNote: 'iOS and Android mobile app',
    description:
      'One account for the whole system: single sign-on, top-ups and transaction history, chat and voice calls, ordering at restaurants and cafés, training, news.',
    stack: ['Expo 55', 'React Native', 'Expo Router', 'TypeScript', 'TanStack Query', 'Zustand', 'ElysiaJS', 'Drizzle'],
    contributions: [
      'Built the full in-app coffee ordering flow: menu by category, items with multi-select option groups and extra charges, cart, checkout, voucher redemption.',
      'Fixed a compatibility bug with the Hermes engine on devices (replaced toSorted with an equivalent sort).',
      'Behind it: the orders, menu and voucher modules (ElysiaJS), Drizzle schema and migrations.',
    ],
  },
  {
    id: 'hien-mau',
    name: 'Thien Khoi Blood Donation',
    summary: 'Realtime management for blood donation events',
    role: 'Fullstack',
    kind: 'platform',
    period: '05 – 06/2026',
    link: { href: 'https://hienmau.netspace.vn/', label: 'hienmau.netspace.vn' },
    description:
      'Registration on a landing page, QR check-in, queue coordination and a TV call screen with text-to-speech. Check-in desks, coordinators and the TV screen stay in sync in realtime.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'TanStack Table', 'Socket.IO', 'Payload CMS 3', 'Playwright'],
    contributions: [
      'The TV call screen: names read aloud through a speech queue so voices never overlap, seat numbers, recall, and a sound-on button that gets past the browser’s autoplay block.',
      'The check-in interface: lookup, avatar updates, data-conflict handling, waiting list, certificates.',
      'Admin pages with multi-filter tables, gifts and notes, Excel export and per-round statistics.',
      'Behind it: moved realtime from SSE to Socket.IO + Redis pub/sub to run on multiple pods, configured for 1,000+ connections.',
    ],
  },
  {
    id: 'kol-portal',
    name: 'kol.gov.vn',
    summary: 'Official portal and rankings for KOLs and MCNs',
    role: 'Frontend',
    kind: 'platform',
    period: '03 – 07/2026',
    link: { href: 'https://kol.gov.vn/', label: 'kol.gov.vn' },
    description:
      'KOL and MCN rankings based on real engagement growth, Top 100, detailed profiles, profile registration for KOLs and MCNs, violation reports, news.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind', 'Turborepo'],
    contributions: [
      'Home page, search, Top 100, KOL and MCN detail pages, rankings ticker.',
      'KOL/MCN registration forms: media upload, platform auto-detected from the channel link, business-rule validation.',
      'Violation report form; profile page and campaign sign-up on the KOLs Platform; fixed a header that broke the layout on iPad.',
      'Also: a per-period moderation summary widget for the Laravel Filament admin.',
    ],
  },
  {
    id: 'antcms-templates',
    name: 'AntCMS Templates',
    summary: 'One UI codebase for many newsrooms on AntCMS',
    role: 'Frontend',
    kind: 'news',
    period: '03 – 05/2026',
    linkNote: 'Front ends for Reatimes, Thế giới Điện ảnh and Góc Nhìn Mới',
    description:
      'A monorepo for news sites running on AntCMS: each newsroom (tenant) picks its own template, colors and fonts while sharing sections, components and the API layer.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'Middleware', 'Route Handlers', 'pnpm', 'Turborepo'],
    contributions: [
      'Separated tenants from templates so one template can serve many newsrooms; a tenant-based home page with per-site widths.',
      'Colors and fonts switch with each site’s configuration, detail pages included.',
      'The Cinematic template, the Reatimes home page, rebuilt Thế giới Điện ảnh pages; category, special-section, tag, search, video and help-center pages plus a floating action panel for the Góc Nhìn Mới template.',
      'A route handler that loads config by domain and middleware tagging each request with its tenant.',
    ],
  },
  {
    id: 'emagazine',
    name: 'AntCMS E-magazine',
    summary: 'E-magazine template library and editor',
    role: 'Frontend',
    kind: 'news',
    period: '01 – 09/2026',
    linkNote: 'Live on VietPress and Góc Nhìn Mới',
    description:
      'E-magazine and Photo story article templates reused across every news site on AntCMS, packaged as an npm package using Dependency Injection: type-safe, tree-shakeable, SSR-ready. Editors adjust each section directly on the page and preview by device.',
    stack: ['React 19', 'TypeScript', 'tsup', 'Next.js 15', 'React Hook Form', 'Swiper', 'Tailwind'],
    contributions: [
      'Extracted the templates into a shared package: the package owns the layout, and the host injects its image, text and upload components through a TemplateProvider; wrote the integration guide for hosts.',
      'The E-magazine 1–4, Business, Sport, Basic and Photo 1–2 sets.',
      'Image replacement, desktop/mobile image sync and captions for 19 sections, custom text colors.',
      'Spell-checking right inside the editor.',
    ],
  },
  {
    id: 'thienkhoi-cdc',
    name: 'Thien Khoi CDC',
    summary: 'Corporate website for an interior design and build company',
    role: 'Frontend',
    kind: 'news',
    period: '11/2025 – 09/2026',
    link: { href: 'https://thienkhoicdc.com/', label: 'thienkhoicdc.com' },
    description: 'About, services, projects, news, careers, search and contact pages. Bilingual Vietnamese – English, SEO-optimised.',
    stack: ['Next.js 15', 'TypeScript', 'TanStack Query', 'Zustand', 'next-intl', 'Framer Motion', 'Tailwind'],
    contributions: [
      'Built almost the entire site: the interface, the server-side data layer and internationalisation.',
      'Video banner, marquee text, animations and skeleton loading.',
      'Technical SEO: dynamic sitemaps for posts, categories, projects, careers and services; per-language canonicals and hreflang, structured data.',
    ],
  },
  {
    id: 'vietpress',
    name: 'VietPress',
    summary: '24/7 online newspaper',
    role: 'Frontend',
    kind: 'news',
    period: '10/2025 – 03/2026',
    link: { href: 'https://vietpress.vn/', label: 'vietpress.vn' },
    description:
      'An online newspaper on AntCMS: section-based home page layout, categories, topics, tags, search, E-magazine and video articles, with light and dark themes.',
    stack: ['Next.js 15', 'Server Components', 'TanStack Query', 'Zustand', 'Swiper', 'React Player', 'Tailwind'],
    contributions: [
      'Header, mega menu, search bar, breadcrumbs, weather top bar.',
      'Home page sections and 7 new section themes.',
      'Integrated E-magazine, then extracted it into its own package.',
      'Server-side rendering through a service layer calling the AntCMS API; dynamic sitemaps, including the Google News sitemap.',
    ],
  },
  {
    id: 'gocnhinmoi',
    name: 'Góc Nhìn Mới',
    summary: 'In-depth news with a community of reader-writers',
    role: 'Frontend',
    kind: 'news',
    period: '08/2025 – present',
    link: { href: 'https://gocnhinmoi.com.vn/', label: 'gocnhinmoi.com.vn' },
    description:
      'Readers sign up, write articles, submit location photos, follow authors, save articles, comment, listen to podcasts and build playlists. Includes E-magazine, Photo story, short videos and an author leaderboard.',
    stack: ['Next.js 15', 'React 19', 'BlockNote', 'TanStack Query', 'Zustand', 'IndexedDB', 'Tailwind'],
    contributions: [
      'Rebuilt the home, category and Explore pages; responsive at 3 breakpoints: mobile, tablet, desktop.',
      'Listen & Watch: podcasts with a progress waveform, queue-based playlists, listening history stored on the device.',
      'Profile pages, author and reader pages, following, the Featured Authors leaderboard; reader notifications, article review flow.',
      'Server side: sessions built on the server, redirect middleware, central 401 handling and avatar sync.',
    ],
  },
  {
    id: 'antcms',
    name: 'AntCMS',
    summary: 'Admin CMS for multiple newsrooms',
    role: 'Frontend',
    kind: 'platform',
    period: '07 – 10/2025',
    linkNote: 'Internal system',
    description:
      'Each newsroom is its own tenant. Manages articles, E-magazine, Photo, Video, Podcast, categories, authors, royalties, page builder, menus, banners, SEO, subscription plans and permissions.',
    stack: ['React', 'Inertia.js', 'BlockNote', 'Ant Design', 'Tailwind', 'Laravel 12'],
    contributions: [
      'Article editor built on BlockNote: video upload, character count, saved as JSON/HTML.',
      'Media library, image upload and picker, thumbnail editing.',
      'SEO scoring UI, royalty display; author-change popup, tree-style category picker; dark mode fixes for the editor and the assistant chat panel.',
      'Fixed Inertia SSR 502 errors by changing how pages load in the server-side render.',
    ],
  },
  {
    id: 'buddhaworlds',
    name: 'BuddhaWorlds',
    summary: 'Buddhist library and portal',
    role: 'Frontend',
    kind: 'news',
    period: '06 – 07/2025',
    link: { href: 'https://buddhaworlds.com/', label: 'buddhaworlds.com' },
    description:
      'Digital library, dharma talks, short videos, news and a pagoda directory with a map. Each pagoda has its own landing page driven by its pagoda code.',
    stack: ['Next.js 15', 'Server Components', 'MUI / Joy UI', 'next-intl', 'Leaflet', 'Zustand', 'shadcn/ui'],
    contributions: [
      'Short-video page supporting YouTube, TikTok and Facebook, playing one video at a time.',
      'Donations, events and featured news on the pagoda detail page.',
      'Built almost all of the pagoda landing page: home, about, photo gallery, events, news, contact.',
      'Landing pages rendered on the server by pagoda code, per-page metadata and robots for SEO.',
    ],
  },
];

export const jobs: Job[] = [
  {
    company: 'NetSpace',
    period: '06/2025 – present',
    positions: [{ title: 'Fullstack Developer (frontend-focused)', period: '06/2025 – present' }],
    note: 'Projects are listed above.',
  },
  {
    company: 'MED-ON Digital Health Technology and Services JSC',
    period: '03/2023 – 06/2025',
    positions: [{ title: 'Fullstack Developer', period: '03/2023 – 06/2025' }],
    note: 'Built the interfaces for CMSs, kiosks and a call center with React and Ant Design, plus the APIs in Java with PostgreSQL.',
    projects: [
      {
        name: 'Medstation',
        period: '05/2024 – 06/2025',
        stack: 'Vite, React, Ant Design, TanStack Query, Recoil, TypeScript',
        description: 'Medical kiosk with video calls to doctors: the main CMS, a CMS for doctors and the kiosk interface.',
      },
      {
        name: 'Prodental',
        period: '09/2023 – 05/2024',
        stack: 'React, Ant Design, Redux Toolkit, TypeScript',
        description: 'Appointments, doctor schedules, patient records, supplies, revenue and payments for dental clinics.',
      },
      {
        name: 'Cus 360',
        period: '10 – 12/2023',
        stack: 'Next.js, Tailwind',
        description: 'Tracks customer information, visit history, vouchers, health metrics and costs.',
      },
      {
        name: 'Loyalty CMS',
        period: '07 – 10/2023',
        stack: 'Next.js, Ant Design, Redux Toolkit',
        description: 'Manages customers, promotional campaigns, membership tiers and loyalty points.',
      },
      {
        name: 'CCOMED',
        period: '03/2023 – 06/2025',
        stack: 'React, Ant Design, Redux, WebSocket',
        description: 'Patient and appointment CMS with a WebSocket call center: answer, call and navigate during calls.',
      },
      {
        name: 'MyMedlatec CMS',
        period: '05 – 07/2023',
        stack: 'React, Ant Design, Redux Toolkit',
        description: 'Accounts, permissions and MyMedlatec app install statistics by employee and unit.',
      },
      {
        name: '555 CMS',
        period: '08/2023',
        stack: 'React, Ant Design, Redux Toolkit',
        description: 'Manages 555 cards sold and the collaborators who sell them.',
      },
    ],
  },
  {
    company: 'Battech Technology Group JSC',
    period: '04/2022 – 03/2023',
    positions: [{ title: 'Fullstack Developer', period: '04/2022 – 03/2023' }],
    note: 'Built the ERP interface with React, MUI and Redux Toolkit, plus APIs in Node.js (Express) with PostgreSQL.',
    projects: [
      {
        name: 'Battech ERP',
        period: '06/2022 – 03/2023',
        stack: 'React, MUI, Redux Toolkit, TypeScript, Tailwind',
        description: 'The company’s internal ERP system, built by a team of 4 FE and 2 BE.',
      },
    ],
  },
  {
    company: 'Capi Agency',
    period: '11/2018 – 02/2022',
    positions: [
      { title: 'Fullstack Developer', period: '05/2019 – 02/2022' },
      { title: 'UI/UX Designer', period: '11/2018 – 04/2019' },
    ],
    note: 'Built web interfaces with Next.js, Redux and Tailwind, plus APIs in Node.js (Express) with PostgreSQL.',
    projects: [
      {
        name: 'MetaDap',
        period: '11/2021 – 02/2022',
        stack: 'Next.js, Redux, TypeScript, Tailwind',
        description: 'Web app for managing users’ digital assets.',
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Frontend',
    items: ['Next.js 15/16', 'React 19', 'TypeScript', 'JavaScript ES6+', 'HTML5 · CSS3', 'Tailwind CSS', 'shadcn/ui · Radix', 'Ant Design', 'MUI', 'Framer Motion', 'TanStack Query', 'Zustand', 'Redux Toolkit', 'React Hook Form · Zod', 'BlockNote', 'next-intl', 'Vite'],
  },
  {
    group: 'Mobile',
    items: ['React Native', 'Expo', 'React Navigation', 'MMKV', 'Firebase'],
  },
  {
    group: 'Backend when needed',
    items: ['Next.js Route Handlers', 'NestJS', 'Node.js · Express', 'Prisma · Drizzle', 'PostgreSQL', 'Redis', 'Socket.IO', 'REST API'],
  },
  {
    group: 'Tools & SEO',
    items: ['Git', 'Docker', 'GitLab CI', 'Turborepo', 'pnpm · Bun', 'Vitest', 'Playwright', 'Technical SEO', 'Sitemaps · Structured data', 'Figma', 'Jira'],
  },
];
