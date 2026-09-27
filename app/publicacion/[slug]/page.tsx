import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';

export default async function Publication({ params }: { params: Promise<{slug:string}> }) {
  const {slug}=await params; const p=await getPostBySlug(slug); if(!p) notFound();
  const share=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/publicacion/${p.slug}`)}`;
  return <main className="article-page"><article className="container article"><Link href="/" className="back">← Volver a publicaciones</Link><div className={`type-tag ${p.tipo}`}>{p.tipo}</div><h1>{p.titulo}</h1><p className="article-summary">{p.resumen}</p><div className="article-meta"><span>{p.area || 'Derecho'}</span><span>{new Date(p.fecha).toLocaleDateString('es-PE',{year:'numeric',month:'long',day:'numeric'})}</span><a href={share} target="_blank" rel="noreferrer" className="share">Compartir en LinkedIn ↗</a></div>{p.imagen_url && <img className="cover" src={p.imagen_url} alt="" />}{p.contenido.split('\n').map((para,i)=><p key={i}>{para}</p>)}<div className="share-box"><b>¿Te resultó útil?</b><span>Comparte esta publicación en LinkedIn.</span><a href={share} target="_blank" rel="noreferrer" className="button primary">Compartir en LinkedIn ↗</a></div></article></main>
}
