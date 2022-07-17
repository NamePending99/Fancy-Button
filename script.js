document.getElementById("bomb").addEventListener("click", initiate);

function initiate() {
    const classAdder = document.getElementById("bomb").classList;
    classAdder.add("hide");

    setTimeout(hideBtn, 350);
}

function hideBtn() {
    const btnBody = document.getElementById("bomb");
    btnBody.style.visibility = 'hidden';
    // btnBody.remove();

    fireworks();
}

function fireworks() {
    const rocketDiv = document.createElement("div");
    rocketDiv.classList.add("firework");

    const currentDiv = document.getElementById("Placeholder");
    document.body.insertBefore(rocketDiv, currentDiv);

    setTimeout(reset, 3000);

    // Helpfull article: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function reset() {
    const btnBody = document.getElementById("bomb");
    document.getElementsByClassName('firework')[0].style.visibility = 'hidden';
    btnBody.classList.remove("hide");

    final();
}

function final() {
    const textBox = document.createElement('div');
    const text = document.createTextNode('You failed...');

    textBox.classList.add('finalText');

    textBox.appendChild(text);

    const prevDiv = document.getElementById('Placeholder');
    document.body.insertBefore(textBox, prevDiv);
}


