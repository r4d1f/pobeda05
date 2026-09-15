import { site } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.legalName,
    alternateName: site.name,
    description:
      "Регулярные междугородние автобусные перевозки по маршруту Махачкала — Москва.",
    url: site.url,
    email: site.email,
    telephone: site.phone,
    image: `${site.url}/hero.jpg`,
    taxID: site.legal.inn,
    address: {
      "@type": "PostalAddress",
      streetAddress: "5-я Котельная ул., д. 7 к. 3, кв. 26",
      addressLocality: "Астрахань",
      addressRegion: "Астраханская область",
      postalCode: "414051",
      addressCountry: "RU",
    },
    areaServed: [
      { "@type": "City", name: "Махачкала" },
      { "@type": "City", name: "Москва" },
      { "@type": "City", name: "Кизляр" },
      { "@type": "City", name: "Хасавюрт" },
      { "@type": "City", name: "Элиста" },
      { "@type": "City", name: "Волгоград" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      availableLanguage: ["ru"],
      areaServed: "RU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const busTrip = {
    "@context": "https://schema.org",
    "@type": "BusTrip",
    name: `Автобус ${site.route.title}`,
    description:
      "Прямой регулярный экспресс без пересадок. Туристический класс, Wi‑Fi, климат-контроль. Посадка и высадка в городах по маршруту.",
    url: `${site.url}/kupit-bilet`,
    departureBusStop: {
      "@type": "BusStop",
      name: "Махачкала",
    },
    arrivalBusStop: {
      "@type": "BusStop",
      name: "Москва",
    },
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      telephone: site.phone,
    },
    itinerary: site.route.forward.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "ru-RU",
    publisher: {
      "@type": "Organization",
      name: site.legalName,
    },
    potentialAction: {
      "@type": "BuyAction",
      target: `${site.url}/kupit-bilet`,
      name: "Купить билет на автобус Махачкала — Москва",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(busTrip) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
