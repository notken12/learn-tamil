let chars = ["", ..."ாிீுூெேைொோௌ்"].flatMap((i, v) =>
  [..."கஙசஞடணதநபமயரலவழளறனஜஷஸஹ", ""].map((j, c) => [
    !j ? [..."அஆஇஈஉஊஎஏஐஒஓஔஃ"][v] : j + i,
    ...[["k","g"],["ng"],["ch","s"],["nj"],["t","d"],["n"],["th"],["n"],["p","b"],["m"],["y"],["r"],["l"],["v"],["l"],["l"],["r"],["n"],["j"],["sh"],["s"],["h"],[""]][c].map(
      (k) => (!j ? "" : k) + "a,aa,i,ee,u,oo,e,ae,ai,o,O,ou,".split(",")[v]
    ),
  ])
);
chars[298][1] = "hak";
chars[292].push("t");
export default chars;
