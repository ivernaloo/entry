function iconColor(elem,color) {

    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),r,g,b,avg;

    canvas.width = elem.offsetWidth;
    canvas.height = elem.offsetHeight;
    ctx.drawImage(elem,0,0);

    var map = ctx.getImageData(0,0,320,240),
        imdata = map.data;

    // convert image to grayscale
    for(var p = 0, len = imdata.length; p < len; p+=4) {
        r = imdata[p]
        g = imdata[p+1];
        b = imdata[p+2];
        avg = Math.floor((r+g+b)/3);
        imdata[p] = imdata[p+1] = imdata[p+2] = avg;
    }
    ctx.putImageData(map,0,0);
    // overlay filled rectangle using lighter composition
    ctx.globalCompositeOperation = "source-in";
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle=color;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // replace image source with canvas data
    elem.src = canvas.toDataURL();
    delete  canvas
}

