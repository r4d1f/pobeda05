import type { Metadata } from "next";
import { BookingSection } from "@/components/home/BookingSection";
import { ComfortSection } from "@/components/home/ComfortSection";
import { ContactsTeaser } from "@/components/home/ContactsTeaser";
import { HomeHero } from "@/components/home/HomeHero";
import { RouteSection } from "@/components/home/RouteSection";
import { SafetySection } from "@/components/home/SafetySection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BookingSection />
      <RouteSection />
      <ComfortSection />
      <SafetySection />
      <ContactsTeaser />
    </>
  );
}

