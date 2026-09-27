import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PabloRimachi_Juris | Derecho analizado, explicado y ordenado',
  description: 'Plataforma personal de análisis de jurisprudencia, doctrina y normativa jurídica.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: { title: 'PabloRimachi_Juris', description: 'Jurisprudencia · Doctrina · Normativa', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><header className="site-header"><div className="container nav"><Link href="/" className="brand"><span className="brand-mark">PR</span><span>PabloRimachi_<b>Juris</b></span></Link><nav><Link href="/?tipo=jurisprudencia">Jurisprudencia</Link><Link href="/?tipo=doctrina">Doctrina</Link><Link href="/?tipo=normativa">Normativa</Link><Link href="/admin" className="admin-link">Panel editorial</Link></nav></div></header>{children}<footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} PabloRimachi_Juris</span><span>Una biblioteca jurídica personal para analizar, sintetizar y compartir.</span></div></footer></body></html>
}
