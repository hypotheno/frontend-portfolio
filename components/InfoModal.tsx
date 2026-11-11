"use client";
import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  label: string;
  size?: "md" | "lg";
  children: ReactNode;
};

export default function InfoModal({ open, onClose, label, size = "md", children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="modal-backdrop absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
      />
      <div
        className={`modal-pop relative w-full rounded-2xl border bg-card shadow-2xl ${
          size === "lg" ? "max-w-3xl p-3" : "max-w-md p-6"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full border bg-card/80 backdrop-blur transition hover:border-emerald-500/60"
        >
          <X className="size-4" />
        </button>
        {children}
      </div>
    </div>
  );
}