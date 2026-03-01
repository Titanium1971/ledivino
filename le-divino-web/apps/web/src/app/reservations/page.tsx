"use client";

import { FormEvent, useMemo, useState } from "react";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(6, "Téléphone invalide"),
  date: z.string().min(1, "Date requise"),
  service: z.enum(["lunch", "dinner"]),
  slot: z.string().min(1, "Horaire requis"),
  guests: z.number().int().min(1).max(12),
  message: z.string().max(500).optional()
});

type ReservationFormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: "lunch" | "dinner";
  slot: string;
  guests: string;
  message: string;
};

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  weekday: "short",
  day: "2-digit",
  month: "2-digit"
});

const lunchSlots = ["12:00", "12:30", "13:00", "13:30"];
const dinnerSlots = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

const initialDate = new Date().toISOString().slice(0, 10);

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export default function ReservationsPage() {
  const dateOptions = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() + index);
        const iso = date.toISOString().slice(0, 10);
        const label = dateFormatter.format(date).replace(".", "");
        return { value: iso, label };
      }),
    []
  );

  const [form, setForm] = useState<ReservationFormState>({
    name: "",
    email: "",
    phone: "",
    date: initialDate,
    service: "dinner",
    slot: dinnerSlots[0],
    guests: "2",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: "success" | "error"; text: string } | null>(null);

  const slotOptions = form.service === "lunch" ? lunchSlots : dinnerSlots;

  function update<K extends keyof ReservationFormState>(key: K, value: ReservationFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onServiceChange(nextService: "lunch" | "dinner") {
    const nextSlots = nextService === "lunch" ? lunchSlots : dinnerSlots;
    setForm((prev) => ({
      ...prev,
      service: nextService,
      slot: nextSlots[0]
    }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    const parsed = reservationSchema.safeParse({
      ...form,
      guests: Number(form.guests)
    });

    if (!parsed.success) {
      setFeedback({ kind: "error", text: parsed.error.issues[0]?.message || "Formulaire invalide" });
      return;
    }

    const payload = {
      name: parsed.data.name.trim(),
      email: parsed.data.email.trim(),
      phone: parsed.data.phone.trim(),
      datetime: `${parsed.data.date}T${parsed.data.slot}:00`,
      guests: parsed.data.guests,
      message: parsed.data.message?.trim() || null
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(`${apiBaseUrl}/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Erreur serveur lors de la réservation");
      }

      const data = (await response.json()) as { reservation?: { id?: string } };
      const reservationId = data.reservation?.id;
      setFeedback({
        kind: "success",
        text: reservationId
          ? `Demande envoyée. Référence: ${reservationId.slice(0, 8).toUpperCase()}`
          : "Demande envoyée. Nous vous confirmons rapidement."
      });
      setForm((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        guests: "2",
        message: ""
      }));
    } catch {
      setFeedback({ kind: "error", text: "Impossible d'envoyer la demande pour le moment." });
    } finally {
      setIsSubmitting(false);
    }
  }

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

      <form
        onSubmit={onSubmit}
        className="panel reveal space-y-3.5 overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6"
        style={{ animationDelay: "0.1s" }}
      >
        <input
          className="form-field"
          placeholder="Nom et prénom"
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
          required
        />
        <input
          type="email"
          className="form-field"
          placeholder="Email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          required
        />
        <input
          className="form-field"
          placeholder="Téléphone"
          value={form.phone}
          onChange={(event) => update("phone", event.target.value)}
          required
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs text-[var(--muted)]">Date</label>
            <select
              className="form-field form-select"
              value={form.date}
              onChange={(event) => update("date", event.target.value)}
            >
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-[var(--muted)]">Service</label>
            <select
              className="form-field form-select"
              value={form.service}
              onChange={(event) => onServiceChange(event.target.value as "lunch" | "dinner")}
            >
              <option value="lunch">Déjeuner</option>
              <option value="dinner">Dîner</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-[var(--muted)]">Horaire souhaité</label>
          <select
            className="form-field form-select"
            value={form.slot}
            onChange={(event) => update("slot", event.target.value)}
          >
            {slotOptions.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <input
          type="number"
          min={1}
          max={12}
          className="form-field"
          placeholder="Nombre de convives"
          value={form.guests}
          onChange={(event) => update("guests", event.target.value)}
        />
        <textarea
          rows={4}
          className="form-field min-h-[110px] resize-y"
          placeholder="Allergies, anniversaire, préférences..."
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
        />

        {feedback ? (
          <p className={feedback.kind === "success" ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>{feedback.text}</p>
        ) : null}

        <button type="submit" className="btn-gold w-full py-3 text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </form>
    </section>
  );
}

