import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTAWhatsApp from "@/components/CTAWhatsApp";

export const metadata: Metadata = {
  title: "Otorrinolaringologista em São Paulo — Dra. Mariana Fischer",
  description:
    "Otorrinolaringologista em São Paulo para adultos e crianças. Dra. Mariana Fischer — consultas, procedimentos e cirurgias otorrino. CRM-SP 134.600 · RQE 108169.",
};

const especialidades = [
  { titulo: "Atendimento Infantil", descricao: "Avaliação de otite, adenoide, amígdalas, ronco e audição em bebês, crianças e adolescentes.", href: "/otorrino-pediatrica-sao-paulo/" },
  { titulo: "Cirurgia de Adenoide e Amígdala", descricao: "Avaliação e indicação cirúrgica para adenoidectomia, amigdalectomia e adenoamigdalectomia.", href: "/cirurgia-adenoide-amigdala-crianca-sao-paulo/" },
  { titulo: "Otite Infantil", descricao: "Diagnóstico e acompanhamento da otite aguda e de repetição em crianças.", href: "/otite-infantil-sao-paulo/" },
  { titulo: "Rinite Alérgica", descricao: "Avaliação e tratamento clínico e cirúrgico da rinite e sinusite em adultos e crianças.", href: "/rinite-alergica-sao-paulo/" },
  { titulo: "Zumbido no Ouvido", descricao: "Investigação das causas do zumbido (tinnitus) e orientação sobre as opções de manejo.", href: "/zumbido-no-ouvido-sao-paulo/" },
  { titulo: "Ronco e Apneia do Sono", descricao: "Avaliação otorrinolaringológica das causas do ronco e da apneia obstrutiva do sono.", href: "/ronco-apneia-sono-sao-paulo/" },
];

export default function HomePage() {
  const sans: React.CSSProperties = { fontFamily: "var(--font-sans)" };
  const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#FAF7F3", padding: "6rem 2rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", backgroundImage: "url(/pattern.png)", backgroundRepeat: "repeat", backgroundSize: "120px", opacity: 0.18 }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ ...sans, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A07A", fontWeight: 500, marginBottom: "1.5rem" }}>
                Otorrinolaringologista · São Paulo
              </p>
              <h1 style={{ ...serif, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 700, color: "#2E2E2E", lineHeight: 1.25, marginBottom: "1.5rem" }}>
                Cuidado especializado<br />
                <span style={{ color: "#8BBDB5" }}>para ouvidos, nariz</span><br />
                e garganta
              </h1>
              <p style={{ ...sans, fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.9, marginBottom: "2.5rem", maxWidth: "420px", fontWeight: 300 }}>
                Consultas, procedimentos e cirurgias otorrinolaringológicas para adultos e crianças em São Paulo.
              </p>
              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
                <CTAWhatsApp />
                <a href="#especialidades" className="link-sage" style={{ ...sans, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, paddingBottom: "2px", textDecoration: "none" }}>
                  Ver especialidades
                </a>
              </div>
            </div>

            {/* Foto */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>
                {/* Elemento decorativo atrás */}
                <div style={{
                  position: "absolute",
                  bottom: "-16px",
                  right: "-16px",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #C4A07A",
                  borderRadius: "2px",
                  zIndex: 0,
                }} />
                <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                  <Image
                    src="/foto-dra.jpg"
                    alt="Dra. Mariana Fischer — Otorrinolaringologista em São Paulo"
                    width={840}
                    height={630}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                  />
                  {/* Caption */}
                  <div style={{ background: "rgba(255,255,255,0.96)", padding: "0.85rem 1.25rem", borderTop: "1px solid #EDE8E2" }}>
                    <div style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4A07A", fontWeight: 600 }}>
                      Dra. Mariana Fischer
                    </div>
                    <div style={{ ...sans, fontSize: "0.65rem", color: "#AAAAAA", letterSpacing: "0.06em", marginTop: "2px" }}>
                      Otorrinolaringologista · CRM-SP 134.600 · RQE 108169
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa sage */}
      <section style={{ background: "#5E9F97", padding: "2.5rem 2rem" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "center", alignItems: "center" }}>
          {[{ num: "Adultos", sub: "e crianças" }, { num: "Morumbi", sub: "Shopping — Sala 309" }, { num: "Particular", sub: "sem fila de espera" }].map(item => (
            <div key={item.num} style={{ textAlign: "center" }}>
              <div style={{ ...serif, fontSize: "1.5rem", fontWeight: 600, color: "#fff", fontStyle: "italic" }}>{item.num}</div>
              <div style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", marginTop: "2px" }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" style={{ padding: "6rem 2rem", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.75rem" }}>
              Áreas de atuação
            </p>
            <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#2E2E2E" }}>
              Especialidades
            </h2>
            <div style={{ width: "40px", height: "1px", background: "#C4A07A", margin: "1.25rem auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5px", background: "#EDE8E2" }}>
            {especialidades.map((e) => (
              <Link key={e.href} href={e.href} className="card-especialidade" style={{ textDecoration: "none", background: "#fff", display: "block" }}>
                <div style={{ padding: "2.5rem 2rem" }}>
                  <h3 style={{ ...serif, fontSize: "1.2rem", fontWeight: 600, color: "#3D3D3D", marginBottom: "0.75rem", fontStyle: "italic" }}>
                    {e.titulo}
                  </h3>
                  <p style={{ ...sans, fontSize: "0.8rem", color: "#8A8A8A", lineHeight: 1.7, marginBottom: "1.25rem", fontWeight: 300 }}>
                    {e.descricao}
                  </p>
                  <span className="link-gold" style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", paddingBottom: "1px", textDecoration: "none" }}>
                    Saiba mais
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section style={{ padding: "6rem 2rem", background: "#EEF6F5" }}>
        <div className="container" style={{ maxWidth: "700px", textAlign: "center" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8BBDB5", marginBottom: "0.75rem" }}>
            Sobre
          </p>
          <h2 style={{ ...serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2E2E2E", marginBottom: "1.5rem" }}>
            Dra. Mariana Fischer
          </h2>
          <div style={{ width: "40px", height: "1px", background: "#8BBDB5", margin: "0 auto 2rem" }} />
          <p style={{ ...sans, fontSize: "0.88rem", color: "#6B6B6B", lineHeight: 1.9, marginBottom: "1.25rem", fontWeight: 300 }}>
            Médica especialista em Otorrinolaringologia, com atendimento para adultos e crianças.
            Realiza consultas, procedimentos ambulatoriais e cirurgias otorrinolaringológicas,
            oferecendo avaliação clínica completa desde o diagnóstico até a definição do plano terapêutico.
          </p>
          <p style={{ ...sans, fontSize: "0.72rem", color: "#BBBBBB", letterSpacing: "0.08em", marginBottom: "2rem", textTransform: "uppercase" }}>
            CRM-SP 134.600 · RQE 108169 · RQE 108169 · Especialidade reconhecida pela AMB/CFM
          </p>
          <Link href="/sobre/" className="link-sage" style={{ ...sans, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: "2px", textDecoration: "none" }}>
            Conheça mais
          </Link>
        </div>
      </section>

      {/* Localização + CTA */}
      <section style={{ padding: "6rem 2rem", background: "#3D3D3D" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.75rem" }}>Localização</p>
            <h2 style={{ ...serif, fontSize: "1.8rem", fontWeight: 400, color: "#fff", fontStyle: "italic", marginBottom: "1.5rem" }}>Morumbi Shopping</h2>
            <p style={{ ...sans, fontSize: "0.82rem", color: "#BBBBBB", lineHeight: 2, fontWeight: 300, marginBottom: "1.25rem" }}>
              Centro Profissional Morumbi Shopping<br />
              Av. Roque Petroni Júnior, 1089 — Sala 309<br />
              São Paulo — SP
            </p>
            <a href="https://maps.google.com/?q=Av.+Roque+Petroni+Junior+1089+Sao+Paulo" target="_blank" rel="noopener noreferrer"
              className="link-sage" style={{ ...sans, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", paddingBottom: "2px", textDecoration: "none" }}>
              Ver no Google Maps
            </a>
          </div>
          <div>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.75rem" }}>Agendamento</p>
            <h2 style={{ ...serif, fontSize: "1.8rem", fontWeight: 400, color: "#fff", fontStyle: "italic", marginBottom: "1.5rem" }}>Agende sua Consulta</h2>
            <p style={{ ...sans, fontSize: "0.82rem", color: "#BBBBBB", lineHeight: 1.9, fontWeight: 300, marginBottom: "2rem" }}>
              Atendimento particular para adultos e crianças.<br />
              Entre em contato pelo WhatsApp para verificar disponibilidade de horários.
            </p>
            <CTAWhatsApp />
            <p style={{ marginTop: "1.25rem", ...sans, fontSize: "0.78rem", color: "#888" }}>
              dramariana@marifischer.com.br
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
