import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="max-w-[480px] text-center">

        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
          Vizuálny návrh
        </div>

        <h1 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[40px]">
          Táto stránka ešte neexistuje.
        </h1>

        <div className="mt-5 text-[15px] leading-[1.7] text-ink-500">
          Toto je len vizuálny návrh webu. Obsah jednotlivých stránok bude
          doplnený pri realizácii projektu.
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <div className="text-[13px] text-ink-400">
            Záujem o spoluprácu?
          </div>
          <a
            href="mailto:info@thegrandpoints.com"
            className="mt-2 inline-block font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-medium text-brand transition-colors hover:text-brand-2"
          >
            info@thegrandpoints.com
          </a>
        </div>

        <Link
          href="/"
          className="group mt-8 inline-flex h-11 items-center gap-2 rounded-[4px] bg-brand px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand-2"
        >
          Späť na hlavnú
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </Link>

      </div>
    </div>
  )
}