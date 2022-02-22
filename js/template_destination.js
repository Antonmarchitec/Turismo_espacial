
let titlessJS = document.querySelector("#titlessJS")
let text = document.querySelector("#text")
let dato1 = document.querySelector("#dato1")
let dato2 = document.querySelector("#dato2")


let moon = document.querySelector("#moon")
let mars = document.querySelector("#mars")
let europa = document.querySelector("#europa")
let titan = document.querySelector("#titan")










document.addEventListener("DOMContentLoaded", ()=>{
    dataFech()
})

const dataFech = async () =>{
    try{
       const res = await fetch("data.json")
       const data = await res.json()
       //console.log(dataMoon)
       //pintarElementosMoon(data)
       document.addEventListener("click", (e) =>{
           //console.log(e.target.id)
           if(e.target.id === "moon"){
               pintarElementosMoon(data)
               pintarBarraMoon()
           }else if(e.target.id === "mars"){
               pintarElementosMars(data)
               pintarBarraMars()
           }else if(e.target.id === "europa"){
               pintarElementosEuropa(data)
               pintarBarraEuropa()
           }else if (e.target.id === "titan"){
               pintarElementosTitan(data)
               pintarBarraTitan()
           }else if(e.target.id === "dowglas"){
               pintarDouglas(data)
           }else if(e.target.id === "mark"){
               pintarMark(data)
           }else if(e.target.id === "victor"){
               pintarVictor(data)
           }else if(e.target.id === "ansari"){
               pintarAnsari(data)
           }else if(e.target.id === "circle1"){
               pintarLaunchVehicle(data)
           }else if(e.target.id === "circle2"){
               pintarSpaceport(data) 
           }else if(e.target.id === "circle3"){
               pintarCapsule(data)
           }
       })


    }catch(error){
       console.log("error en destination moon")
    }
}

const pintarElementosMoon = (data) =>{
    //console.log(dataMoon.destinations[1].name)
    titlessJS.textContent = data.destinations[0].name
    text.textContent = data.destinations[0].description
    dato1.textContent = data.destinations[0].distance
    dato2.textContent = data.destinations[0].travel

    document.querySelector("#imagenMoon").setAttribute("src",data.destinations[0].images.png)
}

const pintarElementosMars = (data) =>{
    //console.log(dataMoon.destinations[1].name)
    titlessJS.textContent = data.destinations[1].name
    text.textContent = data.destinations[1].description
    dato1.textContent = data.destinations[1].distance
    dato2.textContent = data.destinations[1].travel

    document.querySelector("#imagenMoon").setAttribute("src",data.destinations[1].images.png)
}

const pintarElementosEuropa = (data) =>{
    //console.log(dataMoon.destinations[1].name)
    titlessJS.textContent = data.destinations[2].name
    text.textContent = data.destinations[2].description
    dato1.textContent = data.destinations[2].distance
    dato2.textContent = data.destinations[2].travel

    document.querySelector("#imagenMoon").setAttribute("src",data.destinations[2].images.png)
}

const pintarElementosTitan = (data) =>{
    //console.log(dataMoon.destinations[1].name)
    titlessJS.textContent = data.destinations[3].name
    text.textContent = data.destinations[3].description
    dato1.textContent = data.destinations[3].distance
    dato2.textContent = data.destinations[3].travel

    document.querySelector("#imagenMoon").setAttribute("src",data.destinations[3].images.png)
}













/************************************************************* */
///////////////////////CREWWWWW/////////////////////////////////////////


let titleP = document.querySelector("#titleP")
let titleG = document.querySelector("#titleG")
let parrafoCrew = document.querySelector("#parrafoCrew")



const pintarDouglas = (data) =>{
    //console.log(data)
    titleP.textContent = data.crew[0].role
    titleG.textContent = data.crew[0].name
    parrafoCrew.textContent = data.crew[0].bio

    document.querySelector("#bloque_Image_img").setAttribute("src",data.crew[0].images.png)
}

const pintarMark = (data) =>{
    //console.log(data)
    titleP.textContent = data.crew[1].role
    titleG.textContent = data.crew[1].name
    parrafoCrew.textContent = data.crew[1].bio

    document.querySelector("#bloque_Image_img").setAttribute("src",data.crew[1].images.png)

}

const pintarVictor = (data) =>{
    //console.log(data)
    titleP.textContent = data.crew[2].role
    titleG.textContent = data.crew[2].name
    parrafoCrew.textContent = data.crew[2].bio

    document.querySelector("#bloque_Image_img").setAttribute("src",data.crew[2].images.png)

}

const pintarAnsari = (data) =>{
    //console.log(data)
    titleP.textContent = data.crew[3].role
    titleG.textContent = data.crew[3].name
    parrafoCrew.textContent = data.crew[3].bio

    document.querySelector("#bloque_Image_img").setAttribute("src",data.crew[3].images.png)

}











/************************************************************* */
///////////////////////TECNOLOGIA/////////////////////////////////////////

let titleLaunch = document.querySelector("#titleLaunch")
let launchParrafo = document.querySelector("#launchParrafo")

const pintarLaunchVehicle = (data)=>{
    titleLaunch.textContent = data.technology[0].name
    launchParrafo.textContent = data.technology[0].description

    document.querySelector("#imagenLaunch").setAttribute("src",data.technology[0].images.portrait)

}

const pintarSpaceport = (data) =>{
    titleLaunch.textContent = data.technology[1].name
    launchParrafo.textContent = data.technology[1].description

    document.querySelector("#imagenLaunch").setAttribute("src",data.technology[1].images.portrait)
}


const pintarCapsule = (data)=>{
    titleLaunch.textContent = data.technology[2].name
    launchParrafo.textContent = data.technology[2].description

    document.querySelector("#imagenLaunch").setAttribute("src",data.technology[2].images.portrait)
}






const pintarBarraMoon = ()=>{
    moon.classList.add("activaJS")
    mars.classList.remove("activaJS")
    europa.classList.remove("activaJS")
    titan.classList.remove("activaJS")
}
const pintarBarraMars = ()=>{
    mars.classList.add("activaJS")
    moon.classList.remove("activaJS")
    europa.classList.remove("activaJS")
    titan.classList.remove("activaJS")
}
const pintarBarraEuropa = ()=>{
    europa.classList.add("activaJS")
    mars.classList.remove("activaJS")
    moon.classList.remove("activaJS")
    titan.classList.remove("activaJS")
}
const pintarBarraTitan = ()=>{
    titan.classList.add("activaJS")
    mars.classList.remove("activaJS")
    europa.classList.remove("activaJS")
    moon.classList.remove("activaJS")
}



