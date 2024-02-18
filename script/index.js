// console.log("I love you");
let totalPrice = 0;
let bdt = 550;

const seats = document.querySelectorAll(".seat");
// console.log(seat);

for(let index = 0; index < seats.length; index++){
    const seat = seats[index];
    // console.log(seat);

    seat.addEventListener("click", function(){
        // console.log("I love you");
        const title = seat.querySelector("p").innerText;

        const clas = seat.querySelector("h6").innerText;

        const price = seat.querySelector("span").innerText;

        const titleContainer = document.getElementById("title-container");
        // console.log(titleContainer);

        const p = document.createElement("li");
        p.innerText = title;
        titleContainer.appendChild(p);

        const h6 = document.createElement("li");
        h6.innerText = clas;
        titleContainer.appendChild(h6);

        const span = document.createElement("li");
        span.innerText = price;
        titleContainer.appendChild(span);
        
        // p.innerText = clas;
        // titleContainer.appendChild(p);
        // p.innerText = price;
        // titleContainer.appendChild(p);
        // console.log(title, clas, price);
        
        totalPrice += bdt;
        document.getElementById("totalPrice").innerText = totalPrice;
        

    });

    
}



const btn = document.getElementById("apply-button");
btn.addEventListener("click", function(){

   const couponElement = document.getElementById("input-field");
   console.log(couponElement.value);
    

});