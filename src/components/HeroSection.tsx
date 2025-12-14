import townhomesImage from "@/assets/townhomes-exterior.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${townhomesImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-sans font-medium">
            Ketchum, Idaho
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6 text-shadow">
            Hourglass Homeowners Association
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl font-sans font-light max-w-xl mx-auto">
            Serving our community with transparency, connection, and care.
          </p>
        </div>
      </div>
    </section>
  );
}
