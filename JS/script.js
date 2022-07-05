// MENU PRINCIPAL
class paciente {//CLASE PACIENTE
  constructor(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, ta, fc, fr, spo2, notaEvolucion) {//CONSTRUCTOR DE LA CLASE PACIENTE
      this.nombre = nombre;
      this.apellidoPaterno = apellidoPaterno;
      this.apellidoMaterno = apellidoMaterno;
      this.fechaNac = fechaNac;
      this.sexo = sexo;
      this.diagnostico = diagnostico;
      this.ta = ta;
      this.fc = fc;
      this.fr = fr;
      this.spo2 = spo2;
      this.notaEvolucion = notaEvolucion;
  }
}
const pacientes = [];
alert("Hola Soy Ricardo Hernandez y este es mi Segundo Desafio Entregable de JavaScript");
  
alert("Bienvenido al Sistema de Atencion Integral de Pacientes");

verificarPacientes();//LLAMAMOS A LA FUNCION VERIFICAR PACIENTES

function verificarPacientes() {//FUNCION VERIFICAR PACIENTES
    for (let i = 0; i < localStorage.length; i++) {//CICLO PARA RECORRER LA LISTA DE PACIENTES
        let key = localStorage.key(i);//OBTENEMOS LA CLAVE DEL PACIENTE
        let value = localStorage.getItem(key);//OBTENEMOS EL VALOR DEL PACIENTE  
        let paciente = JSON.parse(value);//CONVERTIMOS EL VALOR A JSON
        pacientes.push(paciente);//AGREGAMOS EL PACIENTE A LA LISTA
    }
}

const registrarPaciente = () => {//FUNCION REGISTRAR PACIENTE
    document.getElementById("listaPacientes").innerHTML = "";//LIMPIA EL CONTENIDO DEL DIV
    let ultimoIngresado = document.getElementById("listaPacientes");//OBTENEMOS EL ID DE LA LISTA DE PACIENTES
    let nombre = document.getElementById("nombre").value.toUpperCase();//OBTENEMOS EL VALOR DEL INPUT NOMBRE
    if (nombre == null || nombre == "" || nombre.length > 20 || nombre.length < 3) {//CONDICIONAL PARA VALIDAR EL NOMBRE
        alert("El nombre debe tener entre 3 y 20 caracteres");
        return;
    }
    let apellidoPaterno = document.getElementById("apellidoPaterno").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT APELLIDO PATERNO
    if (apellidoPaterno == null || apellidoPaterno == "" || apellidoPaterno.length > 20 || apellidoPaterno.length < 3) {//CONDICIONAL PARA VALIDAR EL APELLIDO PATERNO
        alert("El apellido paterno debe tener entre 3 y 20 caracteres");
        return;
    }
    let apellidoMaterno = document.getElementById("apellidoMaterno").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT APELLIDO MATERNO
    if (apellidoMaterno == null || apellidoMaterno == "" || apellidoMaterno.length > 20 || apellidoMaterno.length < 3) {//CONDICIONAL PARA VALIDAR EL APELLIDO MATERNO
        alert("El apellido materno debe tener entre 3 y 20 caracteres");
        return;
    }
    let fechaNac = document.getElementById("fechaNac").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT FECHA DE NACIMIENTO
        if (fechaNac == null || fechaNac == "" || fechaNac.length > 10 || fechaNac.length < 10 || !fechaNac.match(/^\d{2}\/\d{2}\/\d{4}$/)) {//CONDICIONAL PARA VALIDAR LA FECHA DE NACIMIENTO
            alert("La fecha de nacimiento debe tener el formato dd/mm/aaaa");
            return;
        }
    let sexo = document.getElementById("sexo").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT SEXO
    if (sexo == null || sexo == "") {//CONDICIONAL
        alert("El sexo debe tener entre 3 y 10 caracteres");
        return;
    }
    let diagnostico = document.getElementById("diagnostico").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT DIAGNOSTICO
    if (diagnostico == null || diagnostico == "" || diagnostico.length > 20 || diagnostico.length < 3) {//CONDICIONAL PARA VALIDAR EL DIAGNOSTICO
        alert("El diagnostico debe tener entre 3 y 20 caracteres");
        return;
    }
    let ta = document.getElementById("ta").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT TA
    if  (ta == null || ta == "" || ta.length > 10 || ta.length < 3 || !ta.match(/^\d+\/\d+$/)) {//CONDICIONAL PARA VALIDAR EL TA
        alert("El ta debe tener el formato 120/80");
        return;
    }
    let fc = document.getElementById("fc").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT FC
    if (fc == null || fc == "" || fc.length > 3 || fc.length < 1 || !fc.match(/^\d+$/)) {//CONDICIONAL PARA VALIDAR EL FC
        alert("El fc debe tener entre 1 y 3 digitos");
        return;
    }
    let fr = document.getElementById("fr").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT FR
    if (fr == null || fr == "" || fr.length > 3 || fr.length < 1 || !fr.match(/^\d+$/)) {//CONDICIONAL PARA VALIDAR EL FR
        alert("El fr debe tener entre 1 y 3 digitos");
        return;
    }
    let spo2 = document.getElementById("spo2").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT SPO2
    if (spo2 == null || spo2 == "" || spo2.length > 3 || spo2.length < 1 || !spo2.match(/^\d+$/)) {//CONDICIONAL PARA VALIDAR EL SPO2
        alert("El spo2 debe tener entre 1 y 3 digitos");
        return;
    }
    let notaEvolucion = document.getElementById("notaEvolucion").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT NOTA EVOLUCION
    if (notaEvolucion == null || notaEvolucion == "" || notaEvolucion.length > 200 || notaEvolucion.length < 3) {//CONDICIONAL PARA VALIDAR EL NOTA EVOLUCION
        alert("La nota de evolucion debe tener entre 3 y 200 caracteres");
        return;
    }
pacientes.push(new paciente(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, ta, fc, fr, spo2, notaEvolucion));//AGREGAMOS LOS DATOS A LA LISTA DE PACIENTES
localStorage.setItem("pacientes", JSON.stringify(pacientes));//GUARDAMOS LA LISTA DE PACIENTES EN EL LOCALSTORAGE
alert("Paciente registrado con exito");
            ultimoIngresado = document.createElement("div");//CREAMOS UN NUEVO DIV
            ultimoIngresado.innerHTML = `
            <div class="col">
            <div class="card">
            <div class="card-body">
            <h2 class="card-title">"Usted ingreso al siguiente paciente"</h2>
            <h5 class="card-title">Nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}</h5>
            <pclass="card-text>Fecha de nacimiento: ${fechaNac}</p>
            <pclass="card-text>Sexo: ${sexo}</p>
            <pclass="card-text>Diagnostico: ${diagnostico}</p>
            <pclass="card-text>Tension arterial: ${ta}</p>
            <pclass="card-text>Frecuencia cardiaca:${fc}</p>
            <pclass="card-text>Frecuencia respiratoria${fr}</p>
            <pclass="card-text>SpO2: ${spo2}</p>
            <pclass="card-text>Nota de evolucion:${notaEvolucion}</p>
            </div>
            </div>
            </div>
            `;//CREAMOS EL HTML DEL NUEVO DIV
            document.getElementById("listaPacientes").appendChild(ultimoIngresado);//AGREGAMOS EL NUEVO DIV A LA PAGINA
            setTimeout(function(){//FUNCION PARA QUE EL DIV SE OCULTE
                ultimoIngresado.style.display = "none";
            }
            , 5000);
            limpiar();//LLAMAMOS A LA FUNCION LIMPIAR
  }
  

function limpiar() {//FUNCION LIMPIAR
    document.getElementById("nombre").value = "";//LIMPIA EL INPUT NOMBRE
    document.getElementById("apellidoPaterno").value = "";//LIMPIA EL INPUT APELLIDO PATERNO
    document.getElementById("apellidoMaterno").value = "";//LIMPIA EL INPUT APELLIDO MATERNO
    document.getElementById("fechaNac").value = "";//LIMPIA EL INPUT FECHA DE NACIMIENTO
    document.getElementById("sexo").value = "";//LIMPIA EL INPUT SEXO
    document.getElementById("diagnostico").value = "";//LIMPIA EL INPUT DIAGNOSTICO
    document.getElementById("ta").value = "";//LIMPIA EL INPUT TA
    document.getElementById("fc").value = "";//LIMPIA EL INPUT FC
    document.getElementById("fr").value = "";//LIMPIA EL INPUT FR
    document.getElementById("spo2").value = "";//LIMPIA EL INPUT SPO2
    document.getElementById("notaEvolucion").value = "";//LIMPIA EL INPUT NOTA EVOLUCION
    document.getElementById("buscar").value = "";//LIMPIA EL INPUT BUSCAR
}//FIN FUNCION LIMPIAR

function buscarPaciente() {//FUNCION BUSCAR PACIENTE
    let nombre = document.getElementById("buscador").value.toUpperCase();// OBTENEMOS EL VALOR DEL INPUT NOMBRE
    let pacientes = JSON.parse(localStorage.getItem("pacientes"));// OBTENEMOS LA LISTA DE PACIENTES
    let encontrado = false;//DECLARAMOS UNA VARIABLE PARA SABER SI ENCONTRAMOS EL PACIENTE
    for (let i = 0; i < pacientes.length; i++) {//CICLO PARA RECORRER LA LISTA DE PACIENTES
        if (pacientes[i].nombre == nombre) {//CONDICIONAL PARA SABER SI ENCONTRAMOS EL PACIENTE
            encontrado = true;//SI ENCONTRAMOS EL PACIENTE CAMBIAMOS EL VALOR DE LA VARIABLE A TRUE
            encontrado = true;//CAMBIAMOS EL VALOR DE LA VARIABLE DE BOOLEANO
            resultadoBusqueda = document.createElement("div");//CREAMOS UN NUEVO DIV
            resultadoBusqueda.innerHTML = `
            <div class="col">
            <div class="card">
            <div class="card-body">
            <h2 class="card-title">"Pacientes encontrados"</h2>
            <h5 class="card-title">Nombre: ${pacientes[i].nombre} ${pacientes[i].apellidoPaterno} ${pacientes[i].apellidoMaterno}</h5>
            <pclass="card-text>Fecha de nacimiento: ${pacientes[i].fechaNac}</p>
            <pclass="card-text>Sexo: ${pacientes[i].sexo}</p>
            <pclass="card-text>Diagnostico: ${pacientes[i].diagnostico}</p>
            <pclass="card-text>Tension arterial: ${pacientes[i].ta}</p>
            <pclass="card-text>Frecuencia cardiaca:${pacientes[i].fc}</p>
            <pclass="card-text>Frecuencia respiratoria${pacientes[i].fr}</p>
            <pclass="card-text>SpO2: ${pacientes[i].spo2}</p>
            <pclass="card-text>Nota de evolucion:${pacientes[i].notaEvolucion}</p>
            </div>
            </div>
            </div>
            `;//CREAMOS EL HTML DEL NUEVO DIV
            document.getElementById("listaPacientes").appendChild(resultadoBusqueda);//AGREGAMOS EL NUEVO DIV A LA PAGINA
            break
        }
    }
    if (!encontrado) {//CONDICIONAL PARA VALIDAR EL NOMBRE
        alert("Paciente no encontrado");//MOSTRAMOS UN MENSAJE DE ERROR
    }
    limpiar()
}//FIN FUNCION BUSCAR PACIENTE

function eliminarPaciente() {//Elimina un paciente por su nombre
    let nombre = prompt("Ingrese el nombre del paciente a eliminar");
    let apellidoPaterno = prompt("Ingrese el apellido paterno del paciente a eliminar");
    let encontrado = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
            pacientes.splice(i, 1);
            alert("Paciente: " + nombre.toUpperCase() + " " + apellidoPaterno.toUpperCase() + " eliminado");//Elimina el paciente encontrado con el nombre y apellido paterno ingresados
            encontrado = true;}
    }
    if (!encontrado) {
        alert("Paciente no encontrado");
    }
}

function modificarPaciente() {//Modifica los datos de un paciente
    let nombre = prompt("Ingrese el Nombre del paciente a modificar").toUpperCase();
    let apellidoPaterno = prompt("Ingrese el Apellido Paterno del paciente a modificar").toUpperCase();
    let encontrado = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
            alert("Paciente encontrado:\nNombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\n");//Muestra los datos del paciente encontrado
            alert("Cual dato desea modificar?");
            let opcion = prompt("1. Nombre\n2. Apellido Paterno\n3. Apellido Materno\n4. Fecha de Nacimiento\n5. Sexo\n6. Diagnostico\n7. Tension Arterial\n8. Frecuencia Cardiaca\n9. Frecuencia Respiratoria\n10. SpO2\n11. Nota de Evolución");
            switch (opcion) {//Modifica el dato seleccionado
                case "1":
                    let nuevoNombre = prompt("Nuevo nombre").toUpperCase();
                    pacientes[i].nombre = nuevoNombre;
                    alert("Nombre modificado");
                    break;
                case "2":
                    let nuevoApellidoPaterno = prompt("Nuevo apellido paterno").toUpperCase();
                    pacientes[i].apellidoPaterno = nuevoApellidoPaterno;
                    alert("Apellido paterno modificado");
                    break;
                case "3":
                    let nuevoApellidoMaterno = prompt("Nuevo apellido materno").toUpperCase();
                    pacientes[i].apellidoMaterno = nuevoApellidoMaterno;
                    alert("Apellido materno modificado");
                    break;
                case "4":
                    let nuevaFechaNac = prompt("Nueva fecha de nacimiento (dd/mm/aaaa)").toUpperCase();
                    pacientes[i].fechaNac = nuevaFechaNac;
                    alert("Fecha de nacimiento modificada");
                    break;
                case "5":
                    let nuevoSexo = prompt("Nuevo sexo (M/F)").toUpperCase();
                    pacientes[i].sexo = nuevoSexo;
                    alert("Sexo modificado");
                    break;
                case "6":
                    let nuevoDiagnostico = prompt("Nuevo diagnostico").toUpperCase();
                    pacientes[i].diagnostico = nuevoDiagnostico;
                    alert("Diagnostico modificado");
                    break;
                case "7":
                    let nuevaTA = prompt("Nueva tension arterial. Ejemplo: 120/80").toUpperCase();
                    pacientes[i].ta = nuevaTA;
                    alert("Tension arterial modificada");
                    break;
                case "8":
                    let nuevaFC = prompt("Nueva frecuencia cardiaca. Ejemplo: 80").toUpperCase();
                    pacientes[i].fc = nuevaFC;
                    alert("Frecuencia cardiaca modificada");
                    break;
                case "9":
                    let nuevaFR = prompt("Nueva frecuencia respiratoria. Ejemplo: 20").toUpperCase();
                    pacientes[i].fr = nuevaFR;
                    alert("Frecuencia respiratoria modificada");
                    break;
                case "10":
                    let nuevoSPO2 = prompt("Nuevo spo2. Ejemplo: 98").toUpperCase();
                    pacientes[i].spo2 = nuevoSPO2;
                    alert("SpO2 modificado");
                    break;
                case "11":
                    let nuevaNotaEvolucion = prompt("Nueva nota de evolucion").toUpperCase();
                    pacientes[i].notaEvolucion = nuevaNotaEvolucion;
                    alert("Nota de evolucion modificada");
                    break;
                default:
                    alert("Opcion no valida");
                    break;
            }
            encontrado = true;
        }
    }
    if (!encontrado) {
        alert("Paciente no encontrado");
    }
}

  function mostrarPacientes() {//FUNCION MOSTRAR PACIENTES
    document.getElementById("listaPacientes").innerHTML = "";//Limpia la lista de pacientes
    for (let i = 0; i < pacientes.length; i++) {
        listaPacientes = document.createElement("div");//CREAMOS UN NUEVO DIV
        listaPacientes.innerHTML = `
        <div class="col">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">Nombre: ${pacientes[i].nombre} ${pacientes[i].apellidoPaterno} ${pacientes[i].apellidoMaterno}</h5>
        <pclass="card-text>Fecha de nacimiento: ${pacientes[i].fechaNac}</p>
        <pclass="card-text>Sexo: ${pacientes[i].sexo}</p>
        <pclass="card-text>Diagnostico: ${pacientes[i].diagnostico}</p>
        <pclass="card-text>Tension arterial: ${pacientes[i].ta}</p>
        <pclass="card-text>Frecuencia cardiaca:${pacientes[i].fc}</p>
        <pclass="card-text>Frecuencia respiratoria${pacientes[i].fr}</p>
        <pclass="card-text>SpO2: ${pacientes[i].spo2}</p>
        <pclass="card-text>Nota de evolucion:${pacientes[i].notaEvolucion}</p>
        </div>
        </div>
        </div>
        `;//CREAMOS EL HTML DEL NUEVO DIV
        document.getElementById("listaPacientes").appendChild(listaPacientes);//AGREGAMOS EL NUEVO DIV A LA LISTA DE PACIENTES
    }
  if (pacientes.length == 0) {//SI NO HAY PACIENTES
      alert("No hay pacientes");
  }//FIN SI NO HAY PACIENTES
  }//FIN FUNCION MOSTRAR PACIENTES

  //__________________________________________________________________________________________________________________
  //Calculadoras Medicas
  //__________________________________________________________________________________________________________________

  //Calculadora de Glasgow
  function glasgow(){// Funcion paciente donde se elige si es un paciente adulto o un lactante
    alert("Bienvenido a la herramienta de evaluación de la Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS))");// Una alerta como bienvenida
  
    alert("La Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS)) es una escala de aplicación neurológica que permite medir el nivel de conciencia de una persona. Una exploración neurológica de un paciente con traumatismo craneoencefálico debe ser simple, objetiva y rápida. La evaluación del nivel de conciencia es el parámetro más importante que debe tenerse en cuenta.");
    
    let opcion;
      do{
      opcion = parseInt(prompt("Ingrese un tipo de paciente:\n1. Adulto y/o Pediatrico\n2. Lactante"));
      } while (opcion != 1 && opcion != 2);// Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 2
      if (opcion == 1) {
      adulto();// Aqui se llama a la funcion adulto
      }
     if (opcion == 2) {
      lactante();// Aqui se llama a la funcion lactante
      }

  
  function adulto() {// aqui los prompts de adulto de acuerdo a los parametros para un tipo de paciente adulto o pediatrico
    let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
    let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Orientado\n 4. Desorientado/Confuso\n 3. Incoherente\n 2. Sonidos incomprensibles\n 1. Ausencia de respuesta"));
    let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Obedece ordenes\n 5. Localiza el dolor\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));
    
    total = 0;// Aqui se inicializa la variable total
    total1 = 0;// Aqui se inicializa la variable total1
    total2 = 0;// Aqui se inicializa la variable total2
    total3 = 0;// Aqui se inicializa la variable total3
  
    if (motor == 6) {// Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 6
      total += 6; // Aqui se suma el numero 6 a la variable total
      total1 += 1;  // Aqui se suma el numero 1 a la variable total1
    }
    if (motor == 5) {
      total += 5;
      total1 += 1;
    }
    if (motor == 4) {
      total += 4;
      total1 += 1;
    }
    if (motor == 3) {
      total += 3;
      total1 += 1;
    }
    if (motor == 2) {
      total += 2;
      total1 += 1;
    }
    if (motor == 1) {
      total += 1;
      total1 += 1;
    }
    if (verbal == 5) { // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 5
      total += 5;   // Aqui se suma el numero 5 a la variable total
      total2 += 1; // Aqui se suma el numero 1 a la variable total2
    }
    if (verbal == 4) {
      total += 4;
      total2 += 1;
    }
    if (verbal == 3) {
      total += 3;
      total2 += 1;
    }
    if (verbal == 2) {
      total += 2;
      total2 += 1;
    }
    if (verbal == 1) {
      total += 1;
      total2 += 1;
    }
    if (ojos == 4) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 4
      total += 4;   // Aqui se suma el numero 4 a la variable total
      total3 += 1;  // Aqui se suma el numero 1 a la variable total3
    }
    if (ojos == 3) {
      total += 3;
      total3 += 1;
    }
    if (ojos == 2) {
      total += 2;
      total3 += 1;
    }
    if (ojos == 1) {
      total += 1;
      total3 += 1;
    }
    if (total1 == 0 || total2 == 0 || total3 == 0) { // Aqui se hace una validacion de que el usuario ingrese un numero erroneo
      alert("Opss los parametros que ingresaste no son los correctos");
      }
    else {
      alert("El puntaje en la escala de Coma de Glasgow es: " + total); // Aqui se muestra el puntaje final
      if (total < 5) { // Aqui se hace una validacion de que el puntaje final sea menor a 5
        alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
      }
      else {
        if (total < 11) { // Aqui se hace una validacion en caso de un puntaje menor que 11
          alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa intermedio (más profundo cuanto menor el resultado)");
        }
        else {
          if (total < 15) {   // Aqui se hace una validacion en caso de un puntaje menor que 15
              alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
          }
          else {  // Aqui se hace una validacion en caso de un puntaje = que 15
              alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nNormalidad");
          }
        }
      }
    }
    }
  
    function lactante() {// Aqui los prompts de lactante de acuerdo a los parametros para un tipo de paciente lactante ya que son diferentes a los de adulto
      let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
      let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Balbuceo\n 4. Llanto irritable controlable\n 3. Llanto al dolor\n 2. Quejidos al dolor\n 1. Ausencia de respuesta"));
      let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Movimientos espontaneos\n 5. retirada al tocar\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));
  
    total = 0;// Aqui se hace una variable total para que se pueda sumar los puntos de cada parametro
    total1 = 0;// Aqui se hace una variable total1 para que se pueda sumar los puntos de cada parametro
    total2 = 0;// Aqui se hace una variable total2 para que se pueda sumar los puntos de cada parametro
    total3 = 0;// Aqui se hace una variable total3 para que se pueda sumar los puntos de cada parametro
  
    if (motor == 6) { // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 6
      total += 6; // Aqui se suma el numero 6 a la variable total
      total1 += 1;  // Aqui se suma el numero 1 a la variable total1
    }
    if (motor == 5) {
      total += 5;
      total1 += 1;
    }
    if (motor == 4) {
      total += 4;
      total1 += 1;
    }
    if (motor == 3) {
      total += 3;
      total1 += 1;
    }
    if (motor == 2) {
      total += 2;
      total1 += 1;
    }
    if (motor == 1) {
      total += 1;
      total1 += 1;
    }
    if (verbal == 5) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 5
      total += 5;  // Aqui se suma el numero 5 a la variable total
      total2 += 1;  // Aqui se suma el numero 1 a la variable total2
    }
    if (verbal == 4) {
      total += 4;
      total2 += 1;
    }
    if (verbal == 3) {
      total += 3;
      total2 += 1;
    }
    if (verbal == 2) {
      total += 2;
      total2 += 1;
    }
    if (verbal == 1) {
      total += 1;
      total2 += 1;
    }
    if (ojos == 4) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 4
      total += 4;    // Aqui se suma el numero 4 a la variable total
      total3 += 1; // Aqui se suma el numero 1 a la variable total3
    }
    if (ojos == 3) {
      total += 3;
      total3 += 1;
    }
    if (ojos == 2) {
      total += 2;
      total3 += 1;
    }
    if (ojos == 1) {
      total += 1;
      total3 += 1;
    }
    if (total1 == 0 || total2 == 0 || total3 == 0) { // Aqui se hace una validacion de que el usuario ingrese un numero erroneo
      alert("Opss los parametros que ingresaste no son los correctos");
      }
    else { // Aqui se muestra el puntaje final  
      alert("El puntaje en la escala de Coma de Glasgow es: " + total);
      if (total < 5) { // Aqui se hace una validacion de que el puntaje final sea menor a 5
        alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
        salida();
      }
      else {
        if (total < 11) { // Aqui se hace una validacion en caso de un puntaje menor que 11
          alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa intermedio (más profundo cuanto menor el resultado)");
        }
        else {
          if (total < 15) {   // Aqui se hace una validacion en caso de un puntaje menor que 15
              alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
          }
          else { // Aqui se hace una validacion en caso de un puntaje = que 15
              alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nNormalidad");
          }
        }
      }
    }
    }
  }
//__________________________________________________________________________________________________________________
//Calculadora de IMC
    function calculadoraIMC() {
        let peso = prompt("Ingrese su peso en kg");
        let altura = prompt("Ingrese su altura en metros");
        let imc = peso / (altura * altura);
        alert("Su indice de masa corporal es: " + imc);
        if (imc < 18.5) {
            alert("El paciente se encuentra en un estado de: \n\nBajo peso");
        }
        else {
            if (imc < 25) {
                alert("El paciente se encuentra en un estado de: \n\nPeso normal");
            }
            else {
                if (imc < 30) {
                    alert("El paciente se encuentra en un estado de: \n\nSobrepeso");
                }
                else {
                    if (imc < 35) {
                        alert("El paciente se encuentra en un estado de: \n\nObesidad grado I");
                    }
                    else {
                        if (imc < 40) {
                            alert("El paciente se encuentra en un estado de: \n\nObesidad grado II");
                        }
                        else {
                            alert("El paciente se encuentra en un estado de: \n\nObesidad grado III");
                        }
                    }
                }
            }
        }
    }
//__________________________________________________________________________________________________________________
// Calculadoras de Peso ideal
    function calculadoraPesoIdeal() {
        let peso = prompt("Ingrese su peso en kg");
        let altura = prompt("Ingrese su altura en metros");
        let pesoIdeal = peso / (altura * altura);
        alert("Su peso ideal es: " + pesoIdeal);
    }
    function fechaParto() {
        let fum = prompt("Ingrese fecha de ultima menstruacion");
        let fecha = new Date(fum);
        let fechaActual = new Date();
        let diferencia = fechaActual.getTime() - fecha.getTime();
        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        alert("La fecha de parto es: " + dias + " dias");
    }