import { createClient } from '@supabase/supabase-js';

type Post={id:string;titulo:string;slug:string;tipo:string;area:string;resumen:string;contenido:string;imagen_url?:string;publicado?:boolean;fecha:string};
function serverClient(){return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)}
export async function getPosts(tipo?:string,q?:string){
  if(!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return demo.filter(p=>(!tipo||p.tipo===tipo)&&(!q||p.titulo.toLowerCase().includes(q.toLowerCase())));
  const s=serverClient(); let query=s.from('publicaciones').select('*').eq('publicado',true).order('fecha',{ascending:false});
  if(tipo) query=query.eq('tipo',tipo); if(q) query=query.ilike('titulo',`%${q}%`); const {data}=await query; return data||[];
}
export async function getPostBySlug(slug:string){
  if(!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return demo.find(p=>p.slug===slug)||null;
  const {data}=await serverClient().from('publicaciones').select('*').eq('slug',slug).eq('publicado',true).single(); return data;
}
const demo:Post[]=[
{id:'1',titulo:'Cuando la jurisprudencia cambia el sentido práctico de una regla',slug:'cuando-la-jurisprudencia-cambia-el-sentido-practico-de-una-regla',tipo:'jurisprudencia',area:'Laboral',resumen:'Ficha de análisis: hechos relevantes, problema jurídico, criterio adoptado y efectos prácticos.',contenido:'Hechos relevantes\n\nLa ficha organiza el caso a partir de los hechos que realmente condicionan la decisión.\n\nProblema jurídico\n\nSe identifica la pregunta jurídica que el órgano jurisdiccional debía resolver.\n\nCriterio y efecto práctico\n\nSe resume la regla extraída de la decisión y su utilidad para casos futuros.',fecha:'2026-09-20',publicado:true},
{id:'2',titulo:'Doctrina en una página: cómo convertir un capítulo en una herramienta de trabajo',slug:'doctrina-en-una-pagina',tipo:'doctrina',area:'Teoría del Derecho',resumen:'Método editorial para sintetizar una lectura doctrinal sin perder su tesis, conceptos y argumentos centrales.',contenido:'Tesis central\n\nLa síntesis debe conservar la estructura argumentativa del autor.\n\nConceptos clave\n\nSe seleccionan los conceptos que permiten comprender y aplicar la tesis.\n\nUtilidad\n\nEl resumen termina con una sección de aplicación profesional.',fecha:'2026-09-18',publicado:true},
{id:'3',titulo:'Normativa: ficha rápida para lectura operativa de una disposición',slug:'normativa-ficha-rapida',tipo:'normativa',area:'Cumplimiento',resumen:'Una forma ordenada de registrar objeto, ámbito, obligaciones, responsables y puntos críticos de una norma.',contenido:'Objeto\n\nQué regula la disposición y cuál es su finalidad normativa.\n\nObligaciones\n\nQué debe hacerse, quién debe hacerlo y en qué condiciones.\n\nPuntos críticos\n\nAspectos que requieren revisión, seguimiento o evidencia documental.',fecha:'2026-09-15',publicado:true}
];
