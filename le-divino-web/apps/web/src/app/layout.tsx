import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ledivino.fr"),
  title: "Le Divino | Restaurant semi-gastronomique à Agde",
  description:
    "Le Divino à Agde: cuisine semi-gastronomique, ambiance chaleureuse, événements et réservations en ligne.",
  openGraph: {
    title: "Le Divino | Restaurant semi-gastronomique à Agde",
    description:
      "Une table élégante à Agde, entre créativité culinaire, service attentif et atmosphère raffinée.",
    images: ["/images/hero.jpg"]
  }
};

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Réservations" },
  { href: "/events", label: "Événements" },
  { href: "/contact", label: "Contact" },
  { href: "/avis", label: "Avis" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="site-bg" />
        <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(18,16,13,0.78)] backdrop-blur-xl">
          <div className="shell flex items-center justify-between py-4">
            <Link href="/" className="no-underline">
              <span className="font-heading text-2xl tracking-[0.08em] text-[var(--ivory)]">LE DIVINO</span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-[var(--sand)] md:flex">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-[var(--gold)]">
                  {item.label}
                </Link>
              ))}
              <Link href="/admin/login" className="rounded-full border border-[var(--line)] px-4 py-2 text-[var(--ivory)]">
                Admin
              </Link>
            </nav>
          </div>
          <div className="shell flex gap-4 overflow-x-auto pb-4 text-sm text-[var(--sand)] md:hidden">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full border border-[var(--line)] px-3 py-1.5">
                {item.label}
              </Link>
            ))}
          </div>
        </header>
        <main className="shell pb-16 pt-10 md:pt-14">{children}</main>
        <footer className="border-t border-[var(--line)] bg-[rgba(10,9,8,0.75)] py-10 text-sm text-[var(--sand)]">
          <div className="shell grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-heading text-2xl text-[var(--ivory)]">Le Divino</p>
              <p className="mt-2 text-[var(--muted)]">Restaurant semi-gastronomique • Agde</p>
            </div>
            <div>
              <p className="text-[var(--ivory)]">Contact</p>
              <a href="tel:+33400000000">+33 4 00 00 00 00</a>
              <br />
              <a href="mailto:contact@ledivino.fr">contact@ledivino.fr</a>
            </div>
            <div>
              <p className="text-[var(--ivory)]">Adresse</p>
              <p>5 Place Jean Jaurès, 34300 Agde</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
