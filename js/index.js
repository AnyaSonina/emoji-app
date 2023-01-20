const myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
 if(myEmojis.length == 0) {
    emojiContainer.innerHTML = "Your emojis will appear here😉"
 }else{
     emojiContainer.innerHTML = ""       

 }    
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

function addBtns(btnType, method) {    
    btnType.addEventListener("click", function(){                         
        if (emojiInput.value) {        
        method(emojiInput.value)
            emojiInput.value = ""
            $("#emoji-input").data("emojioneArea").setText('');
            renderEmojis()
        }
    })
}

function deleteBtns(delBtns, method) {
    delBtns.addEventListener("click", function() {      
        method()
        renderEmojis()
    })
}

addBtns(pushBtn, myEmojis.push.bind(myEmojis))
addBtns(unshiftBtn, myEmojis.unshift.bind(myEmojis))
deleteBtns(popBtn, myEmojis.pop.bind(myEmojis))
deleteBtns(shiftBtn, myEmojis.shift.bind(myEmojis))


$(document).ready(function() {
    $("#emoji-input").emojioneArea({
        pickerPosition: "bottom"
    });
    
})
