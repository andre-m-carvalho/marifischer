import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Links | Dra. Mariana Fischer",
  description: "Agende sua consulta com a Dra. Mariana Fischer, otorrinolaringologista.",
};

const links = [
  {
    label: "Agendar Consulta Presencial",
    sub: "Guarulhos, SP — Seg a Qua",
    href: "https://wa.me/5511918780808?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20presencial.",
    icon: "📅",
    destaque: true,
  },
  {
    label: "Agendar Teleconsulta",
    sub: "Qualquer cidade do Brasil — Qui e Sex",
    href: "https://wa.me/5511918780808?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20agendar%20uma%20teleconsulta.",
    icon: "💻",
    destaque: true,
  },
  {
    label: "Como Chegar ao Consultório",
    sub: "R. Doná Olga, 234 — Guarulhos, SP",
    href: "https://maps.app.goo.gl/UEmYRFSkb8utzh2b9",
    icon: "📍",
    destaque: false,
  },
  {
    label: "Instagram",
    sub: "@dramarifischer",
    href: "https://instagram.com/dramarifischer",
    icon: "📷",
    destaque: false,
  },
];

export default function Links() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF7F3",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "3rem 1.5rem 4rem",
      fontFamily: "var(--font-sans)",
    }}>
      {/* Logo e nome */}
      <Image
        src="/logo.png"
        alt="Dra. Mariana Fischer"
        width={100}
        height={100}
        style={{ width: "80px", height: "auto", marginBottom: "1rem" }}
      />
      <h1 style={{
        fontFamily: "var(--font-serif)",
        fontSize: "1.3rem",
        fontWeight: 700,
        color: "#2E2E2E",
        marginBottom: "0.25rem",
        textAlign: "center",
      }}>
        Dra. Mariana Fischer
      </h1>
      <p style={{
        fontSize: "0.78rem",
        color: "#8A8A8A",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "0.25rem",
      }}>
        Otorrinolaringologista
      </p>
      <p style={{
        fontSize: "0.72rem",
        color: "#AAAAAA",
        marginBottom: "2.5rem",
      }}>
        CRM-SP 134.600 · RQE 108169
      </p>

      {/* Links */}
      <div style={{
        width: "100%",
        maxWidth: "420px",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
      }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: link.destaque ? "#5E9F97" : "#fff",
              color: link.destaque ? "#fff" : "#2E2E2E",
              border: link.destaque ? "none" : "1px solid #EDE8E2",
              borderRadius: "4px",
              padding: "1rem 1.25rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{link.icon}</span>
            <div>
              <div style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}>
                {link.label}
              </div>
              <div style={{
                fontSize: "0.72rem",
                opacity: 0.75,
                marginTop: "0.15rem",
              }}>
                {link.sub}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Rodapé */}
      <p style={{
        marginTop: "3rem",
        fontSize: "0.68rem",
        color: "#CCCCCC",
        textAlign: "center",
        lineHeight: 1.7,
      }}>
        As informações deste site têm caráter educativo<br />
        e não substituem a consulta médica.
      </p>
    </div>
  );
}
