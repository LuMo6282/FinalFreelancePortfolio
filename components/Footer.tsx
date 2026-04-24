import FooterWaveform from "./FooterWaveform";
import ThemeToggle from "./ThemeToggle";

const linkClass =
  "inline-flex min-h-11 min-w-11 cursor-pointer items-center rounded-sm font-display text-sm font-light text-primary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none";

const labelClass =
  "mb-4 font-display text-[11px] font-light uppercase tracking-[0.22em] text-accent";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-300 px-6 pt-16 pb-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-16">
          <p className="font-display text-sm font-light text-secondary">
            © 2026 Lucas Moraca
          </p>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            <div>
              <p className={labelClass}>Elsewhere</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://linkedin.com/in/lucasmoraca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className={labelClass}>Contact</p>
              <ul className="space-y-2">
                <li>
                  <a href="/hire" className={linkClass}>
                    Hire me
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lucasmoraca12@gmail.com"
                    className={linkClass}
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start text-primary">
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-16 flex items-end justify-end">
          <span
            className="font-mono text-sm text-secondary"
            aria-hidden="true"
          >
            <span className="opacity-60">[</span>
            <span className="tracking-tight text-primary/80">LM</span>
            <span className="opacity-60">]</span>
            <span className="ml-0.5 text-accent">·</span>
          </span>
        </div>
      </div>

      <div className="w-full">
        <FooterWaveform />
      </div>
    </footer>
  );
}
