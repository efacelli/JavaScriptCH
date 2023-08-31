/*//array//

const nombres = ["enzo", "luis", "nacho"];

//push permite agregar al final//

nombres.push("tomi");

//unshift para agregar al inicio del arreglo//
nombres.unshift("matias");

//pop permite eliminar un elemento del final//
nombres.pop();

//shift para eliminar un elemento del principio//
nombres.shift();

//splice permite eliminar una cantidad segun los indiices
const names = ["andres", "camila", "valentina"];
names.splice(2, 1);

//recorrer el array
for (let i = 0;i < nombres.length; i++) {
    console.log(nombres)[i];
}


//crear objeto

const persona = {
    nombre: "Pedro",
    edad: 50,
    trabajo: "administrativo",
};

*/

/* -------------------------------- VARIABLES ------------------------------- */
const producto1 = "remera";
const producto1Precio = 2000;
const producto2 = "pantalón";
const producto2Precio = 4000;
const producto3 = "Medias";
const producto3Precio = 1000;

let agregar = confirm("¿Desea agregar un producto al carrito?");
let total = 0;
let carrito = "";

/* -------------------------------- FUNCIONES ------------------------------- */

const esProductoValido = (producto) => {
	return producto === 1 || producto === 2 || producto === 3;
};

const esCantidadInvalida = (cantidad) => {
	return isNaN(cantidad) || cantidad <= 0;
};

const pedirProducto = () => {
	let productoElegido = parseInt(prompt(`¿Qué producto desea agregar?\n 1. ${producto1}\n 2. ${producto2}\n 3. ${producto3}`));
	while (!esProductoValido(productoElegido)) {
		alert("Producto desconocido. Ingrese el número de producto");
		productoElegido = parseInt(prompt(`¿Qué producto desea agregar?\n 1. ${producto1}\n 2. ${producto2}\n 3. ${producto3}`));
	}
	return productoElegido;
};

const pedirCantidad = () => {
	let cantidad = parseInt(prompt(`¿Cuántas unidades desea?`));
	while (esCantidadInvalida(cantidad)) {
		alert("Ingrese una cantidad válida");
		cantidad = parseInt(prompt(`¿Cuántas unidades desea?`));
	}
	return cantidad;
};

const mostrarCarrito = () => {
	let mensaje = "";
	carrito.forEach((producto) => {
		mensaje += `Producto: ${producto.nombre} ---------------------------------------- $${producto.precio}\n`;
	});
	mensaje += `Total: $${total}`;
	alert(mensaje);
};

/* --------------------------------- LÓGICA --------------------------------- */

while (agregar) {
	const producto = pedirProducto();
	const cantidad = pedirCantidad();
	switch (producto) {
		case 1:
			carrito += `${cantidad}u. producto: ${producto1}\n`;
			total += producto1Precio * cantidad;
			break;
		case 2:
			carrito += `${cantidad}u. producto: ${producto2}\n`;
			total += producto2Precio * cantidad;

			break;
		case 3:
			carrito += `${cantidad}u. producto: ${producto3}\n`;
			total += producto3Precio * cantidad;

			break;
	}
	agregar = confirm("¿Desea agregar otro producto?");
}

if (total > 0) {
	let mensaje = carrito + `Total: $${total}`;
	alert(mensaje);
} else {
	alert("¡Qué tenga un buen día!");
}

/* -------------------------------- FUNCIONES ------------------------------- */

const llamarProducto = () => {
	let nombreDelProducto = prompt("¿Qué producto desea agregar?");
	let productoElegido = productos.find((producto) => producto.nombre === nombreDelProducto);
	while (!productoElegido) {
		alert("Producto no encontrado.");
		nombreDelProducto = prompt("¿Qué producto desea agregar?");
		productoElegido = productos.find((producto) => producto.nombre === nombreDelProducto);
	}
	alert(`El producto '${productoElegido.nombre}' tiene un costo de $${productoElegido.precio}`);
	return productoElegido;
};

const verCarrito = () => {
	let mensaje = "";
	carrito.forEach((producto) => {
		mensaje += `Producto: ${producto.nombre} ---------------------------------------- $${producto.precio}\n`;
	});
	mensaje += `Total: $${total}`;
	alert(mensaje);
};

/* --------------------------------- LÓGICA --------------------------------- */

while (agregar) {
	const producto = pedirProducto();
	total += producto.precio;
	carrito.push(producto);
	agregar = confirm("¿Desea agregar otro producto?");
}

if (total > 0) {
	mostrarCarrito();
} else {
	alert("¡Qué tenga un buen día!");
}