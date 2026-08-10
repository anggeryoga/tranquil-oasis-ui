export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 py-14 text-[10px] text-muted-foreground">
      <span>© {new Date().getFullYear()} Benice Coffee</span>
      <nav className="flex gap-5">
        <a href="#menu" className="story-link">
          Menu
        </a>
        <a href="#paket" className="story-link">
          Paket Usaha
        </a>
        <a href="#gabung" className="story-link">
          Kontak
        </a>
      </nav>
      <span>Kebijakan Privasi · Syarat & Ketentuan</span>
    </footer>
  );
}