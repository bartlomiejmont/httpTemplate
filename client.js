const input = document.getElementById('cityInput');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const icon = document.getElementById('icon');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'cb30f6b1abmsh4f8e050a455d139p159f06jsn95c546a1f414'
    }
};

function search() {
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input.value}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // console.log(`Miasto: ${data.location.name}`)
            // console.log(`Temperatura: ${data.current.temp_c}`)
            city.innerHTML = `Miasto: ${data.location.name}`;
            temp.innerHTML = `Temperatura: ${data.current.temp_c} &#8451`;
        })
}

async function asyncSearch() {
    const result = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input.value}`, options)
        .then(response => response.json())

    city.innerHTML = `Miasto: ${result.location.name}`;
    temp.innerHTML = `Temperatura: ${result.current.temp_c} &#8451`;
    icon.src = result.current.condition.icon;
    changeColor(result.current.temp_c)
}

function changeColor(tempValue) {
    if(tempValue > 20){
        temp.style.color = 'red'
    }
    else if(tempValue < 5){
        temp.style.color = 'blue'
    }
    else {
        temp.style.color = 'green'
    }
}