import { en } from './en';
import { fr } from './fr';
import { eventsEn } from './events.en';
import { eventsFr } from './events.fr';
import { caseStudyEn } from './case-study.en';
import { caseStudyFr } from './case-study.fr';

export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr' },
} as const;

export type Lang = keyof typeof languages;

/** English lives at the root so existing URLs keep working; French is prefixed. */
export const defaultLang: Lang = 'en';
export const locales = Object.keys(languages) as Lang[];

const dictionaries = {
  en: { ...en, eventContent: eventsEn, caseStudy: caseStudyEn },
  fr: { ...fr, eventContent: eventsFr, caseStudy: caseStudyFr },
} as const;

export type Dictionary = (typeof dictionaries)['en'];

export function t(lang: Lang): Dictionary {
  return dictionaries[lang] as Dictionary;
}

/** Turns an unprefixed path ("/events") into the one for `lang`. */
export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Every locale's URL for one logical page — used for hreflang alternates. */
export function alternates(path: string) {
  return locales.map((lang) => ({ lang, path: localizePath(lang, path) }));
}
