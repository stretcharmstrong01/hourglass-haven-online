export function Footer() {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-serif text-xl text-background mb-3">
            Hourglass Homeowners Association
          </h3>
          <p className="text-background/60 font-sans text-sm mb-6">
            Ketchum, Idaho
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="#documents"
              className="text-background/60 font-sans text-sm hover:text-background transition-colors"
            >
              Documents
            </a>
            <a
              href="#newsletters"
              className="text-background/60 font-sans text-sm hover:text-background transition-colors"
            >
              Newsletters
            </a>
            <a
              href="#resources"
              className="text-background/60 font-sans text-sm hover:text-background transition-colors"
            >
              Resources
            </a>
            <a
              href="#contact"
              className="text-background/60 font-sans text-sm hover:text-background transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-background/40 font-sans text-xs">
            © {new Date().getFullYear()} Hourglass Homeowners Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
