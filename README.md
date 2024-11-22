# TechMoms

## PROBLEMÁTICA

Mães com filhos pequenos no setor de tecnologia têm dificuldade em se realocar em trabalhos com jornadas “tradicionais” de horário e, por isso, acabam optando por alternativas como trabalhos freelance. Essa falta de flexibilidade no mercado resulta em desafios para que mães consigam equilibrar carreira e vida familiar.

## SOLUÇÃO

TechMoms é uma plataforma inovadora que oferece trabalho flexível e incentivos para mães na tecnologia. A plataforma integra funcionalidades avançadas, como análise de mercado, tutoriais, e um sistema de recompensas gamificado. Além disso, promove networking, oferece feedback detalhado e reconhecimento público, criando um ambiente que valoriza a profissional enquanto respeita suas necessidades familiares.

  ![image](https://github.com/user-attachments/assets/8f17dd94-69c3-4415-bc77-4efacbb255b2)
## FUNCIONALIDADES

1.   Plataforma de Networking e Comunidade: criar uma rede de apoio onde as mães freelancers possam trocar experiências, dicas, oportunidades, suporte mútuo, colaborar em projetos e obter orientação de outras profissionais que enfrentam desafios semelhantes.

2.   Tutoriais e materiais básicos: fornecer materiais básicos que possam ajudar as mães que são mais iniciantes ou que estão voltando ao mercado a aprimorarem suas habilidades (Ex.: modelo de portfólio/currículo, templates prontos, etc.).

3.   Análise de Mercado: fornecer dados e insights sobre tendências de mercado, ajudando freelancers a definir preços e empresas a fazer contratações mais informadas;

4.   Matching Avançado: inteligência artificial para conectar freelancers e clientes com base em tipos de projeto, habilidades específicas/necessárias, disponibilidade (flexibilidade de horários, dias da semana, duração, etc.), experiências anteriores e preferências;

5.   Sistema de recompensas por atividades: por cada tarefa completada ou projeto finalizado na plataforma, as mães ganham pontos, aumentando dessa forma a sua nota avaliativa dando um maior destaque na sua categoria;

a.      Visibilidade de portfólio e oportunidades de contratação: ofertar realização de tarefas (como resoluções de problemas), a fim de demonstrar suas habilidades, permitindo que sejam encontradas por clientes em potencial que irão avaliar sua performance (gerando pontos e também possibilitando a oportunidade de ser contratada para um projeto);

b.      Feedback de empresas: implementar um sistema de feedback detalhado que inclua métricas de desempenho, não apenas avaliações qualitativas, que serão incluídos no sistema de pontos também;

c.      Reconhecimento público e divulgação: destacar mensalmente o perfil das mães mais ativas ou de maior sucesso na plataforma, ajudando a amplificar sua visibilidade no mercado;


## PERSONAS

·        PERSONA 1: Laura Mendes

o   Idade: 34 anos

o   Profissão: Desenvolvedora de Software

o   Situação Familiar: Mãe de dois filhos pequenos (4 e 6 anos)

o   Desafios: Laura tem dificuldade em encontrar um equilíbrio entre a demanda de seu trabalho e suas responsabilidades familiares. O horário rígido de um emprego tradicional a impede de estar presente em eventos escolares ou cuidar dos filhos durante o dia.

o   Objetivos: Laura busca uma oportunidade de trabalho que ofereça flexibilidade total de horários, permitindo que ela ajuste sua carga de trabalho conforme suas necessidades familiares. Ela também deseja poder trabalhar em projetos que estejam alinhados com suas habilidades e experiência sem comprometer o tempo com a família.

o   Motivações: Laura valoriza a flexibilidade para poder estar mais presente na vida de seus filhos e também a possibilidade de continuar a crescer profissionalmente. Ela se interessa por plataformas que oferecem sistema de pontuação e reconhecimento, que a ajudem a manter-se motivada e recompensada por seus esforços.

o   Necessidades Específicas: Flexibilidade de horários, oportunidades de projetos variados, comunidade de suporte, e reconhecimento profissional.

·        PERSONA 2: Fernanda Costa

o   Idade: 29 anos

o   Profissão: Designer Gráfico

o   Situação Familiar: Mãe solteira de um filho de 3 anos

o   Desafios: Fernanda precisa de uma solução de trabalho que se encaixe em sua rotina não apenas para cuidar de seu filho, mas também para gerir as responsabilidades domésticas. Ela tem dificuldade em encontrar projetos que se ajustem às suas horas disponíveis e que compreendam suas necessidades como mãe.

o   Objetivos: Encontrar projetos de design gráfico que permitam horários flexíveis e que possibilitem a conciliação entre vida pessoal e profissional. Ela está interessada em uma plataforma que ofereça uma análise clara do mercado e suporte para definir preços de forma justa.

o   Motivações: Fernanda busca uma plataforma que ofereça um bom suporte, desde tutoriais e materiais básicos até feedback detalhado sobre seu desempenho. Ela deseja ser reconhecida por seu trabalho e se beneficiar de um sistema de pontuação que a motive a se engajar mais.

o   Necessidades Específicas: Flexibilidade no horário, suporte, feedback detalhado sobre a performance, e visibilidade no mercado.


## Pré-requisitos

  Antes de começar, certifique-se de ter o         ambiente preparado com os seguintes itens instalados:
            1 Node.js (versão 14 ou superior)

	2. Git (para controle de versão)

	3. Editor de Código (sugerido: Visual Studio Code)

	4. Navegador Web (compatível com React, como Google Chrome)

## Passo a Passo para Execução do MVP

 1. Clonar o repositório:

git clone <url-do-repositorio>
cd Tech-Moms-main
Instalação
Instale as dependências: Execute o comando abaixo na raiz do projeto para instalar todas as bibliotecas necessárias:
npm install

Configuração do ambiente: Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, como APIs de integração ou credenciais de banco de dados.

## Estrutura do Projeto
O código foi desenvolvido em React, com uma arquitetura modular. Os principais diretórios incluem:

Frontend:
src/components: Contém componentes reutilizáveis, como Navbar.js, Footer.js, e seções específicas (e.g., CommunitySection.js, HomeContent.js).
src/pages: Define as principais rotas da aplicação, como Home.js e DashboardUsuario.js.
src/assets: Reúne imagens, ícones e outros recursos visuais.
src/styles: Estilos CSS organizados por componente.

Funcionalidades Técnicas:
Sistema de Recompensas: Arquivo FreelasAndPublishedProjects.js controla a lógica de pontuação e categorização dos freelancers, integrando métricas de feedback.
Comunidade: Integração com APIs em CommunitySection.js para alimentar dados da comunidade e permitir interação entre usuários.


## Executar o Projeto Localmente
  1. Inicie o servidor de desenvolvimento executando o comando: (npm start)
	2. Abra o navegador e acesse o endereço: http://localhost:3000

## Build e Deploy
Para produção:
npm run build

O diretório build gerado pode ser hospedado em plataformas como Vercel, Netlify, ou AWS S3.

## Melhorias Futuras
Integrar suporte para Docker para criar um ambiente de desenvolvimento consistente.
Expandir o sistema de IA com modelos mais avançados.
Implementar notificações em tempo real via WebSockets ou Firebase.

