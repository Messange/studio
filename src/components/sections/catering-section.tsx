import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

export default function CateringSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold font-headline text-center">Catering Services</h2>
      <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
        Bring the authentic taste of Saucy's Southern BBQ to your next event! From corporate lunches to family celebrations, we offer a variety of catering packages to make your gathering a delicious success.
      </p>
      <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-primary/10 p-4 rounded-full">
            <PartyPopper className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-headline">Custom Menus</h3>
          <p className="text-muted-foreground">Tailor your menu to fit your event's needs. Choose from our full range of smoked meats, savory sides, and homemade desserts.</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-primary/10 p-4 rounded-full">
            <PartyPopper className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-headline">Flexible Packages</h3>
          <p className="text-muted-foreground">Whether it's a small get-together or a large party, we have packages for pick-up, delivery, and full-service catering.</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-primary/10 p-4 rounded-full">
            <PartyPopper className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-headline">Stress-Free Experience</h3>
          <p className="text-muted-foreground">Our team handles the details so you can enjoy your event. We ensure timely delivery and professional setup.</p>
        </div>
      </div>
      <div className="text-center pt-8">
        <Button size="lg">Plan Your Event</Button>
      </div>
    </div>
  );
}
