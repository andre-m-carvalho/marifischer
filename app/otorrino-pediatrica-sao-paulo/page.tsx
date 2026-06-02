import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";

export const metadata: Metadata = {
  title: "Atendimento Infantil em Otorrinolaringologia, São Paulo",
  description:
    "Atendimento otorrinolaringológico para bebês e crianças em São Paulo, otite, adenoide, amígdalas, ronco e audição. Dra. Mariana Fischer. CRM-SP 134.600.",
};

export default function OtorrinoPediatrica() {
  return (
    <PaginaServico
      titulo="Atendimento Infantil em Otorrinolaringologia, São Paulo"
      subtitulo="Avaliação otorrinolaringológica para bebês, crianças e adolescentes, otite, adenoide, amígdalas, ronco e audição."
    >
      <p>
        A otorrinolaringologia pediátrica cuida da saúde dos ouvidos, nariz e garganta de bebês, crianças e adolescentes.
        Condições como otite, adenoide aumentada, amígdalas inflamadas e ronco noturno são comuns na infância e podem ser
        avaliadas pelo otorrinolaringologista pediátrico. O diagnóstico precoce permite que o médico oriente o melhor caminho
        terapêutico para cada criança, de forma individualizada.
      </p>

      <h2>Quando a criança deve ser avaliada pelo otorrinolaringologista?</h2>
      <p>A consulta com otorrinolaringologista pediátrico é indicada quando a criança apresenta:</p>
      <ul>
        <li>Dor de ouvido frequente ou choro ao deitar</li>
        <li>Ronco durante o sono</li>
        <li>Respiração pela boca, mesmo fora dos períodos de gripe</li>
        <li>Nariz sempre entupido</li>
        <li>Infecções de garganta repetidas</li>
        <li>Demora para falar ou dificuldade de audição</li>
        <li>Otite três ou mais vezes ao ano</li>
        <li>Mau hálito persistente sem causa aparente</li>
      </ul>
      <p>
        A avaliação médica é necessária para identificar a causa dos sintomas e definir a conduta mais adequada para cada caso.
      </p>

      <h2>Principais condições avaliadas em crianças</h2>

      <h3>Otite, inflamação do ouvido</h3>
      <p>
        A otite é uma das condições mais comuns na infância, especialmente entre 6 meses e 3 anos. Ocorre quando há
        inflamação no ouvido médio, geralmente após resfriados ou gripes. Os sintomas incluem dor, febre e irritabilidade.
      </p>
      <p>
        A otite de repetição, quando ocorre três ou mais vezes em um ano, merece avaliação especializada, pois pode estar
        associada a alterações auditivas temporárias que impactam o desenvolvimento da fala. A avaliação médica é necessária
        para determinar a conduta em cada caso.
      </p>

      <h3>Adenoide aumentada</h3>
      <p>
        A adenoide é um tecido localizado na parte posterior do nariz. Quando aumentada, pode dificultar a passagem do ar,
        provocando sintomas como respiração pela boca, ronco durante o sono, nariz entupido constante, voz anasalada e sono agitado.
      </p>
      <p>
        A avaliação do grau de aumento da adenoide e seu impacto clínico é feita pelo otorrinolaringologista, que definirá
        a conduta mais adequada, clínica ou cirúrgica, de forma individualizada.
      </p>

      <h3>Amígdalas, amigdalite de repetição</h3>
      <p>
        As amígdalas fazem parte do sistema imunológico, mas quando inflamam com muita frequência podem se tornar um foco
        de infecção recorrente. A avaliação pelo otorrino é indicada quando a amigdalite ocorre com frequência ou quando as
        amígdalas aumentadas causam dificuldade respiratória ou para engolir.
      </p>
      <p>
        A definição da conduta, clínica ou cirúrgica, é sempre individualizada e discutida com os responsáveis.
      </p>

      <h3>Ronco e distúrbios do sono na infância</h3>
      <p>
        O ronco persistente em crianças pode indicar obstrução das vias aéreas durante o sono. Quando associado a pausas
        respiratórias, pode caracterizar apneia do sono infantil. Nesses casos, a avaliação otorrinolaringológica é importante
        para identificar a causa e orientar o tratamento.
      </p>

      <h3>Audição e desenvolvimento da fala</h3>
      <p>
        A perda auditiva na infância pode passar despercebida por algum tempo. Sinais de alerta incluem não reagir a sons,
        demora para falar as primeiras palavras, não responder quando chamado pelo nome e dificuldade de aprendizado escolar.
        A avaliação auditiva precoce é importante para o acompanhamento adequado do desenvolvimento da criança.
      </p>

      <h2>Procedimentos e cirurgias pediátricas</h2>
      <p>
        Quando indicado após avaliação clínica detalhada, são realizados os seguintes procedimentos e cirurgias:
      </p>
      <ul>
        <li><strong>Adenoidectomia</strong>, retirada cirúrgica da adenoide</li>
        <li><strong>Amigdalectomia</strong>, retirada cirúrgica das amígdalas</li>
        <li><strong>Adenoamigdalectomia</strong>, retirada de adenoide e amígdalas no mesmo ato cirúrgico</li>
        <li><strong>Paracentese timpânica</strong>, drenagem do ouvido médio</li>
        <li><strong>Colocação de tubo de ventilação</strong>, para casos selecionados de otite de repetição</li>
        <li><strong>Septoplastia</strong>, correção do desvio de septo (adolescentes)</li>
      </ul>
      <p>
        A indicação cirúrgica é sempre precedida de avaliação clínica detalhada e discussão com os responsáveis pela criança.
      </p>

      <h2>Como funciona a consulta pediátrica?</h2>
      <p>
        A consulta inclui anamnese detalhada com os responsáveis, exame físico de ouvidos, nariz e garganta, e, quando
        necessário, exames complementares como a nasofibrolaringoscopia. Ao final, a médica apresenta os achados e discute
        as opções de conduta disponíveis.
      </p>
    </PaginaServico>
  );
}
