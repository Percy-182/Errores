const userData = (() => {
  // Se crea una "arrow function" por nombre "userData"
  const container = document.querySelector("#user-data"); //y dentro de esta fuction una const "container" que contendrá los datos de los usuarios asignandolo al id="user-data"
  return {
    // al leer lo ingresado con "document.querySelector", devolverá todos los elementos que estén en el id indicado ()
    show: async () => {
      // se crea un arrowfuncion async por nombre "show"
      let response = await fetch("https://randomuser.me/api/?results=10"); //genera una solicitud GET para obetener informacion de la API en un let por nombre "response"
      let data = await response.json(); //se crea por nombre "data" la respuesta de la API en format json
      const userInfo = data.results // se le pide a la const definida por nombre "userInfo" que pida y almacene la info que se encuentra en "data"results
        .map(
          //crea un nuevo array con la iformacion solicitada en la linea anterior
          (
            i //array por nombre "i" y usando interpolacion se llama a la data, se crean elementos de html para mostrar los datos de picture, nombre, apellido, email y celular de la API
          ) =>
            `<div>
					 Imagen de ${i.name.first}: 
					<img src='${i.picture.large}'/>
          <br>_________________________________________________________________|</br>
					<div>
						<br><span>Nombre de Usuario: ${i.name.first} ${i.name.last} </span></br>
						<br><span>Correo Electronico: ${i.email} </span></br>
						<br><span>Celular: ${i.cell} </span></br>
            <br></br>
					</div>
				</>`
        )
        .join(""); //con el method join retorna los elementos de "i" en una cadena de str
      container.innerHTML = userInfo; // posteriormente todo lo ingresado y leido por la const "container" inserta a HTML todo lo ingresado y lo iguala a la const userInfo
    },
  };
})(); //se cierra bloque de codigo
userData.show(); //se llama a la const userData con su propiedad show
