-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.aluno (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nome text,
  descricao text,
  carreira text,
  cidade text,
  turno text,
  ano text,
  linkedin text,
  email text,
  numero text,
  github text,
  site text,
  CONSTRAINT aluno_pkey PRIMARY KEY (id)
);
CREATE TABLE public.aluno_especializacao (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_aluno bigint,
  id_especializacao bigint,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT aluno_especializacao_pkey PRIMARY KEY (id),
  CONSTRAINT aluno_especializacao_id_especializacao_fkey FOREIGN KEY (id_especializacao) REFERENCES public.especializacao(id),
  CONSTRAINT aluno_especializacao_id_aluno_fkey FOREIGN KEY (id_aluno) REFERENCES public.aluno(id)
);
CREATE TABLE public.aluno_funcao (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_aluno bigint,
  id_funcao bigint,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT aluno_funcao_pkey PRIMARY KEY (id),
  CONSTRAINT aluno_funcao_id_funcao_fkey FOREIGN KEY (id_funcao) REFERENCES public.funcao(id),
  CONSTRAINT aluno_funcao_id_aluno_fkey FOREIGN KEY (id_aluno) REFERENCES public.aluno(id)
);
CREATE TABLE public.aluno_habilidade (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_aluno bigint,
  id_habilidade bigint,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT aluno_habilidade_pkey PRIMARY KEY (id),
  CONSTRAINT aluno_habilidade_id_aluno_fkey FOREIGN KEY (id_aluno) REFERENCES public.aluno(id),
  CONSTRAINT aluno_habilidade_id_habilidade_fkey FOREIGN KEY (id_habilidade) REFERENCES public.habilidade(id)
);
CREATE TABLE public.aluno_tcc (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_aluno bigint,
  id_tcc smallint,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT aluno_tcc_pkey PRIMARY KEY (id),
  CONSTRAINT aluno_tcc_id_aluno_fkey FOREIGN KEY (id_aluno) REFERENCES public.aluno(id),
  CONSTRAINT aluno_tcc_id_tcc_fkey FOREIGN KEY (id_tcc) REFERENCES public.tcc(id)
);
CREATE TABLE public.categoria (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  nome text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT categoria_pkey PRIMARY KEY (id)
);
CREATE TABLE public.conquista (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_aluno bigint,
  id_professor bigint,
  nome text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT conquista_pkey PRIMARY KEY (id),
  CONSTRAINT conquista_id_aluno_fkey FOREIGN KEY (id_aluno) REFERENCES public.aluno(id),
  CONSTRAINT conquista_id_professor_fkey FOREIGN KEY (id_professor) REFERENCES public.professor(id)
);
CREATE TABLE public.especializacao (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nome text,
  CONSTRAINT especializacao_pkey PRIMARY KEY (id)
);
CREATE TABLE public.funcao (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nome text,
  CONSTRAINT funcao_pkey PRIMARY KEY (id)
);
CREATE TABLE public.habilidade (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nome text,
  CONSTRAINT habilidade_pkey PRIMARY KEY (id)
);
CREATE TABLE public.professor (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nome text,
  descricao text,
  area text,
  linkedin text,
  email text,
  foto text,
  CONSTRAINT professor_pkey PRIMARY KEY (id)
);
CREATE TABLE public.tcc (
  id smallint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nome text,
  descricao text,
  introducao text,
  foto text,
  id_categoria smallint,
  ano numeric,
  id_professor smallint,
  github text,
  deploy text,
  video text,
  CONSTRAINT tcc_pkey PRIMARY KEY (id),
  CONSTRAINT tcc_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categoria(id),
  CONSTRAINT tcc_id_professor_fkey FOREIGN KEY (id_professor) REFERENCES public.professor(id)
);
CREATE TABLE public.token_criacao (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT token_criacao_pkey PRIMARY KEY (id)
);
CREATE TABLE public.turma (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  nome text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT turma_pkey PRIMARY KEY (id)
);
