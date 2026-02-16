import { TCCProject, TeamMember } from '../types'
import { advisors } from './advisors'

export const tccProjects: TCCProject[] = [
  {
    id: 1,
    title: "BusHere!",
    description: "Plataforma de gestão integrada de logística sobre rotas, pontos, passageiros e veículos.",
    fullDescription: `O projeto BusHere! nasceu para transformar a forma como empresas de transporte e logística de passageiros operam. Inicialmente desenvolvido para a Giraldi, empresa localizada em Pedreira, o sistema surge como resposta aos desafios causados pela dependência de processos manuais: contratos lentos e suscetíveis a erros, comunicação ineficaz com os passageiros e uma logística complexa que sobrecarrega a equipe.

Pensado a partir de um levantamento de requisitos em conjunto com a Giraldi, o BusHere! foi projetado para ser muito mais do que uma solução pontual. Sua arquitetura é adaptável e escalável, possibilitando a aplicação em diversas empresas do setor.

O objetivo é claro: automatizar processos críticos, otimizar a gestão do transporte, melhorar a experiência dos usuários e reduzir a sobrecarga de trabalho.

Para isso, a solução tecnológica se divide em dois pilares:

Sistema Web para gestores: administração de passageiros, rotas e pontos com agilidade e precisão.

Aplicativo Mobile para passageiros: acesso fácil a informações de rotas, itinerários e gerenciamento de dados pessoais.

Mais do que um software, o BusHere! representa um passo rumo a uma gestão mais eficiente, ágil e inteligente, capaz de elevar o padrão do transporte de passageiros.`,
    image: "/bushere/logo.jpg",
    imageZoom: 150,
    gallery: [
      "/bushere/bushere-1.png",
      "/bushere/bushere-2.png",
      "/bushere/bushere-3.png",
      "/bushere/bushere-4.png",
      "/bushere/bushere-5.png",
    ],
    technologies: ["React", "Node.js", "MySQL", "expressJS", "Git", "Figma", "Bootstrap", "Cursor", "CodeRabbit"],
    members: [
        {
          name: "Victor Ramos",
          role: "Full Stack Developer, Scrum Master, UI/UX Designer, Analista de Dados",
          photo: "/bushere/victor.png",
          github: "https://github.com/victimnn",
          portfolio: "https://dsetecjb.com.br/personal",
          linkedin: "https://www.linkedin.com/in/victor-pramos19/",
          email: "victor.ramosp19@gmail.com",
          location: "Jaguariúna, SP",
          about: `Desenvolvedor Full Stack em formação, com experiência em backend, frontend e bancos de dados.
           Busco constantemente aprimorar minhas competências técnicas e acompanhar as tendências do mercado, aplicando boas práticas de desenvolvimento, arquitetura de software e metodologias ágeis.`,
          career: `Atuo como líder e desenvolvedor do projeto BusHere! e outras aplicações web como este site, 
          com foco em criar soluções escaláveis, seguras e de fácil manutenção. Tenho 
          interesse em áreas como cloud computing, integração de sistemas, automação e 
          inteligência artificial, visando unir prática acadêmica e profissional para entregar resultados de impacto`,
          expertise: "Frontend Development, UI/UX Design, React, Node.js, MySQL",
          skills: ["Typescript", "Next.js", "React", "Node.js", "SQL", "Tailwind", "Figma"],
          achievements: [
            "Líder & FullStack Developer do projeto BusHere!.",
            "Desenvolvedor de 10+ projetos autorais e co-autorais.",
            "Social Media Manager do @ds.etec",
            "Inglês B2."
          ],
        },
        {
          name: "Luiz Souza",
          role: "Frontend Developer, UI/UX Designer",
          photo: "/bushere/luiz.jpg",
          linkedin: "https://www.linkedin.com/in/luiz-gustavo-souza-b3978436b",
          github: "https://github.com/luizsouza232",
          location: "Pedreira, SP",
          about: "Opa, Meu nome é Luiz e curto programação e a tecnologia no geral",
          career: "Tenho bastante conhecimento prático na área de Manutenção e Montagem de Computadores, trabalho atualmente em uma assistência técnica",
          expertise: "Frontend Dev, React, UI/UX Design, MySQL",
          skills: ["PHP", "C#", "Figma", "JavaScript", "React"],
          achievements: [
            "Frontend Developer do projeto BusHere!",
            "Especialista em manutenção de computadores",
            "Trabalho em assistência técnica",
          ],
        },
        {
          name: "Marcelo Henrique Santos Camillo",
          role: "Frontend Developer, Analista de dados",
          photo: "/bushere/marcelo.jpeg",
          github: "https://github.com/marcelotrikas",
          linkedin: "https://www.linkedin.com/in/marcelo-henrique-santos-camillo/",
          email: "marcelohenriique1930@gmail.com",
          location: "Amparo, SP",
          about: "Sou uma pessoa que tenta ajudar todos ao meu redor e disposto a descobrir coisas novas na área de desenvolvimento",
          career: "Busco crescer na área de desenvolvimento frontend e análise de dados, aplicando conhecimentos técnicos para criar soluções inovadoras.",
          expertise: "Frontend Development, MySQL, PHP",
          skills: ["React", "MySQL", "Pacote Office", "Git"],
          achievements: [
            "Membro do BusHere!",
            "Curso de inglês online, Small Advantages",
          ],
        },
        {
          name: "Renan Andrade",
          role: "Backend Developer",
          photo: "/bushere/renan.jpg",
          linkedin: "https://www.linkedin.com/in/renan-andrade-dos-santos-40ba09326",
          github: "https://github.com/Laggh",
          email: "renanandrades2008@gmail.com",
          location: "Jaguariúna, SP",
          about: "Sou um Desenvolvedor full stack com afinidade por backend e linguas de baixo nivel. Estou sempre procurando ineficiencias e lugares onde otimizações podem ser feitas.",
          career: "Me interesso pela programação desde os meus 10 anos de idade, já fiz muitos apps e jogos durante esse tempo. Hoje procuro contribuir para projetos de codigo aberta para melhorar minhas habilidades.",
          expertise: "Dev Back End, Game Dev, NodeJS, ExpressJS, WinForms",
          skills: ["TS/JS", "Lua", "PHP", "C/C++", "C#"],
          achievements: [
            "15+ Projetos no GitHub",
            "Programador backend do BusHere!",
            "Criador do programa AutoBackup",
          ],
        },
        {
          name: "Sarah Porsch Milani",
          role: "Analista de QA e Project Management",
          photo: "/bushere/sarah.png",
          linkedin: "https://www.linkedin.com/in/sarah-porsch-milani-b77171269/",
          email: "sarahporsch25@gmail.com",
          github: "https://github.com/SarahPuppy",
          location: "Jaguariúna, SP",
          about: "Sou experiente em lidar com pessoas, fã de jogos, música e sempre gosto de ajudar os outros!",
          career: "Atua como analista de QA e project management, focando em qualidade e organização de projetos.",
          expertise: "Documentação e planejamento",
          skills: ["Javascript", "C++", "Node.js", "MySQL", "Git"],
          achievements: [
            "Membro do BusHere",
            "Medalhista de Ouro OBA 2022",
            "Curso RocketSeat - Javascript: https://app.rocketseat.com.br/certificates/9fc5ec9c-0342-43c0-9d6d-f5f8ee275cf5",
          ],
        },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Web","Mobile"],
    features: [
      "Gestão de Veículos, Passageiros, Rotas e Pontos",
      "Portal do passageiro e responsável",
      "Comunicação integrada",
      "Relatórios automáticos",
      "Sistema de notificações",
      "Dashboard administrativo",
    ],
    videoUrl: "https://youtu.be/Wp5SMPHH3hs",
  },
  {
    id: 2,
    title: "Workfy",
    description: "Plataforma de empregos com ênfase na empregabilidade freelancer",
    fullDescription: `Este projeto propõe o desenvolvimento de um site de vagas de emprego com um diferencial: a ênfase na empregabilidade freelancer, funcionando de forma semelhante a plataformas como InfoJobs, Gupy e Indeed. O objetivo principal do software é facilitar, de maneira segura, organizada e ágil, a conexão entre candidatos que buscam oportunidades de trabalho e empresas que necessitam contratar profissionais para diferentes modalidades de serviço. 
    O sistema busca solucionar o problema da informalidade e da desorganização na busca por empregos temporários e freelances, além de reduzir as dificuldades enfrentadas tanto por empresas quanto por trabalhadores na hora de encontrar, selecionar e se comunicar com perfis compatíveis às suas necessidades. Para isso, o site oferecerá funcionalidades como: login com CPF (para candidatos) e CNPJ (para empresas), criação de currículos online (visíveis apenas para as empresas), e um chat interno em que as empresas poderão iniciar conversas com os candidatos selecionados, com histórico de mensagens salvo — permitindo uma interação direta entre as partes interessadas. 
    A justificativa para o desenvolvimento deste software está no aumento da demanda por trabalhos flexíveis e na carência de plataformas digitais acessíveis e objetivas voltadas para esse público. O sistema também contemplará jovens a partir de 14 anos interessados em vagas de jovem aprendiz, promovendo a inclusão desse público no mercado de trabalho. 
    Entre os benefícios proporcionados pelo software, destacam-se: agilidade na contratação de serviços, maior organização das informações dos candidatos, proteção de dados pessoais e melhora na comunicação entre empresa e candidato, evitando ruídos ou excesso de mensagens indevidas. 
    O público-alvo da aplicação compreende dois grupos principais: os candidatos (freelancers, jovens e adultos em busca de oportunidades) e as empresas que necessitam contratar trabalhadores em diferentes modalidades. Ambos serão beneficiados com o uso da plataforma, que proporcionará mais eficiência, praticidade e segurança em todo o processo de contratação. 
    A metodologia adotada baseia-se no levantamento de requisitos funcionais e não funcionais junto a potenciais usuários, com apoio de métodos ágeis de desenvolvimento e uso de tecnologias web modernas. A implantação inicial do software será voltada para ambientes urbanos e centros comerciais — locais com maior demanda por contratações pontuais e alta rotatividade de vagas.`,
    gallery: [
      "/workfy/workfy-1.png",
      "/workfy/workfy-2.png",
      "/workfy/workfy-3.png",
    ],
    image: "/workfy/workfy-logo.png",
    imageZoom: 100,
    technologies: ["Laravel", "PHP", "MySQL", "expressJS", "nodeJS"],
    members: [
      {
        name: "Murilo Iossi",
        role: "Full Stack Developer & Database",
        photo: "/workfy/murilo.jpg",
        linkedin: "https://www.linkedin.com/in/murilo-iossi/",
        github: "https://github.com/MuriloLIossi",
        email: "iossimurilo@gmail.com",
        location: "Jaguariúna, SP",
        about: "Desenvolvedor Full Stack especializado em desenvolvimento backend, frontend e banco de dados.",
        career: "Atua como líder e desenvolvedor Full Stack em projetos de TCC e desenvolvimento web.",
        expertise: "Back end development, front end development, Database development",
        skills: ["C#", "PHP"],
        achievements: [
          "Líder e Full Stack do projeto de TCC WorkFy",
          "Dev Full Stack do WebStufa Angiosperma",
          "Dev front end do WebZoo",
        ],
      },
      {
        name: "Luan Chilaver",
        role: "Banco de dados & Full Stack",
        photo: "/workfy/luan.jpg",
        linkedin: "https://www.linkedin.com/in/luan-chilaver-24bb7036b/",
        github: "https://github.com/CH1L4",
        email: "luanhchilaver@gmail.com",
        location: "Amparo, SP",
        about: "Desenvolvedor Full Stack especializado em banco de dados e desenvolvimento frontend.",
        career: "Atua como desenvolvedor Full Stack com foco em banco de dados e frontend.",
        expertise: "Front End development",
        skills: ["PHP", "Python", "Javascript", "HTML", "CSS"],
        achievements: [
          "Projeto blog de noticias",
          "Projeto calculadora",
          "Banco de dados e front end do projeto de TCC Workfy",
        ],
      },
      {
        name: "Marcos Brolezi",
        role: "Documentação & testes do Software",
        photo: "/workfy/marcos.jpg",
        linkedin: "https://www.linkedin.com/in/marcos-santos-957ba136b",
        email: "marcos981@gmail.com",
        location: "Amparo, SP",
        about: "Especialista em documentação e testes de software com experiência em design e marketing.",
        career: "Atua na documentação e testes de qualidade de software, além de marketing esportivo.",
        expertise: "Design, Front End, Documentação, Testes de qualidade",
        skills: ["Word", "Canvas", "HTML", "CSS", "Javascript"],
        achievements: [
          "Documentação e testes do projeto de TCC WorkFy",
          "Marketing do handebol amparo",
          "Desenvolvimento de uniformes para o handebol amparo",
        ],
      },
      {
        name: "Micaelly Mariano",
        role: "Desenvolvedora Fullstack",
        photo: "/workfy/micaelly.jpg",
        linkedin: "https://www.linkedin.com/in/micaelly-mariano-632767269",
        email: "micaellyvitoriaferrreira@gmail.com",
        github: "https://github.com/MicaellyMariano",
        location: "Amparo, SP",
        about: "Desenvolvedora Fullstack especializada em Frontend, Backend e Migrations com Banco de Dados.",
        career: "Atua como desenvolvedora Fullstack responsável pela codificação em projetos de TCC.",
        expertise: "Desenvolvimento Web (Frontend e Backend), UI Design",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "Laravel", "PHP"],
        achievements: [
          "Desenvolvedora Fullstack e responsável pela codificação no TCC Workfy",
        ],
      },
      {
        name: "Valentina Bastos",
        role: "Designer & Front-end & Backup",
        photo: "/workfy/valentina.jpg",
        linkedin: "https://www.linkedin.com/in/valentina-bastos-de-souza-43795136b/",
        github: "https://github.com/skykn0ws",
        email: "valentinabastosdesouza@gmail.com",
        location: "Amparo, SP",
        about: "Designer e desenvolvedora frontend especializada em design, documentação e gestão de projetos.",
        career: "Atua como designer e desenvolvedora frontend em projetos web e de TCC.",
        expertise: "Designer, Front-end, documentação, gestão",
        skills: ["HTML e CSS", "Figma", "PHP"],
        achievements: [
          "Designer do projeto Webstufa",
          "Designer do projeto Webzoo",
          "Designer e Front end do projeto de TCC Workfy",
        ],
      },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Web"],
    features: [
      "Login com CPF (para candidatos) e CNPJ (para empresas)",
      "Criação automática de currículos online (visíveis apenas para as empresas)",
      "Chat interno em que as empresas poderão iniciar conversas com os candidatos selecionados, com histórico de mensagens salvo",
      "Maior organização das informações dos candidatos",
      "Proteção de dados pessoais",
      "Melhora na comunicação entre empresa e candidato",
    ],
    videoUrl: "https://youtu.be/NXAj-tUdWzk",
  },
  {
    id: 3,
    title: "TransportAI",
    description: "Sistema para a otimização de rotas a partir do uso Inteligência Artificial.",
    fullDescription: `Este projeto apresenta o desenvolvimento de uma plataforma web e mobile inovadora para transportadoras, com foco na automatização e otimização de processos logísticos por meio de Inteligência Artificial.

    Atualmente, grande parte das empresas do setor ainda depende de planilhas manuais e mapas físicos para organizar suas operações. Essa realidade traz consequências como atrasos nas entregas, erros operacionais e falhas de comunicação entre equipes de logística e motoristas.

    A solução proposta surge para superar essas limitações, oferecendo funcionalidades que modernizam a gestão, como:

    Cadastro e gerenciamento inteligente de cargas, veículos e clientes.

    Simulação tridimensional para análise do carregamento dos veículos.

    Geração automática de relatórios para acompanhamento preciso das entregas.

    Com sua implementação, espera-se promover uma gestão logística mais eficiente, segura e pontual, trazendo benefícios diretos tanto para as transportadoras quanto para os caminhoneiros.

    O desenvolvimento será conduzido de forma estruturada, passando por prototipagem, testes de usabilidade e implantação gradual, consolidando a plataforma como uma inovação prática e de alto impacto para o setor de transporte.`,
    image: "/transportAi/logo.jpg",
    technologies: ["Flutter", "PHP", "Node.js", "Laravel", "MySQL", "JavaScript"],
    gallery: [
      "/transportAi/transportai-1.jpeg",
      "/transportAi/transportai-2.jpeg",
      "/transportAi/transportai-3.jpeg",
      "/transportAi/transportai-4.jpeg",
      "/transportAi/transportai-5.jpeg",
      "/transportAi/transportai-6.jpeg",
      "/transportAi/transportai-7.jpeg",
      "/transportAi/transportai-8.jpeg",
      "/transportAi/transportai-9.jpeg",
      "/transportAi/transportai-10.jpeg",
    ],
    members: [
      {
        name: "Murilo Fornel de Almeida",
        role: "Full Stack Developer, Scrum Master",
        photo: "/transportAi/murilo.jpeg",
        linkedin: "https://www.linkedin.com/in/murilo-fornel-de-almeida",
        email: "murilofdal@gmail.com",
        github: "https://github.com/fornel07",
        portfolio: "https://meu-portifolio-two-delta.vercel.app",
        location: "Amparo, SP",
        about: "Sou estudante do último semestre do curso de Desenvolvimento de Sistemas na ETEC João Belarmino, onde desenvolvi um skillset sólido em Frontend, UI/UX Design e tecnologias de backend como Laravel Blade com MySQL. Minha abordagem é sempre voltada para a inovação criativa e a otimização da experiência do usuário, garantindo que o produto final seja intuitivo e de alta qualidade.",
        career: "Meu objetivo de carreira é me aprofundar na área de Tecnologia e Inovação, especialmente em projetos de Inteligência Artificial. Estou determinado a desenvolver soluções de ponta que não apenas resolvam problemas atuais, mas que também preparem organizações para os desafios e oportunidades do mundo tecnológico em constante evolução.",
        expertise: "Frontend Developer, UI/UX, Laravel Blade, MySQL",
        skills: ["MySQL", "Laravel Blade", "Figma", "Github Desktop"],
        achievements: [
          "Líder do projeto TransportAI",
        ],
      },
      {
        name: "Lucy Pereira Piza",
        role: "Documentação e Prototipagem de Telas",
        photo: "/transportAi/lucy.jpeg",
        linkedin: "http://linkedin.com/in/lucy-piza",
        email: "llucy.psz@gmail.com",
        location: "Monte Alegre do Sul, SP",
        about: "Responsável pela documentação e prototipagem de telas do projeto TransportAI, sistema de gestão logística com IA. Especializada em UI/UX Design e criação de interfaces.",
        career: "Atua na área de documentação técnica e design de interfaces, focando em criar experiências de usuário intuitivas e bem documentadas.",
        expertise: "UI/UX Design, Figma",
        skills: ["Figma"],
        achievements: [
          "Responsável pela documentação do TransportAI",
        ],
      },
      {
        name: "Miguel Cera",
        role: "Back End Developer",
        photo: "/transportAi/miguel.jpg",
        linkedin: "https://www.linkedin.com/in/miguel-cera",
        email: "mi.cera094@gmail.com",
        location: "Amparo, SP",
        about: "Desenvolvedor Back End do projeto TransportAI, sistema de gestão logística com IA.",
        career: "Atua no desenvolvimento de sistemas de gestão logística e inteligência artificial, especializado em backend.",
        expertise: "Back End Development",
        skills: ["Laravel", "PHP", "JavaScript", "Google Maps API"],
        achievements: [
          "Programador Back-end do projeto TransportAI",
        ],
      },
      {
        name: "Nicolas Rafael Marcondez Luz Vieira",
        role: "Full Stack Developer, Systems Analysis",
        photo: "/transportAi/nicolas.jpg",
        linkedin: "https://www.linkedin.com/in/nicolas-rafael-vieira",
        email: "nicolas.rafael.dev@gmail.com",
        location: "Amparo, SP",
        about: "Desenvolvedor do projeto TransportAI, sistema de gestão logística com IA.",
        career: "Atua no desenvolvimento de sistemas de gestão logística e inteligência artificial.",
        expertise: "Backend Development, Node.js, MySQL, JavaScript, Blade",
        skills: ["Node.js", "MySQL", "PHP", "JavaScript"],
        achievements: [
          "Desenvolvedor do projeto TransportAI",
        ],
      },
      {
        name: "Victória Maiorino Fornel",
        role: "UI/UX Designer & Banco de dados",
        photo: "/transportAi/victoria.jpeg",
        linkedin: "https://www.linkedin.com/in/victoria-maiorino-fornel",
        email: "v.maiorino.f@gmail.com",
        location: "Amparo, SP",
        about: "Estudante do último semestre em Desenvolvimento de Sistemas na ETEC de Amparo, com foco em UX/UI, prototipação no Figma e modelagem de banco de dados (DER/MER). Busco aplicar criatividade e visão de usuário no desenvolvimento de soluções digitais.",
        career: "Quero construir minha carreira na área de tecnologia e inovação, unindo design, experiência do usuário e inteligência artificial para desenvolver soluções que facilitem a vida das pessoas.",
        expertise: "Frontend, UI | UX Design, Prototipação de Interfaces, Modelagem de dados",
        skills: ["Figma", "Banco de Dados Relacionais", "Noções de Front-end", "Criatividade", "Organização", "Facilidade em aprender"],
        achievements: [
          "Desenvolvedora do projeto TransportAI",
        ],
      },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Web", "Mobile"],
    features: [
      "Organização de Cargas, Clientes, Veículos e Transportes",
      "Integração de Inteligência Artificial",
      "Gestão de documentos",
      "Dashboard",
      "Sistema de rotas",
      "Sistema de notificações",
    ],
    videoUrl: "https://youtu.be/iLfO5whRPns",
  },
  {
    id: 4,
    title: "Handly",
    description: "Software educativo que facilita o aprendizado da Língua Brasileira de Sinais (Libras) por meio de dicionário interativo, missões e acompanhamento de progresso.",
    fullDescription: `A Libras é a língua oficial da comunidade surda no Brasil, reconhecida pela Lei nº 10.436 de 2002, um marco muito importante para garantir os direitos da comunidade surda.
    Mesmo assim, ainda existem muitos desafios relacionados à inclusão, já que o preconceito e a falta de conscientização sobre a Libras e a cultura surda ainda são grandes.
    Pensando nisso, desenvolvemos o Handly, um software educativo voltado para quem tem interesse em aprender Libras. O sistema oferece um dicionário interativo e atividades práticas organizadas em uma trilha de aprendizagem, com tarefas e categorias que ajudam o usuário a aprender de forma clara, prática e acessível.`,
    image: "/handly/handly.jpg",
    gallery: [
      "/handly/handly-1.jpg",
      "/handly/handly-2.jpg",
      "/handly/handly-3.jpg",
      "/handly/handly-4.jpg",
    ],
    technologies: ["PHP", "Laravel","MySQL", "Git"],
    members: [
      {
        name: "Caio Henrique Meurer",
        role: "Full stack developer e banco de dados",
        photo: "/placeholder-user.jpg",
        linkedin: "https://www.linkedin.com/in/caio-meurer",
        email: "meurercaiohenrique@gmail.com",
        location: "Amparo, SP",
        about: "Sou estudante de escola técnica, interessado em tecnologia e desenvolvimento, buscando crescer na área com dedicação e aprendizado contínuo.",
        career: "Quero seguir carreira na área técnica, aplicando meus conhecimentos em programação, tecnologia e soluções digitais.",
        expertise: "Bom em matemática, programação frontend, criação de projetos técnicos, organização e aprendizado rápido",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
        ],
      },
      {
        name: "Echiley Raissa de Paula Cardoso",
        role: "Documentação & design",
        photo: "/handly/echiley.jpg",
        linkedin: "https://www.linkedin.com/in/echiley-cardoso",
        email: "echileypaulacardoso@gmail.com",
        location: "Águas de Lindoia, SP",
        about: "Meu nome é echiley mas muitos me chamam de 'echy', tenho uma gatinha chamada cleópatra e sou evangélica. Por morar em uma cidade calma, acredito que isso influenciou nos meus gostos. Gosto de ler livros, jogar futebol e vôlei, assistir documentários, ir na igreja e sair de noite se for para comer. Não fumo e nem bebo nada alcoólico, pois acredito que não preciso dessas coisas para me sentir bem. Fui representante de classe durante três anos no ensino médio e trabalho como guia de turismo, essas duas competências ajudaram para que eu desenvolvesse uma comunicação interpessoal boa e só aumentou meu gosto por gestão de projetos.",
        career: "Gosto da tecnologia, mas de uma forma mais indireta, acredito que eu gosto do que ela pode proporcionar para nós desde experiencias convencionais à sentimentais. De uma forma mais clara, eu gosto da área de front-end. Sou apaixonada por fazer um design de tela e pensar em quais sentimentos um usuário ao acessá-la teria.",
        expertise: "UI/UX design, gestão de projetos",
        skills: ["Word", "MySQL", "Figma"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
          "Experiência prática em front-end, gestão de projetos e comunicação interpessoal",
        ],
      },
      {
        name: "Enzo Brunelli Denofrio",
        role: "Modelagem 3D, Desenvolvimento Full Stack e Banco de Dados",
        photo: "/handly/brunelli.jpg",
        linkedin: "https://br.linkedin.com/in/enzo-brunelli-a44500342",
        email: "enzobrunelli10@gmail.com",
        location: "Amparo, SP",
        about: "Gosto de novas experiências e sou muito dedicado em aprender, sempre buscando evoluir em tecnologia e modelagem 3D.",
        career: "Pretendo seguir carreira na área de tecnologia, atuando tanto em desenvolvimento de sistemas (full stack e banco de dados) quanto em modelagem 3D.",
        expertise: "Raciocínio lógico, comunicação, desenvolvimento web, modelagem 3D",
        skills: ["PHP", "HTML", "CSS", "Blender", "MySQL"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
        ],
      },
      {
        name: "Erika Romualdo",
        role: "Documentação",
        photo: "/handly/erika.jpg",
        linkedin: "https://www.linkedin.com/in/erikaromualdo",
        email: "Erikasoaresromualdo@gmail.com",
        location: "Pinhalzinho, SP",
        about: "Meus interesses estão voltados para gestão de projetos e bancos de dados. Valorizo o trabalho em equipe e a organização de processos.",
        career: "Me interesso em áreas de gestão de TI e Gerenciamento de dados, onde posso aplicar minhas habilidades em planejamento, organização comunicação e colaboração para gerar resultados.",
        expertise: "MySQL, Gestão de Projetos, Gerenciamento de dados, UI/UX Design",
        skills: ["Comunicação", "MySQL", "Figma", "Gerenciamento de dados", "HTML", "PHP"],
        achievements: [
          "Documentação do TCC",
        ],
      },
      {
        name: "Gabriel Araujo Gerbi",
        role: "Full Stack Developer, Empreendedor em Tecnologia, Estrategista de Negócios",
        photo: "/handly/gerbi.jpg",
        linkedin: "https://www.linkedin.com/in/gabriel-gerbi",
        email: "contatogabrielgerbi@gmail.com",
        location: "Amparo, SP",
        about: "Sou apaixonado por tecnologia, inovação e negócios. Como estudante de desenvolvimento de sistemas e jovem empreendedor, busco constantemente criar soluções inteligentes e escaláveis, unindo visão estratégica a competências técnicas. Meu propósito é transformar ideias em projetos de impacto real.",
        career: "Atualmente na área de desenvolvimento de sistemas, explorando desde programação full stack até design de produtos digitais. Paralelamente, desenvolvo iniciativas empreendedoras voltadas à integração entre tecnologia e negócios.",
        expertise: "Desenvolvimento web full stack, arquitetura de sistemas, bancos de dados, UI/UX design, empreendedorismo digital",
        skills: ["Java", "Python", "JavaScript", "TypeScript", "Node.js", "React", "MySQL", "Figma", "Git"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
          "Criação de protótipos funcionais aplicando metodologias ágeis (scrum e kanban)",
          "Idealizador de projetos independentes de software com foco em automação e eficiência",
          "Experiência prática em front-end, back-end e modelagem de banco de dados",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2025",
    category: ["Web"],
    features: [
      "Sistema de notificações",
      "Trilha de aprendizagem",
      "Dicionário Interativo",
      "Acompanhamento de Progresso",
    ],
    videoUrl: "https://youtu.be/mMjbgezXoiQ",
  },
  {
    id: 5,
    title: "AgendAí",
    description: "Software com ferramentas para o viajante, apoiando no planejamento completo de sua viagem.",
    fullDescription: `Este projeto tem como objetivo desenvolver um sistema web e mobile que auxilie no planejamento de viagens, oferecendo acesso a diversas funcionalidades em apenas um ambiente. A proposta surgiu a partir da constatação de que indivíduos que organizam suas viagens de maneira autônoma enfrentam dificuldades decorrentes da dispersão de informações relativas à hospedagem, transporte, pontos turísticos, câmbio, entre outros aspectos relevantes. Tal situação, além de demandar tempo excessivo, pode resultar em frustração e desorganização. O software visa tornar o processo mais eficaz centralizando esses dados, onde o usuário monta um roteiro personalizado, consulta mapas com pontos turísticos, compara hotéis, verifica voos, acompanha o clima e o câmbio de moedas, além de acessar conteúdos sobre o destino.`,
    image: "/agendAi/logo.png",
    imageZoom: 160,
    gallery: [
      "/agendAi/agendai-1.png",
      "/agendAi/agendai-2.png",
      "/agendAi/agendai-3.png",
      "/agendAi/agendai-4.png",
    ],
    technologies: ["Laravel", "Flutter", "PHP", "Node.js", "MySQL", "PostgreSQL", "Figma"],
    members: [
      {
        name: "Rafael Augusto Fante da Silva",
        role: "BackEnd Developer",
        photo: "/agendAi/Rafael.png",
        linkedin: "https://www.linkedin.com/in/rafael-fante-713111370",
        github: "https://github.com/RafaelFante",
        email: "augusto.fante3360@gmail.com",
        location: "Jaguariúna, SP",
        about: "Backend Developer especializado em Laravel e desenvolvimento mobile com Flutter.",
        career: "Atua como líder de grupo no desenvolvimento de soluções web e mobile.",
        expertise: "Backend Development, Laravel, Flutter, PHP",
        skills: ["Laravel", "Dart/Flutter", "PHP", "Node.js", "Git", "MySQL", "SQLite", "PostgreSQL"],
        achievements: [
          "Líder de Grupo do AgendAí",
        ],
      },
      {
        name: "Michel Mian",
        role: "Backend Developer",
        photo: "/agendAi/Michel.png",
        linkedin: "https://www.linkedin.com/in/michel-mian-56ab16324",
        github: "https://github.com/Michel-Mian",
        email: "michelmian11@gmail.com",
        location: "Jaguariúna, SP",
        about: "Backend Developer com experiência em Laravel, Next.js e desenvolvimento full stack.",
        career: "Desenvolve soluções web e mobile com foco em backend e integração de APIs.",
        expertise: "Backend Development, Laravel, Next.js, React",
        skills: ["Laravel", "Next.js", "React", "Flutter", "PHP", "Node.js", "Git", "MySQL", "MSSQL", "PostgreSQL"],
        achievements: [
          "Desenvolvedor do projeto AgendAí",
        ],
      },
      {
        name: "Samy Fabrício Maiorini Pavão",
        role: "Web Designer e Front-end Developer",
        photo: "/agendAi/Samy.png",
        linkedin: "https://www.linkedin.com/in/samy-fabr%C3%ADcio-maiorini-pav%C3%A3o-654376307",
        github: "https://github.com/samy-maiorini",
        email: "samyfabricio25@gmail.com",
        location: "Pedreira, SP",
        about: "Tenho 17 anos, sou muito comunicativo e adoro aprender coisas novas. Especializado em design e desenvolvimento frontend.",
        career: "Busco crescer na área de tecnologia, aplicando criatividade e habilidades técnicas em projetos inovadores.",
        expertise: "Web Design, Design gráfico, Front-end development, UI/UX design",
        skills: ["Figma", "Laravel", "Photoshop", "Inglês avançado"],
        achievements: [
          "Designer da logo do AgendAí",
          "Videomaker do pitch",
        ],
      },
      {
        name: "Nara da Silva Stachetti",
        role: "Documentação",
        photo: "/agendAi/Nara.png",
        linkedin: "",
        email: "narastachetti@gmail.com",
        location: "Serra Negra, SP",
        about: "Especialista em documentação técnica e normas ABNT para projetos de desenvolvimento de software.",
        career: "Atua na área de documentação técnica e gestão de projetos.",
        expertise: "Documentação técnica, Normas ABNT",
        skills: ["Normas ABNT", "Documentação", "HTML", "SQL", "Word"],
        achievements: [
          "Documentadora do projeto AgendAí",
        ],
      },
      {
        name: "Matheus Henrique Porcaro",
        role: "Web Designer e Front-end Developer",
        photo: "/agendAi/Matheus.png",
        linkedin: "https://www.linkedin.com/in/matheus-henrique-porcaro-91a7482a6",
        email: "math3usporcaro@gmail.com",
        location: "Pedreira, SP",
        about: "Web Designer e Front-end Developer especializado em UI/UX design e desenvolvimento de interfaces.",
        career: "Desenvolve soluções web com foco em design e experiência do usuário.",
        expertise: "Web Design, Front-end development, UI/UX design",
        skills: ["Figma", "Laravel", "Inglês intermediário"],
        achievements: [
          "Desenvolvedor Front-end do projeto AgendAí",
        ],
      },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Web", "Mobile"],
    features: [
      "Mapa interativo com marcações de pontos de interesse",
      "Busca de seguros com técnica de Web Scraping",
      "Busca de Hotéis e voos com APIs do Google",
      "Acompanhamento de clima real",
      "Cálculo de orçamento da viagem",
      "Acompanhamento de notícias reais",
      "Cotação de moedas",
      "Criação de linha do tempo dos pontos escolhidos",
    ],
    links: {
      github: "https://github.com/Michel-Mian/Agendai",
      github2: "https://github.com/RafaelFante/agendai-flutter",
    },
    videoUrl: "https://youtu.be/oiUrFrSxk8A",
  },
  {
    id: 6,
    title: "Interclass Manager",
    description: "Software de organização e gerenciamento do evento de Interclasse da escola ETEC João Belarmino",
    fullDescription: `O Interclass Manager foi desenvolvido com o objetivo de simplificar e automatizar funções relacionadas ao evento Jogos Interclasses, com o intuito de agilizar e facilitar os envolvidos na organização do evento. O software busca simplificar as funções de credenciamento, chaveamento e exibição de resultados. Essa abordagem permite uma coleta e análise de dados mais eficiente, o que reduz erros e facilita a tomada de decisões estratégicas. Consequentemente, a produtividade aumenta, e a instituição pode direcionar seus recursos para atividades mais complexas, promovendo maior competitividade e inovação.`,
    image: "/interclassManager/logo.jpg",
    gallery: [
      "/interclassManager/interclass-1.jpg",
      "/interclassManager/interclass-2.jpg",
      "/interclassManager/interclass-3.jpg",
      "/interclassManager/interclass-4.jpg",
    ],
    technologies: ["Node.js", "Next.js", "JavaScript", "React", "Prisma", "PostgreSQL"],
    members: [
      {
        name: "Gabriel Roberto Carvalho",
        role: "Desenvolvedor backend e banco de dados",
        photo: "/interclassManager/gabriel.jpg",
        linkedin: "https://www.linkedin.com/in/gabriel-carvalho-b8a214326",
        email: "gabrielrc2020usa@gmail.com",
        github: "https://github.com/GabrielRC2",
        location: "Jaguariúna, SP",
        about: "Estudante da 3ª série em Desenvolvimento de Sistemas da escola ETEC João Belarmino (Amparo). Desenvolvedor backend do projeto InterClass Manager",
        career: "Quero construir minha carreira na área de dados, unindo análise, manipulação de informações e inteligência de dados para criar insights valiosos.",
        expertise: "Backend Developer, MySQL, Node.js",
        skills: ["Node.js", "MySQL", "Python", "GitHub Desktop"],
        achievements: [
          "Desenvolvedor do projeto InterClass Manager",
        ],
      },
      {
        name: "Gustavo de Barros Ferreira",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "",
        email: "",
        github: "",
        location: "Jaguariúna, SP",
        about: "Desenvolvedor Full Stack do projeto Interclass Manager, sistema de organização de jogos interclasses.",
        career: "Atua no desenvolvimento de sistemas web com foco em organização de eventos esportivos.",
        expertise: "Full Stack Development, Node.js, Next.js",
        skills: ["Node.js", "Next.js", "JavaScript", "React", "Prisma", "PostgreSQL"],
        achievements: [
          "Desenvolvedor do projeto Interclass Manager",
        ],
      },
      {
        name: "João Paulo Santa Barbara Gomes",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "",
        email: "",
        github: "",
        location: "Pedreira, SP",
        about: "Desenvolvedor Full Stack do projeto Interclass Manager, sistema de organização de jogos interclasses.",
        career: "Atua no desenvolvimento de sistemas web com foco em organização de eventos esportivos.",
        expertise: "Full Stack Development, Node.js, Next.js",
        skills: ["Node.js", "Next.js", "JavaScript", "React", "Prisma", "PostgreSQL"],
        achievements: [
          "Desenvolvedor do projeto Interclass Manager",
        ],
      },
      {
        name: "João Pedro Cezar",
	      role: "Full Stack Developer",
	      photo: "/interclassManager/cezar.png",
	      linkedin: "https://www.linkedin.com/in/joaopedrocezar/",
	      email: "joaopedrocezar777@gmail.com",
	      location: "Amparo, SP",
	      about: "Finalizando Técnico em Desenvolvimento de Sistemas e, futuramente, cursando Engenharia da Computação. Busco integrar essas experiências diversificadas em projetos de tecnologia, combinando competências práticas e analíticas para contribuir com soluções inovadoras e eficientes.",
	      career: "Em formação, com foco em consolidar experiência prática em programação, banco de dados e análise de dados e sistemas.",
	      expertise: "Next.js, React, MySQL, PowerBI, Nest.js",
	      skills: ["Typescript", "Next.js", "Nest.js", "React", "SQL", "Tailwind", "Power BI" ],
	      achievements: [
		      "Líder & Full Stack Developer do projeto ICM, garantindo desempenho e organização da aplicação.",
		      "Desenvolver aplicação que utiliza a AI SDK para gerar um quiz a partir de um arquivo PDF.",
		      "Desenvimento do site A Criação de Dialetos, com o objetivo de apoiar e dar visibilidade ao trabalho autoral do professor.",
	    ],
      },
      {
        name: "Ikaro Freire",
        role: "UI/UX Designer e Frontend Developer",
        photo: "/interclassManager/ikaro.jpeg",
        linkedin: "https://www.linkedin.com/in/ikaro-freire-773414328",
        email: "ikarofreire48@gmail.com",
        github: "",
        location: "Jaguariúna, SP",
        about: "Sou um desenvolvedor focado em criar experiências digitais que unem design e tecnologia. Busco constantemente aprimorar minhas habilidades em frontend e UI/UX, explorando novas ferramentas e técnicas para transformar ideias em soluções práticas e funcionais.",
        career: "Cursando o Ensino Médio Técnico em Desenvolvimento de Sistemas, com foco em unir design e programação para desenvolver interfaces modernas, eficientes e centradas no usuário.",
        expertise: "UI/UX Design, Frontend Development, React, Next.js, Figma",
        skills: ["Figma", "Photoshop", "React", "Tailwind", "Next.js"],
        achievements: [
          "Desenvolvedor do projeto InterClass Manager",
          "Inglês B1",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2025",
    category: ["Web"],
    features: [
      "Cadastro de times, grupos, jogadores e esportes",
      "Sistema de sorteio de grupos",
      "Geração de partidas em ordem",
      "Visualização do resultado das partidas (Súmulas)",
      "Visualização das estatísticas dos jogadores",
    ],
    links: {
      github: "https://github.com/GabrielRC2/tcc_interclasse",
    },
    videoUrl: "https://youtu.be/3M0oDpPyuyQ",
    },
  {
    id: 7,
    title: "JBeventos",
    description: "Plataforma digital dedicada à promoção e divulgação de eventos escolares, visando facilitar o acesso e o engajamento da comunidade escolar.",
    fullDescription: `O nosso projeto tem como principal objetivo melhorar a promoção dos eventos da escola através da criação de um site dedicado. A ideia é transformar a forma como esses eventos são divulgados, garantindo uma comunicação mais simples, organizada e prática. Observamos que os meios de divulgação atuais não oferecem a estrutura necessária para uma promoção eficaz, resultando em um baixo alcance e pouca organização na divulgação.
    Com o site, queremos facilitar o processo para os organizadores, oferecendo uma plataforma onde os eventos possam ser inseridos e acessados com facilidade. A principal inovação está na automação da divulgação, que permitirá a atualização instantânea das informações, o envio de notificações automáticas aos participantes e a organização eficiente de todo o conteúdo. Além disso, a plataforma será intuitiva, acessível a todos os públicos e otimizada para que qualquer membro da comunidade escolar possa visualizar e se engajar com os eventos de maneira prática. Nosso projeto visa, assim, não só otimizar a gestão dos eventos, mas também modernizar a comunicação e aumentar o engajamento da escola como um todo.`,
    image: "/jbeventos/logo.jpg",
    imageZoom: 200,
    technologies: ["Laravel", "PHP", "JavaScript", "Vite", "Tailwind CSS", "Livewire", "SQL"],
    gallery: [
      "/jbeventos/jbeventos-1.jpg",
      "/jbeventos/jbeventos-2.jpg",
      "/jbeventos/jbeventos-3.jpg",
    ],
    members: [
      {
        name: "Felipe Barbosa da Silva",
        role: "Backend & Database Developer",
        photo: "/jbeventos/felipe.png",
        linkedin: "https://www.linkedin.com/in/felipe-barbosa-293035370/",
        email: "felipe.silva200730@gmail.com",
        location: "Jaguariúna, SP",
        about: "Sou estudante de TI, especialmente em Desenvolvimento de Sistemas. Desde criança tive contato com tecnologia, porque minha mãe sempre me incentivou a fazer cursos nessa área acreditando que isso poderia abrir portas no futuro. Esse caminho me levou a escolher o curso técnico em Desenvolvimento de Sistemas na Escola João Berlamino, onde venho aprendendo bastante e me preparando para seguir como desenvolvedor. Ainda tenho muito a aprender, mas é isso que me motiva a continuar evoluindo. Além do desenvolvimento, também tenho bastante interesse em Segurança da Informação, especialmente em Cibersegurança. É um campo que me chama atenção e que quero conhecer, podendo até se tornar minha principal área de atuação no futuro.",
        career: "Atualmente, sou estudante na área de Desenvolvimento de Sistemas e estou em busca de oportunidades para aprender, aplicar conhecimentos e desenvolver habilidades práticas na área de TI.",
        expertise: "Backend Development, Database Modeling & Management",
        skills: ["PHP", "SQL", "SQL Server", "Laravel", "DER/MER"],
        achievements: [
          "Líder do projeto JBeventos!",
        ],
      },
      {
        name: "Enzo Assis",
        role: "Designer e Documentação",
        photo: "/jbeventos/enzo.png",
        email: "enzomuguel@gmail.com",
        location: "Pedreira, SP",
        about: "Designer e desenvolvedor frontend especializado em design, documentação e gestão de projetos.",
        career: "Atua na área de design e documentação de projetos.",
        expertise: "Documentação, SQL Server",
        skills: ["SQL Server", "Figma"],
        achievements: [
          "Designer e documentador do projeto JBeventos",
        ],
      },
      {
        name: "Danilo Farias de Sousa",
        role: "Full Stack Developer",
        photo: "/jbeventos/danilo.png",
        linkedin: "https://www.linkedin.com/in/danilo-farias-4a3a39341/",
        email: "danilofariasbkv@gmail.com",
        github: "",
        location: "Jaguariúna, SP",
        about: "Sou estudante de Desenvolvimento de Sistemas na ETEC João Belarmino, com foco em desenvolvimento web. Tenho experiência prática em Laravel, MySQL e UI/UX Design, participando ativamente de projetos acadêmicos e de equipe. Busco sempre unir boas práticas de código com soluções visuais eficientes, visando melhorar a experiência do usuário e a qualidade do produto final.",
        career: "Estudante de Desenvolvimento de Sistemas, buscando oportunidades de crescimento profissional e pessoal, | Foco em Back-end e UI/UX",
        expertise: "Desenvolvimento Full Stack (Laravel, MySQL) e UI/UX Design",
        skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Git/GitHub", "Tailwind CSS"],
        achievements: [
          "Desenvolvedor Back-end do TCC: JB Eventos",
          "Responsável pelo desenvolvimento de boa parte das interfaces de usuário utilizando Tailwind CSS (Front-end)",
        ],
      },
      {
        name: "Leonardo Bodini Prieto Nunes Santos",
        role: "Frontend & Designer",
        photo: "/jbeventos/leonardo.jpeg",
        linkedin: "https://www.linkedin.com/in/leonardo-bodini-prieto-nunes-santos-57613b2a2/",
        email: "leonardobodini22@gmail.com",
        location: "Jaguariúna, SP",
        about: "Desenvolvedor focado em Frontend, também possuo conhecimentos e experiência para atuar em backend e banco de dados. Sempre gostei da tecnologia e de entender como as coisas funcionam por trás das telas, essa paixão e curiosidade me guiaram ao curso técnico em Desenvolvimento de Sistemas, onde atualmente curso o 3º ano do ensino médio integrado. Desde então, tenho explorado o desenvolvimento web e banco de dados, criando projetos com LARAVEL, PHP, SQL, Tailwind CSS e HTML. Cada novo desafio reforça meu interesse em transformar ideias em soluções reais e ampliar meus conhecimentos na área.",
        career: "Atualmente, sou estudante na área de Desenvolvimento de Sistemas e estou em busca de oportunidades para aprender, aplicar conhecimentos e desenvolver habilidades práticas na área de TI.",
        expertise: "Front-end Development, Prototipação de Interfaces, Web Designer, UI/UX Design",
        skills: ["PHP", "Laravel", "SQL", "Tailwind CSS", "Figma", "Canva"],
        achievements: [
          "Desenvolvedor do projeto JB Eventos",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2025",
    category: ["Web"],
    features: [
      "Centralização das Informações",
      "Criação e Edição de Eventos",
      "Divulgação e Notificações Automáticas",
      "Facilidade de Acesso",
      "Interatividade e Engajamento",
      "Calendário de Eventos",
    ],
    links: {
      github: "https://github.com/d4nilo-sousa/TCC-jbeventos",
    },
    videoUrl: "https://youtu.be/3rdpzghyrYI",
  },
  {
    id: 8,
    title: "EmployabilityCore",
    description: "Plataforma que conecta programadores a oportunidades e permite criar currículo online.",
    fullDescription: `Nosso projeto é uma plataforma digital inovadora voltada exclusivamente para programadores e profissionais da área de tecnologia. O site tem como objetivo central conectar talentos e oportunidades, oferecendo um espaço onde desenvolvedores podem criar e manter seu currículo online, acompanhar as publicações e atualizações de empresas e buscar vagas de trabalho de forma prática e eficiente.

Um dos grandes diferenciais é a funcionalidade de currículo inteligente com IA, que analisa o perfil do usuário e gera automaticamente um currículo personalizado e otimizado para o mercado de tecnologia, facilitando o destaque dos profissionais frente às empresas.

Além disso, a plataforma promove um ambiente colaborativo, onde programadores podem estar sempre atualizados sobre o mercado e aumentar suas chances de inserção ou crescimento profissional.`,
    image: "/employability/logo.svg",
    imageZoom: 250,
    gallery: [
      "/employability/employability-0.jpg",
      "/employability/employability-1.jpg",
      "/employability/employability-2.jpg	",
    ],
    technologies: ["Laravel", "MySQL", "Pusher", "JavaScript"],
    members: [
      {
        name: "Giovani Oliveira",
        role: "Full Stack Developer & Designer",
        photo: "/employability/giovani.png",
        email: "giovani.oliveira1223@gmail.com",
        location: "Pinhalzinho, SP",
        about: "Gosto muito de jogos, cubo mágico e xadrez, além da paixão por computadores desde muito cedo, sempre busco melhorar naquilo que eu gosto de fazer.",
        career: "Até o momento do meu 3º ano não possui experiências profissionais na área, porém irei continuar neste ramo pois sei que é aquilo que quero de verdade.",
        expertise: "Front-End, UI/UX Design, Git, Multimedia Designer/Specialist",
        skills: ["Front-End", "UI/UX Design", "Git", "Multimedia Design", "Laravel", "PHP", "MySQL", "JavaScript", "Pusher"],
        achievements: [
          "Líder do projeto Employability Core",
        ],
      },
      {
        name: "Atilio de Andrade",
        role: "Full Stack, Banco de dados, suporte",
        photo: "/placeholder-user.jpg",
        linkedin: "https://www.linkedin.com/in/atilio-andrade-0b319b269/",
        email: "atilio.andrade@gmail.com",
        location: "Pedreira, SP",
        about: "Sou um desenvolvedor em formação, com experiência em projetos mobile em Kotlin, aplicações web com PHP/Laravel e bancos de dados MySQL. Já desenvolvi desde uma calculadora Android até um aplicativo completo inspirado no LinkedIn, focado em conexão entre programadores e empresas. Gosto de criar soluções práticas, escrever código limpo e explorar novas tecnologias. Estou construindo meu portfólio e evoluindo para me tornar um desenvolvedor full stack cada vez mais completo.",
        career: "Tenho experiência em desenvolvimento mobile com Kotlin, aplicações web com PHP/Laravel e bancos de dados MySQL. Já participei de projetos como uma calculadora Android e um app profissional inspirado no LinkedIn. Estou construindo meu portfólio e evoluindo para atuar como desenvolvedor full stack.",
        expertise: "Full Stack Development, Laravel, MySQL",
        skills: ["Laravel", "PHP", "MySQL", "C++"],
        achievements: [
          "Desenvolvedor do projeto EmployabilityCore",
        ],
      },
      {
        name: "Enzo de Arruda Botelho da Silva",
        role: "Documentação",
        photo: "/employability/enzoarruda.jpeg",
        email: "devenzoarruda@gmail.com",
        location: "Jaguariúna, SP",
        about: "-",
        career: "-",
        expertise: "Frontend Development, documentation",
        skills: ["Figma", "JavaScript", "React"],
        achievements: [
          "Documentador do projeto Employability Core",
        ],
      },
      {
        name: "Augusto Camargo",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "",
        email: "",
        location: "",
        about: "Desenvolvedor do projeto EmployabilityCore, plataforma de conexões profissionais para programadores.",
        career: "Atua no desenvolvimento de sistemas web com foco em plataformas de networking profissional.",
        expertise: "Full Stack Development, Laravel, MySQL",
        skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Pusher"],
        achievements: [
          "Desenvolvedor do projeto EmployabilityCore",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2025",
    category: ["Web"],
    features: [
      "Currículo online para programadores",
      "Conexões profissionais na área de tecnologia",
      "Busca de vagas de trabalho",
      "Acompanhamento de empresas",
      "Ambiente colaborativo para programadores",
    ],
    videoUrl: "https://youtu.be/-4TM4uMft8E",
  },
]

export const getProjectById = (id: number): TCCProject | undefined => {
  return tccProjects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): TCCProject[] => {
  if (category === 'all') return tccProjects
  return tccProjects.filter(project => 
    project.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  )
}

export const getProjectsByYear = (year: string): TCCProject[] => {
  if (year === 'all') return tccProjects
  return tccProjects.filter(project => project.year === year)
}

export const searchProjects = (query: string): TCCProject[] => {
  if (!query.trim()) return tccProjects
  
  const searchTerm = query.toLowerCase()
  return tccProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    project.members.some(member => member.name.toLowerCase().includes(searchTerm))
  )
}
