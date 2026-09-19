'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const links = [{href:'/',label:'Home'},{href:'/work',label:'Work'},{href:'/about',label:'About'},{href:'/services',label:'Services'}];
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 bg-background/50 backdrop-blur-md border-b border-border/50">
      <Link href="/" className="text-xl font-bold">Phenomenon Studio</Link>
      <div className="hidden md:flex items-center space-x-8">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${
            pathname === l.href ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
          }`}>{l.label}</Link>
        ))}
      </div>
      <Link href="/contact" className="btn-secondary text-sm px-4 py-2">Contact</Link>
    </nav>
  );
}