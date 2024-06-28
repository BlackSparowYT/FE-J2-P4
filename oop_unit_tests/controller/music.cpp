#include <gtest/gtest.h>

#include "controller/music.h"

TEST(controller_music, get_artists)
{
    controller::music controller;
    EXPECT_TRUE(controller.get_artists()[0].get_name() == "Kendrick Lamar");
    EXPECT_FALSE(controller.get_artists()[0].get_name() == "Hiatus Kaiyote");
}

TEST(controller_music, play)
{
    controller::music controller;
}

TEST(controller_music, pause)
{
    controller::music controller;
}

