let selectopt = document.querySelectorAll("select");
let btn = document.querySelector("button");
for(select of selectopt){
    for(code in countryList){
        let opt =document.createElement("option");
        opt.value = code;
        opt.innerHTML = code;
        if(select.name === "from" && code === "USD"){
            opt.selected = "selected";
        }else if(select.name === "to" && code === "INR"){
            opt.selected = "selected";
    }
        select.appendChild(opt);
    } 
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag =(element)=>{
    let flag = countryList[element.value];
    newSrc = `https://flagsapi.com/${flag}/flat/64.png`;
    element.parentElement.querySelector("img").src = newSrc;
};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("input").value;
    if(amount === "" || isNaN(amount) || amount <= 0){
       amount = 1;
       amount.value = 1;
    }

});


    