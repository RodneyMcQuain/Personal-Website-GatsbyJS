import { NAVBAR_HEIGHT_REM } from '../styles/helpers/variables/variables';

export const getViewportHeightExcludingNavbar = () => getViewportHeight() - NAVBAR_HEIGHT_REM;
export const getViewportHeight = () => document.documentElement.clientHeight || window.innerHeight;
export const getViewportWidth = () => document.body.clientWidth || window.innerWidth;