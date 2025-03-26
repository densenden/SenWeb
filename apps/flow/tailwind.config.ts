import type { Config } from "tailwindcss"
import sharedConfig from "@sen/ui/tailwind.config"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
} satisfies Config

export default config 