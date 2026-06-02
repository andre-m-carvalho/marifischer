import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";

export const metadata: Metadata = {
  title: "Otite em Crianças em São Paulo, Sintomas e Tratamento",
  description:
    "Otite em crianças em São Paulo, sintomas, tratamento e quando procurar otorrino. Dra. Mariana Fischer. Agende pelo WhatsApp.",
};

export default function OtiteInfantil() {
  return (
    <PaginaServico
      titulo="Otite em Crianças, Sintomas, Tratamento e Quando Procurar o Otorrino"
      subtitulo="A otite é uma das condições mais comuns na infância. Quando se repete com frequência, merece avaliação especializada."
    >
      <p>
        A otite é uma das infecções mais comuns na infância. Quase toda criança tem pelo menos um episódio antes dos 3 anos.
        Quando se repete com frequência, pode estar associada a alterações auditivas temporárias e merece avaliação com
        otorrinolaringologista pediátrico.
      </p>

      <h2>O que é otite?</h2>
      <p>
        Otite é a inflamação do ouvido, geralmente causada por bactérias ou vírus. A forma mais comum em crianças é a
        <strong> otite média aguda</strong>, uma inflamação no ouvido médio (a região atrás do tímpano) que costuma aparecer
        após resfriados e gripes.
      </p>

      <h2>Sintomas de otite em crianças</h2>

      <h3>Em bebês e crianças pequenas (que ainda não falam):</h3>
      <ul>
        <li>Choro intenso, especialmente à noite</li>
        <li>Puxar ou coçar o ouvido repetidamente</li>
        <li>Irritabilidade sem causa aparente</li>
        <li>Febre</li>
        <li>Dificuldade para dormir</li>
        <li>Perda de apetite</li>
      </ul>

      <h3>Em crianças maiores:</h3>
      <ul>
        <li>Dor de ouvido</li>
        <li>Sensação de ouvido tapado</li>
        <li>Dificuldade para ouvir bem</li>
        <li>Febre</li>
        <li>Saída de secreção pelo ouvido (em casos de perfuração do tímpano)</li>
      </ul>

      <h2>Otite de repetição, quando é necessária avaliação especializada?</h2>
      <p>
        Fala-se em otite de repetição quando a criança tem três ou mais episódios em seis meses, ou quatro ou mais episódios
        em um ano. Nesse caso, a avaliação com otorrinolaringologista pediátrico é recomendada, pois cada episódio pode estar
        associado a presença de líquido no ouvido médio, com impacto na audição. A avaliação médica é necessária para
        determinar a conduta mais adequada para cada caso.
      </p>

      <h2>Tratamento da otite</h2>
      <p>
        O tratamento depende da idade da criança, da gravidade dos sintomas e do tipo de otite, e é definido pelo médico
        após avaliação clínica. As opções incluem:
      </p>
      <ul>
        <li><strong>Observação clínica</strong>, em casos selecionados, com critérios bem definidos</li>
        <li><strong>Antibiótico</strong>, quando indicado pelo médico</li>
        <li><strong>Analgésicos</strong>, para alívio da dor e febre, conforme prescrição</li>
        <li><strong>Tubo de ventilação (cirurgia)</strong>, indicado em casos selecionados de otite de repetição ou otite com
        líquido persistente no ouvido</li>
      </ul>

      <h2>Quando procurar o otorrino além do pediatra?</h2>
      <p>
        O pediatra acompanha a maioria dos episódios de otite. A avaliação com otorrinolaringologista pediátrico é indicada quando:
      </p>
      <ul>
        <li>A criança tem otites de repetição (três ou mais por ano)</li>
        <li>Há suspeita de alteração auditiva</li>
        <li>O líquido no ouvido persiste por mais de três meses</li>
        <li>Há suspeita de necessidade de tubo de ventilação</li>
        <li>A evolução clínica não segue o esperado com o tratamento inicial</li>
      </ul>
    </PaginaServico>
  );
}
