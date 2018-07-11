function block() {
  var o = Math.floor( Math.random() * 360 );
  var x = Math.floor( Math.random() * 256 );
  var y = Math.floor( Math.random() * 256 );
  var z = Math.floor( Math.random() * 256 );
  var x2 = Math.floor( Math.random() * 256 );
  var y2 = Math.floor( Math.random() * 256 );
  var z2 = Math.floor( Math.random() * 256 );
  console.log(o, x,y,z, x2,y2,z2);
  document.body.style.background = "linear-gradient(" + o + "deg, rgb("+ x2 + ", " + y2 + ", " + z2 + "), rgb("+ x + ", " + y + ", " + z + "))";
  document.getElementById("bgColor").style.background = "linear-gradient(" + o + "deg, rgb("+ x + ", " + y + ", " + z + "), rgb("+ x2 + ", " + y2 + ", " + z2 + "))";

  var i;
  var blocks = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
                "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
                "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
                "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
                "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
                "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
                "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
                "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8",
                "i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8",
                "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8",
                "k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8",
                "l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8",
                "m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8",
                "n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8",
                "o1", "o2", "o3", "o4", "o5", "o6", "o7", "o8",
                "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8",   ]
  for (i = 0; i < blocks.length; i++) {
    var roll = Math.floor(Math.random() * 2);
    if (roll == 1) {
      document.getElementsByClassName(blocks[i])[0].style.backgroundColor = "#00000000";
      document.getElementsByClassName(blocks[i])[1].style.backgroundColor = "#00000000";
    } else {
      document.getElementsByClassName(blocks[i])[0].style.backgroundColor = "#00000050";
      document.getElementsByClassName(blocks[i])[1].style.backgroundColor = "#00000050";
    }
  }
}

function save() {


}
