import { Briefcase, MapPin, ShoppingCart, Utensils, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import MenuSection from '@/components/sections/menu-section';
import OrderSection from '@/components/sections/order-section';
import LocationSection from '@/components/sections/location-section';
import JobsSection from '@/components/sections/jobs-section';
import CateringSection from '@/components/sections/catering-section';
import Chatbot from '@/components/chatbot';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <section id="main-content" className="container mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="menu" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto mb-8">
              <TabsTrigger value="menu" className="py-3 text-base"><Utensils className="mr-2 h-5 w-5" />Menu</TabsTrigger>
              <TabsTrigger value="order" className="py-3 text-base"><ShoppingCart className="mr-2 h-5 w-5" />Order</TabsTrigger>
              <TabsTrigger value="location" className="py-3 text-base"><MapPin className="mr-2 h-5 w-5" />Location</TabsTrigger>
              <TabsTrigger value="jobs" className="py-3 text-base"><Briefcase className="mr-2 h-5 w-5" />Jobs</TabsTrigger>
              <TabsTrigger value="catering" className="py-3 text-base"><Users className="mr-2 h-5 w-5" />Catering</TabsTrigger>
            </TabsList>

            <TabsContent value="menu" className="rounded-lg border bg-card p-6 shadow-sm">
              <MenuSection />
            </TabsContent>
            <TabsContent value="order" className="rounded-lg border bg-card p-6 shadow-sm">
              <OrderSection />
            </TabsContent>
            <TabsContent value="location" className="rounded-lg border bg-card p-6 shadow-sm">
              <LocationSection />
            </TabsContent>
            <TabsContent value="jobs" className="rounded-lg border bg-card p-6 shadow-sm">
              <JobsSection />
            </TabsContent>
            <TabsContent value="catering" className="rounded-lg border bg-card p-6 shadow-sm">
              <CateringSection />
            </TabsContent>
          </Tabs>
        </section>

        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}
