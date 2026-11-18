import Link from "next/link";

export function Marca({ claro = false, tamano = 34 }: { claro?: boolean; tamano?: number }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Trabájale, inicio">
      <svg width={tamano} height={tamano} viewBox="0 0 34 34" role="img" aria-hidden="true">
        <circle cx="17" cy="17" r="17" fill={claro ? "#FFFFFF" : "#1F4FD8"} />
        <path
          d="M9 18l6 6 11-13"
          stroke="#FF7A29"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display text-xl font-bold tracking-tight ${claro ? "text-white" : "text-azul"}`}
      >
        trabajale<span className="text-naranja">.ai</span>
      </span>
    </Link>
  );
}
