-- Apply after schema creation (database.sql) and before seed data.
-- This file enforces read access for anon users in the TCC public catalog.

grant usage on schema public to anon, authenticated;
grant select on table
  public.tcc,
  public.aluno_tcc,
  public.aluno_funcao,
  public.aluno_especializacao,
  public.aluno_habilidade,
  public.conquista,
  public.aluno,
  public.professor,
  public.categoria,
  public.funcao,
  public.especializacao,
  public.habilidade
to anon, authenticated;

alter table public.tcc enable row level security;
alter table public.aluno_tcc enable row level security;
alter table public.aluno_funcao enable row level security;
alter table public.aluno_especializacao enable row level security;
alter table public.aluno_habilidade enable row level security;
alter table public.conquista enable row level security;
alter table public.aluno enable row level security;
alter table public.professor enable row level security;
alter table public.categoria enable row level security;
alter table public.funcao enable row level security;
alter table public.especializacao enable row level security;
alter table public.habilidade enable row level security;

drop policy if exists "anon_select_tcc" on public.tcc;
create policy "anon_select_tcc"
on public.tcc
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_aluno_tcc" on public.aluno_tcc;
create policy "anon_select_aluno_tcc"
on public.aluno_tcc
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_aluno_funcao" on public.aluno_funcao;
create policy "anon_select_aluno_funcao"
on public.aluno_funcao
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_aluno_especializacao" on public.aluno_especializacao;
create policy "anon_select_aluno_especializacao"
on public.aluno_especializacao
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_aluno_habilidade" on public.aluno_habilidade;
create policy "anon_select_aluno_habilidade"
on public.aluno_habilidade
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_conquista" on public.conquista;
create policy "anon_select_conquista"
on public.conquista
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_aluno" on public.aluno;
create policy "anon_select_aluno"
on public.aluno
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_professor" on public.professor;
create policy "anon_select_professor"
on public.professor
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_categoria" on public.categoria;
create policy "anon_select_categoria"
on public.categoria
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_funcao" on public.funcao;
create policy "anon_select_funcao"
on public.funcao
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_especializacao" on public.especializacao;
create policy "anon_select_especializacao"
on public.especializacao
for select
to anon, authenticated
using (true);

drop policy if exists "anon_select_habilidade" on public.habilidade;
create policy "anon_select_habilidade"
on public.habilidade
for select
to anon, authenticated
using (true);
