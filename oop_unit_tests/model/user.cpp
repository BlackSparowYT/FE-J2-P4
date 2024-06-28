#include <gtest/gtest.h>

#include "model/user.h"
#include "model/artist.h"


TEST(model_user, create_and_login)
{
    model::user::create("noud","welkom123");

    EXPECT_FALSE(model::user::all()[0].login("False pwd"));
    EXPECT_TRUE(model::user::all()[0].login("welkom123"));

    EXPECT_TRUE(model::user::get_logged_in().get_name() == "noud");
}

TEST(model_user, create_playlist)
{
    model::user::all()[0].get_playlists().emplace_back("Playlist 1");
    model::user::all()[0].get_playlists().back().add(model::artist::all()[0].get_albums()[0][0]);


    EXPECT_STREQ(model::user::all()[0].get_playlists().back().get_title().c_str(), "Playlist 1");
    EXPECT_STREQ(model::user::all()[0].get_playlists().back()[0].get_song().c_str(), "Wesley's Theory");
}