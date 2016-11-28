// var mack = [];
// mack.push("Trest,");
// mack.push("which", "cracked");
// console.log(mack);
// console.log(mack.join(" "));
// console.log(mack.pop());
// console.log(mack);
// var day1 = {
//   squirrel: false,
//   events: ["work", "touch the tree", "pizza", "run", "TV"]
// };
// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf = false;
// console.log(day1.wolf);
// var description = {
//   work: "Went working",
//   "touch_tree": "Had touched the tree"
// };
// console.log(description.touch_tree);
// var anOject = {left: 1, right: 2};
// console.log(anOject.left);
// delete anOject.left;
// console.log(anOject.left);
// console.log("left" in anOject);
// console.log("right" in anOject);
// console.log(typeof [1, 2]);
// var object1 = {value: 10};
// var object2 = object1;
// var object3 = {value: object2};

// console.log(object1 == object2);
 //console.log(object1 == object3);
 //console.log(object3);

//  function phi(table) {
//   return (table[3] * table[0] - table[2] * table[1]) /
//      Math.sqrt((table[2] + table[3]) *
//                (table[0] + table[1]) *
//                (table[1] + table[3]) *
//               (table[0] + table[2]));
//
// }
// // console.log(phi([76, 9, 4, 1]));
// function hasEvent(event, entry) {
//   return entry.events.indexOf(event) != -1;
// }
// function tableFor(event, journal) {
//   var table = [0, 0, 0, 0];
//   for (var i = 0; i < journal.length; i++) {
//     var entry = journal[i], index = 0;
//     if (hasEvent(event, entry)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
// }
// return table;
// }
// console.log(tableFor("pizza", JOURNAL));
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touch_tree", -0.081);
//console.log("pizza" in map);
//console.log(map["touch_tree"]);
for (var event in map)
  console.log("Corellation for '" + event +
              "' equal " + map[event]);
