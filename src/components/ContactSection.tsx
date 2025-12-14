import { Mail } from "lucide-react";

const contacts = [
  { name: "Justin Schug", role: "President", email: "jschug1@gmail.com" },
  { name: "Brian Armstrong", role: null, email: "brianparmstrong@hotmail.com" },
  { name: "Ron Brown", role: null, email: "rbrown@brown-construction.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
            Contacts
          </h2>
          <p className="text-primary-foreground/80 font-sans">
            Reach out to your HOA board members for questions, feedback, or community updates
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={`mailto:${contact.email}`}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-sm p-5 flex items-center gap-4 hover:bg-primary-foreground/15 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-primary-foreground">
                    {contact.name}
                    {contact.role && (
                      <span className="ml-2 text-primary-foreground/70 font-normal">
                        [{contact.role}]
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 font-sans">
                    {contact.email}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
