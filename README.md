# Builders Map Africa

An open-source map of African tech hubs, builder communities, startup spaces, innovation labs, coworking spaces, accelerators, university labs, maker spaces and ecosystem media.

This MVP starts with Kenya and is built to be simple, fast and easy to maintain.

## Tech stack

- Astro for the static site
- Leaflet for the interactive map
- OpenStreetMap for map tiles
- GeoJSON files for data
- GitHub Issues / Pull Requests for community submissions

Astro is a strong fit because it is optimized for fast, content-driven websites and can output a static site. Leaflet is a strong MVP map choice because it is lightweight and works directly with GeoJSON layers.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Build

```bash
npm run build
npm run preview
```

## Data

Kenya data lives in:

```txt
public/data/kenya.geojson
```

Each entry is a GeoJSON Point feature.

Important: the included entries are starter/sample data. Before launching publicly, verify coordinates, operating status, and official links.

## Validate data

```bash
npm run validate:data
```

The validation script checks required fields, duplicate IDs, point geometry and coordinate validity.

## Contributing

There are two ways to contribute:

1. Open a GitHub issue using the location submission template.
2. Edit the relevant `.geojson` file and submit a pull request.

See:

- `docs/CONTRIBUTING.md`
- `docs/DATA_SCHEMA.md`
- `docs/ROADMAP.md`

## Repo name

```txt
builders-map-africa
```

## Tagline

```txt
An open-source map of Africa’s tech hubs, builder communities, startup spaces, and innovation ecosystems.
```
