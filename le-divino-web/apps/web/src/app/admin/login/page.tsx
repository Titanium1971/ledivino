export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-md space-y-4 rounded border border-stone-200 bg-white p-6">
      <h1 className="text-2xl font-semibold">Connexion Admin</h1>
      <p className="text-sm text-stone-700">
        Auth JWT + rôles admin à implémenter côté API (étape 2), puis connexion front sécurisée.
      </p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded border border-stone-300 px-3 py-2"
          disabled
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full rounded border border-stone-300 px-3 py-2"
          disabled
        />
        <button type="button" className="w-full rounded bg-stone-900 px-4 py-2 text-white" disabled>
          Bientôt disponible
        </button>
      </form>
    </section>
  );
}

