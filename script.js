// const bodyParser = require("body-parser"); router.use(bodyParser.json());

const jokeel = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');


get_joke.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/',

    {
        headers:{
            accept: 'application/json',
        }
    });

    const joke = await jokeRes.json();
    console.log(joke)
    
    jokeel.innerHTML = joke.joke;
}