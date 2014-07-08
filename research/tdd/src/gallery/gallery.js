// gallery.js

var Gallery = (function () {
    var Gallery = {},

        galleryPrototype = {
            set: function (i) {
                if (typeof i === 'string') {
                    i = this.ids.indexOf(i);
                }
                if (i > -1 && i < this.ids.length) {
                    this.displayImage.setAttribute("src", "images/" + this.ids[i] + ".jpg" );
                    return (this.idx = i);
                }
                return -1;
            },
            next: function () {
                if (this.idx === this.imgs.length -1) {
                    return this.set(0);
                }
                return this.set(this.idx + 1);
            },
            prev: function () {
                if (this.idx === 0) {
                    return this.set(this.imgs.length -1);
                }
                return this.set(this.idx - 1);
            },
            start: function (time) {
                var thiz = this;
                time = time || 3000; 
                this.interval = setInterval(function () {
                    thiz.next();
                }, time);
                
                //this.interval = setInterval(this.next.bind(this), time);
                
                this.going = true;
                return true;
            },
            stop: function () {
                clearInterval(this.interval);
                this.going = false;
                return true;
            },
            curr: function () {
                return this.idx;
            },
            isGoing: function () {
                return this.going;
            },
            isStopped: function () {
                return !this.going;
            }
        };


    Gallery.create = function (id) {
        var gal = Object.create(galleryPrototype), ul, i = 0, len;

        gal.el = document.getElementById(id);
        ul     = gal.el.querySelector("ul");

        gal.imgs = gal.el.querySelectorAll("ul li img");
        gal.displayImage = gal.el.querySelector("img");
        gal.idx = 0;
        gal.going = false;
        gal.ids = [];

        len = gal.imgs.length;

        for (; i < len; i++ ) {
            gal.ids[i] = gal.imgs[i].getAttribute("src").split("-thumb")[0].split("/")[1];
        }

        ul.addEventListener("click", function (e) {
            var i = [].indexOf.call(gal.imgs, e.target);
            if (i > -1) {
                gal.set(i);
            }
        }, false);

        // gal.set(0);

        return gal;
    };

    return Gallery;
}());
