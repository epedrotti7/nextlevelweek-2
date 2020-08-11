// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)

        //Quando clicar no botão

//Executar uma ação 
function cloneField(){

    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // fields[0].value = ""
    // fields[1].value = ""

    //Para cada campo, limpar
    fields.forEach(function(field){
        
        //Pegar o field do momento e limpa ele
        field.value = ""

    })
    //Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}



// document.querySelector("#remove-time")
// .addEventListener('click', remove)


// function remove(){
//     var time = document.querySelector("#add-time");
//    if(time = '')
// }