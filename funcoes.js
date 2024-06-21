class CanvasCliente {
  constructor() {
    const canvas = document.querySelector("#canvasCliente");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    this.signaturePad = new SignaturePad(canvas, {});
  }
}

class CanvasInspectorTerreno {
  constructor() {
    const canvas = document.querySelector("#canvasInspectorTerreno");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    this.signaturePad = new SignaturePad(canvas, {});
  }
}

window.addEventListener('load', () => {
  const canvasCliente = new CanvasCliente().signaturePad;
  const canvasInspectorTerreno = new CanvasInspectorTerreno().signaturePad;
});

function borrarFirmaCliente() {
  const canvasCliente = document.getElementById("canvasCliente");
  const contexto = canvasCliente.getContext("2d");
  contexto.clearRect(0, 0, canvasCliente.width, canvasCliente.height);
}

function borrarFirmaProyectista() {
  const canvasInspectorTerreno = document.getElementById("canvasInspectorTerreno");
  const contexto = canvasInspectorTerreno.getContext("2d");
  contexto.clearRect(0, 0, canvasInspectorTerreno.width, canvasInspectorTerreno.height);
}


