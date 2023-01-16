
alert("¡Bienvenido/a a TUF-GAMING-STORE!")

const laptopCarrito = [];

class LAPTOP {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    modeloLaptop() {
        return `Unidad ${this.nombre}`;
    }
    precioLaptop() {
        return `Precio ${this.precio}`;
    }
}

///////////////

function menu() {
    const nombre = prompt(`Ingresa el nombre de LAPTOP que quieras comprar:

  - ASUS TUF A15 | $210.000
  - ASUS TUF F15 | $250.000
  - ASUS TUF Dash F15 | $290.000
  - ASUS TUF Dash F15 (2022) | $300.000
  - ASUS TUF F17 | $350.000
  `);
    const precio = parseInt(prompt("Ingrese precio de lista (SIN $, NI .)"));

    const peticionUnidad = new LAPTOP(nombre, precio);

    peticionUnidad.modeloLaptop(),
    peticionUnidad.precioLaptop(),

    laptopCarrito.push(peticionUnidad);

    if (confirm("¿Desea agregar otra unidad al carrito?")) {
        menu();
    } else {
        for (let unidad of laptopCarrito) {
            console.log(`
    LAPTOP: ${unidad.nombre} 
    PRECIO: ${unidad.precio}  
            `);
        }
    }
}

menu();