let user = document.getElementById("userInp")
let result = document.getElementById("result")

function Uppercase(){
    var upcase = user.value;
    result.value = upcase.toUpperCase()
}
function Lowercase(){
    var lowcase = user.value;
    result.value = lowcase.toLowerCase()
}
function Capitalize() {
    var text = user.value;
    var words = text.split(" "); 
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    result.value = words.join(" "); 
}
function Alternate() {
    var text = user.value;
    var altresult = ""; 
    for (var i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            altresult += text[i].toUpperCase();
        } else {
            altresult += text[i].toLowerCase();
        }
    }
    result.value = altresult;
}
function Inverse() {
    var text = user.value;
    var invresult = "";
    for (var i = 0;i < text.length; i++){
        var letter = text[i]
        if (letter === letter.toUpperCase()){
            invresult += letter.toLowerCase()
        }if (letter === letter.toLowerCase()){
            invresult += letter.toUpperCase()
        }
    }
    result.value = invresult
}

function copyText() {
    var textToCopy = result.value;
    if (textToCopy === "") {
        alert("There is no text to copy!");
        return;
    }
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Text copied to clipboard!");
    }).catch(function(err) {
        alert("Error copying text: " + err);
    });
}


function cc(){
    user.value = ""
    result.value = ""
}

function autoResize(textarea) {
    textarea.style.height = 'auto';  
    textarea.style.height = (textarea.scrollHeight) + 'px'; 
}
