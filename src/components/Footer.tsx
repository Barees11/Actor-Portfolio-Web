export function Footer() {
  return (
    <footer className="py-12 border-t border-border/20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-display tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Aishwarya Priyaprasad
        </p>
        <div className="flex items-center gap-4">
          <p className="text-[10px] text-border tracking-[0.2em] uppercase">
            All enquiries through management
          </p>
        </div>
      </div>
    </footer>
  );
}
