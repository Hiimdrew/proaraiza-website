"use client";

import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** Visibility threshold to start playback (0-1). Default 0.25. */
  threshold?: number;
}

/**
 * Mobile-safe autoplay wrapper.
 *
 * iOS Safari throttles multi-video autoplay even when muted + playsInline are
 * set — secondary videos often pause and show a play button. This component
 * uses IntersectionObserver to start playback only when the video enters the
 * viewport and pause it when it leaves. preload="metadata" keeps initial
 * bandwidth low so multiple videos on a page don't compete for the network.
 */
export default function LazyVideo({
  src,
  poster,
  className = "",
  threshold = 0.25,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // play() returns a promise; iOS may reject if the user hasn't
            // interacted yet. Swallow the rejection — the poster shows instead.
            video.play().catch(() => {
              /* autoplay blocked — poster is the fallback */
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      poster={poster}
      preload="metadata"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
