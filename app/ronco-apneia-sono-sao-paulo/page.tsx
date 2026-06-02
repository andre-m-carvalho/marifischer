import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";

export const metadata: Metadata = {
  title: "Ronco e Apneia do Sono em São Paulo, Avaliação Otorrinolaringológica",
  description:
    "Ronco e apneia do sono em São Paulo, avaliação com otorrinolaringologista. Dra. Mariana Fischer atende adultos e crianças. Agende pelo WhatsApp.",
};

export default function RoncoApneia() {
  return (
    <PaginaServico
      titulo="Ronco e Apneia do Sono em São Paulo"
      subtitulo="O otorrinolaringologista avalia as causas estruturais do ronco e da apneia obstrutiva do sono em adultos e crianças."
    >
      <p>
        O ronco é um sintoma comum que pode ou não estar associado a distúrbios respiratórios do sono. Quando acompanhado
        de pausas na respiração, pode caracterizar apneia obstrutiva do sono, condição que merece investigação, pois pode
        estar associada a impactos na saúde cardiovascular, conforme descrito na literatura médica.
      </p>
      <p>
        O otorrinolaringologista avalia as estruturas das vias aéreas superiores que podem estar contribuindo para a
        obstrução e discute as opções terapêuticas disponíveis.
      </p>

      <h2>Diferença entre ronco e apneia do sono</h2>
      <p>
        <strong>Ronco</strong> é o barulho causado pela vibração dos tecidos moles da garganta quando o fluxo de ar é
        parcialmente obstruído durante o sono.
      </p>
      <p>
        <strong>Apneia obstrutiva do sono</strong> ocorre quando há obstrução mais completa, com interrupção temporária
        da respiração durante o sono. Pode ocorrer diversas vezes por noite, muitas vezes sem que a pessoa perceba.
      </p>

      <h2>Sintomas associados à apneia do sono</h2>
      <ul>
        <li>Ronco frequente e intenso</li>
        <li>Pausas na respiração observadas por parceiro ou familiar</li>
        <li>Acordar ofegante ou com sensação de engasgo</li>
        <li>Sono não reparador, cansaço mesmo após horas dormindo</li>
        <li>Sonolência excessiva durante o dia</li>
        <li>Cefaleia matinal</li>
        <li>Dificuldade de concentração e memória</li>
        <li>Irritabilidade</li>
      </ul>

      <h2>Causas estruturais avaliadas pelo otorrinolaringologista</h2>
      <p>
        Diversas estruturas das vias aéreas superiores podem contribuir para o ronco e a apneia e são avaliadas na consulta:
      </p>
      <ul>
        <li><strong>Desvio de septo nasal</strong>, que pode dificultar a respiração pelo nariz</li>
        <li><strong>Hipertrofia de cornetos</strong>, aumento dos cornetos nasais</li>
        <li><strong>Amígdalas hipertróficas</strong>, amígdalas grandes que estreitam a faringe</li>
        <li><strong>Adenoide aumentada</strong>, especialmente em crianças</li>
        <li><strong>Alterações do palato e úvula</strong></li>
      </ul>

      <h2>Ronco e apneia em crianças</h2>
      <p>
        Em crianças, o ronco persistente frequentemente indica obstrução das vias aéreas, adenoide aumentada, amígdalas
        hipertróficas ou ambos. A avaliação pediátrica é importante para identificar a causa e definir a conduta adequada,
        considerando o impacto que os distúrbios do sono podem ter no desenvolvimento infantil.
      </p>

      <h2>Abordagem terapêutica</h2>
      <p>
        A conduta é definida após avaliação clínica completa e pode incluir diferentes abordagens, a depender da causa
        identificada:
      </p>
      <ul>
        <li><strong>Tratamento clínico</strong>, para causas como rinite e obstrução nasal</li>
        <li><strong>Orientações comportamentais</strong>, que podem ser discutidas na consulta</li>
        <li><strong>CPAP</strong>, aparelho de pressão positiva, indicado em casos selecionados</li>
        <li><strong>Abordagem cirúrgica</strong>, septoplastia, redução de cornetos, adenoamigdalectomia, entre outras,
        para casos com indicação específica</li>
      </ul>
      <p>
        A indicação e o plano terapêutico são sempre definidos após avaliação clínica individualizada.
      </p>
    </PaginaServico>
  );
}
