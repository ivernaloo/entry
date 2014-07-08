
var gal = Gallery.create("gal-1");

TEST.areEqual(typeof gal, "object", "Gallery should be an object");

TEST.areEqual(gal.el.id, "gal-1", "Gallery.el should be the one we specified");

TEST.areEqual(gal.idx, 0, "Gallery index should start at zero");

TEST.areEqual(gal.set(4), 4, "Gallery.set (with number) should return the same number passed in");

TEST.areEqual(gal.displayImage.getAttribute("src"), "images/yellow.jpg", "Gallery.set (with number) should change the displayed image");

TEST.areEqual(gal.set("red"), 3, "Gallery.set (with string) should return the corresponding number");

TEST.areEqual(gal.displayImage.getAttribute("src"), "images/red.jpg", "Gallery.set (with string) should change the displayed image");

TEST.areEqual(gal.next(), 4, "Gallery.next should advance images");

TEST.areEqual(gal.next(), 0, "Gallery.next should advance images (wraparound)");

TEST.areEqual(gal.prev(), 4, "Gallery.prev should advance images (wraparound)");

TEST.areEqual(gal.prev(), 3, "Gallery.next should advance images");

gal.set(0);

TEST.areEqual(gal.start(), true, "Gallery.start beings looping");

TEST.areEqual(gal.curr(), 0, "Gallery index should be 0");

setTimeout(function () {
    TEST.areEqual(gal.curr(), 1, "Gallery index should be 1"); 

    TEST.areEqual(gal.isGoing(), true, "Gallery should be looping");

    TEST.areEqual(gal.stop(), true, "Gallery.stop ends looping");

    setTimeout(function () {
        TEST.areNotEqual(gal.curr(), 2, "Gallery index should not be 2");

        TEST.areEqual(gal.isStopped(), true, "Gallery should be stopped");

    }, 3050);

}, 3050);
