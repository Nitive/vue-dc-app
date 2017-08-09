declare module 'debounce-promise' {
  export default function debounce<T extends Function>(f: T, wait: number): T;
}
