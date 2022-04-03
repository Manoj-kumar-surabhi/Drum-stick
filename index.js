// document.querySelectorAll("button")[1],addEventListener("click", function(){
//     // // alert("Mother=father");
//     // var audio = new  Audio("./sounds/tom-1.mp3");
//     // audio.play(); 
   
//     this.style.color = "white";
    
// })


// function onclicker(){
//     alert("hey you clicked me");
// }

// document.querySelector("button").addEventListener("click", onclicker );

// var lengthofobjects = document.querySelectorAll("button").length;

// for(let i=0;i<lengthofobjects;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         this.style.color="White";
//     })
// }

// function add(num1, num2){
//   return   num1 + num2;
// }

// function sub(num1, num2){
//     console.log(num1+num2); 
// }
// function mul(num1, num2){
//     return (num1*num2);
// }
// function div(num1, num2){
//     return num1/num2;
// }

// function calculator(num1, num2, func){
//     return func(num1, num2);
// }

// console.log(calculator(10, 20, add));

// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//         debugger;
//     return operator(num1, num2);
//     }

//     console.log(calculator(10,20,multiply));


// let engineer1 = {
//     name: "Manoj",
//     age: 20,
//     gender: "Male",
//     qualification:"B-Tech"
// }

// function Engineer(name, age, qualification, languages){
//     this.name= name;
//     this.age=age;
//     this.qualification=qualification;
//     this.languages=languages; 
// }

// var engineer1= new Engineer("Manon", 20, "BTech", ["Hinndhi", "Telugu","Englich"]);
// console.log(engineer1);

var lengthofobjects = document.querySelectorAll("button").length; 

for(let i=0;i<lengthofobjects;i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var objecttype = this.innerHTML;
        soundmaker(objecttype); 
        buttonAnimation(objecttype); 
    })
   
}

document.addEventListener("keypress", function(data){
    soundmaker(data.key);
    buttonAnimation(data.key);
})

function soundmaker(event){
    switch(event){
        case "w":
            var w = new Audio("./sounds/tom-3.mp3");
            w.play()
            break;
        case "a":
            var a = new Audio("./sounds/kick-bass.mp3");
            a.play()
            break;
        case "s":
            var  s = new Audio("./sounds/snare.mp3");
            s.play()
            break;
        case "d":
            var d = new Audio("./sounds/tom-1.mp3");
            d.play()
            break;
        case "j":
            var j = new Audio("./sounds/tom-2.mp3");
            j.play()
            break;
        case "k":
            var k = new Audio("./sounds/crash.mp3");
            k.play()
            break;
        case "l":
            var l = new Audio("./sounds/tom-4.mp3")
            l.play()
            break;                       
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  