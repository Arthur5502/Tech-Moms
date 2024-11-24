# TechMoms

## PROBLEMÁTICA

Mães com filhos pequenos no setor de tecnologia têm dificuldade em se realocar em trabalhos com jornadas “tradicionais” de horário e, por isso, acabam optando por alternativas como trabalhos freelance. Essa falta de flexibilidade no mercado resulta em desafios para que mães consigam equilibrar carreira e vida familiar.

## SOLUÇÃO

TechMoms é uma plataforma inovadora que oferece trabalho flexível e incentivos para mães na tecnologia. A plataforma integra funcionalidades avançadas, como análise de mercado, tutoriais, e um sistema de recompensas gamificado. Além disso, promove networking, oferece feedback detalhado e reconhecimento público, criando um ambiente que valoriza a profissional enquanto respeita suas necessidades familiares.


## Pré-requisitos

  Antes de começar, certifique-se de ter o ambiente preparado com os seguintes itens instalados:
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

