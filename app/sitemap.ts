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
  ];
}
