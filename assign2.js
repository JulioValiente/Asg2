

//Colton Wolfe helped with how to use the built in sort function
	
const api = 'https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php';


const plays = JSON.parse(cont);

//Only work with the page when the dom has been loaded
document.addEventListener("DOMContentLoaded", function(){

  //creates unorganized play list
  createPlayList();


  //select the name rad button and sorting the playlist and updating it
const nRad = document.getElementById('nameSort');
nRad.addEventListener("click", function sortbyName(){

 

plays.sort((a,b)=>{
  if(a.title < b.title){
    return -1;

  }
  if(a.title > b.title){

  return 1;

  }

  return 0;

});
  
createUpdatedList();
 


});
//selecting the date rad button and sorting by date and updating the play list
const dRad = document.getElementById('dateSort');
dRad.addEventListener("click", () => {

  plays.sort((a,b)=>{
    if(a.likelyDate < b.likelyDate){
      return -1;
  
    }
    if(a.likelyDate > b.likelyDate){
  
    return 1;
  
    }
  
    return 0;
  
  });
    
  createUpdatedList();

 
 
  


});




});
//this function makes the list of plays clickable and displays the proper info
function clickableList(){

  document.querySelectorAll("#playList ul li").forEach(el => {
    console.log('selected');
    el.addEventListener("click", function displayInfo(){
      const id = el.getAttribute('data-id');
    
      for(let p of plays){
        if(id === p.id){
        const container = document.querySelector('#playHere');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let a1 = document.createElement('a');
        let a2 = document.createElement('a');
        let a3 = document.createElement('a');
        let par = document.createElement('p');
        let h3Text = document.createTextNode(`${p.likelyDate}`);
        let textHeader = document.createTextNode(`${p.title}`);
        let h4Text = document.createTextNode(`${p.genre}`);
        let a1Text = document.createTextNode("Wiki Link");
        let a2Text = document.createTextNode("Gutenberg Link");
        let a3Text = document.createTextNode("Shakespeare.org link")
        h2.appendChild(textHeader);
        h3.appendChild(h3Text);
        h4.appendChild(h4Text);
        a1.appendChild(a1Text);
        a2.appendChild(a2Text);
        a3.appendChild(a3Text);
        a2.href = `${p.gutenberg}`;
        a1.href = `${p.wiki}`;
        a3.href = `${p.shakespeareOrg}`;
        container.innerHTML = h2.outerHTML + h3.outerHTML + h4.outerHTML 
        + a1.outerHTML+par.outerHTML + a2.outerHTML +par.outerHTML + a3.outerHTML;
        console.log('GOT HERE');
        }
      }
    
    });
    
    });

}

//this function is used to create the sorted play list by deleting the old playlist and creating a new sorted one
function createUpdatedList(){
  const section = document.querySelector("#playList");
  const ul = document.querySelector("#playList ul");
  const newList = document.createElement("ul");
  section.removeChild(ul);

  for(let p of plays){
    const li = document.createElement("li");
    li.setAttribute("data-id", p.id);
    li.textContent = p.title;
  
    newList.appendChild(li);
  
  
  
  }
  section.appendChild(newList);
  clickableList();
   


}

//creates initial unorganized list
function createPlayList(){
  const select = document.querySelector("#playList ul");



  for(let p of plays){
    var li = document.createElement("li");
    li.setAttribute('data-id',p.id);
    li.textContent = p.title;
    select.appendChild(li);
    


  }
  clickableList();
}



/*
 To get a specific play, add play's id property (in plays.json) via query string, 
   e.g., url = url + '?name=hamlet';
 
 https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=hamlet
 https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=jcaesar
 https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=macbeth
 
 NOTE: Only a few plays have text available. If the filename property of the play is empty, 
 then there is no play text available.
*/
 

/* note: you may get a CORS error if you test this locally (i.e., directly from a
   local file). To work correctly, this needs to be tested on a local web server.  
   Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
   use built-in Live Preview.
*/
