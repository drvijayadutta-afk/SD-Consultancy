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
  '#25405F': 'var(--text-blue)',
  '#3E5776': 'var(--text-teal)',
  '#E8E0CB': 'var(--text-gold)',
  '#101E36': 'var(--text-navy)',
};

/** Fixed WCAG-safe hex for text sitting on permanently-dark backgrounds
 * (hero sections, footer, navy CTA bands) — these don't toggle with the
 * site theme, so a CSS variable that flips per `.dark` would be wrong. */
export const ON_DARK = {
  blue: '#8594A5',
  teal: '#8393a7',
  gold: '#E8E0CB',
  navy: '#8C939F',
} as const;

/** Darkened brand accents safe as a SOLID fill behind white text/glyphs
 * (avatar circles, icon badges) — the raw brand hex doesn't have enough
 * contrast with white for teal/gold. Blue is close enough to use as-is. */
export const SOLID_FILL = {
  blue: '#25405F',
  teal: '#3E5776',
  gold: '#25405F',
} as const;

const SOLID_FILL_MAP: Record<string, string> = {
  '#25405F': SOLID_FILL.blue,
  '#3E5776': SOLID_FILL.teal,
  '#E8E0CB': SOLID_FILL.gold,
};

/** Maps a raw brand accent hex to a shade safe as a solid fill behind white
 * text (buttons, avatar circles). Falls back to the raw hex for colors
 * that don't need adjustment (e.g. navy, already dark enough). */
export function solidFill(hex: string) {
  return SOLID_FILL_MAP[hex] ?? hex;
}

const ON_DARK_MAP: Record<string, string> = {
  '#25405F': ON_DARK.blue,
  '#3E5776': ON_DARK.teal,
  '#E8E0CB': ON_DARK.gold,
  '#101E36': ON_DARK.navy,
};

/** Maps a raw brand accent hex to its fixed light-tint variant for text on
 * permanently-dark backgrounds (hero sections, navy CTA bands). Use instead
 * of `accentText` when the surrounding section doesn't toggle with theme. */
export function onDarkText(hex: string) {
  return ON_DARK_MAP[hex] ?? hex;
}

const ON_LIGHT_MAP: Record<string, string> = {
  '#25405F': '#25405F',
  '#3E5776': '#3E5776',
  '#E8E0CB': '#25405F',
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
