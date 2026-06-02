import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";
import CTAAgendamento from "@/components/CTAAgendamento";

export const metadata: Metadata = {
  title: "Teleconsulta com Otorrinolaringologista, Dra. Mariana Fischer",
  description:
    "Consulta online com otorrinolaringologista particular. Dra. Mariana Fischer atende por teleconsulta adultos e crianças. Agendamento pelo WhatsApp. CRM-SP 134.600 · RQE 108169.",
};

export default function Teleconsulta() {
  return (
    <PaginaServico
      titulo="Teleconsulta com Otorrinolaringologista"
      subtitulo="Consulta online particular com especialista em ouvidos, nariz e garganta, para adultos e crianças, de onde você estiver."
    >
      <p>
        A teleconsulta permite que você consulte a Dra. Mariana Fischer, otorrinolaringologista,
        de forma remota, pelo computador, tablet ou celular. É uma opção prática para avaliação inicial,
        retornos, orientações sobre exames e acompanhamento de tratamento em andamento.
      </p>
      <p>
        A modalidade é regulamentada pelo Conselho Federal de Medicina (Resolução CFM 2.314/2022) e
        realizada com os mesmos critérios éticos e técnicos da consulta presencial.
      </p>

      <h2>O que pode ser avaliado por teleconsulta?</h2>
      <p>
        Diversas queixas otorrinolaringológicas permitem uma avaliação inicial adequada por videoconferência:
      </p>
      <ul>
        <li>Rinite alérgica, sintomas, gatilhos e orientação de tratamento</li>
        <li>Sinusite, avaliação de sintomas e indicação de exames</li>
        <li>Zumbido no ouvido, anamnese detalhada e orientações iniciais</li>
        <li>Ronco e suspeita de apneia, triagem e indicação de polissonografia</li>
        <li>Rouquidão e alterações de voz, avaliação e encaminhamento</li>
        <li>Retornos após cirurgias otorrinolaringológicas</li>
        <li>Dúvidas sobre exames, audiometria, nasofibroscopia, tomografia de seios</li>
        <li>Segunda opinião sobre diagnósticos ou indicações cirúrgicas</li>
        <li>Orientações para pais sobre sintomas em crianças</li>
      </ul>

      <h2>Quando a consulta presencial é necessária?</h2>
      <p>
        Algumas situações exigem exame físico presencial e não podem ser adequadamente avaliadas
        por teleconsulta:
      </p>
      <ul>
        <li>Dor de ouvido aguda intensa ou suspeita de otite com perfuração</li>
        <li>Corpo estranho no ouvido, nariz ou garganta</li>
        <li>Sangramento nasal recorrente que precise de avaliação endoscópica</li>
        <li>Primeiro atendimento de crianças pequenas com sintomas agudos</li>
        <li>Procedimentos ambulatoriais (lavagem de ouvido, retirada de rolha de cerume, etc.)</li>
      </ul>
      <p>
        Nesses casos, a Dra. Mariana orienta durante a teleconsulta e, se necessário, agenda
        o atendimento presencial em Guarulhos.
      </p>

      <h2>Como funciona a teleconsulta?</h2>
      <ul>
        <li><strong>Agendamento</strong>, pelo WhatsApp, com confirmação de data e horário</li>
        <li><strong>Pagamento</strong>, particular, realizado antes da consulta</li>
        <li><strong>Link da videochamada</strong>, enviado por WhatsApp próximo ao horário</li>
        <li><strong>Duração</strong>, equivalente à consulta presencial</li>
        <li><strong>Documentos</strong>, receitas e atestados emitidos digitalmente, com validade legal</li>
      </ul>

      <h2>Horários disponíveis para teleconsulta</h2>
      <p>
        As teleconsultas são realizadas às <strong>quintas e sextas-feiras</strong>. Essa disponibilidade
        permite atendimento ainda na mesma semana para quem agenda com antecedência.
      </p>
      <p>
        Para verificar os horários disponíveis, entre em contato pelo WhatsApp.
      </p>

      <h2>Teleconsulta para pacientes de todo o Brasil</h2>
      <p>
        Por ser realizada de forma remota, a teleconsulta está disponível para pacientes em qualquer
        cidade do Brasil, não apenas em Guarulhos e região. É uma alternativa para quem não tem
        otorrinolaringologista disponível na sua cidade ou prefere a praticidade do atendimento online.
      </p>

      <div style={{ margin: "2rem 0" }}>
        <CTAAgendamento tipo="teleconsulta" />
      </div>

      <h2>Atendimento presencial em Guarulhos</h2>
      <p>
        Para queixas que exijam exame físico, a consulta presencial está disponível de segunda a
        quarta-feira no consultório da Vila São João, em Guarulhos, SP.
      </p>
    </PaginaServico>
  );
}
