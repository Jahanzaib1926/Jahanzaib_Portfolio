/// <reference types="vite/client" />
// TypeScript sometimes fails to resolve bundled types in editors; this shim ensures smooth DX
declare module '@emailjs/browser' {
  const value: any;
  export default value;
}
