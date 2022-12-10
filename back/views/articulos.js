fetch('http://localhost:4000/api/articulos')
.then(res => res.json())
.then(data => {
    const contenedor = document.getElementById('contenedor');
    const id = document.createElement('p');
    const articulo = document.createElement('p');  
    const inventario = document.createElement('p');
    const descripcion = document.createElement('p');
    const lugar = document.createElement('p');
    const fecha = document.createElement('p');
    const responsable = document.createElement('p');
    const codigo = document.createElement('p');
    const telefono = document.createElement('p');
    const estado = document.createElement('p');

    id.innerHTML = `Id: ${data[0]._id}`;
    articulo.innerHTML = `Articulo: ${data[0].articulo}`;
    inventario.innerHTML = `Inventario: ${data[0].inventario}`;
    descripcion.innerHTML = `Descripcion: ${data[0].descripcion}`;
    lugar.innerHTML = `Lugar: ${data[0].lugar}`;
    fecha.innerHTML = `Fecha: ${data[0].fecha}`;
    responsable.innerHTML = `Responsable: ${data[0].responsable}`;
    codigo.innerHTML = `Codigo: ${data[0].codigo}`;
    telefono.innerHTML = `Telefono: ${data[0].telefono}`;
    estado.innerHTML = `Estado: ${data[0].estado}`;

    contenedor.appendChild(id);
    contenedor.appendChild(articulo);
    contenedor.appendChild(inventario);
    contenedor.appendChild(descripcion);
    contenedor.appendChild(lugar);
    contenedor.appendChild(fecha);
    contenedor.appendChild(responsable);
    contenedor.appendChild(codigo);
    contenedor.appendChild(telefono);
    contenedor.appendChild(estado);

    



})