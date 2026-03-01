const reviews = [
  {
    author: "Camille D.",
    rating: "5.0",
    text: "Cuisine précise, service impeccable, et une très belle maîtrise des cuissons."
  },
  {
    author: "Julien M.",
    rating: "5.0",
    text: "Une adresse élégante mais accessible, parfaite pour un dîner important."
  },
  {
    author: "Sophie R.",
    rating: "4.9",
    text: "Ambiance chaleureuse, carte raffinée et équipe très professionnelle."
  }
];

export default function AvisPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="kicker">E-réputation</p>
        <h1 className="font-heading text-6xl leading-[0.9]">Avis clients</h1>
        <p className="max-w-2xl text-[var(--sand)]">
          Module Google Reviews prêt à être relié à l&apos;API officielle. En mode non connecté, un jeu de données
          contrôlé est affiché.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review, index) => (
          <article key={review.author} className="panel reveal rounded-2xl p-6" style={{ animationDelay: `${index * 0.08}s` }}>
            <p className="text-[var(--gold)]">★ {review.rating}</p>
            <p className="mt-3 text-[var(--sand)]">{review.text}</p>
            <p className="mt-4 text-sm text-[var(--muted)]">{review.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
