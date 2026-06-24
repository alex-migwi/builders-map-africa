import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.join(process.cwd(), 'public', 'data');
const requiredProperties = [
  'id', 'name', 'category', 'city', 'country', 'description',
  'website', 'tags', 'status', 'last_verified_at', 'submitted_by'
];

const files = fs.readdirSync(dataDir).filter((file) => file.endsWith('.geojson'));
let errors = [];
let total = 0;
const ids = new Set();

for (const file of files) {
  const fullPath = path.join(dataDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

  if (data.type !== 'FeatureCollection') {
    errors.push(`${file}: root type must be FeatureCollection`);
    continue;
  }

  for (const [index, feature] of data.features.entries()) {
    total += 1;
    const prefix = `${file} feature[${index}]`;

    if (feature.type !== 'Feature') errors.push(`${prefix}: type must be Feature`);
    if (!feature.properties) errors.push(`${prefix}: missing properties`);
    if (!feature.geometry) errors.push(`${prefix}: missing geometry`);

    for (const prop of requiredProperties) {
      if (feature.properties?.[prop] === undefined || feature.properties?.[prop] === '') {
        errors.push(`${prefix}: missing properties.${prop}`);
      }
    }

    if (feature.properties?.id) {
      if (ids.has(feature.properties.id)) errors.push(`${prefix}: duplicate id ${feature.properties.id}`);
      ids.add(feature.properties.id);
    }

    if (!Array.isArray(feature.properties?.tags)) errors.push(`${prefix}: properties.tags must be an array`);
    if (feature.geometry?.type !== 'Point') errors.push(`${prefix}: geometry.type must be Point`);

    const coordinates = feature.geometry?.coordinates;
    if (!Array.isArray(coordinates) || coordinates.length !== 2) {
      errors.push(`${prefix}: geometry.coordinates must be [longitude, latitude]`);
    } else {
      const [lng, lat] = coordinates;
      if (typeof lng !== 'number' || lng < -180 || lng > 180) errors.push(`${prefix}: invalid longitude`);
      if (typeof lat !== 'number' || lat < -90 || lat > 90) errors.push(`${prefix}: invalid latitude`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Data validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Data validation passed: ${total} location(s) across ${files.length} GeoJSON file(s).`);
