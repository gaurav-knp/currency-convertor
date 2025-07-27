let selectopt = document.querySelectorAll("select");
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
        
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag =(element)=>{
    let flag = countryList[element.value];
    newSrc = `https://flagsapi.com/${flag}/flat/64.png`;
    element.parentElement.querySelector("img").src = newSrc;
};



