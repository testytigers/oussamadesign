import { en } from './en';
import { fr } from './fr';
import { eventsEn } from './events.en';
import { eventsFr } from './events.fr';
import { caseStudyEn } from './case-study.en';
import { caseStudyFr } from './case-study.fr';
import { matchingEn } from './case-study-matching.en';
import { matchingFr } from './case-study-matching.fr';

export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr' },
} as const;

export type Lang = keyof typeof languages;

/** English lives at the root so existing URLs keep working; French is prefixed. */
export const defaultLang: Lang = 'en';
export const locales = Object.keys(languages) as Lang[];

/** `caseStudy` is the calendar study, which predates the block model.
 *  `caseStudyContent` is keyed by slug and holds every block-based one. */
const dictionaries = {
  en: {
    ...en,
    eventContent: eventsEn,
    caseStudy: caseStudyEn,
    caseStudyContent: { 'wiggli-candidate-matching-case-study': matchingEn },
    /* Listing copy for every study, block-based or not. The calendar
       study's card predates the model and still lives under home. */
    caseStudyCards: {
      'wiggli-candidate-matching-case-study': matchingEn.card,
      'wiggli-calendar-ux-case-study': en.home.wiggli,
    },
  },
  fr: {
    ...fr,
    eventContent: eventsFr,
    caseStudy: caseStudyFr,
    caseStudyContent: { 'wiggli-candidate-matching-case-study': matchingFr },
    /* Listing copy for every study, block-based or not. The calendar
       study's card predates the model and still lives under home. */
    caseStudyCards: {
      'wiggli-candidate-matching-case-study': matchingFr.card,
      'wiggli-calendar-ux-case-study': fr.home.wiggli,
    },
  },
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
