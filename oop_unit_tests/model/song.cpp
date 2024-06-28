#include <gtest/gtest.h>

#include "model/song.h"

TEST(model_song, constructor) {
    model::song s("Artist1","Album1","Song1");

    EXPECT_TRUE(s.get_artist() == "Artist1");
    EXPECT_TRUE(s.get_album() == "Album1");
    EXPECT_TRUE(s.get_song() == "Song1");
}

TEST(model_song, get_file_path) {
    model::song s("Artist1","Album1","Song1");

    EXPECT_TRUE(s.get_file_path() == "Artist1/Album1/Song1.wav");
}