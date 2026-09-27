create extension if not exists pgcrypto;
create table if not exists public.publicaciones (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  slug text unique not null,
  tipo text not null check (tipo in ('jurisprudencia','doctrina','normativa')),
  area text,
  resumen text not null,
  contenido text not null,
  imagen_url text,
  publicado boolean not null default true,
  fecha timestamptz not null default now()
);
alter table public.publicaciones enable row level security;
create policy "public can read published" on public.publicaciones for select using (publicado = true);
create policy "authenticated can manage" on public.publicaciones for all to authenticated using (true) with check (true);
insert into public.publicaciones (titulo,slug,tipo,area,resumen,contenido,publicado) values
('Cuando la jurisprudencia cambia el sentido práctico de una regla','cuando-la-jurisprudencia-cambia-el-sentido-practico-de-una-regla','jurisprudencia','Laboral','Ficha de análisis: hechos relevantes, problema jurídico, criterio adoptado y efectos prácticos.','Hechos relevantes\n\nLa ficha organiza el caso a partir de los hechos que realmente condicionan la decisión.\n\nProblema jurídico\n\nSe identifica la pregunta jurídica que el órgano jurisdiccional debía resolver.\n\nCriterio y efecto práctico\n\nSe resume la regla extraída de la decisión y su utilidad para casos futuros.',true),
('Doctrina en una página: cómo convertir un capítulo en una herramienta de trabajo','doctrina-en-una-pagina','doctrina','Teoría del Derecho','Método editorial para sintetizar una lectura doctrinal sin perder su tesis, conceptos y argumentos centrales.','Tesis central\n\nLa síntesis debe conservar la estructura argumentativa del autor.\n\nConceptos clave\n\nSe seleccionan los conceptos que permiten comprender y aplicar la tesis.\n\nUtilidad\n\nEl resumen termina con una sección de aplicación profesional.',true),
('Normativa: ficha rápida para lectura operativa de una disposición','normativa-ficha-rapida','normativa','Cumplimiento','Una forma ordenada de registrar objeto, ámbito, obligaciones, responsables y puntos críticos de una norma.','Objeto\n\nQué regula la disposición y cuál es su finalidad normativa.\n\nObligaciones\n\nQué debe hacerse, quién debe hacerlo y en qué condiciones.\n\nPuntos críticos\n\nAspectos que requieren revisión, seguimiento o evidencia documental.',true)
on conflict (slug) do nothing;
