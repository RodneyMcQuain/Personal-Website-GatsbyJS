import { NAVBAR_HEIGHT, FEATURED_IMG_HEIGHT, MAX_FOOTER_HEIGHT } from './_variables.scss';
import { LETTER_ANIMATION_DURATION } from '../../layout/components/Layout/Navbar/Brand/AnimatedLetter.module.scss';

export const NAVBAR_HEIGHT_REM = getUnitlessMeasurement(NAVBAR_HEIGHT, "rem");
export const MAX_FOOTER_HEIGHT_REM = getUnitlessMeasurement(MAX_FOOTER_HEIGHT, "rem");
export const LETTER_ANIMATION_DURATION_MS = getUnitlessMeasurement(LETTER_ANIMATION_DURATION, "ms");
export const FEATURED_IMG_VIEWPORT_HEIGHT = getUnitlessMeasurement(FEATURED_IMG_HEIGHT, "vh");

function getUnitlessMeasurement(measurement: string, unit: string): number {
    return Number(measurement?.replace(unit, ""));
}