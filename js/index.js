//DOM
const timmer = document.getElementById('timmer');
const start = document.getElementById('start');
const send = document.getElementById('send');
const form = document.getElementById('form');
const body = document.querySelector('body');
const buttonsContainer = document.getElementById('buttonsC');
const spanTimmer = document.getElementById('spanTimmer');
const titleContainerContainer = document.getElementById('titleContainer');
const timmerContainer = document.getElementById('timmerContainer');

//Questions variable & labels
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const label5 = document.getElementById('label5');
const question1Label = document.getElementById('question1Label');
const question2Label = document.getElementById('question2Label');
const question3Label = document.getElementById('question3Label');
const question4Label = document.getElementById('question4Label');
const question5Label = document.getElementById('question5Label');



//Variables

let restTime; // => Se declaran dos variables, que debe pasar para el contador
let interval;  // y otra para agregarle un intervalo que este en constante actualizacion, cada 1 segundo.

//Functions and code from the web

send.style = `
    display: none;

`
setInterval(()=>{
    let actualDate = new Date();
    let hour = String(actualDate.getHours()).padStart(2,'0');
    let minutes = actualDate.getMinutes();
    let seconds = actualDate.getSeconds();

    totalTime = `${hour}:${minutes}:${seconds}`;
    const dateActual = document.getElementById('actualDate');
    dateActual.innerText = totalTime;
    let date = actualDate.toLocaleDateString('es-ES');
    const dateActual3 = document.getElementById('dateActual3');
    dateActual3.innerText = date;

}, 1000);
function actualDate(){
    let dateContainer = document.createElement('div');
    dateContainer.id = 'date';
    let firstChild = timmerContainer.firstChild;
    timmerContainer.insertBefore(dateContainer,firstChild); // => El primer elemento representa lo que se quiere asignar como primer hijo representa al primer hijo;
    // IMPORTANTE : usar first child y almacenarlo en una variable.
    const date = document.getElementById('date');
    date.style = `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #919191;
    opacity: .98;
    color: #f2f2f2f2;
    width: fit-content;
    height: 50px;
    border-radius: 10px;
    gap: 10px;
    padding: 2px;
    `
    date.innerHTML = `
        <span id='actualDate'>00:00:00</span>
        <span id='dateActual3'>DD/M/Y</span>
    `
}
send.addEventListener('click', () => {
    let answer1 = 'Blancanieves y los siete enanitos';
    let answer2 = 'Harrison Ford';
    let answer3 = 'El Joker';
    let answer4 = 'La ciudad Esmeralda';
    let answer5 = 'Rojo';

    if (
        question1.value.toLowerCase() === answer1.toLocaleLowerCase() &
        question2.value.toLowerCase() === answer2.toLocaleLowerCase() &
        question3.value.toLowerCase() === answer3.toLocaleLowerCase() &
        question4.value.toLowerCase() === answer4.toLocaleLowerCase() &
        question5.value.toLowerCase() === answer5.toLocaleLowerCase()
    ) {
        body.style=`
            background-repeat: no-repeat;
            height: 100vh; 
        
        
        
        `
        form.innerHTML = `
            <div id="congrats">
                <h2>¡Felicidades, has adivinado todas las preguntas!</h2>
            </div>
        `
        const congrats = document.getElementById('congrats');
        congrats.style = `
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: green;
            height: 300px;
            padding: 30px;
            border-radius: 10px;
            color: #f2f2f2f2;
            font-size: 30px;
        
        `
    }else if(   
        question1.value.toLowerCase() !== answer1.toLocaleLowerCase() ||
        question2.value.toLowerCase() !== answer2.toLocaleLowerCase() ||
        question3.value.toLowerCase() !== answer3.toLocaleLowerCase() ||
        question4.value.toLowerCase() !== answer4.toLocaleLowerCase() ||
        question5.value.toLowerCase() !== answer5.toLocaleLowerCase()){
            if(question1.value.toLowerCase() !== answer1.toLocaleLowerCase()){
                question1Label.style= `
                    background-color: red;
                    border-radius: 10px;
                    padding: 10px;
                `
                label1.innerText = `La respuesta era: ${answer1}`;
                question1.value = `Tu escribiste: ${question1.value}`
            }else{
                question1Label.style= `
                background-color: green;
                border-radius: 10px;
                padding: 10px;
            `
            label1.innerText = `Esta respuesta estuvo correcta`;
            }
            if(question2.value.toLowerCase() !== answer2.toLocaleLowerCase()){
                question2Label.style= `
                    background-color: red;
                    border-radius: 10px;
                    padding: 10px;
                    margin-top:10px;
                `
                label2.innerText = `La respuesta era: ${answer2}`;
                question2.value = `Tu escribiste: ${question2.value}`
            }else{
                question2Label.style= `
                background-color: green;
                border-radius: 10px;
                padding: 10px;
                margin-top:10px;
            `
            label2.innerText = `Esta respuesta estuvo correcta`;
            }
            if(question3.value.toLowerCase() !== answer3.toLocaleLowerCase()){
                question3Label.style= `
                    background-color: red;
                    border-radius: 10px;
                    padding: 10px;
                    margin-top:10px;
                `
                label3.innerText = `La respuesta era: ${answer3}`;
                question3.value = `Tu escribiste: ${question3.value}`
            }else{
                question3Label.style= `
                background-color: green;
                border-radius: 10px;
                padding: 10px;
                margin-top:10px;
            `
            label3.innerText = `Esta respuesta estuvo correcta`;
            }
            if(question4.value.toLowerCase() !== answer4.toLocaleLowerCase()){
                question4Label.style= `
                    background-color: red;
                    border-radius: 10px;
                    padding: 10px;
                    margin-top:10px;
                `
                label4.innerText = `La respuesta era: ${answer4}`;
                question4.value = `Tu escribiste: ${question4.value}`
            }else{
                question4Label.style= `
                background-color: green;
                border-radius: 10px;
                padding: 10px;
                margin-top:10px;
            `
            label4.innerText = `Esta respuesta estuvo correcta`;
            }
            if(question5.value.toLowerCase() !== answer5.toLocaleLowerCase()){
                question5Label.style= `
                    background-color: red;
                    border-radius: 10px;
                    padding: 10px;
                    margin-top:10px;
                `
                label5.innerText = `La respuesta era: ${answer5}`;
                question5.value = `Tu escribiste: ${question5.value}`
            }else{
                question5Label.style= `
                background-color: green;
                border-radius: 10px;
                padding: 10px;
                margin-top:10px;
            `
            label5.innerText = `Esta respuesta estuvo correcta`;
            }
        }
        send.style = 'display: none';
        clearInterval(interval);
        spanTimmer.style = `
            width: fit-content;
        `
        timmer.textContent = `Tardaste: ${interval} segundos`;
        buttonsContainer.innerHTML = `<button id="reload">Reiniciar</button>`
        const reload = document.getElementById('reload');
        reload.addEventListener('click', ()=>{
            location.reload();
        } )
})

start.addEventListener('click', () => {
    restTime = 30; // => Se asigna el valor de tiempo que tendra la cuenta regresiva
    start.style = `
        display: none;
    `
    send.style = `
    display: block;
`
    titleContainer.style = `
        display:  none;
    `
    interval = setInterval(() => {
        const seconds = restTime % 60; // => Obtiene el resto de segundos por cada minuto de un valor
        timmer.innerText = seconds; // => imprime el resto obtenido de la variable seconds
        restTime--; // => Le resta uno al tiempo de segundos asignados
        if (restTime === 0) {
            clearInterval(interval);
            timmer.textContent = '00'
            //Establece que el intervalo de tiempo debe parar cuando la variable rest time llegue a 0 y establece 
            //El contenido que debe tener el texto al terminar de contar.
            buttonsContainer.innerHTML = `<button id="reload">Reiniciar</button>`
            const reload = document.getElementById('reload');
            reload.addEventListener('click', ()=>{
                location.reload();
            } );
            let answer1 = 'Blancanieves y los siete enanitos';
            let answer2 = 'Harrison Ford';
            let answer3 = 'El Joker';
            let answer4 = 'La ciudad Esmeralda';
            let answer5 = 'Rojo';
        
            if (
                question1.value.toLowerCase() === answer1.toLocaleLowerCase() &
                question2.value.toLowerCase() === answer2.toLocaleLowerCase() &
                question3.value.toLowerCase() === answer3.toLocaleLowerCase() &
                question4.value.toLowerCase() === answer4.toLocaleLowerCase() &
                question5.value.toLowerCase() === answer5.toLocaleLowerCase()
            ) {
                body.style=`
                    background-repeat: no-repeat;
                    height: 100vh; 
                
                
                
                `
                form.innerHTML = `
                    <div id="congrats">
                        <h2>¡Felicidades, has adivinado todas las preguntas!</h2>
                    </div>
                `
                const congrats = document.getElementById('congrats');
                congrats.style = `
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: green;
                    height: 300px;
                    padding: 30px;
                    border-radius: 10px;
                    color: #f2f2f2f2;
                    font-size: 30px;
                
                `
            }else if(   
                question1.value.toLowerCase() !== answer1.toLocaleLowerCase() ||
                question2.value.toLowerCase() !== answer2.toLocaleLowerCase() ||
                question3.value.toLowerCase() !== answer3.toLocaleLowerCase() ||
                question4.value.toLowerCase() !== answer4.toLocaleLowerCase() ||
                question5.value.toLowerCase() !== answer5.toLocaleLowerCase()){
                    if(question1.value.toLowerCase() !== answer1.toLocaleLowerCase()){
                        question1Label.style= `
                            background-color: red;
                            border-radius: 10px;
                            padding: 10px;
                        `
                        label1.innerText = `La respuesta era: ${answer1}`;
                        question1.value = `Tu escribiste: ${question1.value}`
                    }else{
                        question1Label.style= `
                        background-color: green;
                        border-radius: 10px;
                        padding: 10px;
                    `
                    label1.innerText = `Esta respuesta estuvo correcta`;
                    }
                    if(question2.value.toLowerCase() !== answer2.toLocaleLowerCase()){
                        question2Label.style= `
                            background-color: red;
                            border-radius: 10px;
                            padding: 10px;
                            margin-top:10px;
                        `
                        label2.innerText = `La respuesta era: ${answer2}`;
                        question2.value = `Tu escribiste: ${question2.value}`
                    }else{
                        question2Label.style= `
                        background-color: green;
                        border-radius: 10px;
                        padding: 10px;
                        margin-top:10px;
                    `
                    label2.innerText = `Esta respuesta estuvo correcta`;
                    }
                    if(question3.value.toLowerCase() !== answer3.toLocaleLowerCase()){
                        question3Label.style= `
                            background-color: red;
                            border-radius: 10px;
                            padding: 10px;
                            margin-top:10px;
                        `
                        label3.innerText = `La respuesta era: ${answer3}`;
                        question3.value = `Tu escribiste: ${question3.value}`
                    }else{
                        question3Label.style= `
                        background-color: green;
                        border-radius: 10px;
                        padding: 10px;
                        margin-top:10px;
                    `
                    label3.innerText = `Esta respuesta estuvo correcta`;
                    }
                    if(question4.value.toLowerCase() !== answer4.toLocaleLowerCase()){
                        question4Label.style= `
                            background-color: red;
                            border-radius: 10px;
                            padding: 10px;
                            margin-top:10px;
                        `
                        label4.innerText = `La respuesta era: ${answer4}`;
                        question4.value = `Tu escribiste: ${question4.value}`
                    }else{
                        question4Label.style= `
                        background-color: green;
                        border-radius: 10px;
                        padding: 10px;
                        margin-top:10px;
                    `
                    label4.innerText = `Esta respuesta estuvo correcta`;
                    }
                    if(question5.value.toLowerCase() !== answer5.toLocaleLowerCase()){
                        question5Label.style= `
                            background-color: red;
                            border-radius: 10px;
                            padding: 10px;
                            margin-top:10px;
                        `
                        label5.innerText = `La respuesta era: ${answer5}`;
                        question5.value = `Tu escribiste: ${question5.value}`
                    }else{
                        question5Label.style= `
                        background-color: green;
                        border-radius: 10px;
                        padding: 10px;
                        margin-top:10px;
                    `
                    label5.innerText = `Esta respuesta estuvo correcta`;
                    }
                }
        }
    }, 1000)
})

