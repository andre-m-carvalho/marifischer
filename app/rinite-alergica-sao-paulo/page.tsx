import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";

export const metadata: Metadata = {
  title: "Rinite Alérgica em São Paulo — Diagnóstico e Tratamento",
  description:
    "Rinite alérgica em São Paulo — tratamento com otorrinolaringologista. Dra. Mariana Fischer atende adultos e crianças. Agende pelo WhatsApp.",
};

export default function RiniteAlergica() {
  return (
    <PaginaServico
      titulo="Rinite Alérgica em São Paulo — Diagnóstico e Tratamento"
      subtitulo="Nariz escorrendo, espirros e nariz entupido são sintomas comuns que podem ser avaliados pelo otorrinolaringologista."
    >
      <p>
        A rinite alérgica afeta parcela significativa da população e é especialmente comum em São Paulo, onde a poluição e
        o clima seco podem agravar os sintomas. O otorrinolaringologista realiza a avaliação das vias aéreas superiores e
        orienta as opções terapêuticas disponíveis.
      </p>

      <h2>O que é rinite alérgica?</h2>
      <p>
        Rinite alérgica é uma inflamação da mucosa nasal causada por uma reação do sistema imunológico a alérgenos como
        poeira, pelos de animais, mofo, pólen e poluição. Em São Paulo, os ácaros presentes em colchões, travesseiros e
        tapetes estão entre os gatilhos mais frequentes.
      </p>

      <h2>Sintomas da rinite alérgica</h2>
      <ul>
        <li>Espirros em série, especialmente pela manhã</li>
        <li>Nariz escorrendo com secreção clara</li>
        <li>Nariz entupido, especialmente à noite</li>
        <li>Coceira no nariz, olhos e garganta</li>
        <li>Olhos vermelhos e lacrimejando</li>
        <li>Tosse seca associada</li>
        <li>Dificuldade para dormir pelo nariz entupido</li>
      </ul>

      <h2>Rinite x Sinusite — qual a diferença?</h2>
      <p>
        A rinite é a inflamação da mucosa nasal. A sinusite é a inflamação dos seios paranasais (cavidades ósseas ao redor
        do nariz). As duas frequentemente coexistem — quando isso acontece, denominamos <strong>rinossinusite</strong>.
      </p>
      <p>Sinais que podem indicar sinusite associada:</p>
      <ul>
        <li>Secreção amarela ou esverdeada (espessa)</li>
        <li>Dor e pressão na face — testa, bochechas, ao redor dos olhos</li>
        <li>Febre</li>
        <li>Sintomas que persistem por mais de dez dias sem melhora</li>
      </ul>
      <p>
        A diferenciação entre rinite e sinusite é feita pelo médico após avaliação clínica, e pode incluir exames
        complementares quando necessário.
      </p>

      <h2>Opções terapêuticas para rinite alérgica</h2>
      <p>
        O plano terapêutico é definido após avaliação clínica individualizada e pode incluir:
      </p>
      <ul>
        <li><strong>Controle ambiental</strong> — orientações para redução da exposição aos alérgenos</li>
        <li><strong>Medicamentos</strong> — anti-histamínicos, corticoides nasais e outras opções, conforme indicação</li>
        <li><strong>Imunoterapia</strong> — para casos selecionados, como opção de tratamento de longo prazo</li>
        <li><strong>Abordagem cirúrgica</strong> — em casos com desvio de septo associado ou hipertrofia de cornetos
        que não respondem ao tratamento clínico</li>
      </ul>
      <p>
        A indicação e o plano terapêutico são definidos após avaliação clínica individualizada.
      </p>

      <h2>Rinite em crianças</h2>
      <p>
        A rinite alérgica também é comum em crianças e pode contribuir para obstrução nasal, respiração bucal e otites
        de repetição. A avaliação pediátrica leva em conta as características específicas de cada faixa etária.
      </p>
    </PaginaServico>
  );
}
