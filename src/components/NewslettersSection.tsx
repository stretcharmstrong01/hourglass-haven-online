import { Calendar, ChevronRight, FolderOpen } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const currentNewsletter = {
  title: "Fall 2025 Newsletter",
  date: "Fall 2025",
  url: "https://hourglasshoa.com/newsletters/Fall2025.pdf",
};

const pastNewsletters = [
  {
    title: "Spring 2025 Newsletter",
    date: "Spring 2025",
    url: "https://hourglasshoa.com/newsletters/Spring2025.pdf",
  },
];

export function NewslettersSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="newsletters" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Newsletters
          </h2>
          <p className="text-muted-foreground font-sans">
            Stay informed with our community updates
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Current Newsletter */}
          <a
            href={currentNewsletter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-sm p-6 flex items-center justify-between gap-4 shadow-card hover:shadow-card-hover transition-all group mb-4 block"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium text-accent uppercase tracking-wide mb-1">
                  {currentNewsletter.date}
                </p>
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                  {currentNewsletter.title}
                </h3>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </a>

          {/* Past Newsletters Archive */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="bg-card border border-border rounded-sm shadow-card">
            <CollapsibleTrigger className="w-full p-5 flex items-center gap-3 text-foreground font-sans font-medium hover:text-primary transition-colors">
              <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
              <FolderOpen className="h-5 w-5 text-accent" />
              Past Newsletters Archive
            </CollapsibleTrigger>
            <CollapsibleContent className="px-5 pb-5">
              <div className="space-y-3 pt-2 border-t border-border">
                {pastNewsletters.map((newsletter, index) => (
                  <a
                    key={index}
                    href={newsletter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary font-sans hover:underline py-2"
                  >
                    <Calendar className="h-4 w-4" />
                    {newsletter.title}
                  </a>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
