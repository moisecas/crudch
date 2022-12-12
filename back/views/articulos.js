fetch('http://localhost:4000/api/articulos')
.then(res => res.json())
.then(data => {
    

    for (const doc of data) {
        const container = document.createElement('div');
        container.innerHTML = `
          <p>Id: ${doc._id}</p>
          <p>Artículo: ${doc.articulo}</p>
          <p>Inventario: ${doc.inventario}</p>
          <p>Descripción: ${doc.descripcion}</p>
          <p>Lugar: ${doc.lugar}</p>
          <p>Fecha: ${doc.fecha}</p>
          <p>Responsable: ${doc.responsable}</p>
          <p>Código: ${doc.codigo}</p>
          <p>Teléfono: ${doc.telefono}</p>
          <p>Estado: ${doc.estado}</p>
        `;
        document.body.appendChild(container);
      }

      //eliminar articulo
     
        const deleteArticulo = async (id) => {
            await fetch(`http://localhost:4000/api/articulo/${id}`, {
                method: 'DELETE'
            });
            window.location.reload();
        }
        //actualizar articulo
        const updateArticulo = async (id) => {
            await fetch(`http://localhost:4000/api/articulo/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    articulo: 'Articulo actualizado',
                    inventario: 'Inventario actualizado',
                    descripcion: 'Descripcion actualizada',
                    lugar: 'Lugar actualizado',
                    fecha: 'Fecha actualizada',
                    responsable: 'Responsable actualizado',
                    codigo: 'Codigo actualizado',
                    telefono: 'Telefono actualizado',
                    estado: 'Estado actualizado'
                })
            });
            window.location.reload();
        }

        //crear articulo
        const addArticulo = async () => {
            await fetch('http://localhost:4000/api/articulo', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    articulo: 'Articulo nuevo',
                    inventario: 'Inventario nuevo',
                    descripcion: 'Descripcion nueva',
                    lugar: 'Lugar nuevo',
                    fecha: 'Fecha nueva',
                    responsable: 'Responsable nuevo',
                    codigo: 'Codigo nuevo',
                    telefono: 'Telefono nuevo',
                    estado: 'Estado nuevo'
                })
            });
            window.location.reload();
        }

        //formulario addArticulo
        const form = document.getElementById('add-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            addArticulo();

        });  
     
    

       

        
});


        


