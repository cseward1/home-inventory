// Example objects
const vintageInkwell = {
    "name": "Vintage Ink Well",
    "type": "crafts",
    "location": "Writing desk",
    "description": "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
  const writingDesk = {
    "name": "Shaker Writing Desk",
    "type": "furniture",
    "location": "Bedroom",
    "description": "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
  }

  const appleLaptop = {
    "name": "mac computer",
    "type": "electronics",
    "location": "StudyRoom",
    "description": "My Macbook is what allows me to do my work."
  }



  //create three arrays 
  
let crafts = []
let furniture = []
let electronics = []

const writingDeskString=JSON.stringify (writingDesk)
localStorage.setItem("writingDesk", writingDeskString)
