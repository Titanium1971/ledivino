import Image from "next/image";

const sections = [
  {
    title: "Entrées",
    image: "/images/menu-entree.png",
    items: [
      "Tartare de saumon, crème mangue et herbes fraîches",
      "Gravlax maison, chutney d'agrumes",
      "Œuf mollet, chips de lard et salade croquante"
    ]
  },
  {
    title: "Plats",
    image: "/images/menu-plat.png",
    items: [
      "Magret entier, réduction framboise balsamique",
      "Saumon à l'unilatéral, crème citron persillée",
      "Filet mignon à la crème, jus réduit"
    ]
  },
  {
    title: "Desserts",
    image: "/images/menu-dessert.png",
    items: [
      "Moelleux chocolat cœur framboise",
      "Tarte tatin minute, crème légère vanille",
      "Dessert du chef selon marché"
    ]
  }
];

export default function MenuPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="kicker">Carte & saisons</p>
        <h1 className="font-heading text-6xl leading-[0.9]">Menu</h1>
        <p className="max-w-2xl text-[var(--sand)]">
          Une sélection semi-gastronomique construite autour de produits frais, textures nettes et assaisonnements
          précis.
        </p>
      </div>

      <div className="grid gap-6">
        {sections.map((section, index) => (
          <article key={section.title} className="panel reveal grid gap-5 rounded-2xl p-5 md:grid-cols-[280px_1fr]" style={{ animationDelay: `${index * 0.08}s` }}>
            <div className="overflow-hidden rounded-xl border border-[var(--line)]">
              <Image
                src={section.image}
                alt={section.title}
                width={700}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl">{section.title}</h2>
              <ul className="mt-4 grid gap-3 text-[var(--sand)]">
                {section.items.map((item) => (
                  <li key={item} className="border-b border-[var(--line)] pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
