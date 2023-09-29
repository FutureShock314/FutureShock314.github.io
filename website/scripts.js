const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

let interval = null;

function detectmob() { 
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    console.log('is mobile')
    return true
  }
  else {
    console.log('is not mobile')
    document.querySelector("h1").onmouseover = event => {  
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");

        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
      
        iteration += 1 / 3;
      }, 30);
    }
  }
}

detectmob()

if(detectmob()){
  document.querySelector("h1").onclick = event => {  
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letters, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
      
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
    
      iteration += 1 / 3;
    }, 30);
  }
}


// Cool Panel


const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("But in a much more real sense, I have no idea what I'm doing.");