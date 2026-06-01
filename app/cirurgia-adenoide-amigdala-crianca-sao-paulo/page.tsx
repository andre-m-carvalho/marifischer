import type { Metadata } from "next";
import PaginaServico from "@/components/PaginaServico";

export const metadata: Metadata = {
  title: "Cirurgia de Adenoide e Amígdala em Crianças — São Paulo",
  description:
    "Avaliação para cirurgia de adenoide e amígdala em crianças em São Paulo. Dra. Mariana Fischer — otorrinolaringologista pediátrica. Agende pelo WhatsApp.",
};

export default function CirurgiaAdenoide() {
  return (
    <PaginaServico
      titulo="Adenoide e Amígdala em Crianças — Avaliação e Tratamento em São Paulo"
      subtitulo="A adenoidectomia e a amigdalectomia têm critérios de indicação bem estabelecidos. A avaliação pelo otorrinolaringologista pediátrico é o primeiro passo."
    >
      <p>
        A adenoidectomia e a amigdalectomia estão entre os procedimentos cirúrgicos pediátricos mais realizados no mundo,
        com critérios de indicação bem estabelecidos na literatura médica. A avaliação pelo otorrinolaringologista pediátrico
        é o primeiro passo para identificar se a criança se beneficia de abordagem clínica ou cirúrgica.
      </p>

      <h2>O que é a adenoide e por que ela pode causar problemas?</h2>
      <p>
        A adenoide é um tecido do sistema imunológico localizado na parte posterior do nariz. Na infância, é naturalmente
        maior e tende a diminuir com o crescimento. Em alguns casos, seu tamanho pode dificultar a passagem do ar pelas vias
        aéreas superiores, gerando sintomas que merecem avaliação médica.
      </p>

      <h2>Sinais que indicam avaliação da adenoide</h2>
      <ul>
        <li>Respiração pela boca frequente, mesmo fora de períodos gripais</li>
        <li>Ronco durante o sono</li>
        <li>Pausas na respiração durante a noite</li>
        <li>Nariz entupido persistente</li>
        <li>Voz anasalada</li>
        <li>Sono agitado ou acordares frequentes</li>
        <li>Otites de repetição</li>
      </ul>
      <p>
        A presença desses sintomas indica a necessidade de avaliação — não necessariamente cirurgia.
        A conduta é definida após exame clínico.
      </p>

      <h2>Quando a cirurgia de adenoide pode ser indicada?</h2>
      <p>A adenoidectomia pode ser considerada quando:</p>
      <ul>
        <li>Há obstrução nasal significativa com impacto clínico documentado</li>
        <li>Os distúrbios respiratórios do sono são atribuídos à adenoide aumentada</li>
        <li>Há otites de repetição relacionadas ao bloqueio da tuba auditiva</li>
        <li>O tratamento clínico não resultou em melhora adequada após período definido pelo médico</li>
      </ul>
      <p>
        A indicação cirúrgica é sempre individualizada, levando em conta a idade, os sintomas, o exame físico e os exames
        complementares de cada criança.
      </p>

      <h2>O que são as amígdalas e quando sua avaliação é necessária?</h2>
      <p>
        As amígdalas são tecidos localizados na garganta, visíveis ao abrir a boca. Fazem parte do sistema imunológico e,
        quando inflamam com muita frequência, podem se tornar um foco recorrente de infecção. A avaliação é recomendada quando
        a amigdalite ocorre com frequência ou quando as amígdalas aumentadas causam dificuldade respiratória ou para engolir.
      </p>

      <h2>Quando a amigdalectomia pode ser indicada?</h2>
      <ul>
        <li>Episódios frequentes de amigdalite com impacto na qualidade de vida da criança</li>
        <li>Amígdalas com tamanho que causa dificuldade para respirar, engolir ou dormir</li>
        <li>Abscesso periamigdaliano</li>
        <li>Ronco com apneia do sono relacionado ao tamanho das amígdalas</li>
      </ul>

      <h2>Adenoamigdalectomia — avaliação conjunta</h2>
      <p>
        Quando adenoide e amígdalas estão aumentadas e causando sintomas, a avaliação é feita conjuntamente. Caso haja
        indicação para os dois procedimentos, podem ser realizados no mesmo ato cirúrgico — a chamada adenoamigdalectomia —
        evitando que a criança passe por dois procedimentos e duas anestesias separados.
      </p>

      <h2>Como é realizado o procedimento?</h2>
      <ul>
        <li>Realizado sob <strong>anestesia geral</strong></li>
        <li>Duração aproximada: <strong>30 a 60 minutos</strong></li>
        <li>Pode ser ambulatorial (alta no mesmo dia) ou com internação de uma noite, a critério médico</li>
        <li>Sem incisões externas — acesso pela boca e nariz</li>
      </ul>

      <h2>Pós-operatório — orientações gerais</h2>
      <p>
        O pós-operatório é acompanhado pela médica, que fornecerá orientações individualizadas. De forma geral:
      </p>
      <ul>
        <li>Nos primeiros dias é comum desconforto na garganta e preferência por alimentos macios e frios</li>
        <li>O uso de medicamentos segue prescrição médica</li>
        <li>Recomenda-se repouso e afastamento escolar conforme orientação</li>
        <li>O retorno às atividades é gradual e definido na consulta de revisão</li>
      </ul>

      <h2>Dúvidas frequentes dos pais</h2>

      <h3>A cirurgia tem riscos?</h3>
      <p>
        Todo procedimento cirúrgico envolve riscos. A adenoamigdalectomia é uma das cirurgias mais realizadas em crianças
        no mundo, com protocolos bem estabelecidos. Os riscos e benefícios esperados são discutidos individualmente com os
        pais antes de qualquer decisão.
      </p>

      <h3>Meu filho ficará sem proteção imunológica?</h3>
      <p>
        As amígdalas e a adenoide fazem parte do sistema imunológico, mas não são os únicos tecidos com essa função.
        A indicação cirúrgica é feita quando os benefícios esperados superam os riscos, sempre de forma individualizada,
        e é discutida em detalhes com a família.
      </p>
    </PaginaServico>
  );
}
