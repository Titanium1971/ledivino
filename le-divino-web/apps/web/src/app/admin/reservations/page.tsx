"use client";

import { useEffect, useState } from "react";

type Reservation = {
  id: string;
  name: string;
  email: string;
  phone: string;
  datetime: string;
  guests: number;
  message?: string | null;
  status: "pending" | "confirmed" | "cancelled" | "seated";
  created_at: string;
};

const statuses: Reservation["status"][] = ["pending", "confirmed", "seated", "cancelled"];
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export default function AdminReservationsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [items, setItems] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  async function loadReservations(filter: string) {
    setLoading(true);
    setError(null);
    try {
      const query = filter === "all" ? "" : `?status=${filter}`;
      const response = await fetch(`${apiBaseUrl}/reservations/admin${query}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Impossible de charger les réservations");
      }
      const data = (await response.json()) as Reservation[];
      setItems(data);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadReservations(statusFilter);
  }, [statusFilter]);

  async function updateStatus(id: string, status: Reservation["status"]) {
    try {
      setUpdatingId(id);
      const response = await fetch(`${apiBaseUrl}/reservations/admin/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      if (!response.ok) {
        throw new Error("Mise à jour refusée");
      }
      await loadReservations(statusFilter);
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "Erreur inconnue");
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="kicker">Back-office</p>
          <h1 className="font-heading text-5xl leading-[0.95]">Réservations</h1>
        </div>
        <div className="space-y-1">
          <label className="text-xs text-[var(--muted)]">Filtrer par statut</label>
          <select
            className="form-field form-select min-w-[180px]"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">Tous</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      {loading ? <p className="text-sm text-[var(--sand)]">Chargement des réservations...</p> : null}

      <div className="grid gap-4">
        {!loading && items.length === 0 ? <div className="panel rounded-2xl p-5 text-sm text-[var(--sand)]">Aucune réservation.</div> : null}
        {items.map((item) => (
          <article key={item.id} className="panel rounded-2xl p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="font-heading text-3xl">{item.name}</h2>
                <p className="text-sm text-[var(--sand)]">{new Date(item.datetime).toLocaleString("fr-FR")} · {item.guests} convives</p>
              </div>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-widest text-[var(--muted)]">
                {item.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--sand)]">{item.email} · {item.phone}</p>
            {item.message ? <p className="mt-3 text-sm text-[var(--ivory)]">{item.message}</p> : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={`${item.id}-${status}`}
                  type="button"
                  className="btn-outline px-3 py-1.5 text-xs uppercase tracking-wide disabled:opacity-50"
                  disabled={item.status === status || updatingId === item.id}
                  onClick={() => updateStatus(item.id, status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

