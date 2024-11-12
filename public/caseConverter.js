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

function SentenceCase() {
    var text = user.value;
    // Split text by periods followed by space to handle multiple sentences
    var sentences = text.split('. ');
    
    // Capitalize the first letter of each sentence
    for (var i = 0; i < sentences.length; i++) {
        // Trim any extra spaces at the beginning of the sentence
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1).toLowerCase();
    }
    
    // Rejoin the sentences, ensuring the period is included at the end of each
    result.value = sentences.join('. ') + (text.endsWith('.') ? '.' : ''); // Add period if input ends with one
}

function cc(){
    user.value = ""
    result.value = ""
}

function autoResize(textarea) {
    textarea.style.height = 'auto';  
    textarea.style.height = (textarea.scrollHeight) + 'px'; 
}
