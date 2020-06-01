const button = document.querySelector(".change");
const button2 = document.querySelector(".change2");
const wrapper = document.getElementById('wrap');
const nodes = document.getElementById('wrap').childNodes;
const add = document.querySelector('.add');


generateRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

colorChanger = () => {
    document.body.style.backgroundColor = `rgb(${generateRandom(255,0)},${generateRandom(255,0)},${generateRandom(255,0)}`;
}

const stopInterval = () => {
    clearInterval(interval);
    clearInterval(interval2);
}
const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3');

let counter = 0;
disco = () => {
    if (counter == 0) {
        interval = setInterval(colorChanger, 50);
        interval2 = setInterval(posChanger, 1000);
        counter++;
        button2.textContent = "Stop";
        audio.play();
    } else if (counter == 1) {
        stopInterval();
        counter = 0;
        button2.textContent = "Disco Żuki!";
        audio.pause();
    }
}

generateBall = () => {
    const discoball = document.createElement('div');
    discoball.classList.add('dec');
    wrapper.append(discoball);

}

posChanger = () => {

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'div') {
            nodes[i].style.top = `${generateRandom(90,0)}%`;
            nodes[i].style.left = `${generateRandom(90,0)}%`;
            nodes[i].style.right = `${generateRandom(90,0)}%`;
            nodes[i].style.bottom = `${generateRandom(90,0)}%`;
            nodes[i].style.transform = `scale(${generateRandom(4,1)})`;
            nodes[i].style.transform = `rotate(${generateRandom(180,0)}deg)`;


        }
    }

}




button.addEventListener("click", colorChanger);
button2.addEventListener("click", disco);
button2.addEventListener("click", posChanger);
add.addEventListener("click", generateBall);