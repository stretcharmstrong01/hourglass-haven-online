import { ExternalLink } from "lucide-react";

const resources = [
  { name: "NOAA National Water Center", url: "https://water.noaa.gov/" },
  { 
    name: "NRCS Idaho Snow Survey and Water Supply", 
    url: "https://www.nrcs.usda.gov/idaho/snow-survey" 
  },
  { 
    name: "Ketchum Short Term Rentals", 
    url: "https://www.ketchumidaho.org/administration/page/short-term-rentals" 
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Community Resources
          </h2>
          <p className="text-muted-foreground font-sans">
            Helpful links for water data, snow surveys, and regional updates
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-sm p-6 shadow-card">
            <ul className="space-y-4">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-foreground font-sans hover:text-primary transition-colors group"
                  >
                    <span>{resource.name}</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
