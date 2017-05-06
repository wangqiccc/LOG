function poly(cobj,side=3,r=100,style="stroke"){
    cobj.save();
    cobj.rotate(Math.PI/2);
    var angle = Math.PI / side;
    var x = Math.cos(angle) * r;
    var y = Math.sin(angle) * r;
    cobj.beginPath();
    cobj.moveTo(x, y);
    for (var i = 0; i < side; i++) {
        cobj.lineTo(x, -y);
        cobj.rotate(-angle * 2);
    }
    cobj[style]();
    cobj.restore();
}
