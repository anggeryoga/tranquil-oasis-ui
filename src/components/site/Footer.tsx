export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 py-14 text-[10px] text-muted-foreground">
      <span>© {new Date().getFullYear()} TranquilQ</span>
      <nav className="flex gap-5">
        <a href="#" className="story-link">
          Stays
        </a>
        <a href="#" className="story-link">
          Journal
        </a>
        <a href="#" className="story-link">
          Contact
        </a>
      </nav>
      <span>Privacy · Terms</span>
    </footer>
  );
}