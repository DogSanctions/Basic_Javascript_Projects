function my_Dictionary() {
      var Animal = {
        Species:"Cow",
        Color:"Black",
        Breed:"Longhorn",
        Age:3,
        Sound:"MOOOO!"
      };
      delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
  }