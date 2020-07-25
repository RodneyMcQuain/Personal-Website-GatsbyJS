import { NAVBAR_HEIGHT, LETTER_ANIMATION_DURATION, FEATURED_IMG_HEIGHT, MAX_FOOTER_HEIGHT } from './_variables.scss';

export const NAVBAR_HEIGHT_REM = NAVBAR_HEIGHT;
export const MAX_FOOTER_HEIGHT_REM = MAX_FOOTER_HEIGHT;
export const LETTER_ANIMATION_DURATION_MS = getUnitlessMeasurement(LETTER_ANIMATION_DURATION, "ms");
export const FEATURED_IMG_VIEWPORT_HEIGHT = getUnitlessMeasurement(FEATURED_IMG_HEIGHT, "vh");

function getUnitlessMeasurement(measurement: string, unit: string): number {
    return Number(measurement?.replace(unit, ""));
}