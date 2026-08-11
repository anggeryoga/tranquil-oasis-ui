export const WHATSAPP =
  "https://wa.me/6281234567890?text=Halo%20Benice%20Coffee%2C%20saya%20tertarik%20dengan%20paket%20usaha";

export function waFor(paket: string) {
  return `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo Benice Coffee, saya tertarik dengan paket ${paket}`,
  )}`;
}