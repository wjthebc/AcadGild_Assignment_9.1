function createObject(name, height) {
  this.name = name;
  this.height = height;
  this.aboutYourself = function ()
  {
    return "I am " + this.name + ". I am " + this.height + " cm height";
  }
}

var bala = new createObject("Bala", "180");
console.log(bala.aboutYourself())