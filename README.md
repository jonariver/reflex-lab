# REFLEX LAB — Test dein Nervensystem

**Reflex Lab** ist eine kleine Progressive Web App (PWA), die deine Reaktionsfähigkeit, dein Timing-Gefühl, dein Kurzzeitgedächtnis und deine motorische Präzision testet. Jeden Tag bekommen alle Spieler:innen dieselbe Challenge — am Ende gibt es einen "Laborbericht" mit Diagnose zum Teilen.

🔗 Live: [reflex-lab](https://github.com/jonariver/reflex-lab)

## Features

- **Vier Test-Module**
  - **Reaction** — schnellstmöglich auf ein Signal reagieren
  - **Timing** — eine bewegte Nadel im richtigen Moment in der Zielzone stoppen
  - **Memory** — sich ein Muster auf einem Grid merken und wiederholen
  - **Precision** — ein Ziel möglichst genau treffen
- **Tägliche Challenge** — für alle Spieler:innen an einem Tag identisch (deterministischer Seed), inklusive drei Schwierigkeitsstufen
- **Globales Tages-Leaderboard** — Highscores werden über Supabase gespeichert und angezeigt
- **Challenge-Links** — eigene Ergebnisse lassen sich als Link teilen, damit Freunde dieselbe Challenge nachspielen können
- **Trophäenschrank** (`trophaeen.html`) — Bestenliste und gesammelte Erfolge
- **Persönlicher Spitzname** — Begrüßung und Share-Card personalisieren sich anhand eines gespeicherten Nicknames
- **Installierbare PWA** — Manifest, App-Icons und Service Worker für Homescreen-Installation auf Mobilgeräten
- **Rechtliches** — Impressum (`impressum.html`) und Datenschutzerklärung (`datenschutz.html`)

## Projektstruktur

```
reflex-lab/
├── index.html          # Hauptanwendung (alle vier Test-Module, Challenge- & Leaderboard-Logik)
├── changelog.html       # Änderungsprotokoll
├── trophaeen.html       # Trophäenschrank / Bestenliste
├── impressum.html        # Impressum
├── datenschutz.html      # Datenschutzerklärung
├── styles.css            # Globale Styles
├── manifest.json          # PWA-Manifest
├── sw.js                  # Service Worker (bewusst ohne Caching, da die Tages-Challenge immer aktuell sein muss)
├── icons/                 # App-Icons in verschiedenen Auflösungen
└── fonts/                 # Eingebettete Schriften
```

## Tech-Stack

- Reines HTML, CSS und Vanilla JavaScript — keine Build-Tools oder Frameworks
- [Supabase](https://supabase.com/) als Backend für das globale Tages-Leaderboard
- PWA-Grundlagen (Manifest + Service Worker) für Installierbarkeit auf dem Homescreen

## Lokal ausführen

Da es sich um eine reine Client-Anwendung ohne Build-Schritt handelt, reicht ein einfacher lokaler Webserver:

```bash
# im Projektordner
python3 -m http.server 8000
# dann im Browser öffnen:
# http://localhost:8000/index.html
```

## Lizenz

Bisher ist keine Lizenz definiert.
