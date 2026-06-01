import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{
      background: "#FAF7F3",
      borderTop: "1px solid #EDE8E2",
      marginTop: "5rem",
      fontFamily: "var(--font-sans)",
    }}>
      <div className="container" style={{ padding: "4rem 2rem 2.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}>

          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo.png"
              alt="Dra. Mariana Fischer"
              width={120}
              height={120}
              style={{ width: "100px", height: "auto", marginBottom: "1rem" }}
            />
            <p style={{ fontSize: "0.75rem", color: "#9A9A9A", lineHeight: 1.8, letterSpacing: "0.04em" }}>
              Otorrinolaringologista<br />
              CRM-SP 134.600 · RQE 108169<br />
              São Paulo — SP
            </p>
          </div>

          {/* Especialidades */}
          <div>
            <div style={{
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4A07A",
              fontWeight: 600,
              marginBottom: "1rem",
            }}>
              Especialidades
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Atendimento Infantil", href: "/otorrino-pediatrica-sao-paulo/" },
                { label: "Adenoide e Amígdala", href: "/cirurgia-adenoide-amigdala-crianca-sao-paulo/" },
                { label: "Otite Infantil", href: "/otite-infantil-sao-paulo/" },
                { label: "Rinite Alérgica", href: "/rinite-alergica-sao-paulo/" },
                { label: "Zumbido no Ouvido", href: "/zumbido-no-ouvido-sao-paulo/" },
                { label: "Ronco e Apneia", href: "/ronco-apneia-sono-sao-paulo/" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{
                  color: "#8A8A8A",
                  fontSize: "0.8rem",
                  letterSpacing: "0.03em",
                  lineHeight: 1.6,
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <div style={{
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4A07A",
              fontWeight: 600,
              marginBottom: "1rem",
            }}>
              Contato
            </div>
            <div style={{ fontSize: "0.8rem", color: "#8A8A8A", lineHeight: 2.1 }}>
              <a
                href="https://wa.me/5511976761983"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8BBDB5", display: "block" }}
              >
                (11) 97676-1983
              </a>
              <a href="mailto:dramariana@marifischer.com.br" style={{ color: "#8A8A8A", display: "block" }}>
                dramariana@marifischer.com.br
              </a>
              <span style={{ display: "block", marginTop: "0.25rem" }}>
                Centro Profissional<br />
                Morumbi Shopping<br />
                Av. Roque Petroni Jr., 1089<br />
                Sala 309 — São Paulo
              </span>
            </div>
          </div>

        </div>

        {/* Linha inferior */}
        <div style={{
          borderTop: "1px solid #EDE8E2",
          paddingTop: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          fontSize: "0.72rem",
          color: "#BBBBBB",
          letterSpacing: "0.03em",
        }}>
          <span>© {new Date().getFullYear()} Dra. Mariana Fischer. Todos os direitos reservados.</span>
          <span>As informações deste site têm caráter educativo e não substituem a consulta médica.</span>
        </div>
      </div>
    </footer>
  );
}
