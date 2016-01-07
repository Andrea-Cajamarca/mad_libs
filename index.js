function generateMadlib() {
  
  // This is the starting story
  var story = "From the start, my vacation has been ADJECTIVE_1. I was VERB away from NOUN. Fortunately, I ACTION and it went away in a cloud of NOUN_2";
  

  var inputValue = document.getElementById("adjective_1").value;
  story = story.replace("ADJECTIVE_1", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  inputValue = document.getElementById("action").value;
  story = story.replace("ACTION", inputValue);
  
  inputValue = document.getElementById("noun").value;
  story = story.replace("NOUN", inputValue);
  
   inputValue = document.getElementById("noun_2").value;
  story = story.replace("NOUN_2", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}