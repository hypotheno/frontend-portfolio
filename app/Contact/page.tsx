"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, type FormEvent } from "react";
import {
  Mail, Copy, Check, Send, Star, MessageSquare, Briefcase, UserRound,
  Loader2, AlertCircle,
} from "lucide-react";
import { site, socials } from "@/lib/site";

const kinds = [
  { id: "Message", icon: MessageSquare },
  { id: "Feedback", icon: Star },
  { id: "Hire", icon: Briefcase },
] as const;

type Kind = (typeof kinds)[number]["id"];
type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-lg border bg-background/60 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [kind, setKind] = useState<Kind>("Message");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<Status>("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return; // spam trap

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const text = String(fd.get("message") ?? "");
    const message = kind === "Feedback" && rating ? `Rating: ${rating}/5\n\n${text}` : text;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    // No key yet -> open the user's email app instead
    if (!key) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `[${kind}] from ${name}`
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `[PawNino ${kind}] from ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
        setRating(0);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 md:py-14">
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
        {/* Left: email + socials */}
        <div className="grid content-start gap-4">
          <div className="fade-up flex items-center justify-between gap-3 rounded-2xl border bg-card/70 p-4 backdrop-blur-sm">
            <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-500/15">
                <Mail className="size-5 text-emerald-500" />
              </span>
              <span className="truncate text-sm font-medium">{site.email}</span>
            </a>
            <button
              onClick={copy}
              aria-label="Copy email"
              className="grid size-10 shrink-0 place-items-center rounded-lg border transition hover:border-emerald-500/60"
            >
              {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
            </button>
          </div>

          <ul className="fade-up grid grid-cols-3 gap-3" style={{ animationDelay: "100ms" }}>
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="grid aspect-square place-items-center rounded-2xl border bg-card/70 backdrop-blur-sm transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.6)]"
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    className={`size-9 ${s.mono ? "dark:invert" : ""}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div
          className="fade-up rounded-2xl border bg-card/70 p-5 backdrop-blur-sm"
          style={{ animationDelay: "160ms" }}
        >
          {status === "sent" ? (
            <div className="modal-pop flex min-h-72 flex-col items-center justify-center gap-4 text-center">
              <span className="grid size-16 place-items-center rounded-full bg-emerald-500/15">
                <Check className="size-8 text-emerald-500" />
              </span>
              <p className="text-lg font-semibold">Sent. Salamat!</p>
              <button
                onClick={() => setStatus("idle")}
                className="rounded-lg border px-4 py-2 text-sm transition hover:border-emerald-500/60"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3">
              <div role="tablist" className="grid grid-cols-3 gap-2">
                {kinds.map(({ id, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={kind === id}
                    onClick={() => setKind(id)}
                    className={`flex items-center justify-center gap-2 rounded-lg border py-2 text-sm transition ${
                      kind === id
                        ? "border-emerald-500 bg-emerald-500/15 text-emerald-500"
                        : "text-muted-foreground hover:border-emerald-500/60"
                    }`}
                  >
                    <Icon className="size-4" />
                    {id}
                  </button>
                ))}
              </div>

              {kind === "Feedback" && (
                <div className="fade-up flex items-center gap-1" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n === rating ? 0 : n)}
                      aria-label={`${n} star`}
                      className="p-1 transition hover:scale-110"
                    >
                      <Star
                        className={`size-6 ${
                          n <= rating
                            ? "fill-emerald-500 text-emerald-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="relative">
                <UserRound className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <input name="name" required maxLength={80} placeholder="Name" aria-label="Name" className={field} />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <input name="email" type="email" required maxLength={120} placeholder="Email" aria-label="Email" className={field} />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  placeholder="Your message"
                  aria-label="Message"
                  className={`${field} resize-none`}
                />
              </div>

              {/* honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="size-4" /> Failed to send. Try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60"
              >
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}