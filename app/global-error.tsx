"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <h2>Something went wrong</h2>
          <button onClick={() => unstable_retry()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
