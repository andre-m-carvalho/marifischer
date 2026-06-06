import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Agende sua Consulta | Dra. Mariana Fischer · Otorrino Guarulhos",
  description: "Agende consulta com a Dra. Mariana Fischer, otorrinolaringologista em Guarulhos, SP. Atendimento presencial e teleconsulta. Agendamento pelo WhatsApp.",
  robots: "noindex",
};

const whatsappLink = "https://wa.me/5511918780808?text=Ol%C3%A1%2C+vim+pelo+Google+e+gostaria+de+agendar+uma+consulta.";

const especialidades = [
  "Rinite e sinusite",
  "Otite e problemas de ouvido",
  "Adenoide e amígdalas",
  "Zumbido",
  "Ronco e apneia do sono",
  "Perda auditiva",
];

export default function Agende() {
  const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };
  const sans: React.CSSProperties = { fontFamily: "var(--font-sans)" };

  return (
    <div style={{ minHeight: "100vh", background: "#FAF7F3", display: "flex", flexDirection: "column", alignItems: "center", padding: "3rem 1.5rem 4rem" }}>

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Dra. Mariana Fischer"
        width={100}
        height={100}
        style={{ width: "72px", height: "auto", marginBottom: "1.25rem" }}
      />

      {/* Identidade */}
      <h1 style={{ ...serif, fontSize: "1.5rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "0.25rem", textAlign: "center" }}>
        Dra. Mariana Fischer
      </h1>
      <p style={{ ...sans, fontSize: "0.78rem", color: "#8A8A8A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
        Otorrinolaringologista
      </p>
      <p style={{ ...sans, fontSize: "0.7rem", color: "#BBBBBB", marginBottom: "2.5rem" }}>
        CRM-SP 134.600 · RQE 108169
      </p>

      {/* Card principal */}
      <div style={{ width: "100%", maxWidth: "460px", background: "#fff", border: "1px solid #EDE8E2", borderRadius: "4px", padding: "2rem 1.75rem", marginBottom: "1.25rem" }}>
        <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.5rem" }}>
          Agendamento
        </p>
        <h2 style={{ ...serif, fontSize: "1.4rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "0.75rem", lineHeight: 1.3 }}>
          Agende sua Consulta
        </h2>
        <p style={{ ...sans, fontSize: "0.84rem", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 300 }}>
          Atendimento particular para adultos e crianças.<br />
          Clique abaixo para falar diretamente com a secretária pelo WhatsApp.
        </p>

        {/* CTA WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.65rem",
            background: "#5E9F97",
            color: "#fff",
            padding: "1rem 1.5rem",
            borderRadius: "3px",
            textDecoration: "none",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            width: "100%",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Agendar pelo WhatsApp
        </a>
      </div>

      {/* Modalidades */}
      <div style={{ width: "100%", maxWidth: "460px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <div style={{ background: "#fff", border: "1px solid #EDE8E2", borderRadius: "4px", padding: "1.25rem 1rem" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.4rem" }}>Presencial</p>
          <p style={{ ...sans, fontSize: "0.82rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.3rem" }}>Guarulhos, SP</p>
          <p style={{ ...sans, fontSize: "0.75rem", color: "#8A8A8A", lineHeight: 1.6, fontWeight: 300 }}>
            R. Doná Olga, 234<br />Vila São João
          </p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #EDE8E2", borderRadius: "4px", padding: "1.25rem 1rem" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.4rem" }}>Teleconsulta</p>
          <p style={{ ...sans, fontSize: "0.82rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.3rem" }}>De onde você estiver</p>
          <p style={{ ...sans, fontSize: "0.75rem", color: "#8A8A8A", lineHeight: 1.6, fontWeight: 300 }}>
            Videochamada<br />Receita digital
          </p>
        </div>
      </div>

      {/* Especialidades */}
      <div style={{ width: "100%", maxWidth: "460px", background: "#fff", border: "1px solid #EDE8E2", borderRadius: "4px", padding: "1.5rem 1.75rem", marginBottom: "2rem" }}>
        <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.85rem" }}>
          Áreas de atendimento
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          {especialidades.map((e) => (
            <p key={e} style={{ ...sans, fontSize: "0.78rem", color: "#5A5A5A", fontWeight: 300, display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ color: "#8BBDB5", fontWeight: 700 }}>·</span> {e}
            </p>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <p style={{ ...sans, fontSize: "0.68rem", color: "#CCCCCC", textAlign: "center", lineHeight: 1.7 }}>
        As informações deste site têm caráter educativo<br />
        e não substituem a consulta médica.
      </p>
    </div>
  );
}
