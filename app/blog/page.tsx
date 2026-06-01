import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Informações sobre Saúde Otorrinolaringológica",
  description:
    "Artigos educativos sobre saúde dos ouvidos, nariz e garganta. Dra. Mariana Fischer — otorrinolaringologista em São Paulo.",
};

// Futuramente os posts virão de /content/blog/*.mdx
const posts: { slug: string; titulo: string; resumo: string; data: string }[] = [];

export default function Blog() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)", padding: "4rem 1.5rem 3rem", color: "#fff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>
            Blog — Saúde Otorrinolaringológica
          </h1>
          <p style={{ color: "#D6EAF8", fontSize: "1.05rem" }}>
            Informações educativas sobre ouvidos, nariz e garganta — para adultos e crianças.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#999" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Em breve, novos artigos por aqui.</p>
              <p style={{ fontSize: "0.9rem" }}>
                Enquanto isso, conheça nossas{" "}
                <Link href="/#especialidades" style={{ color: "#2E86C1" }}>páginas de especialidades</Link>.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: "none" }}>
                  <div style={{ padding: "1.75rem", border: "1px solid #e5e7eb", borderRadius: "12px" }}>
                    <p style={{ fontSize: "0.8rem", color: "#999", marginBottom: "0.4rem" }}>{post.data}</p>
                    <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1B4F72", marginBottom: "0.5rem" }}>{post.titulo}</h2>
                    <p style={{ color: "#666", fontSize: "0.92rem", lineHeight: 1.6 }}>{post.resumo}</p>
                    <span style={{ display: "inline-block", marginTop: "0.75rem", color: "#2E86C1", fontSize: "0.85rem", fontWeight: 600 }}>
                      Ler artigo →
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
