import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Soirée Jazz & Dégustation",
    date: "Jeudi 12 mars · 20h00",
    description: "Accords mets-vins et trio jazz dans une ambiance feutrée.",
    cta: "Réserver la soirée"
  },
  {
    title: "Menu Signature Printemps",
    date: "Du 22 mars au 30 avril",
    description: "Un parcours en cinq temps autour des produits de saison.",
    cta: "Découvrir le menu"
  },
  {
    title: "Atelier accords vins",
    date: "Samedi 6 avril · 18h30",
    description: "Session découverte commentée par notre sommelier partenaire.",
    cta: "Participer"
  }
];

export default function EventsPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="kicker">Programmation</p>
        <h1 className="font-heading text-6xl leading-[0.9]">Événements</h1>
      </div>

      <div className="panel overflow-hidden rounded-2xl">
        <Image
          src="/images/exterieur-soir.jpg"
          alt="Le Divino en soirée"
          width={1110}
          height={680}
          className="h-[280px] w-full object-cover md:h-[380px]"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {events.map((event, index) => (
          <article key={event.title} className="panel reveal rounded-2xl p-6" style={{ animationDelay: `${index * 0.08}s` }}>
            <p className="kicker">{event.date}</p>
            <h2 className="mt-3 font-heading text-3xl leading-tight">{event.title}</h2>
            <p className="mt-3 text-[var(--sand)]">{event.description}</p>
            <Link href="/reservations" className="mt-6 inline-flex text-sm text-[var(--gold)]">
              {event.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
