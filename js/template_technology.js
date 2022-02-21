let cont_launch = document.querySelector('#cont_launch')
let template_cont_launch = document.querySelector('#template_cont_launch').content
let fragment = document.createDocumentFragment()

let cont_image_tech = document.querySelector('#cont_image_tech')
let template_tech_img = document.querySelector('#template_tech_img').content
let fragment_tech = document.createDocumentFragment() 

document.addEventListener('DOMContentLoaded', () =>{
     dataFechTech()
})


const dataFechTech = async ()=>{
    try{
       const res = await fetch('data.json')
       const data = await res.json()
       //console.log(data)
       mostrarDesTech(data)
    }catch(error){
        console.log('error')
    }
}

const mostrarDesTech = (data) =>{
    data.technology.forEach(element => {
        //template_cont_launch.querySelector('#text_launch').textContent = element.name
        template_cont_launch.querySelector('#text_desc').textContent = element.description
        fragment.appendChild(template_cont_launch)
        cont_launch.appendChild(fragment)


        //PINTAR IMAGEN
        template_tech_img.querySelector('img').setAttribute('src', element.images.portrait)
        fragment_tech.appendChild(template_tech_img)
        cont_image_tech.appendChild(fragment_tech)

    })
}

