"use client";

import { Map, Marker } from "@vis.gl/react-google-maps";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function LocationSection() {
  const position = { lat: 30.2672, lng: -97.7431 }; // Austin, TX
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">Find Us Here</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Come on down for a taste of authentic Southern BBQ!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
          {apiKey ? (
            <Map
              defaultCenter={position}
              defaultZoom={14}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              mapId="saucys-map"
            >
              <Marker position={position} />
            </Map>
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center p-4">
              <p className="text-center text-muted-foreground">
                Google Maps could not be loaded. Coming Soon!
              </p>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-muted-foreground">2100 South University Boulevard, Denver, CO, USA</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Hours</h3>
              <p className="text-muted-foreground">Mon - Sun: 11:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-muted-foreground">(720)484-6035</p>
            </div>
          </div>
           <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          
          </div>
        </div>
      </div>
    </div>
  );
}
