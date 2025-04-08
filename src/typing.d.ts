declare module 'slash2';
declare module '*.css';
declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare const REACT_APP_API_URL: string;
