const textInput = document.getElementById("text")
const delayInput = document.getElementById("delay")
const button = document.getElementById("btn")
const outputInput = document.getElementById("output")


async function whensubmit() {
    const text = textInput.value;
    const delay = parseInt(delayInput.value)*1000;

    if (!text || isNaN(delay)) {
        alert("Please enter valid text and delay.")
        return;
    }

    await new Promise (resolve=> setTimeout (resolve, delay));

    outputInput.textContent = text
    

}







button.addEventListener("click", whensubmit)