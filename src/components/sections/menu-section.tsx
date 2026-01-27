import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuItems, specialOffers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export default function MenuSection() {
  const getPlaceholderImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold font-headline text-center">Our Menu</h2>
        <p className="text-center text-lg text-muted-foreground mt-2">
          Crafted with love, smoked to perfection.
        </p>
      </div>

      {specialOffers.length > 0 && (
        <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Special Offers</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {specialOffers.map(offer => (
                    <div key={offer.id} className="bg-accent/30 border border-accent rounded-lg p-4 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-lg">{offer.title}</h4>
                            <p className="text-muted-foreground text-sm mt-1">{offer.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}

      <Separator />

      <div>
        <h3 className="text-2xl font-bold font-headline mb-6">Plates</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.filter(item => item.category === 'plate').map((item) => {
            const image = getPlaceholderImage(item.imageId);
            return (
              <Card key={item.id} className="overflow-hidden flex flex-col">
                {image && (
                   <div className="relative h-48 w-full">
                    <Image src={image.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={image.imageHint}/>
                   </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="flex-grow">{item.description}</CardDescription>
                  <p className="text-lg font-semibold mt-4">{item.price}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      
      <Separator />

      <div>
        <h3 className="text-2xl font-bold font-headline mb-6">Entrees (A La Carte)</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems.filter(item => item.category === 'entree').map((item) => {
            const image = getPlaceholderImage(item.imageId);
            return (
              <Card key={item.id} className="overflow-hidden flex flex-col">
                {image && (
                   <div className="relative h-48 w-full">
                    <Image src={image.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={image.imageHint}/>
                   </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="flex-grow">{item.description}</CardDescription>
                  <p className="text-lg font-semibold mt-4">{item.price}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      
      <Separator />

      <div>
        <h3 className="text-2xl font-bold font-headline mb-6">Sides</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems.filter(item => item.category === 'side').map((item) => {
            const image = getPlaceholderImage(item.imageId);
            return (
              <Card key={item.id} className="overflow-hidden flex flex-col">
                {image && (
                   <div className="relative h-48 w-full">
                     <Image src={image.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={image.imageHint}/>
                   </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="flex-grow">{item.description}</CardDescription>
                  <p className="text-lg font-semibold mt-4">{item.price}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
