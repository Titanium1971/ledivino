export default function ReservationsPage() {
  return (
    <section className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
      <div className="space-y-5">
        <p className="kicker">Réservation</p>
        <h1 className="font-heading text-6xl leading-[0.9]">Votre table
          <br />
          vous attend.</h1>
        <p className="max-w-xl text-[var(--sand)]">
          Réservez en quelques instants. Nous confirmons votre demande rapidement et adaptons l&apos;accueil selon
          vos préférences.
        </p>
        <div className="panel rounded-2xl p-5 text-sm text-[var(--sand)]">
          Service déjeuner: 12h00-14h00 • Service dîner: 19h00-22h30
        </div>
      </div>

      <form className="panel reveal space-y-4 rounded-2xl p-6" style={{ animationDelay: "0.1s" }}>
        <input className="w-full rounded-xl border border-[var(--line)] bg-[var(--ink-soft)] px-4 py-3" placeholder="Nom et prénom" />
        <input type="email" className="w-full rounded-xl border border-[var(--line)] bg-[var(--ink-soft)] px-4 py-3" placeholder="Email" />
        <input className="w-full rounded-xl border border-[var(--line)] bg-[var(--ink-soft)] px-4 py-3" placeholder="Téléphone" />
        <div className="grid gap-3 sm:grid-cols-2">
          <input type="date" className="w-full rounded-xl border border-[var(--line)] bg-[var(--ink-soft)] px-4 py-3" />
          <input type="time" className="w-full rounded-xl border border-[var(--line)] bg-[var(--ink-soft)] px-4 py-3" />
        </div>
        <input type="number" min={1} max={12} className="w-full rounded-xl border border-[var(--line)] bg-[var(--ink-soft)] px-4 py-3" placeholder="Nombre de convives" />
        <textarea
          rows={4}
          className="w-full rounded-xl border border-[var(--line)] bg-[var(--ink-soft)] px-4 py-3"
          placeholder="Allergies, anniversaire, préférences..."
        />
        <button type="button" className="btn-gold w-full">
          Envoyer ma demande
        </button>
      </form>
    </section>
  );
}
