# Contributing

Thanks for helping map Africa's builder ecosystem.

## What can be added?

- Tech hubs
- Startup communities
- Coworking spaces
- Accelerators
- Incubators
- University labs
- Makerspaces
- Open source communities
- Developer communities
- Design and product communities
- Investor or angel networks
- Recurring events or meetups
- Training programs
- Media, podcasts or newsletters serving builders

## Submission checklist

Every entry should include:

- Name
- Category
- City and country
- Longitude and latitude
- Website or official social link
- Short description
- Tags
- Status
- Last verification date
- Submitter name or handle

## Verification status

Use one of these:

- `verified` — confirmed through official source or maintainer review
- `unverified` — plausible but needs review
- `sample` — seed data included for MVP demonstration
- `sample-unverified` — example data that must be checked before public launch
- `closed` — no longer operating
- `duplicate` — duplicate entry awaiting removal or merge

## Pull request workflow

1. Fork the repo.
2. Edit the relevant GeoJSON file under `public/data`.
3. Run `npm run validate:data`.
4. Open a pull request with the source used for verification.

## Data quality rules

- Use official websites where possible.
- Avoid personal guesses for coordinates.
- Prefer public, long-lived links over private WhatsApp group links.
- Do not add private homes, private phone numbers or sensitive personal data.
- Mark uncertain data as `unverified`.
