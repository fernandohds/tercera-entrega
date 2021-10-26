
class Auto {
    constructor(marca, anio, precio, mail, plan) {
        this.nombre  = marca;
        this.anio  = anio;
        this.precio  = precio;
        this.mail = mail;
        this.plan = plan;
    }}
let arrayAuto = [];
let miForm = document.querySelector("#frm");
let inputMarca = document.querySelector("#marca");

let input1  = frm.children[1].value;
let input2  = Number(frm.children[2].value);
let input3  = Number(frm.children[3].value);
let input4  = frm.children[4].value;
let input5  = frm.children[5].value;

let contenedor = document.querySelector("#datosAuto");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;





miForm.addEventListener('submit', agregarAuto);
// btnMostrar.addEventListener('click', MostrarTodosAutos);

inputMarca.focus();

function validarForm() {
     input1  = frm.children[1].value;
     input2  = Number(frm.children[2].value);
     input3  = Number(frm.children[3].value);
     input4  = frm.children[4].value;
     input5  = frm.children[5].value;
        console.log(input1);
        console.log(input2);
        console.log(input3);
        console.log(input4);
        console.log(input5);
        if (input1 == '' || input2 == '' || input3 == '' || input4 == '' || input5 == '') {
            alert('Error. Completa todos los campos')
        
        inputMarca.focus(); 
        bandera = false;}
        else {
            bandera = true;
        }
    }
   
    function agregarAuto (e) {
        e.preventDefault();
        validarForm();
        if (bandera == true) {
          let opcion = confirm("Estan los datos correctamente ingresados?");
          if (opcion == true) {
              let frm = e.target
              arrayAuto.push(new Auto(input1,input2,input3,input4,input5));
          } else {
              alert ('No se cotizara');
          }   
            frm.children[1].value = '';
            frm.children[2].value = '';
            frm.children[3].value = '';
            frm.children[4].value = '';
            frm.children[5].value = '';
            contenedor.innerHTML = '';
        agregarAlDom();
        inputMarca.focus();

        localStorage.setItem("autosAgregados", JSON.stringify(arrayAuto));
        } 
    }   
    autosGuardados = JSON.parse(localStorage.getItem("autosAgregados"));
 console.log(autosGuardados);
    function agregarAlDom() {
        for (let i = 0; i < localStorage.length; i++) {
            
        let clave = localStorage.key(i);
            contenedor.innerHTML = `<p>marca: ${clave} </p> `
       }   
    }
    //  for (marca of autosGuardados) {
          
    //    }
    //    contenedor.innerHTML = autosGuardados;
    // function MostrarTodosAutos (e) {
    //     e.preventDefault ();
    //     let i = 0;
    //     displayTodos.innerHTML = '<h2>Listado de todos los autos cotizados</h2>';
    //       for (const autito of autosGuardados) {
    //     displayTodos.innerHTML += `
    //     <h2>Ultimo Auto cotizado:</h2>
    //     <p>Marca: ${autito.marca} </p>
    //     <p>Año: ${autito.anio} </p>
    //     <p>Precio: ${autito.precio} </p>
    //     <p>Mail: ${autito.mail} </p>
    //     <p>Plan: ${autito.plan} </p>`    
    //       }
    // }

    // const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

    // guardarLocal('listaAutos', JSON.stringify(arrayAuto));