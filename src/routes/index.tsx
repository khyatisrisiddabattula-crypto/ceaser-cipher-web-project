import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Caesar Cipher Lab — Encrypt & Decrypt Text Online";
const DESCRIPTION =
  "Caesar Cipher Lab: a red-and-black cybersecurity console to encrypt and decrypt messages with the classical Caesar shift cipher, live stats and alphabet visualization.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The project itself is plain index.html + style.css + script.js in /public
// (GitHub Pages ready). The preview embeds it full-screen at "/".
function Index() {
  return (
    <iframe
      src="/index.html"
      title="Caesar Cipher Lab"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
    />
  );
}
