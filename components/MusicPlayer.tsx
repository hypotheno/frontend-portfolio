"use client";
import { useEffect, useRef, useState } from "react";
import { Music2, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import SmartImage from "./SmartImage";
import type { Song } from "@/lib/site";

const fmt = (s: number) =>
  !isFinite(s) || s <= 0
    ? "0:00"
    : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function MusicPlayer({ songs }: { songs: Song[] }) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [covers, setCovers] = useState<Record<string, string>>({});
  const audioRef = useRef<HTMLAudioElement>(null);
  const song = songs[i];

  // auto album cover for Spotify songs
  useEffect(() => {
    let alive = true;
    songs.forEach(async (s) => {
      if (s.cover || !s.spotify) return;
      try {
        const url = encodeURIComponent(`https://open.spotify.com/track/${s.spotify}`);
        const r = await fetch(`https://open.spotify.com/oembed?url=${url}`);
        const j = await r.json();
        if (alive && j.thumbnail_url) {
          setCovers((c) => ({ ...c, [s.title]: j.thumbnail_url as string }));
        }
      } catch {
        // ignore: icon fallback will show
      }
    });
    return () => {
      alive = false;
    };
  }, [songs]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing && song?.audio) a.play().catch(() => setPlaying(false));
    else a.pause();
  }, [playing, i, song?.audio]);

  if (!song) return null;

  const cover = (s: Song) => s.cover || covers[s.title];
  const hasAudio = !!song.audio;
  const icon = (size: string) => (
    <span className="grid size-full place-items-center">
      <Music2 className={`${size} text-emerald-500`} />
    </span>
  );

  const select = (idx: number) => {
    if (idx === i) {
      setPlaying((p) => !p);
      return;
    }
    setI(idx);
    setTime(0);
    setDur(0);
    setPlaying(true);
  };

  const step = (d: number) => {
    setI((i + d + songs.length) % songs.length);
    setTime(0);
    setDur(0);
    setPlaying(true);
  };

  return (
    <div className="rounded-2xl border bg-card/70 p-4 backdrop-blur-sm">
      <audio
        ref={audioRef}
        src={song.audio}
        preload="metadata"
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        onEnded={() => step(1)}
      />

      {/* Now playing */}
      <div className="flex items-center gap-4">
        <div
          className="spin-disc relative size-20 shrink-0 overflow-hidden rounded-full border-2 border-emerald-500/60 bg-emerald-500/10"
          style={{ animationPlayState: playing && hasAudio ? "running" : "paused" }}
        >
          <SmartImage
            src={cover(song)}
            alt={song.title}
            className="size-full object-cover"
            fallback={icon("size-8")}
          />
          <span className="absolute inset-0 m-auto size-3.5 rounded-full border bg-background" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{song.title}</p>
          <p className="truncate text-sm text-muted-foreground">{song.artist}</p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => step(-1)}
            aria-label="Previous"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition hover:text-foreground"
          >
            <SkipBack className="size-4" />
          </button>
          <button
            onClick={() => hasAudio && setPlaying((p) => !p)}
            disabled={!hasAudio}
            aria-label={playing ? "Pause" : "Play"}
            className="grid size-11 place-items-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-600 disabled:opacity-40"
          >
            {playing && hasAudio ? <Pause className="size-5" /> : <Play className="size-5" />}
          </button>
          <button
            onClick={() => step(1)}
            aria-label="Next"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition hover:text-foreground"
          >
            <SkipForward className="size-4" />
          </button>
        </div>
      </div>

      {/* Progress (local audio) */}
      {hasAudio && (
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="w-9 tabular-nums">{fmt(time)}</span>
          <input
            type="range"
            min={0}
            max={dur || 0}
            step={0.1}
            value={time}
            aria-label="Seek"
            onChange={(e) => {
              const v = Number(e.target.value);
              if (audioRef.current) audioRef.current.currentTime = v;
              setTime(v);
            }}
            className="h-1 flex-1 cursor-pointer accent-emerald-500"
          />
          <span className="w-9 text-right tabular-nums">{fmt(dur)}</span>
        </div>
      )}

      {/* Spotify embed */}
      {song.spotify && !hasAudio && (
        <iframe
          key={song.spotify}
          title={`${song.title} on Spotify`}
          src={`https://open.spotify.com/embed/track/${song.spotify}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="mt-4 rounded-xl border-0"
        />
      )}

      {/* Playlist */}
      <ul className="mt-4 grid gap-2">
        {songs.map((s, idx) => {
          const active = idx === i;
          return (
            <li key={`${s.title}-${idx}`}>
              <button
                onClick={() => select(idx)}
                aria-current={active}
                className={`group flex w-full items-center gap-3 rounded-xl border p-2.5 text-left transition hover:border-emerald-500/60 ${
                  active ? "border-emerald-500/60 bg-emerald-500/10" : ""
                }`}
              >
                <span className="size-11 shrink-0 overflow-hidden rounded-lg bg-emerald-500/15">
                  <SmartImage
                    src={cover(s)}
                    alt={s.title}
                    className="size-full object-cover"
                    fallback={icon("size-5")}
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{s.title}</span>
                  <span className="block truncate text-xs text-muted-foreground">{s.artist}</span>
                </span>
                {active && playing && s.audio ? (
                  <span className="eq text-emerald-500" aria-hidden>
                    <i /><i /><i />
                  </span>
                ) : (
                  <Play className="size-4 text-muted-foreground opacity-60 transition md:opacity-0 md:group-hover:opacity-100" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}