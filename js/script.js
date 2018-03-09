var maleName = ['Adam', 'Marek', 'Jan', 'Zdzisław', 'Kazimierz'];
var femaleName = ['Karolina', 'Anna', 'Maria', 'Katarzyna', 'Małgorzata'];
var allNames = maleName.concat(femaleName);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
} else {
  console.log("empty array");
}
console.log(allNames);
