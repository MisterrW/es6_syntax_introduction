var Cow = function(name){
  this.name = name;
}

Cow.prototype = {
  moo: function(){
    return "moo";
  }
}

var cow = new Cow("Daisy");
console.log(cow.moo());
console.log(cow.name);