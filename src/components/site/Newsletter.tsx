import { Arrow, Pill, Reveal, SectionHeading } from "./ui";

export function Newsletter() {
  return (
    <section className="pt-32 pb-8 sm:pt-48">
      <SectionHeading
        lines={[
          <>
            Siap Jadi <em className="italic">Mitra</em>
          </>,
          <>
            <em className="italic">Benice</em> Coffee?
          </>,
        ]}
      />
      <Reveal delay={0.1} className="mt-6 flex flex-col items-center">
        <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
          Tinggalkan e-mail Anda, tim kami
          <br />
          kirim proposal & simulasi keuntungan.
        </p>
        <form
          className="mt-8 flex w-full max-w-[330px] flex-col items-center gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Alamat e-mail"
            aria-label="Alamat e-mail"
            className="w-full rounded-full bg-surface px-6 py-3 text-center text-[11px] outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
          />
          <Pill className="px-6">
            Kirim proposal <Arrow />
          </Pill>
        </form>
      </Reveal>
    </section>
  );
}