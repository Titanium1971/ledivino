export default function ReservationsPage() {
  return (
    <section className="grid gap-6 md:gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
      <div className="space-y-4 md:space-y-5">
        <p className="kicker">Réservation</p>
        <h1 className="font-heading text-[clamp(2.35rem,10vw,4.7rem)] leading-[0.92]">
          Votre table
          <br className="hidden sm:block" />
          vous attend.
        </h1>
        <p className="max-w-xl text-sm text-[var(--sand)] sm:text-base">
          Réservez en quelques instants. Nous confirmons votre demande rapidement et adaptons l&apos;accueil selon
          vos préférences.
        </p>
        <div className="panel rounded-2xl p-4 text-sm text-[var(--sand)] md:p-5">
          Service déjeuner: 12h00-14h00 • Service dîner: 19h00-22h30
        </div>
      </div>

      <form className="panel reveal space-y-4 rounded-2xl p-4 sm:p-5 md:p-6" style={{ animationDelay: "0.1s" }}>
        <input className="form-field" placeholder="Nom et prénom" />
        <input type="email" className="form-field" placeholder="Email" />
        <input className="form-field" placeholder="Téléphone" />
        <div className="grid gap-3 sm:grid-cols-2">
          <input type="date" className="form-field" />
          <input type="time" className="form-field" />
        </div>
        <input type="number" min={1} max={12} className="form-field" placeholder="Nombre de convives" />
        <textarea
          rows={4}
          className="form-field min-h-[120px] resize-y"
          placeholder="Allergies, anniversaire, préférences..."
        />
        <button type="button" className="btn-gold w-full py-3.5 text-base">
          Envoyer ma demande
        </button>
      </form>
    </section>
  );
}
