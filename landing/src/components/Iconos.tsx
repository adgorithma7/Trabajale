import type { SVGProps } from "react";
import type { IconoCategoria } from "@/data/vacantes";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function IconoTelegram({ size = 22, ...p }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path
        fill="currentColor"
        d="M21.9 4.4 18.7 19.6c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.3-.1-.5-.6-.2L6.2 13.3 1.4 11.8c-1-.3-1.1-1 .2-1.5l18.9-7.3c.9-.3 1.6.2 1.4 1.4Z"
      />
    </svg>
  );
}

export function IconoWhatsApp({ size = 22, ...p }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2 0-.2-.2-.2-.4-.3Z"
      />
    </svg>
  );
}

export function IconoFormulario({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M9 3h6l2 2h3v16H4V5h3l2-2Z" />
      <path d="M8 11h8M8 15h5" />
    </svg>
  );
}

export function IconoCheck({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} strokeWidth={3} {...p}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function IconoEscudo({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 2 4 5v6c0 5.5 3.5 9.7 8 11 4.5-1.3 8-5.5 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

export function IconoCandado({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function IconoSinDinero({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c0-.8 1.1-1.5 2.5-1.5s2.5.7 2.5 1.5-1.1 1.5-2.5 1.5-2.5.7-2.5 1.5 1.1 1.5 2.5 1.5 2.5-.7 2.5-1.5" />
      <path d="m5 5 14 14" />
    </svg>
  );
}

export function IconoReloj({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconoPin({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconoMaletin({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  );
}

export function IconoCampana({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z" />
      <path d="M10 21h4" />
    </svg>
  );
}

export function IconoEdad({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9v6M9 9h0M12.5 15v-6l2.5 3 2.5-3v6" strokeWidth={1.8} />
    </svg>
  );
}

export function IconoFlecha({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconoMenu({ size = 26, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconoCerrar({ size = 26, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconoCorreo({ size = 22, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconoDeCategoria({ icono, size = 26 }: { icono: IconoCategoria; size?: number }) {
  switch (icono) {
    case "chat":
      return (
        <svg {...base(size)}>
          <path d="M4 5h16v11H9l-5 4V5Z" />
          <path d="M8 10h8" />
        </svg>
      );
    case "ventas":
      return (
        <svg {...base(size)}>
          <path d="M3 17 9 11l4 4 8-8" />
          <path d="M15 7h6v6" />
        </svg>
      );
    case "admin":
      return (
        <svg {...base(size)}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "soporte":
      return (
        <svg {...base(size)}>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <rect x="3" y="13" width="4" height="6" rx="1" />
          <rect x="17" y="13" width="4" height="6" rx="1" />
          <path d="M19 19a3 3 0 0 1-3 3h-3" />
        </svg>
      );
    case "operaciones":
      return (
        <svg {...base(size)}>
          <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case "remoto":
      return (
        <svg {...base(size)}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
  }
}
