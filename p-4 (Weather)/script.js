window.addEventListener('load',()=>{

    let long;
    let lat;
    let minimumTemperature =document.querySelector('.temperature-description');
    let temperatureDegree =document.querySelector('.temperature-degree');
    let locationTimezone =document.querySelector('.location-timezone');
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

            const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=60613daa8cc667953f649f227bb52150`
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const {temp,temp_min} = data.main;
                //set DOM elements from the API
               temperatureDegree.textContent = temp;
               minimumTemperature.textContent = temp_min;
               const name = data.name;
               locationTimezone.textContent = name;
            })
        });

       
    }else{
        h1.textContent = "Allow Location"
    }
});