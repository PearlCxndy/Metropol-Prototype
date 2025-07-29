-- CreateTable
CREATE TABLE "Event" (
    "event_id" SERIAL NOT NULL,
    "user_uploaded_id" INTEGER,
    "event_title" TEXT NOT NULL,
    "event_description" TEXT,
    "event_time" TIMESTAMPTZ(6) NOT NULL,
    "event_type" TEXT,
    "event_location_id" INTEGER,
    "event_url" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "Event_Media" (
    "media_id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "media_file" TEXT,

    CONSTRAINT "Event_Media_pkey" PRIMARY KEY ("media_id")
);

-- CreateTable
CREATE TABLE "Followers" (
    "user_following_id" INTEGER NOT NULL,
    "user_follower_id" INTEGER NOT NULL,

    CONSTRAINT "Followers_pkey" PRIMARY KEY ("user_following_id","user_follower_id")
);

-- CreateTable
CREATE TABLE "Location" (
    "location_id" SERIAL NOT NULL,
    "location_name" TEXT,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "Saves" (
    "user_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "Saves_pkey" PRIMARY KEY ("user_id","event_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "date_created" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_bio" TEXT,
    "password_hash" VARCHAR,
    "email" VARCHAR,
    "salt" VARCHAR,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "fk_event_location" FOREIGN KEY ("event_location_id") REFERENCES "Location"("location_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "fk_event_user" FOREIGN KEY ("user_uploaded_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Event_Media" ADD CONSTRAINT "fk_media_event" FOREIGN KEY ("event_id") REFERENCES "Event"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "fk_follower" FOREIGN KEY ("user_follower_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "fk_following" FOREIGN KEY ("user_following_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Saves" ADD CONSTRAINT "fk_saves_event" FOREIGN KEY ("event_id") REFERENCES "Event"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Saves" ADD CONSTRAINT "fk_saves_user" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

