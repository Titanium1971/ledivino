import Image from "next/image";
import Link from "next/link";

const experiences = [
  "Cuisine de saison inspirée des produits méditerranéens",
  "Service attentionné et rythme de table maîtrisé",
  "Terrasse et salle chaleureuse pour dîners et événements"
];

export default function HomePage() {
  return (
    <section className="space-y-20">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div className="space-y-6 reveal">
          <p className="kicker">Agde · Table semi-gastronomique</p>
          <h1 className="hero-title">Une expérience culinaire
            <br />
            élégante et vivante.</h1>
          <p className="max-w-xl text-[1.06rem] text-[var(--sand)]">
            Le Divino propose une cuisine précise, généreuse et raffinée, dans une atmosphère intime pensée
            pour les déjeuners d&apos;affaires comme les soirées signature.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/reservations" className="btn-gold">
              Réserver une table
            </Link>
            <Link href="/menu" className="btn-outline">
              Découvrir le menu
            </Link>
          </div>
        </div>
        <div className="panel reveal overflow-hidden rounded-[22px]" style={{ animationDelay: "0.12s" }}>
          <Image
            src="/images/hero.jpg"
            alt="Salle du restaurant Le Divino"
            width={1190}
            height={820}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {experiences.map((item, index) => (
          <article key={item} className="panel reveal rounded-2xl p-6" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
            <p className="kicker">Signature {`0${index + 1}`}</p>
            <p className="mt-3 text-lg text-[var(--ivory)]">{item}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="panel reveal overflow-hidden rounded-[20px]">
          <Image
            src="/images/salle-bar-wide.jpg"
            alt="Ambiance bar et salle"
            width={876}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-5 reveal" style={{ animationDelay: "0.1s" }}>
          <p className="kicker">L&apos;esprit du Divino</p>
          <h2 className="font-heading text-5xl leading-[0.95]">Le goût du détail,
            <br />
            sans ostentation.</h2>
          <p className="text-[var(--sand)]">
            Notre carte évolue au fil des arrivages et des saisons. Chaque assiette recherche l&apos;équilibre entre
            technicité, justesse des cuissons et plaisir immédiat.
          </p>
          <Link href="/events" className="btn-outline">
            Voir les événements à venir
          </Link>
        </div>
      </div>
    </section>
  );
}
