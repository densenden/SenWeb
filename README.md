# SenWeb - Monorepo für Sen Webprojekte

Dieses Repository enthält alle Webprojekte von Sen in einem Monorepo-Setup.

## Projektstruktur

```
SenWeb/
├── packages/
│   └── ui/                 # Gemeinsame UI-Komponenten-Bibliothek
│       ├── src/
│       │   ├── components/ # React-Komponenten
│       │   └── lib/        # Hilfsfunktionen
│       └── package.json
├── apps/
│   ├── flow/              # Flow App (flow.sen.dev)
│   └── blog/              # Blog App (blog.sen.dev)
└── package.json
```

## Domains

- flow.sen.dev - Flow App
- blog.sen.dev - Blog App
- ui.sen.dev - UI-Komponenten-Dokumentation (geplant)

## Entwicklung

### Voraussetzungen

- Node.js 18+
- pnpm
- Vercel CLI (für Deployment)

### Installation

```bash
# Repository klonen
git clone https://github.com/studiosenmaster/SenWeb.git
cd SenWeb

# Dependencies installieren
pnpm install

# UI-Paket bauen
cd packages/ui
pnpm build
```

### Lokale Entwicklung

```bash
# Flow App starten
cd apps/flow
pnpm dev

# Blog App starten
cd apps/blog
pnpm dev
```

## Deployment

Alle Apps werden auf Vercel deployed. Das Deployment erfolgt automatisch bei Push auf den main Branch.

### UI-Paket

Das UI-Paket muss vor dem Deployment der Apps gebaut und veröffentlicht werden:

```bash
cd packages/ui
pnpm build
npm publish --access public
```

### Apps

Jede App hat ihre eigene Vercel-Konfiguration:

```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

### Deployment-Prozess

1. UI-Paket aktualisieren und veröffentlichen
2. Änderungen committen und pushen
3. Vercel automatisiert das Deployment der Apps

## Technologie-Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Vercel für Hosting und Deployment

## Lizenz

MIT 