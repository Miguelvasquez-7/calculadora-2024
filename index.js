const productoInput = document.getElementById('producto');
const precioInput = document.getElementById('precio');
const accionSelect = document.getElementById('accion');
const agregarBtn = document.getElementById('agregar');
const listaProductos = document.getElementById('lista-productos');
const totalP = document.getElementById('total');
const capturaPantallaBtn = document.getElementById('captura-pantalla');
const limpiarBtn = document.getElementById('limpiar');
let total = 0;

agregarBtn.addEventListener('click', () => {
  const producto = productoInput.value;
  const precio = parseFloat(precioInput.value);
  const accion = accionSelect.value;

  if (producto && precio) {
    switch (accion) {
      case '+':
        total += precio;
        break;
      case '-':
        total -= precio;
        break;
      case '*':
        total *= precio;
        break;
      case '/':
        total /= precio;
        break;
    }

    const productoHTML = `
      <div class="producto">
        <span>${producto}</span>
        <span>$${precio}</span>
        <span>${accion}</span>
      </div>
    `;

    listaProductos.innerHTML += productoHTML;
    totalP.textContent = `Total: $${total.toFixed(2)}`;

    productoInput.value = '';
    precioInput.value = '';
  }
});

capturaPantallaBtn.addEventListener('click', () => {
  const calculadoraContainer = document.getElementById('calculadora');
  html2canvas(calculadoraContainer).then((canvas) => {
    const img = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = img;
    link.download = 'calculadora.png';
    link.click();
  });
});

limpiarBtn.addEventListener('click', () => {
  listaProductos.innerHTML = '';
  totalP.textContent = 'Total: $0';
  total = 0;
  productoInput.value = '';
  precioInput.value = '';
});
