# Data Schema

Data is stored as GeoJSON FeatureCollections.

## Location file path

```txt
public/data/kenya.geojson
```

## Feature format

```json
{
  "type": "Feature",
  "properties": {
    "id": "unique-slug",
    "name": "Location name",
    "category": "Tech Hub",
    "city": "Nairobi",
    "country": "Kenya",
    "description": "Short useful description.",
    "website": "https://example.com",
    "tags": ["startups", "community"],
    "status": "verified",
    "last_verified_at": "2026-06-20",
    "submitted_by": "Contributor Name"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [36.8219, -1.2921]
  }
}
```

## Important coordinate rule

GeoJSON coordinates are always:

```txt
[longitude, latitude]
```

Not latitude first.

## Category list

See:

```txt
public/data/categories.json
```
