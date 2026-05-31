import type { Config } from "tailwindcss";

/**
 * TRUDY design system — "stiller Triumph".
 *
 * Leitmotiv: Trudys bernsteinfarbene Schwimmbrille, durch die der Ärmelkanal
 * "wie flüssiges Bernstein, goldocker" leuchtete.
 *   - amber  → Triumph & Wärme (Akzent)
 *   - abyss/ocean → Stille, Wasser, Tiefe (Basis)
 *   - paper/sand  → Raum, Atem (Off-White)
 *
 * Colors are mirrored as CSS variables in globals.css (:root) for documentation
 * and runtime use; the hex values below give Tailwind full opacity-modifier
 * support (e.g. `bg-amber-gold/20`).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Tiefsee / Atlantik — Stille & Tiefe
        abyss: "#0A1A24", // deepest background
        deep: "#0E2532", // primary dark surface
        ocean: "#143A4C", // raised dark surface / feature bands
        tide: "#1E5267", // mid blue, decorative
        mist: "#A9C2CC", // muted blue-grey text on dark

        // Bernstein / Gold — Triumph & Wärme (Akzent)
        amber: {
          bright: "#F0CE7D", // highlights, glints
          gold: "#E0AE55", // primary accent / CTA fill
          DEFAULT: "#C98A2E", // deep amber
          ember: "#A56A1C", // hover / pressed
        },

        // Off-White — Raum
        paper: "#F7F1E6", // light section background
        sand: "#ECE1CC", // secondary light surface
        ink: "#13242E", // dark text on light surfaces
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Editorial display scale
        display: ["clamp(3.25rem, 9vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        hero: ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        h2: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.35rem, 2.2vw, 1.875rem)", { lineHeight: "1.2" }],
        lede: ["clamp(1.15rem, 1.6vw, 1.5rem)", { lineHeight: "1.55" }],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        prose: "68ch",
        shell: "78rem",
      },
      boxShadow: {
        lift: "0 1px 2px rgba(10,26,36,0.06), 0 12px 32px -12px rgba(10,26,36,0.25)",
        glow: "0 0 0 1px rgba(224,174,85,0.25), 0 18px 40px -16px rgba(224,174,85,0.45)",
      },
      backgroundImage: {
        "ocean-fade": "linear-gradient(180deg, #0A1A24 0%, #0E2532 55%, #143A4C 100%)",
        "amber-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(224,174,85,0.18) 0%, rgba(224,174,85,0) 70%)",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
