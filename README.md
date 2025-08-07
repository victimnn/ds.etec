# Projeto do Site Institucional - Técnico em Desenvolvimento de Sistemas

Este é o repositório oficial do site institucional para o curso Técnico em Desenvolvimento de Sistemas da ETEC. O projeto foi desenvolvido para fornecer informações sobre o curso, vestibulinho, projetos dos alunos e formas de contato.

## ✨ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas para garantir uma experiência de usuário rápida, responsiva e agradável:

- **Next.js:** Framework React para renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).
- **React:** Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS:** Framework de CSS utility-first para estilização rápida e customizável.
- **shadcn/ui:** Coleção de componentes de UI reutilizáveis.
- **pnpm:** Gerenciador de pacotes rápido e eficiente em uso de disco.

## 🚀 Como Rodar o Projeto

Para executar este projeto em seu ambiente de desenvolvimento local, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20.x ou superior)
- [pnpm](https://pnpm.io/installation) (gerenciador de pacotes)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/ds.etec.git
    cd ds.etec
    ```

2.  **Instale as dependências:**
    Use o `pnpm` para instalar todas as dependências do projeto.
    ```bash
    pnpm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    Após a instalação, inicie o servidor de desenvolvimento do Next.js.
    ```bash
    pnpm dev
    ```

4.  **Acesse no navegador:**
    Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver o site em execução.

## 📂 Estrutura de Pastas

O projeto segue a estrutura de pastas padrão do Next.js com o App Router:

-   **/app**: Contém todas as rotas e páginas da aplicação.
    -   **/app/api**: Arquivos de rota para a API.
    -   **/app/(paginas)/**: Diretórios para cada página do site (`sobre`, `contato`, etc.).
    -   **layout.tsx**: Layout principal da aplicação.
    -   **page.tsx**: Página inicial (Home).
-   **/components**: Componentes React reutilizáveis.
    -   **/ui**: Componentes da biblioteca `shadcn/ui`.
-   **/public**: Arquivos estáticos como imagens e fontes.
-   **/lib**: Funções utilitárias e helpers.

