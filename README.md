# 🎓 Desenvolvimento de Sistemas - Etec João Belarmino

Site institucional do curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio da Etec João Belarmino de Amparo.

## 🚀 Tecnologias

## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 15.2.4** - Framework React para produção
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4.1.9** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos e consistentes

### Ferramentas de Desenvolvimento

- **npm** - Gerenciador de pacotes padrão do Node.js
- **PostCSS** - Processador CSS
- **ESLint** - Linter para JavaScript/TypeScript
- **Vercel Analytics** - Análise de performance e métricas

## 📁 Estrutura do Projeto

```
ds.etec/
├── app/                    # App Router (Next.js 15)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página sobre o curso
│   ├── projetos/          # Página de projetos
│   ├── vestibulinho/      # Página do vestibulinho
│   ├── mercado/           # Página do mercado de trabalho
│   ├── contato/           # Página de contato
│   └── personal/          # Página de Portfólio
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── header.tsx        # Cabeçalho do site
│   ├── footer.tsx        # Rodapé do site
│   └── theme-provider.tsx # Provedor de tema
├── constants/            # Constantes do projeto
│   └── navigation.ts     # Configuração de navegação
├── lib/                  # Utilitários e configurações
│   └── utils.ts          # Funções utilitárias
├── types/                # Definições de tipos TypeScript
│   └── index.ts          # Tipos globais
├── utils/                # Utilitários específicos
│   └── format.ts         # Funções de formatação
├── public/               # Arquivos estáticos
└── docs/                 # Documentação
```

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores roxa com detalhes em rosa:

- **Roxo Principal**: `oklch(0.45 0.15 280)` - Cor primária
- **Rosa Secundário**: `oklch(0.95 0.02 320)` - Cor secundária
- **Roxo Escuro**: `oklch(0.12 0.02 280)` - Fundo escuro
- **Rosa Claro**: `oklch(0.95 0.01 300)` - Texto claro

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/victimnn/ds.etec.git
cd ds.etec
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute em modo de desenvolvimento**

```bash
npm run dev
```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev           # Inicia o servidor de desenvolvimento
npm run build         # Gera build de produção
npm start             # Inicia o servidor de produção

# Qualidade de Código
npm run lint          # Executa o ESLint
npm run lint:fix      # Corrige problemas do ESLint
npm run type-check    # Verifica tipos TypeScript
npm run format        # Formata o código com Prettier
npm run format:check  # Verifica formatação

# Manutenção
npm run clean         # Limpa cache e reinstala dependências
```

## Supabase (TCC + Admin)

### Variaveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_URL`

### Ordem de aplicacao no banco

1. Estrutura base: `database.sql`
2. Politicas RLS: `supabase/policies.sql`
3. Seed de dados (quando houver)

### Modelo de seguranca

- Leitura publica do catalogo TCC usa `NEXT_PUBLIC_SUPABASE_ANON_KEY` + RLS.
- Escrita (`/api/admin/alunos` e `/api/admin/projetos`) roda apenas no servidor com `SUPABASE_SERVICE_ROLE_KEY`.
- Login administrativo e sessao usam Supabase Auth no tenant `admin`.
- Rotas de escrita exigem cookie `auth-session` valido e tenant `admin`.

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: Paleta roxa institucional com acentos rosa
- **Tipografia**: Inter (Google Fonts)
- **Componentes**: Radix UI + shadcn/ui
- **Responsividade**: Mobile-first approach
- **Acessibilidade**: Componentes acessíveis por padrão

### Estrutura de Componentes

### Páginas Principais

- **🏠 Home** - Apresentação do curso e call-to-actions
- **📚 Sobre** - Informações detalhadas sobre o curso
- **📝 Vestibulinho** - Processo seletivo e inscrições
- **💼 Projetos** - Portfólio de projetos dos alunos
- **🏢 Mercado** - Informações sobre mercado de trabalho
- **📞 Contato** - Formulário e informações de contato

### Características Técnicas

- ✅ **SSR/SSG** - Renderização otimizada
- ✅ **Responsivo** - Funciona em todos os dispositivos
- ✅ **Acessível** - Seguindo padrões WCAG
- ✅ **Performance** - Otimizado para velocidade
- ✅ **SEO** - Meta tags e estrutura otimizada

Configurado com regras para TypeScript e Next.js, incluindo:

- Verificação de tipos
- Regras de importação
- Formatação consistente

### Prettier

Configurado para formatação automática com:

- Aspas simples
- Vírgula final
- Largura máxima de 80 caracteres

### TypeScript

Configurado com:

- Strict mode ativado
- Path mapping para imports
- Target ES2020

3. **Execução Sistemática**
   - Implementar incrementalmente
   - Seguir padrões de qualidade
   - Manter consistência visual

4. **Verificação e Testes**
   - Testar funcionalidades
   - Verificar responsividade
   - Validar integrações

### Padrões de Qualidade

- **Código**: TypeScript, ESLint, padrões consistentes
- **UI/UX**: Design system, responsividade, acessibilidade
- **Segurança**: Validação de dados, autenticação quando necessário
- **Performance**: Otimizações de carregamento e renderização

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

**Etec João Belarmino de Amparo**

### 📧 Emails Institucionais

- **Direção Acadêmica**: [e067acad@cps.sp.gov.br](mailto:e067acad@cps.sp.gov.br)
- **Direção de Serviços**: [e067adm@cps.sp.gov.br](mailto:e067adm@cps.sp.gov.br)
- **APM (Associação de Pais e Mestres)**: [apmjb@yahoo.com.br](mailto:apmjb@yahoo.com.br)

### 📱 Telefone

- **WhatsApp**: [(19) 3808-1016](https://wa.me/551938081016)

### 🌐 Website

- **Site Oficial**: [https://www.etecjoaobelarmino.com.br/](https://www.etecjoaobelarmino.com.br/)

---

**Desenvolvido pela equipe do 3 Desenvolvimento de Sistemas de 2025**
