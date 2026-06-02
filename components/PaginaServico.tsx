import CTAWhatsApp from "@/components/CTAWhatsApp";
import AvisoLegal from "@/components/AvisoLegal";

interface Props {
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}

export default function PaginaServico({ titulo, subtitulo, children }: Props) {
  const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };
  const sans: React.CSSProperties = { fontFamily: "var(--font-sans)" };

  return (
    <>
      {/* Hero da página */}
      <section style={{ background: "#FAF7F3", padding: "5rem 2rem 4rem", borderBottom: "1px solid #EDE8E2", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "30%", backgroundImage: "url(/pattern.png)", backgroundRepeat: "repeat", backgroundSize: "90px", opacity: 0.15 }} />
        <div className="container" style={{ maxWidth: "800px", position: "relative" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "1rem" }}>
            Especialidade
          </p>
          <h1 style={{ ...serif, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#2E2E2E", lineHeight: 1.25, marginBottom: "1rem" }}>
            {titulo}
          </h1>
          {subtitulo && (
            <p style={{ ...sans, fontSize: "0.9rem", color: "#8A8A8A", maxWidth: "600px", lineHeight: 1.8, fontWeight: 300 }}>
              {subtitulo}
            </p>
          )}
        </div>
      </section>

      {/* Conteúdo */}
      <section style={{ padding: "4rem 2rem 5rem", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="prose">
            {children}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "3.5rem", padding: "2.5rem", background: "#FAF7F3", borderRadius: "2px", border: "1px solid #EDE8E2" }}>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.5rem" }}>
              Agendamento
            </p>
            <h3 style={{ ...serif, fontSize: "1.5rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              Agende uma Avaliação
            </h3>
            <p style={{ ...sans, fontSize: "0.82rem", color: "#8A8A8A", marginBottom: "1.5rem", lineHeight: 1.8, fontWeight: 300 }}>
              📍 R. Doná Olga, 234, Vila São João, Guarulhos, SP<br />
              Atendimento particular para adultos e crianças.
            </p>
            <CTAWhatsApp />
          </div>

          <AvisoLegal />
        </div>
      </section>
    </>
  );
}
