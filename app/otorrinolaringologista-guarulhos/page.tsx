import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";
import CTAAgendamento from "@/components/CTAAgendamento";

export const metadata: Metadata = {
  title: "Otorrinolaringologista em Guarulhos — Dra. Mariana Fischer",
  description:
    "Otorrinolaringologista particular em Guarulhos. Dra. Mariana Fischer — consultas para adultos e crianças. Vila São João. CRM-SP 134.600 · RQE 108169. Agende pelo WhatsApp.",
};

export default function OtorrinoGuarulhos() {
  return (
    <PaginaServico
      titulo="Otorrinolaringologista em Guarulhos"
      subtitulo="Consultas particulares para adultos e crianças — ouvidos, nariz e garganta. Vila São João, Guarulhos — SP."
    >
      <p>
        A Dra. Mariana Fischer é médica especialista em Otorrinolaringologia, com atendimento particular
        em Guarulhos. Realiza consultas, procedimentos ambulatoriais e tem indicação cirúrgica para condições
        que afetam os ouvidos, o nariz, a garganta e estruturas relacionadas — em adultos e crianças.
      </p>

      <h2>O que trata um otorrinolaringologista?</h2>
      <p>
        O otorrinolaringologista é o médico especialista responsável pelo diagnóstico e tratamento das
        doenças que afetam os ouvidos, o nariz, a garganta, a laringe e estruturas adjacentes — como
        faringe, seios paranasais e pescoço.
      </p>
      <p>Algumas das condições mais frequentemente atendidas:</p>
      <ul>
        <li>Otite aguda e otite de repetição em crianças e adultos</li>
        <li>Rinite alérgica e sinusite</li>
        <li>Adenoide aumentada e amígdalas</li>
        <li>Zumbido no ouvido (tinnitus)</li>
        <li>Perda auditiva — avaliação e encaminhamento</li>
        <li>Ronco e apneia obstrutiva do sono</li>
        <li>Faringite, laringite e rouquidão recorrente</li>
        <li>Desvio de septo nasal</li>
        <li>Respiração bucal em crianças</li>
      </ul>

      <h2>Quando consultar um otorrino?</h2>
      <p>
        A consulta com otorrinolaringologista é indicada sempre que os sintomas afetam ouvidos, nariz
        ou garganta — especialmente quando:
      </p>
      <ul>
        <li>Os sintomas duram mais de duas semanas sem melhora com tratamento inicial</li>
        <li>Há episódios repetidos de otite, sinusite ou amigdalite</li>
        <li>A criança ronca, respira pela boca ou tem otites frequentes</li>
        <li>Há queixa de zumbido, tontura ou dificuldade auditiva</li>
        <li>O ronco do adulto é intenso ou há suspeita de apneia do sono</li>
      </ul>
      <p>
        O atendimento particular permite consulta sem filas de espera e com tempo adequado para
        avaliação completa.
      </p>

      <h2>Atendimento infantil em Guarulhos</h2>
      <p>
        Crianças são uma parcela importante do atendimento otorrinolaringológico. Condições como
        adenoide aumentada, otite de repetição, amígdalas inflamadas e respiração bucal são comuns
        na infância e têm impacto direto no sono, na audição e no desenvolvimento.
      </p>
      <p>
        A Dra. Mariana Fischer tem ampla experiência no atendimento pediátrico dentro da especialidade
        de Otorrinolaringologia, conduzindo desde a avaliação clínica até a indicação cirúrgica quando necessária.
      </p>

      <h2>Atendimento presencial e teleconsulta</h2>
      <p>
        Além das consultas presenciais em Guarulhos, a Dra. Mariana oferece <strong>teleconsulta</strong> para
        pacientes que preferem atendimento remoto — uma opção prática para avaliação inicial, retornos e
        orientações que não exijam exame físico presencial. A teleconsulta é realizada de acordo com as
        normas do CFM (Resolução 2.314/2022).
      </p>

      <h2>Consulta particular — sem convênio</h2>
      <p>
        O atendimento é realizado de forma particular, sem vinculação a planos de saúde. Essa modalidade
        permite maior flexibilidade de horários, consultas sem fila de espera e tempo adequado para cada
        paciente.
      </p>
      <p>
        Para informações sobre valores e disponibilidade de horários, entre em contato pelo WhatsApp.
      </p>

      <div style={{ margin: "2rem 0", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CTAAgendamento tipo="presencial" />
        <CTAAgendamento tipo="teleconsulta" />
      </div>

      <h2>Localização — Guarulhos, SP</h2>
      <p>
        O consultório está localizado na Vila São João, em Guarulhos, com fácil acesso para moradores
        de Guarulhos e região.
      </p>
      <ul>
        <li>R. Doná Olga, 234 — Vila São João</li>
        <li>Guarulhos — SP · CEP 07044-010</li>
      </ul>
    </PaginaServico>
  );
}
