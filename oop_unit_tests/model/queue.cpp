#include <gtest/gtest.h>

#include "model/queue.h"

TEST(model_queue, add) {

    model::queue q;

    q.add(model::song("artist1", "album1", "song1"));
    q.add(model::song("artist1", "album1", "song2"));
    q.add(model::song("artist1", "album1", "song3"));
    q.add(model::song("artist1", "album1", "song4"));

    q.next();
    
    EXPECT_FALSE(q.get_current().get_song() == "song3");
    EXPECT_TRUE(q.get_current().get_song() == "song2");
}

TEST(model_queue, remove) {

    model::queue q;

    q.add(model::song("artist1", "album1", "song1"));
    q.add(model::song("artist1", "album1", "song2"));
    q.add(model::song("artist1", "album1", "song3"));
    q.add(model::song("artist1", "album1", "song4"));

    q.next();
    q.remove(model::song("artist1", "album1", "song2"));
    
    EXPECT_FALSE(q.get_current().get_song() == "song2");
    EXPECT_TRUE(q.get_current().get_song() == "song3");
}

TEST(model_queue, clear) {
    
    model::queue q;

    q.add(model::song("artist1", "album1", "song1"));
    q.add(model::song("artist1", "album1", "song2"));
    q.add(model::song("artist1", "album1", "song3"));
    q.add(model::song("artist1", "album1", "song4"));

    q.clear();
    
    EXPECT_TRUE(q.get_size() == 0);
}

TEST(model_queue, next) {
    
    model::queue q;

    q.add(model::song("artist1", "album1", "song1"));
    q.add(model::song("artist1", "album1", "song2"));
    q.add(model::song("artist1", "album1", "song3"));
    q.add(model::song("artist1", "album1", "song4"));

    q.next();
    
    EXPECT_TRUE(q.get_current().get_song() == "song2");
}

TEST(model_queue, previous) {
    
    model::queue q;

    q.add(model::song("artist1", "album1", "song1"));
    q.add(model::song("artist1", "album1", "song2"));
    q.add(model::song("artist1", "album1", "song3"));
    q.add(model::song("artist1", "album1", "song4"));

    q.next();
    q.next();
    q.previous();
    
    EXPECT_TRUE(q.get_current().get_song() == "song2");
}