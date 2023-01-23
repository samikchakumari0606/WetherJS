

const form=document.querySelector("form");
const search=document.querySelector("#search");
const weather=document.querySelector("#weather");

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

const getWeather=async (city)=>{

    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data=await res.json();
    // console.log(data);
    return showWeather(data);

}


const showWeather=(data)=>{
    console.log(data)
    weather.innerHTML=`
        <div>
           <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" >
        </div>
        <div>
            <h2>${data.main.temp} celcius</h2>
            <h2>${data.weather[0].main}</h2>
        </div >
         `

}

form.addEventListener("submit",function(event){
    getWeather(search.value);
    event.preventDefault();
    

})