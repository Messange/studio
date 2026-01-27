import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { jobListings } from "@/lib/data";

export default function JobsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold font-headline text-center">Join Our Team</h2>
      <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
        We're passionate about great food and great people. If you share our love for Southern hospitality and delicious BBQ, check out our open positions and apply to become part of the Saucy's family!
      </p>
      
      {jobListings.length > 0 ? (
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto pt-8">
          {jobListings.map((job) => (
            <AccordionItem value={`item-${job.id}`} key={job.id}>
              <AccordionTrigger className="text-lg font-semibold">
                {job.title} - <span className="text-muted-foreground font-normal ml-2">{job.location}</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                <p className="text-muted-foreground">{job.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Responsibilities:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4">Apply Now</Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
         <p className="text-center text-muted-foreground pt-8">We are not currently hiring, but check back soon!</p>
      )}
    </div>
  );
}
