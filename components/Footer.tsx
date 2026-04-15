import ThemeToggle from "./ThemeToggle";

const WAVEFORM = Array.from({ length: 80 }, (_, i) => {
  const h = Math.round(
    6 + Math.abs(Math.sin(i * 0.43)) * 28 + Math.abs(Math.cos(i * 0.91)) * 10,
  );
  const opacity = 0.25 + Math.abs(Math.sin(i * 0.27 + 0.5)) * 0.45;
  return { h, opacity };
});

const COLS = WAVEFORM.length;
const VB_WIDTH = 1200;
const VB_HEIGHT = 60;
const SLOT = VB_WIDTH / COLS;
const BAR_WIDTH = SLOT * 0.5;

const linkClass =
  "rounded-sm font-display text-sm font-light text-primary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none";

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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
                  <a href="/about#contact" className={linkClass}>
                    Message
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
            [LM]
          </span>
        </div>
      </div>

      <div className="w-full text-accent">
        <svg
          viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
          className="block h-10 w-full sm:h-14"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {WAVEFORM.map(({ h, opacity }, i) => (
            <rect
              key={i}
              x={i * SLOT + (SLOT - BAR_WIDTH) / 2}
              y={VB_HEIGHT - h}
              width={BAR_WIDTH}
              height={h}
              fill="currentColor"
              opacity={opacity}
            />
          ))}
        </svg>
      </div>
    </footer>
  );
}
