export const site = {
  name: "Победа",
  legalName: "ООО «Победа»",
  tagline: "Автобусные перевозки пассажиров",
  url: "https://pobeda05.ru",
  phone: "+7 (937) 134-50-50",
  phoneHref: "tel:+79371345050",
  email: "disp_ast30@mail.ru",
  emailHref: "mailto:disp_ast30@mail.ru",
  location: "Россия, г. Астрахань",
  hours: "круглосуточно",
  legal: {
    inn: "3025037551",
    ogrn: "1203000002897",
    legalAddress:
      "414051, Астраханская область, г. Астрахань, 5-я Котельная ул., д. 7 к. 3, кв. 26",
    privacyEmail: "disp_ast30@mail.ru",
  },
  route: {
    title: "Махачкала — Москва",
    duration: "≈ 30 часов",
    forward: ["Махачкала", "Кизляр", "Элиста", "Волгоград", "Москва"],
    reverse: ["Москва", "Элиста", "Кизляр", "Хасавюрт", "Махачкала"],
  },
  biletdo: {
    agency:
      "fsIJdako5sdfsfsc4d2b79e341c5c4ac17408bb8dc7b285fs45Jdslfn0due6fds72542768dba99cf208d5503469f90fe4",
    titleEncoded:
      "0JrQo9Cf0JjQotCsINCR0JjQm9CV0KLQqyDQndCQINCQ0JLQotCe0JHQo9Ch",
    color: "E8A317",
    disclaimerUrl: "https://bilet.do/disclaimer",
    policyUrl: "https://bilet.do/policy",
  },
} as const;

export const passengerLinks = [
  { href: "/pasazhiram/dokumenty", label: "Проездные документы" },
  { href: "/pasazhiram/deti", label: "Путешествия с детьми" },
  { href: "/pasazhiram/bagazh", label: "Багаж и животные" },
  { href: "/pasazhiram/vozvrat", label: "Возврат билета" },
] as const;

export const sitePages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/kupit-bilet", changeFrequency: "daily" as const, priority: 0.9 },
  { path: "/kontakty", changeFrequency: "monthly" as const, priority: 0.7 },
  {
    path: "/pasazhiram/dokumenty",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/pasazhiram/deti",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/pasazhiram/bagazh",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/pasazhiram/vozvrat",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
] as const;
