import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import AvisoLegal from "@/components/AvisoLegal";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.resumo,
  };
}

const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };
const sans: React.CSSProperties = { fontFamily: "var(--font-sans)" };

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#FAF7F3", padding: "5rem 2rem 4rem", borderBottom: "1px solid #EDE8E2", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "30%", backgroundImage: "url(/pattern.png)", backgroundRepeat: "repeat", backgroundSize: "90px", opacity: 0.15 }} />
        <div className="container" style={{ maxWidth: "780px", position: "relative" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "1rem" }}>
            Blog · {post.data}
          </p>
          <h1 style={{ ...serif, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#2E2E2E", lineHeight: 1.25 }}>
            {post.titulo}
          </h1>
          <div style={{ width: "40px", height: "1px", background: "#C4A07A", margin: "1.25rem 0" }} />
          <p style={{ ...sans, fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300 }}>
            {post.resumo}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section style={{ padding: "4rem 2rem 5rem", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="prose">
            <MDXRemote source={post.conteudo} />
          </div>

          {/* CTA */}
          <div style={{ marginTop: "3.5rem", padding: "2.5rem", background: "#FAF7F3", borderRadius: "2px", border: "1px solid #EDE8E2" }}>
            <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.5rem" }}>
              Agendamento
            </p>
            <h3 style={{ ...serif, fontSize: "1.5rem", fontWeight: 700, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              Ficou com dúvidas? Agende uma Avaliação
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
