let totalPrice = 0;
let bdt = 550;
let discountPrice = 0;
let totalClicks = 0;
const maxClicks = 4;

// function scrollToSection(sectionId){
//     let section = document.getElementById(sectionId);

//     if(section){
//         scrollToSection.scrollToSection({behavior: 'smooth'});
//     }
// }

const seats = document.querySelectorAll(".seat");

function changeColor(event){
    if(!event.disabled){
        event.style.backgroundColor = "#1DD100";
        event.disabled = true;
        totalClicks++;

        if(totalClicks === 0){
            const next = document.getElementById("next");
            next.classList.add("hidden");
        }
        if(totalClicks >= maxClicks){
            disableAllSeats();
            
        }
    }

    
}

function disableAllSeats() {
    for (let index = 0; index < seats.length; index++) {
        const seat = seats[index];
        seat.removeEventListener("click", changeColor); // Remove the click event listener
        seat.disabled = true; // Disable the button
    }
}

for(let index = 0; index < seats.length; index++){
    const seat = seats[index];

    seat.addEventListener("click", function () {
        changeColor(this);
    });
   
    
    seat.addEventListener("click", function(){
   
            const currentScoreElement = document.getElementById("curret-score");
            const currentScoreText = currentScoreElement.innerText;
            const currentScore = parseInt(currentScoreText);
            console.log(currentScoreText);
    
            const newScore = currentScore + 1;
    
            currentScoreElement.innerText = newScore;
    
            const currentLifeElement = document.getElementById("current-life");
            const currentLifeText = currentLifeElement.innerText;
            const currntLife = parseInt(currentLifeText);
    
            const newLife = currntLife - 1;
    
            currentLifeElement.innerText = newLife;

            
            const title = seat.querySelector("p").innerText;
    
            const clas = seat.querySelector("h6").innerText;
    
            const price = seat.querySelector("span").innerText;
    
            const titleContainer = document.getElementById("title-container");
            
            const tr = document.createElement("tr");
    
            const p = document.createElement("td");
            p.innerText = title;
            titleContainer.appendChild(p);
            
    
            const h6 = document.createElement("td");
            h6.innerText = clas;
            titleContainer.appendChild(h6);
    
            const span = document.createElement("td");
            span.innerText = price;
            titleContainer.appendChild(span);

            tr.append(p);
            tr.append(h6);
            tr.append(span);

            titleContainer.append(tr);
            
            totalPrice += bdt;
            discountPrice += bdt;
            document.getElementById("totalPrice").innerText = totalPrice;
            document.getElementById("grandTotal").innerText = discountPrice;

            
       
    });

    
}



const btn = document.getElementById("apply-button");
    
    function hide(){
    const hide = document.getElementById("field");
    hide.classList.add("hidden");
}

btn.addEventListener("click", function(){

   const couponElement = document.getElementById("input-field").value;
   console.log(couponElement);

    if(totalPrice > 1600){
        if(couponElement === "NEW15" || couponElement === "Couple 20"){
            
            
            hide();
            
            const discountElement = document.getElementById("discountPrice");
            const discountPrice = totalPrice * 0.2;
            discountElement.innerText = discountPrice;

            discountElement.classList.add("hidden");

            const grandTotal = document.getElementById("grandTotal");
            grandTotal.innerText = totalPrice - discountPrice;
            document.getElementById("input-field").value = "";

        }
        
        else{
            alert("Invalid Coupon Code");
            document.getElementById("input-field").value = "";
            
        }
    }

    else{
        alert("You should be buy 4 tickects then you serve this");
        document.getElementById("input-field").value = "";
    }

    
});

const number = document.getElementById("number");
const bttn = document.getElementById("disabled");

number.addEventListener("keyup", function(e){
    const value = e.currentTarget.value;

    if(value === ""){
        
        bttn.disabled = true;
    }

    else{
        if(totalClicks === 0){
            bttn.disabled = true; 
        }
        else{
            bttn.disabled = false;
        }
        
    }

    
});

function next(){

    
    const next = document.getElementById("next");
    next.classList.add("hidden");

    const popUp = document.getElementById("popUp");
    popUp.classList.remove("hidden"); 
}












