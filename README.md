# SenWeb

A modern monorepo setup for web applications using Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
SenWeb/
├── apps/
│   ├── flow/     # Main application
│   └── blog/     # Blog application
├── packages/
│   └── ui/       # Shared UI components
└── vercel.json   # Vercel deployment configuration
```

## Color Palette

Our design system uses a carefully crafted color palette that works seamlessly in both light and dark modes:

![Color Palette](color-palette.svg)

### Light Mode
- Background: `hsl(0 0% 100%)` - Pure white
- Foreground: `hsl(222.2 84% 4.9%)` - Deep gray
- Primary: `hsl(222.2 47.4% 11.2%)` - Dark gray
- Secondary: `hsl(210 40% 96.1%)` - Light blue-gray
- Accent: `hsl(210 40% 96.1%)` - Light blue-gray
- Muted: `hsl(210 40% 96.1%)` - Light blue-gray
- Border: `hsl(214.3 31.8% 91.4%)` - Light gray
- Input: `hsl(214.3 31.8% 91.4%)` - Light gray
- Ring: `hsl(222.2 84% 4.9%)` - Deep gray

### Dark Mode
- Background: `hsl(222.2 84% 4.9%)` - Deep gray
- Foreground: `hsl(210 40% 98%)` - Light gray
- Primary: `hsl(210 40% 98%)` - Light gray
- Secondary: `hsl(217.2 32.6% 17.5%)` - Dark blue-gray
- Accent: `hsl(217.2 32.6% 17.5%)` - Dark blue-gray
- Muted: `hsl(217.2 32.6% 17.5%)` - Dark blue-gray
- Border: `hsl(217.2 32.6% 17.5%)` - Dark blue-gray
- Input: `hsl(217.2 32.6% 17.5%)` - Dark blue-gray
- Ring: `hsl(212.7 26.8% 83.9%)` - Light blue-gray

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/densenden/SenWeb.git
   cd SenWeb
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   # For Flow app
   cd apps/flow && pnpm dev

   # For Blog app
   cd apps/blog && pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- Flow app: [http://localhost:3000](http://localhost:3000)
- Blog app: [http://localhost:3001](http://localhost:3001)

## Deployment

The project is configured for deployment on Vercel:

- Flow app: [flow.sen.studio](https://flow.sen.studio)
- Blog app: [blog.sen.studio](https://blog.sen.studio)

## Features

- 🎨 Modern UI with Tailwind CSS
- 🌓 Dark mode support
- 📱 Responsive design
- 🚀 Fast page loads with Next.js
- 📦 Monorepo setup with pnpm
- 🔄 Shared UI components
- 🎯 TypeScript for type safety

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 