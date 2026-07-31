import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Maps a raw brand accent hex to its WCAG AA-compliant CSS variable, for use
 * as an inline `color` on small text (badges, labels, links) rendered on
 * backgrounds that toggle between light and dark. Falls back to the raw hex
 * for colors without a text-safe variant (e.g. navy, which is already
 * high-contrast on white and paired with `dark:text-white` in markup).
 */
const ACCENT_TEXT_VARS: Record<string, string> = {
  '#2E75B6': 'var(--text-blue)',
  '#4F8A77': 'var(--text-teal)',
  '#B8924A': 'var(--text-gold)',
  '#1F3A5F': 'var(--text-navy)',
};

/** Fixed WCAG-safe hex for text sitting on permanently-dark backgrounds
 * (hero sections, footer, navy CTA bands) — these don't toggle with the
 * site theme, so a CSS variable that flips per `.dark` would be wrong. */
export const ON_DARK = {
  blue: '#90b6d8',
  teal: '#94b8ac',
  gold: '#caad77',
  navy: '#a8b2c1',
} as const;

/** Darkened brand accents safe as a SOLID fill behind white text/glyphs
 * (avatar circles, icon badges) — the raw brand hex doesn't have enough
 * contrast with white for teal/gold. Blue is close enough to use as-is. */
export const SOLID_FILL = {
  blue: '#2E75B6',
  teal: '#477c6b',
  gold: '#8a6e38',
} as const;

const SOLID_FILL_MAP: Record<string, string> = {
  '#2E75B6': SOLID_FILL.blue,
  '#4F8A77': SOLID_FILL.teal,
  '#B8924A': SOLID_FILL.gold,
};

/** Maps a raw brand accent hex to a shade safe as a solid fill behind white
 * text (buttons, avatar circles). Falls back to the raw hex for colors
 * that don't need adjustment (e.g. navy, already dark enough). */
export function solidFill(hex: string) {
  return SOLID_FILL_MAP[hex] ?? hex;
}

const ON_DARK_MAP: Record<string, string> = {
  '#2E75B6': ON_DARK.blue,
  '#4F8A77': ON_DARK.teal,
  '#B8924A': ON_DARK.gold,
  '#1F3A5F': ON_DARK.navy,
};

/** Maps a raw brand accent hex to its fixed light-tint variant for text on
 * permanently-dark backgrounds (hero sections, navy CTA bands). Use instead
 * of `accentText` when the surrounding section doesn't toggle with theme. */
export function onDarkText(hex: string) {
  return ON_DARK_MAP[hex] ?? hex;
}

const ON_LIGHT_MAP: Record<string, string> = {
  '#2E75B6': '#2867a0',
  '#4F8A77': '#3e6c5d',
  '#B8924A': '#796031',
};

/** Maps a raw brand accent hex to its fixed dark-tint variant for text/icons
 * on permanently-light backgrounds (e.g. a fixed pale icon-chip color that
 * doesn't have a `dark:` variant). Use instead of `accentText` when the
 * surrounding background doesn't toggle with theme. */
export function onLightText(hex: string) {
  return ON_LIGHT_MAP[hex] ?? hex;
}

export function accentText(hex: string) {
  return ACCENT_TEXT_VARS[hex] ?? hex;
}
