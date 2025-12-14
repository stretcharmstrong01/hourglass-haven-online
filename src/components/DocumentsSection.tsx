import { useState } from "react";
import { FileText, Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const documents = [
  {
    title: "2025 YTD Financials",
    url: "https://hourglasshoa.com/docs/ytdactuals.pdf",
    protected: true,
  },
  {
    title: "HOA Insurance",
    url: "https://hourglasshoa.com/docs/HourglassFarmersInsurance2025.pdf",
    protected: true,
  },
  {
    title: "City of Ketchum Short Term Rental Ordinance",
    url: "https://hourglasshoa.com/docs/City_of_Ketchum_Short_Term_Rental.pdf",
    protected: false,
  },
  {
    title: "City of Ketchum Short Term Rental Insurance Requirements",
    url: "https://hourglasshoa.com/docs/Ketchum_short_term%20_rental-insurance-requirement.pdf",
    protected: false,
  },
];

const CORRECT_PASSWORD = "RiverRun";

export function DocumentsSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; url: string } | null>(null);

  const handleProtectedClick = (doc: { title: string; url: string }) => {
    setSelectedDoc(doc);
    setPassword("");
    setIsDialogOpen(true);
  };

  const handleSubmitPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsDialogOpen(false);
      if (selectedDoc) {
        window.open(selectedDoc.url, "_blank");
      }
      toast({
        title: "Access granted",
        description: "Opening document...",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="documents" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            FAQs and Documents
          </h2>
          <p className="text-muted-foreground font-sans">
            Access important community documents and forms
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-sm p-5 flex items-center justify-between gap-4 shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-foreground flex items-center gap-2">
                      {doc.title}
                      {doc.protected && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
                    </h3>
                  </div>
                </div>
                {doc.protected ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                    onClick={() => handleProtectedClick(doc)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                ) : (
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif">Password Required</DialogTitle>
            <DialogDescription className="font-sans">
              This document is protected. Please enter the password to access it.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitPassword} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-sans"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                Access Document
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
