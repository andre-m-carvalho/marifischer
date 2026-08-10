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
              Guarulhos, SP
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
              Áreas de Atuação
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Atendimento Infantil", href: "/otorrino-pediatrica-sao-paulo/" },
                { label: "Adenoide e Amígdala", href: "/cirurgia-adenoide-amigdala-crianca-sao-paulo/" },
                { label: "Otite Infantil", href: "/otite-infantil-sao-paulo/" },
                { label: "Rinite Alérgica", href: "/rinite-alergica-sao-paulo/" },
                { label: "Zumbido no Ouvido", href: "/zumbido-no-ouvido-sao-paulo/" },
                { label: "Ronco e Apneia", href: "/ronco-apneia-sono-sao-paulo/" },
                { label: "Otorrino em Guarulhos", href: "/otorrinolaringologista-guarulhos/" },
                { label: "Teleconsulta", href: "/teleconsulta-otorrinolaringologista/" },
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
                href="https://wa.me/5511915230000"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8BBDB5", display: "block" }}
              >
                (11) 91523-0000
              </a>
              <a href="mailto:dramariana@marifischer.com.br" style={{ color: "#8A8A8A", display: "block" }}>
                dramariana@marifischer.com.br
              </a>
              <span style={{ display: "block", marginTop: "0.25rem" }}>
                R. Doná Olga, 234<br />
                Vila São João<br />
                Guarulhos, SP
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
          <a
            href="https://instagram.com/dramarifischer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Dra. Mariana Fischer"
            style={{ color: "#BBBBBB", display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @dramarifischer
          </a>
          <span>As informações deste site têm caráter educativo e não substituem a consulta médica.</span>
        </div>
      </div>
    </footer>
  );
}
