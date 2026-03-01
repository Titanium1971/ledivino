const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  weekday: "short",
  day: "2-digit",
  month: "2-digit"
});

const dateOptions = Array.from({ length: 14 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  const iso = date.toISOString().slice(0, 10);
  const label = dateFormatter.format(date).replace(".", "");
  return { value: iso, label };
});

const lunchSlots = ["12:00", "12:30", "13:00", "13:30"];
const dinnerSlots = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

export default function ReservationsPage() {
  return (
    <section className="grid gap-6 md:gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
      <div className="space-y-4 md:space-y-5">
        <p className="kicker">Réservation</p>
        <h1 className="font-heading text-[clamp(2rem,8vw,4.4rem)] leading-[0.94]">
          Votre table vous
          <br />
          attend.
        </h1>
        <p className="max-w-xl text-sm text-[var(--sand)] sm:text-base">
          Réservez en quelques instants. Notre équipe confirme votre demande rapidement selon les disponibilités.
        </p>
        <div className="panel rounded-2xl p-4 text-sm text-[var(--sand)] md:p-5">
          Service déjeuner: 12h00-14h00 • Service dîner: 19h00-22h30
        </div>
      </div>

      <form className="panel reveal space-y-3.5 overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6" style={{ animationDelay: "0.1s" }}>
        <input className="form-field" placeholder="Nom et prénom" />
        <input type="email" className="form-field" placeholder="Email" />
        <input className="form-field" placeholder="Téléphone" />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs text-[var(--muted)]">Date</label>
            <select className="form-field form-select" defaultValue={dateOptions[0]?.value}>
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-[var(--muted)]">Service</label>
            <select className="form-field form-select" defaultValue="dinner">
              <option value="lunch">Déjeuner</option>
              <option value="dinner">Dîner</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-[var(--muted)]">Horaire souhaité</label>
          <select className="form-field form-select" defaultValue={dinnerSlots[0]}>
            <optgroup label="Déjeuner">
              {lunchSlots.map((slot) => (
                <option key={`lunch-${slot}`} value={slot}>
                  {slot}
                </option>
              ))}
            </optgroup>
            <optgroup label="Dîner">
              {dinnerSlots.map((slot) => (
                <option key={`dinner-${slot}`} value={slot}>
                  {slot}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <input type="number" min={1} max={12} className="form-field" placeholder="Nombre de convives" />
        <textarea rows={4} className="form-field min-h-[110px] resize-y" placeholder="Allergies, anniversaire, préférences..." />
        <button type="button" className="btn-gold w-full py-3 text-sm sm:text-base">
          Envoyer ma demande
        </button>
      </form>
    </section>
  );
}

