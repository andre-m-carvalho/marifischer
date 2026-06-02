import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog, Informações sobre Saúde Otorrinolaringológica",
  description:
    "Artigos educativos sobre saúde dos ouvidos, nariz e garganta. Dra. Mariana Fischer, otorrinolaringologista em Guarulhos e São Paulo.",
};

const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };
const sans: React.CSSProperties = { fontFamily: "var(--font-sans)" };

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#FAF7F3", padding: "5rem 2rem 4rem", borderBottom: "1px solid #EDE8E2", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "30%", backgroundImage: "url(/pattern.png)", backgroundRepeat: "repeat", backgroundSize: "90px", opacity: 0.15 }} />
        <div className="container" style={{ maxWidth: "800px", position: "relative" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "1rem" }}>
            Blog
          </p>
          <h1 style={{ ...serif, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#2E2E2E", lineHeight: 1.25 }}>
            Saúde Otorrinolaringológica
          </h1>
          <div style={{ width: "40px", height: "1px", background: "#C4A07A", margin: "1.25rem 0" }} />
          <p style={{ ...sans, fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300 }}>
            Informações educativas sobre ouvidos, nariz e garganta, para adultos e crianças.
          </p>
        </div>
      </section>

      {/* Lista de posts */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div style={{ width: "40px", height: "1px", background: "#EDE8E2", margin: "0 auto 2.5rem" }} />
              <p style={{ ...serif, fontSize: "1.3rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "1rem" }}>
                Em breve, novos artigos por aqui.
              </p>
              <p style={{ ...sans, fontSize: "0.88rem", color: "#8A8A8A", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
                Conteúdo educativo sobre ouvidos, nariz e garganta —<br />
                dicas, orientações e informações para pacientes adultos e crianças.
              </p>
              <Link href="/#especialidades" className="link-sage" style={{ ...sans, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: "2px", textDecoration: "none" }}>
                Ver áreas de atuação
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: "none" }} className="card-especialidade">
                  <div style={{ padding: "2.5rem 0", borderBottom: "1px solid #EDE8E2", borderTop: i === 0 ? "1px solid #EDE8E2" : "none" }}>
                    <p style={{ ...sans, fontSize: "0.68rem", color: "#C4A07A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>{post.data}</p>
                    <h2 style={{ ...serif, fontSize: "1.3rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.6rem", lineHeight: 1.3 }}>{post.titulo}</h2>
                    <p style={{ ...sans, color: "#6B6B6B", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "1rem" }}>{post.resumo}</p>
                    <span className="link-gold" style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Ler artigo
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
