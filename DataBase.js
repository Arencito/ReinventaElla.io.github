var bd;

function IniciarBaseDatos()
  {
    var BtnGuardar = document.querySelector("#btn-guardar");
    BtnGuardar.addEventListener("click", AlmacenarContacto);

    var solicitud = indexedDB.open("Datos-De-Contactos");

    solicitud.addEventListener("error", MostrarError);
    solicitud.addEventListener("success", Comenzar);
    solicitud.addEventListener("upgradeneeded", CrearAlmacen);
  }

function MostrarError(evento) 
  {
      var error = evento.target.error;
      alert("Tenemos un ERROR: " + error.code + " / " + error.message);
  }

function Comenzar(evento)
  {
      bd = evento.target.result;
  }

function CrearAlmacen(evento)
  {
      var basededatos = evento.target.result;
      var almacen = basededatos.createObjectStore("Contactos", {keyPath: "id"});
      almacen.createIndex("BuscarNombre", "nombre", {unique: false});
  }

function AlmacenarContacto()
  {
    var N = document.querySelector("#nombre").value;
    var I = document.querySelector("#id").value;
    var E = document.querySelector("#edad").value;

    var transaccion = bd.transaction(["Contactos"], "readwrite");
    var almacen = transaccion.objectStore("Contactos");

    almacen.add({
                 nombre: N,
                 id: I,
                 edad: E
               });

    document.querySelector("#nombre").value = "";
    document.querySelector("#id").value = "";
    document.querySelector("#edad").value = "";
  }
window.addEventListener("load", IniciarBaseDatos);













