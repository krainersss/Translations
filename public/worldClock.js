let continent = document.getElementById("continent")
let Asia = document.getElementById("asia")
let Europe = document.getElementById("europe")
let America = document.getElementById("america")
let Africa = document.getElementById("africa")
let Antartica = document.getElementById("antartica")

let city = document.getElementById("city")
let display = document.getElementById("display")

let capital = document.getElementById("capital")

function Capitalize() {
    var text = capital.value;
    text = text
        .split(" ")
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    text = text.replace(/ /g, "_");
    text = text.replace(/_./g, (match) => match.toUpperCase());
    capital.value = text;
}


function Clock(){
    var time= new Date()
    var options={timeZone:'America/New_York', hour:'2-digit', minute:'2-digit',second:'2-digit'}
    if (continent.value === "Europe"){
        options.timeZone='Europe/'+ capital.value;
        var euroTime = time.toLocaleTimeString('en-US', options);
        city.innerHTML = capital.value
        display.innerHTML = `${euroTime}`
    }
    if (continent.value === "Asia"){
        options.timeZone='Asia/'+ capital.value;
        var asiaTime = time.toLocaleTimeString('en-US', options);
        city.innerHTML = capital.value
        display.innerHTML = `${asiaTime}`
    }
    if (continent.value === "Africa"){
        options.timeZone='Africa/'+ capital.value;
        var afrTime = time.toLocaleTimeString('en-US', options);
        city.innerHTML = capital.value
        display.innerHTML = `${afrTime}`
    }
    if (continent.value === "America"){
        options.timeZone='America/'+ capital.value;
        var ameTime = time.toLocaleTimeString('en-US', options);
        city.innerHTML = capital.value.replace(/_/g, " ");
        display.innerHTML = `${ameTime}`
    }
}