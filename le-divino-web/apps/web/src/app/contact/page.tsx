const address = "5 Place Jean Jaurès, 34300 Agde";
const encodedAddress = encodeURIComponent(address);

export default function ContactPage() {
  return (
    <section className="grid gap-8 md:grid-cols-[1fr_0.95fr]">
      <div className="space-y-5">
        <p className="kicker">Coordonnées</p>
        <h1 className="font-heading text-6xl leading-[0.9]">Contact</h1>
        <p className="text-[var(--sand)]">
          Le Divino vous accueille au cœur d&apos;Agde, dans une atmosphère élégante et conviviale.
        </p>

        <div className="panel space-y-3 rounded-2xl p-6">
          <p className="text-[var(--ivory)]">{address}</p>
          <a href="tel:+33400000000" className="text-[var(--sand)]">
            +33 4 00 00 00 00
          </a>
          <br />
          <a href="mailto:contact@ledivino.fr" className="text-[var(--sand)]">
            contact@ledivino.fr
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          <a className="btn-gold" href={`https://maps.google.com/?q=${encodedAddress}`} target="_blank" rel="noreferrer">
            Itinéraire Google
          </a>
          <a className="btn-outline" href={`https://maps.apple.com/?q=${encodedAddress}`} target="_blank" rel="noreferrer">
            Itinéraire Apple Plans
          </a>
        </div>
      </div>

      <div className="panel reveal rounded-2xl p-6" style={{ animationDelay: "0.1s" }}>
        <h2 className="font-heading text-3xl">Horaires</h2>
        <ul className="mt-4 space-y-3 text-[var(--sand)]">
          <li>Lundi: Fermé</li>
          <li>Mardi - Vendredi: 12h00-14h00 / 19h00-22h00</li>
          <li>Samedi: 12h00-15h00 / 19h00-23h00</li>
          <li>Dimanche: 12h00-15h00</li>
        </ul>
        <div className="mt-8 rounded-xl border border-dashed border-[var(--line)] p-4 text-sm text-[var(--muted)]">
          Intégration Google Maps interactive activable via la clé API (module Maps).
        </div>
      </div>
    </section>
  );
}
