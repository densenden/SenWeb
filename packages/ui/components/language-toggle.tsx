"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { Language } from "../lib/i18n"

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
      >
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
      </button>
      <div className="absolute right-0 mt-2 w-24 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <button
            onClick={() => onLanguageChange('en')}
            className={`block w-full px-4 py-2 text-left text-sm ${
              currentLanguage === 'en' ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            English
          </button>
          <button
            onClick={() => onLanguageChange('de')}
            className={`block w-full px-4 py-2 text-left text-sm ${
              currentLanguage === 'de' ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            Deutsch
          </button>
        </div>
      </div>
    </div>
  )
} 