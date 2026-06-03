import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termo de Consentimento para Teleconsulta",
  robots: { index: false },
};

export default function TermoTeleconsulta() {
  const serif: React.CSSProperties = { fontFamily: "var(--font-serif)" };
  const sans: React.CSSProperties = { fontFamily: "var(--font-sans)" };

  return (
    <section style={{ background: "#fff", padding: "4rem 2rem 6rem" }}>
      <div className="container" style={{ maxWidth: "760px" }}>

        {/* Cabeçalho */}
        <div style={{ textAlign: "center", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid #EDE8E2" }}>
          <p style={{ ...sans, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A07A", marginBottom: "0.75rem" }}>
            Documento Oficial
          </p>
          <h1 style={{ ...serif, fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#2E2E2E", lineHeight: 1.3, marginBottom: "0.5rem" }}>
            Termo de Consentimento Livre e Esclarecido
          </h1>
          <p style={{ ...sans, fontSize: "0.85rem", color: "#8A8A8A" }}>
            Teleconsulta de Otorrinolaringologia
          </p>
        </div>

        <div style={{ ...sans, fontSize: "0.9rem", color: "#3A3A3A", lineHeight: 1.9 }}>

          {/* Identificação */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              1. Identificação do Profissional
            </h2>
            <p>
              <strong>Médica responsável:</strong> Dra. Mariana Fischer<br />
              <strong>Especialidade:</strong> Otorrinolaringologia<br />
              <strong>CRM-SP:</strong> 134.600 &nbsp;|&nbsp; <strong>RQE:</strong> 108169<br />
              <strong>Endereço profissional:</strong> R. Doná Olga, 234, Vila São João, Guarulhos, SP
            </p>
          </section>

          {/* O que é a teleconsulta */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              2. O que é a Teleconsulta
            </h2>
            <p>
              A teleconsulta é uma modalidade de atendimento médico realizada por meio de tecnologia de comunicação em tempo real (videoconferência), regulamentada pela Resolução CFM n.º 2.314/2022 e demais normativas vigentes do Conselho Federal de Medicina.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              A consulta será realizada por videoconferência, em plataforma segura, com acesso exclusivo da médica e do paciente (ou seu responsável legal).
            </p>
          </section>

          {/* Finalidade */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              3. Finalidade do Atendimento
            </h2>
            <p>
              A teleconsulta destina-se a consultas de primeira vez ou retorno em otorrinolaringologia, incluindo avaliação de sintomas, orientações diagnósticas, revisão de exames complementares, prescrição de medicamentos quando clinicamente indicado e acompanhamento de condições já conhecidas.
            </p>
          </section>

          {/* Limitações */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              4. Limitações da Teleconsulta
            </h2>
            <p>
              O paciente declara estar ciente de que a teleconsulta possui limitações inerentes ao atendimento remoto, entre elas:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>A impossibilidade de realização de exame físico presencial completo;</li>
              <li style={{ marginBottom: "0.4rem" }}>A dependência de conexão estável à internet para a qualidade do atendimento;</li>
              <li style={{ marginBottom: "0.4rem" }}>A necessidade de encaminhamento presencial sempre que a condição clínica exigir exame físico, procedimento ou avaliação que não possa ser realizada à distância.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              A médica reserva-se o direito de interromper a teleconsulta e encaminhar o paciente para atendimento presencial ou de urgência caso identifique condição que assim exija.
            </p>
          </section>

          {/* Privacidade e LGPD */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              5. Privacidade e Proteção de Dados
            </h2>
            <p>
              Os dados pessoais e de saúde fornecidos durante o atendimento são tratados com sigilo profissional e em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei n.º 13.709/2018) e o Código de Ética Médica.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              A consulta não será gravada sem autorização expressa do paciente. As informações clínicas serão registradas em prontuário eletrônico, de acesso exclusivo da médica, e poderão ser compartilhadas com outros profissionais de saúde somente mediante autorização do paciente ou por obrigação legal.
            </p>
          </section>

          {/* Urgências */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              6. Situações de Urgência e Emergência
            </h2>
            <p>
              A teleconsulta não é adequada para situações de urgência ou emergência médica. Em caso de sintomas graves, como dificuldade respiratória intensa, sangramento abundante, perda súbita de consciência ou qualquer situação de risco imediato à vida, o paciente deve acionar o SAMU (192) ou dirigir-se imediatamente a uma unidade de pronto-atendimento.
            </p>
          </section>

          {/* Consentimento */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              7. Declaração de Consentimento
            </h2>
            <p>
              Ao confirmar o agendamento da teleconsulta, o paciente (ou seu responsável legal) declara que:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>Leu e compreendeu as informações contidas neste Termo;</li>
              <li style={{ marginBottom: "0.4rem" }}>Está ciente das possibilidades e limitações da teleconsulta;</li>
              <li style={{ marginBottom: "0.4rem" }}>Concorda com o tratamento dos seus dados para fins de atendimento médico;</li>
              <li style={{ marginBottom: "0.4rem" }}>Consente livremente com a realização da teleconsulta nas condições descritas.</li>
            </ul>
          </section>

          {/* Revogação */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              8. Revogação do Consentimento
            </h2>
            <p>
              O paciente pode revogar este consentimento a qualquer momento, antes ou durante o atendimento, sem qualquer prejuízo ao seu cuidado médico. A revogação pode ser feita por e-mail ou pelo contato disponível no site.
            </p>
          </section>

          {/* Base legal */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#2E2E2E", marginBottom: "0.75rem" }}>
              9. Base Legal
            </h2>
            <p style={{ fontSize: "0.82rem", color: "#8A8A8A" }}>
              Resolução CFM n.º 2.314/2022 | Lei n.º 13.989/2020 | Lei n.º 13.709/2018 (LGPD) | Código de Ética Médica (Resolução CFM n.º 2.217/2018)
            </p>
          </section>

          {/* Rodapé */}
          <div style={{
            borderTop: "1px solid #EDE8E2",
            paddingTop: "1.5rem",
            fontSize: "0.78rem",
            color: "#AAAAAA",
            lineHeight: 1.7,
          }}>
            <p>
              Dra. Mariana Fischer — CRM-SP 134.600 — RQE 108169<br />
              marifischer.com.br &nbsp;|&nbsp; dramariana@marifischer.com.br<br />
              Última atualização: junho de 2026
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
