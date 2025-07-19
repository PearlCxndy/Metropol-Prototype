-- CreateTable
CREATE TABLE "event" (
    "event_id" SERIAL NOT NULL,
    "user_uploaded_id" INTEGER NOT NULL,
    "event_title" TEXT NOT NULL,
    "event_description" TEXT,
    "event_time" TIMESTAMPTZ(6) NOT NULL,
    "event_location_id" INTEGER,
    "event_url" TEXT,

    CONSTRAINT "event_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "event_media" (
    "media_id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "media_file" TEXT NOT NULL,

    CONSTRAINT "event_media_pkey" PRIMARY KEY ("media_id")
);

-- CreateTable
CREATE TABLE "followers" (
    "user_following_id" INTEGER NOT NULL,
    "user_follower_id" INTEGER NOT NULL,

    CONSTRAINT "followers_pkey" PRIMARY KEY ("user_following_id","user_follower_id")
);

-- CreateTable
CREATE TABLE "location" (
    "location_id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "saves" (
    "user_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "saves_pkey" PRIMARY KEY ("user_id","event_id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "date_created" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_bio" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "fk_event_location" FOREIGN KEY ("event_location_id") REFERENCES "location"("location_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "fk_event_user" FOREIGN KEY ("user_uploaded_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "event_media" ADD CONSTRAINT "fk_media_event" FOREIGN KEY ("event_id") REFERENCES "event"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "fk_follower" FOREIGN KEY ("user_follower_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "fk_following" FOREIGN KEY ("user_following_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "saves" ADD CONSTRAINT "fk_saves_event" FOREIGN KEY ("event_id") REFERENCES "event"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "saves" ADD CONSTRAINT "fk_saves_user" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

