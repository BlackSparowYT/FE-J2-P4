#include <gtest/gtest.h>

#include "model/album.h"

// Demonstrate some basic assertions.
TEST(model_album, constructor) {
    model::album album("Album1",{
        model::song("Artist1","Album1","Song1"),
        model::song("Artist1","Album1","Song2"),
        model::song("Artist1","Album1","Song3"),
        model::song("Artist1","Album1","Song4"),
        model::song("Artist1","Album1","Song5"),
        model::song("Artist1","Album1","Song6"),
    });

    EXPECT_TRUE(album[0].get_song() == "Song1");
    EXPECT_TRUE(album[1].get_song() == "Song2");
    EXPECT_TRUE(album[2].get_song() == "Song3");
    EXPECT_TRUE(album[3].get_song() == "Song4");
    EXPECT_TRUE(album[4].get_song() == "Song5");
    EXPECT_TRUE(album[5].get_song() == "Song6");
    
    EXPECT_TRUE(album.get_title() == "Album1");
    EXPECT_TRUE(album.get_size() == 6);
}

