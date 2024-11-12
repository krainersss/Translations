let time = document.getElementById('Time');
let HourOpt =['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten', 'Eleven','Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen','Seventeen','Eighteen','Nineteen', 'Twenty','Twenty-one', 'Twenty-two', 'Twenty-three', 'Twenty-four',]
let TimeOpt =['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten', 
            'Eleven','Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen','Seventeen','Eighteen','Nineteen', 'Twenty',
            'Twenty-one', 'Twenty-two', 'Twenty-three', 'Twenty-four','Twenty-five','Twenty-six','Twenty-seven','Twenty-eight','Twenty-nine','Thirty'
            ,'Thirty-one', 'Thirty-two', 'Thirty-three', 'Thirty-four', 'Thirty-five','Thirty-six','Thirty-seven','Thirty-eight','Thirty-nine','Forty',
            'Forty-one','Forty-two','Forty-three','Forty-four','Forty-five','Forty-six','Forty-seven','Forty-eight','Forty-nine', 'Fifty',
            'Fifty-one','Fifty-two','Fifty-three','Fifty-four','Fifty-five','Fifty-six','Fifty-seven', 'Fifty-eight','Fifty-nine']
function clearAllText(){
    time.value = ""
}

function entry(x){
    if(time.value.length<4){
        time.value +=x;
    }
}
function clearText(){
    time.value = time.value.slice(0,-1)
}



function Translation(){
    if (time.value.slice(0,2) > 24 || time.value.slice(2)>60 || time.value>2400){
        error.innerHTML='This translation is only for the 24 hour format'
        document.getElementById('wordhour').innerHTML = ""
        document.getElementById('wordmin').innerHTML = ""
        time.value = ""
    }
    else if(time.value==='0000'||time.value==='2400'){
        document.getElementById('wordhour').innerHTML='Midnight'
        error.style.display = "none"
        document.getElementById('wordmin').innerHTML = ""
    }
    else if(time.value.slice(0,2) == '00' && time.value.slice(2)<=59){
        let minute = time.value.slice(2);
        document.getElementById('wordmin').innerHTML = TimeOpt[parseInt(minute)-1];
        document.getElementById('wordhour').innerHTML ='';
        error.style.display = "none";
    }
    else if(time.value.slice(0,2) == "" &&  time.value.slice(2) == ""){
        error.style.display = "none"
        document.getElementById('wordmin').style.display = "none"
        document.getElementById('wordhour').style.display = "none"
    }
    else if(time.value.slice(0,2) <= 24 && time.value.slice(2) == ""){
        let hour = time.value.slice(0,2);
        document.getElementById('wordhour').innerHTML = HourOpt[parseInt(hour)-1]
        let minute = time.value.slice(2);
        if (time.value.slice(0,1) <= '1'){
            if (time.value.slice(0,1) <= '0'){
                document.getElementById('wordhour').innerHTML = "Zero"
            }
            document.getElementById('wordmin').innerHTML = "Hour"
        }else{
        document.getElementById('wordmin').innerHTML = "Hours"
        }
        error.style.display = "none"
    }
    else if(time.value.slice(0,2) <= 24 && time.value.slice(2)=='00'){
        let hour = time.value.slice(0,2);
        document.getElementById('wordhour').innerHTML = HourOpt[parseInt(hour)-1];
        document.getElementById('wordmin').innerHTML ='';
        error.style.display = "none";
    }
    else if(time.value.slice(0,2) <= 24 && time.value.slice(2)<=59){
        let hour = time.value.slice(0,2);
        document.getElementById('wordhour').innerHTML = HourOpt[parseInt(hour)-1]
    
        let minute = time.value.slice(2);
        document.getElementById('wordmin').innerHTML = TimeOpt[parseInt(minute)-1]
        error.style.display = "none"
    }
}
function copyText() { 
    var hour = document.getElementById('wordhour').innerText;  
    var mins = document.getElementById('wordmin').innerText; 
    
    var textToCopy = hour + " " + mins;  
    
    if (textToCopy.trim() === "") {  
        alert("There is no text to copy!");
        return;
    }
    
    navigator.clipboard.writeText(textToCopy).then(function() { 
        alert("Text copied to clipboard!");
    }).catch(function(err) { 
        alert("Error copying text: " + err);
    });
}