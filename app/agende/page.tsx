import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";

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
        <WhatsAppCTAButton href={whatsappLink} eventLabel="whatsapp_click_agende" />
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
