import type { Dictionary } from "@/i18n/types";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-amber-gold/15 bg-abyss px-6 py-14 sm:px-8">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold text-paper">{dict.footer.book}</p>
          <p className="mt-2 font-serif italic text-amber-gold">{dict.footer.claim}</p>
        </div>

        <div className="text-sm text-mist">
          <p>
            © {year} {dict.footer.author}. {dict.footer.rights}
          </p>
          <nav aria-label={dict.footer.imprint} className="mt-3 flex gap-5">
            {/* Replace href="#" with the legally required pages before launch. */}
            <a href="#" className="transition-colors hover:text-paper">
              {dict.footer.imprint}
            </a>
            <a href="#" className="transition-colors hover:text-paper">
              {dict.footer.privacy}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
