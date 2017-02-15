class Cow {
  
  constructor(name) {
    this.name = name;
  }

  moo() {
    return("Moo!");
  }

}

var cow = new Cow("Daisy");
console.log(cow.moo());
console.log(cow.name);