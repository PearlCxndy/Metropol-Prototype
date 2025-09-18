import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Create locations first
  const locations = await Promise.all([
    prisma.location.create({
      data: {
        location_name: "Central Park",
        address: "Central Park, New York, NY 10024, USA",
        latitude: 40.7831,
        longitude: -73.9712,
      },
    }),
    prisma.location.create({
      data: {
        location_name: "Times Square",
        address: "Times Square, New York, NY 10036, USA",
        latitude: 40.758,
        longitude: -73.9855,
      },
    }),
    prisma.location.create({
      data: {
        location_name: "Brooklyn Bridge Park",
        address: "Brooklyn Bridge Park, Brooklyn, NY 11201, USA",
        latitude: 40.701,
        longitude: -73.9976,
      },
    }),
  ]);

  console.log(
    "✅ Created locations:",
    locations.map((l) => l.location_name)
  );

  // Create events
  const events = await Promise.all([
    prisma.event.create({
      data: {
        event_title: "Summer Music Festival",
        event_description:
          "Join us for an amazing outdoor music festival featuring local artists and food vendors. Bring your friends and family for a day of fun in the sun!",
        event_time: new Date("2024-07-15T14:00:00Z"),
        event_type: "Music",
        event_location_id: locations[0].location_id, // Central Park
        event_url: "https://example.com/summer-music-festival",
      },
    }),
    prisma.event.create({
      data: {
        event_title: "NYC Tech Meetup",
        event_description:
          "Monthly meetup for developers, designers, and tech enthusiasts. This month we're discussing AI and machine learning trends.",
        event_time: new Date("2024-08-22T18:30:00Z"),
        event_type: "Technology",
        event_location_id: locations[1].location_id, // Times Square
        event_url: "https://example.com/nyc-tech-meetup",
      },
    }),
    prisma.event.create({
      data: {
        event_title: "Sunset Yoga Session",
        event_description:
          "Relax and unwind with a peaceful yoga session overlooking the Manhattan skyline. All levels welcome! Mats provided.",
        event_time: new Date("2024-06-28T19:00:00Z"),
        event_type: "Fitness",
        event_location_id: locations[2].location_id, // Brooklyn Bridge Park
        event_url: "https://example.com/sunset-yoga",
      },
    }),
    prisma.event.create({
      data: {
        event_title: "Food Truck Festival",
        event_description:
          "Taste amazing food from 20+ local food trucks. From tacos to ice cream, there's something for everyone!",
        event_time: new Date("2024-09-10T12:00:00Z"),
        event_type: "Food",
        event_location_id: locations[0].location_id, // Central Park
        event_url: "https://example.com/food-truck-festival",
      },
    }),
    prisma.event.create({
      data: {
        event_title: "New Year's Eve Celebration",
        event_description:
          "Ring in the new year with thousands of people in the heart of NYC! Live performances, fireworks, and unforgettable memories.",
        event_time: new Date("2024-12-31T22:00:00Z"),
        event_type: "Celebration",
        event_location_id: locations[1].location_id, // Times Square
        event_url: "https://example.com/nye-celebration",
      },
    }),
  ]);

  console.log(
    "✅ Created events:",
    events.map((e) => e.event_title)
  );

  // Add some event media for a few events
  const eventMedia = await Promise.all([
    prisma.event_Media.create({
      data: {
        event_id: events[0].event_id,
        media_file: "https://example.com/images/summer-festival-poster.jpg",
      },
    }),
    prisma.event_Media.create({
      data: {
        event_id: events[1].event_id,
        media_file: "https://example.com/images/tech-meetup-logo.png",
      },
    }),
    prisma.event_Media.create({
      data: {
        event_id: events[2].event_id,
        media_file: "https://example.com/images/yoga-sunset.jpg",
      },
    }),
  ]);

  console.log("✅ Created event media files:", eventMedia.length);

  console.log("🎉 Seed completed successfully!");
  console.log(`
📊 Summary:
- ${locations.length} locations created
- ${events.length} events created
- ${eventMedia.length} event media files created
  `);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
