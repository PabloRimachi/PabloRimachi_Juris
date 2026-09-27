# PabloRimachi_Juris

Plataforma personal para publicar y compartir análisis de **jurisprudencia, doctrina y normativa**, preparada para desplegarse en Vercel.

## Qué incluye
- Home editorial con identidad jurídica sobria.
- Tres categorías editoriales.
- Fichas de publicación con URL propia.
- Botón de compartir directamente en LinkedIn.
- Panel `/admin` para iniciar sesión y crear, editar, publicar o eliminar contenido.
- Persistencia con Supabase.
- Metadatos Open Graph para que las publicaciones puedan verse correctamente al compartirlas.
- Contenido demo mientras no se configure Supabase.

## Puesta en marcha local
1. Instala Node.js 20+.
2. Ejecuta `npm install`.
3. Copia `.env.example` a `.env.local`.
4. Crea un proyecto en Supabase.
5. En Supabase → SQL Editor, ejecuta `supabase/schema.sql`.
6. Crea un usuario de acceso en Supabase → Authentication → Users.
7. Completa `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` y `NEXT_PUBLIC_SITE_URL`.
8. Ejecuta `npm run dev`.

## Despliegue en Vercel
1. Sube esta carpeta a un repositorio GitHub.
2. En Vercel, importa el repositorio como proyecto Next.js.
3. Añade las tres variables de entorno del `.env.example`.
4. Deploy.
5. Crea el usuario editorial en Supabase y entra a `https://TU-DOMINIO.vercel.app/admin`.

## Arquitectura editorial recomendada
Cada publicación puede seguir esta secuencia:
- Título / pregunta jurídica
- Resumen ejecutivo
- Hechos o contexto
- Problema jurídico
- Norma / fuente
- Análisis
- Criterio o tesis
- Implicancias prácticas
- Palabras clave

## Evolución recomendada
Para una versión 2 se puede añadir almacenamiento de imágenes en Supabase Storage, etiquetas, buscador avanzado, autores invitados, newsletter, analítica y plantillas específicas para LinkedIn.
