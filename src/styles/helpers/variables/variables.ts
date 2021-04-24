import { navbarHeight, featuredImageHeight, maxFooterHeight } from './variables.module.scss';
import { letterAnimationDuration } from '../../layout/components/Layout/Navbar/Brand/AnimatedLetter.module.scss';

export const NAVBAR_HEIGHT_REM = getUnitlessMeasurement(navbarHeight, "rem");
export const MAX_FOOTER_HEIGHT_REM = getUnitlessMeasurement(maxFooterHeight, "rem");
export const LETTER_ANIMATION_DURATION_MS = getUnitlessMeasurement(letterAnimationDuration, "ms");
export const FEATURED_IMG_VIEWPORT_HEIGHT = getUnitlessMeasurement(featuredImageHeight, "vh");

function getUnitlessMeasurement(measurement: string, unit: string): number {
    return Number(measurement?.replace(unit, ""));
}