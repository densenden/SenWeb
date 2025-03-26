# Studio Sen Monorepo

Ein modernes Monorepo für Studio Sen's digitale Präsenz, basierend auf Next.js und pnpm Workspaces.

## Struktur

```
/apps
  /main          - sen.studio
  /about         - about.sen.studio
  /art           - art.sen.studio
  /blog          - blog.sen.studio
  /booking       - booking.deniskreuzer.dk
  /about-denis   - about.deniskreuzer.dk
  /collab        - collab.sen.studio
  /content       - content.sen.studio
  /design        - design.sen.studio
  /flow          - flow.sen.studio
  /intern        - intern.deniskreuzer.dk
  /meditation    - meditation.sen.studio
  /mentor        - mentor.deniskreuzer.dk
  /model         - model.deniskreuzer.dk
  /shop          - shop.sen.studio
  /startup       - startup.sen.studio
  /web           - web.sen.studio
/packages
  /ui            - Gemeinsame UI-Komponenten
  /icons         - Icon-Set
  /utils         - Hilfsfunktionen
```

## Technologie-Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite
- pnpm Workspaces
- Google Fonts (Rubik, Bodoni Moda)

## Setup

1. Repository klonen:
```bash
git clone https://github.com/yourusername/sen-web.git
cd sen-web
```

2. Abhängigkeiten installieren:
```bash
pnpm install
```

3. Datenbank initialisieren:
```bash
pnpm prisma generate
pnpm prisma db push
```

4. Entwicklungsserver starten:
```bash
# Für eine spezifische App (z.B. flow)
cd apps/flow
pnpm dev

# Oder für alle Apps
pnpm -r dev
```

## Design-System

Das Design-System basiert auf Studio Sen's Markenwerten:
- Klarheit
- Achtsamkeit
- Gelassene Kraft
- Eleganz

### Farbpalette

- senMidnight: '#1A2E40'
- senDeepBlue: '#023859'
- senSlate: '#364C59'
- senClay: '#BF947A'
- senSkin: '#F2CCB6'
- senOxide: '#732727'
- senRust: '#BF391B'
- senBark: '#4C2929'
- senBurnt: '#BF3617'

### Typografie

- Hauptschrift: Rubik
- Überschriften: Bodoni Moda

## Lizenz

Alle Rechte vorbehalten © Studio Sen 