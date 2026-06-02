interface Props {
  tipo?: "presencial" | "teleconsulta";
}

export default function CTAAgendamento({ tipo = "presencial" }: Props) {
  const href =
    tipo === "teleconsulta"
      ? "https://cal.eu/marifischer/teleconsulta"
      : "https://cal.eu/marifischer/consulta-presencial";

  const label =
    tipo === "teleconsulta"
      ? "Agendar Teleconsulta Online"
      : "Agendar Consulta Presencial";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        background: "#5E9F97",
        color: "#fff",
        padding: "0.9rem 2rem",
        borderRadius: "2px",
        fontWeight: 600,
        fontSize: "0.75rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        transition: "background 0.2s",
      }}
      className="btn-cal"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      {label}
    </a>
  );
}
