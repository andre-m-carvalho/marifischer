import type { Metadata } from "next";
import Image from "next/image";
import CTAWhatsApp from "@/components/CTAWhatsApp";

export const metadata: Metadata = {
  title: "Sobre a Dra. Mariana Fischer, Otorrinolaringologista SP",
  description:
    "Conheça a Dra. Mariana Fischer, otorrinolaringologista em São Paulo. CRM-SP 134.600, RQE 108169. Mais de 17 anos de atuação em otorrinolaringologia.",
};

const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };
const sans: React.CSSProperties = { fontFamily: "var(--font-sans)" };

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#FAF7F3", padding: "5rem 2rem 4rem", borderBottom: "1px solid #EDE8E2", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "30%", backgroundImage: "url(/pattern.png)", backgroundRepeat: "repeat", backgroundSize: "90px", opacity: 0.15 }} />
        <div className="container" style={{ maxWidth: "800px", position: "relative" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "1rem" }}>
            Sobre
          </p>
          <h1 style={{ ...serif, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#2E2E2E", lineHeight: 1.25 }}>
            Dra. Mariana Fischer
          </h1>
          <div style={{ width: "40px", height: "1px", background: "#C4A07A", margin: "1.25rem 0" }} />
          <p style={{ ...sans, fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300 }}>
            Otorrinolaringologista com mais de 17 anos de atuação, atendimento para adultos e crianças em São Paulo.
          </p>
        </div>
      </section>

      {/* Números */}
      <section style={{ background: "#5E9F97", padding: "2.5rem 2rem" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "center" }}>
          {[
            { num: "17+", sub: "Anos de atuação em otorrinolaringologia" },
            { num: "2008", sub: "Ano de inscrição no CRM-SP" },
            { num: "CRM 134.600", sub: "RQE 108169" },
          ].map(item => (
            <div key={item.num} style={{ textAlign: "center" }}>
              <div style={{ ...serif, fontSize: "1.6rem", fontWeight: 700, color: "#fff" }}>{item.num}</div>
              <div style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", marginTop: "4px", maxWidth: "160px" }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Conteúdo */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>

          {/* Foto + bio lado a lado */}
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid #EDE8E2" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", bottom: "-12px", left: "-12px", width: "100%", height: "100%", border: "2px solid #8BBDB5", borderRadius: "2px", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden" }}>
                <Image
                  src="/foto-dra-sobre.jpg"
                  alt="Dra. Mariana Fischer, Otorrinolaringologista"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div style={{ paddingTop: "0.5rem" }}>
              <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.75rem" }}>Formação e Especialização</p>
              <h2 style={{ ...serif, fontSize: "1.6rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "1.25rem" }}>Especialista em Otorrinolaringologia</h2>
              <p style={{ ...sans, fontSize: "0.95rem", color: "#5A5A5A", lineHeight: 1.9, marginBottom: "1rem", fontWeight: 300 }}>
                A Dra. Mariana Fischer é médica especialista em Otorrinolaringologia, com inscrição no CRM-SP desde 2008.
                Ao longo de mais de 17 anos de atuação, acumulou experiência em consultas, procedimentos ambulatoriais
                e cirurgias otorrinolaringológicas para pacientes adultos e crianças.
              </p>
              <p style={{ ...sans, fontSize: "0.95rem", color: "#5A5A5A", lineHeight: 1.9, fontWeight: 300 }}>
                Seu trabalho inclui ampla atuação no atendimento de crianças com condições como otite, adenoide aumentada,
                amígdalas e distúrbios respiratórios do sono, fruto de anos dedicados a essa área dentro da especialidade
                de Otorrinolaringologia.
              </p>
              <div style={{ marginTop: "1.5rem", ...sans, fontSize: "0.78rem", color: "#AAAAAA", letterSpacing: "0.06em" }}>
                CRM-SP 134.600 · RQE 108169 · Especialidade reconhecida pela AMB/CFM
              </div>
            </div>
          </div>

        </div>
        <div className="container" style={{ maxWidth: "780px" }}>

          <div style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #EDE8E2" }}>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.75rem" }}>Área de Atuação</p>
            <h2 style={{ ...serif, fontSize: "1.6rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "1.25rem" }}>Ouvidos, Nariz e Garganta</h2>
            <p style={{ ...sans, fontSize: "0.95rem", color: "#5A5A5A", lineHeight: 1.9, fontWeight: 300 }}>
              Realiza avaliação e tratamento das condições que afetam os ouvidos, nariz, garganta e estruturas relacionadas —
              incluindo otite, rinite, sinusite, zumbido, perda auditiva, ronco, apneia do sono, adenoide e amígdalas.
              Atende adultos e crianças, com indicação de tratamento clínico ou cirúrgico conforme cada caso.
            </p>
          </div>

          <div style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #EDE8E2" }}>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.75rem" }}>Localização</p>
            <h2 style={{ ...serif, fontSize: "1.6rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "1.25rem" }}>Consultório</h2>
            <p style={{ ...sans, fontSize: "0.95rem", color: "#5A5A5A", lineHeight: 1.9, fontWeight: 300 }}>
              O consultório está situado na Vila São João, em Guarulhos, com estrutura preparada para
              receber pacientes adultos e crianças.
            </p>
            <p style={{ ...sans, fontSize: "0.9rem", color: "#7A7A7A", lineHeight: 2, marginTop: "0.75rem", fontWeight: 300 }}>
              📍 R. Doná Olga, 234, Vila São João<br />
              Guarulhos, SP · CEP 07044-010
            </p>
          </div>

          {/* CTA */}
          <div style={{ padding: "2.5rem", background: "#FAF7F3", border: "1px solid #EDE8E2", borderRadius: "2px" }}>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.5rem" }}>Agendamento</p>
            <h3 style={{ ...serif, fontSize: "1.5rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "0.75rem" }}>Agende uma Consulta</h3>
            <p style={{ ...sans, fontSize: "0.88rem", color: "#8A8A8A", marginBottom: "1.5rem", lineHeight: 1.8, fontWeight: 300 }}>
              Atendimento particular para adultos e crianças.<br />
              Entre em contato pelo WhatsApp para verificar disponibilidade de horários.
            </p>
            <CTAWhatsApp />
            <p style={{ marginTop: "1rem", ...sans, fontSize: "0.82rem", color: "#BBBBBB" }}>
              ✉️ dramariana@marifischer.com.br
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
