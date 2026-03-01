import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-md space-y-4 panel rounded-2xl p-6">
      <h1 className="font-heading text-4xl">Connexion Admin</h1>
      <p className="text-sm text-[var(--sand)]">Authentification en cours de finalisation. Accès back-office de test disponible.</p>
      <Link href="/admin/reservations" className="btn-gold w-full">
        Ouvrir le module Réservations
      </Link>
    </section>
  );
}
