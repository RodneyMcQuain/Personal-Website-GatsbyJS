// To pass Gatsby builds this is guard is needed where browser APIs are used, since Gatsby builds run in a headless environment
export const isBrowser = () => typeof window !== 'undefined';