# SenWeb - Monorepo for Studio Sen Web Projects

This repository contains all web projects of Studio Sen in a monorepo setup.

## Project Structure

```
SenWeb/
├── packages/
│   ├── ui/                 # Shared UI Component Library
│   │   ├── src/
│   │   │   ├── components/ # React Components
│   │   │   └── lib/        # Utility Functions
│   │   └── package.json
│   ├── icons/             # Material Symbols Icons
│   └── utils/             # Shared Utilities
├── apps/
│   ├── main/              # sen.studio
│   ├── about/             # about.sen.studio
│   ├── art/               # art.sen.studio
│   ├── blog/              # blog.sen.studio
│   ├── booking/           # booking.deniskreuzer.dk
│   ├── about-denis/       # about.deniskreuzer.dk
│   ├── collab/            # collab.sen.studio
│   ├── content/           # content.sen.studio
│   ├── design/            # design.sen.studio
│   ├── flow/              # flow.sen.studio
│   ├── meditation/        # meditation.sen.studio
│   ├── mentor/            # mentor.deniskreuzer.dk
│   ├── model/             # model.deniskreuzer.dk
│   ├── shop/              # shop.sen.studio
│   ├── startup/           # startup.sen.studio
│   ├── web/               # web.sen.studio
│   └── intern/            # intern.deniskreuzer.dk
└── package.json
```

## Design System

### Typography
- Rubik (Main Text)
- Bodoni Moda (Headlines)

### Color Palette
```javascript
colors: {
  senMidnight: '#1A2E40',
  senDeepBlue: '#023859',
  senSlate: '#364C59',
  senClay: '#BF947A',
  senSkin: '#F2CCB6',
  senOxide: '#732727',
  senRust: '#BF391B',
  senBark: '#4C2929',
  senBurnt: '#BF3617'
}
```

### Icons
- Google Material Symbols

## Development

### Prerequisites

- Node.js 18+
- pnpm
- Vercel CLI (for deployment)

### Installation

```bash
# Clone repository
git clone https://github.com/studiosenmaster/SenWeb.git
cd SenWeb

# Install dependencies
pnpm install

# Build UI package
cd packages/ui
pnpm build
```

### Local Development

```bash
# Start app (example for Flow)
cd apps/flow
pnpm dev
```

## Deployment

All apps are deployed on Vercel. Deployment is automated on push to the main branch.

### UI Package

The UI package is published as an npm package and can be used in all apps:

```bash
# Build and publish UI package
cd packages/ui
pnpm build
npm publish --access public

# Use UI package in an app
pnpm add @studiosenmaster/sen-ui
```

### Apps

Each app has its own Vercel configuration:

```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

### Deployment Process

1. Update and publish UI package
2. Commit and push changes
3. Vercel automates app deployment

## Technology Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite
- Vercel for hosting and deployment

## License

MIT 