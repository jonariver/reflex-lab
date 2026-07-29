// Bewusst ohne Caching: die Tages-Challenge braucht immer den aktuellen Stand.
// Der leere fetch-Handler reicht aus, damit Browser die Seite als installierbare PWA erkennen.
self.addEventListener('fetch', () => {});
