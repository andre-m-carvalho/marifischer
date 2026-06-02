import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";

export const metadata: Metadata = {
  title: "Zumbido no Ouvido em São Paulo, Avaliação e Manejo",
  description:
    "Zumbido no ouvido em São Paulo, avaliação e manejo com otorrinolaringologista. Dra. Mariana Fischer. Agende pelo WhatsApp.",
};

export default function Zumbido() {
  return (
    <PaginaServico
      titulo="Zumbido no Ouvido (Tinnitus), Avaliação em São Paulo"
      subtitulo="O zumbido é um sintoma que merece investigação. O otorrinolaringologista avalia as possíveis causas e discute as opções de manejo."
    >
      <p>
        O zumbido, barulho percebido no ouvido sem fonte sonora externa, pode se manifestar como um apito, chiado, tinido
        ou barulho de água. Embora na maioria dos casos não indique condição grave, pode impactar a qualidade de vida e
        merece avaliação especializada para identificar causas tratáveis.
      </p>

      <h2>Possíveis causas do zumbido no ouvido</h2>
      <p>O zumbido (tecnicamente chamado de tinnitus) tem diversas causas possíveis:</p>
      <ul>
        <li><strong>Exposição a ruído forte</strong>, shows, fones de ouvido em volume alto, ambientes ruidosos</li>
        <li><strong>Alterações auditivas</strong>, o zumbido pode acompanhar perda de audição</li>
        <li><strong>Acúmulo de cerume (cera)</strong>, causa simples e tratável</li>
        <li><strong>Otite ou outras condições do ouvido</strong></li>
        <li><strong>Medicamentos ototóxicos</strong>, alguns fármacos podem causar zumbido como efeito colateral</li>
        <li><strong>Alterações vasculares</strong>, como pressão arterial elevada</li>
        <li><strong>Doenças do ouvido interno</strong>, como a doença de Ménière</li>
      </ul>

      <h2>Quando procurar avaliação com urgência?</h2>
      <p>A avaliação médica com maior brevidade é recomendada quando o zumbido:</p>
      <ul>
        <li>Apareceu de forma súbita, especialmente em um só ouvido</li>
        <li>Veio acompanhado de perda auditiva súbita</li>
        <li>É pulsátil (percebido no ritmo dos batimentos cardíacos)</li>
        <li>Está associado a tontura intensa ou vertigem</li>
      </ul>

      <h2>Como é feita a avaliação do zumbido?</h2>
      <p>A consulta inclui:</p>
      <ul>
        <li>Anamnese detalhada, quando começou, características, fatores que agravam ou aliviam</li>
        <li>Exame do ouvido (otoscopia)</li>
        <li>Avaliação auditiva (audiometria) quando indicada</li>
        <li>Investigação de causas identificáveis e tratáveis</li>
      </ul>

      <h2>Como o zumbido é abordado?</h2>
      <p>
        A abordagem do zumbido começa pela identificação de causas tratáveis, como cerume, otite ou alteração auditiva
        associada. Quando não há causa específica identificável, existem estratégias de manejo que podem ser discutidas
        na consulta, como terapia sonora e orientações de saúde auditiva. O acompanhamento é individualizado.
      </p>
    </PaginaServico>
  );
}
