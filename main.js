
/*FUNCIONES*/

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

/*LÓGICA*/

while (agregar) {
	const producto = llamarProducto();
	total += producto.precio;
	carrito.push(producto);
	agregar = confirm("¿Desea agregar otro producto?");
}

if (total > 0) {
	mostrarCarrito();
} else {
	alert("¡Qué tenga un buen día!");
}