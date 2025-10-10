// Let TS accept CSS (side-effect imports and CSS modules if you add them later)
declare module '*.css';

// Common assets you already handle in webpack:
declare module '*.svg' { const src: string; export default src; }
declare module '*.png' { const src: string; export default src; }
declare module '*.jpg' { const src: string; export default src; }
declare module '*.jpeg' { const src: string; export default src; }
declare module '*.gif' { const src: string; export default src; }
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';
