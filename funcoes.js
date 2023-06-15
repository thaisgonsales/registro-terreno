class CanvasCliente {
  constructor() {
    const canvas = document.querySelector("#canvasCliente");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    this.signaturePad = new SignaturePad(canvas, {});
  }
}

class CanvasProyectista {
  constructor() {
    const canvas = document.querySelector("#canvasProyectista");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    this.signaturePad = new SignaturePad(canvas, {});
  }
}

window.addEventListener('load', () => {
  const canvasCliente = new CanvasCliente().signaturePad;
  const canvasProyectista = new CanvasProyectista().signaturePad;
  
  // Aquí se pueden utilizar las instancias de las clases para dibujar la firma en los campos correspondientes
});

let signaturePad = null;

window.addEventListener('load', async () => {
  const canvasProyectista = document.querySelector("#canvasProyectista");
  canvasProyectista.height = canvasProyectista.offsetHeight;
  canvasProyectista.width = canvasProyectista.offsetWidth;

  signaturePad = new SignaturePad(canvasProyectista, {});
});


function borrarFirmaCliente() {
  // Obtiene el elemento del canvas
  const canvasCliente = document.getElementById("canvasCliente");

  // Obtiene el contexto del canvas en 2D
  const contexto = canvasCliente.getContext("2d");

  // Limpia el canvas
  contexto.clearRect(0, 0, canvasCliente.width, canvasCliente.height);
}

function borrarFirmaProyectista() {
  // Obtiene el elemento del canvas
  const canvasProyectista = document.getElementById("canvasProyectista");

  // Obtiene el contexto del canvas en 2D
  const contexto = canvasProyectista.getContext("2d");

  // Limpia el canvas
  contexto.clearRect(0, 0, canvasProyectista.width, canvasProyectista.height);
}

function imprimir() {
  window.print();
}











