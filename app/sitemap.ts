export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://marifischer.com.br";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/sobre/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/otorrino-pediatrica-sao-paulo/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cirurgia-adenoide-amigdala-crianca-sao-paulo/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/otite-infantil-sao-paulo/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/rinite-alergica-sao-paulo/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/zumbido-no-ouvido-sao-paulo/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ronco-apneia-sono-sao-paulo/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/otorrinolaringologista-guarulhos/`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/teleconsulta-otorrinolaringologista/`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/sinais-adenoide-aumentada-crianca/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/rinite-sinusite-diferenca/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/otite-repeticao-crianca/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/consulta-otorrino-infantil/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/zumbido-ouvido-causas/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/ronco-apneia-adultos/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/perda-auditiva-crianca/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/respiracao-bucal-crianca/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
