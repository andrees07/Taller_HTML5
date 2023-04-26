const selectorColor = () => {
    var selectValue = document.getElementById("mySeleccion").value
    document.body.style.backgroundColor = selectValue
}

function mostrarOcultar(id) {
    var seccion = document.getElementById(id);
    var flecha = seccion.querySelector('.flecha');
    if (seccion.style.display === 'none') {
      seccion.style.display = 'block';
      flecha.textContent = '▼';
    } else {
      seccion.style.display = 'none';
      flecha.textContent = '▲';
    }
  }

  const main = () => {
    let selectorColor = document.querySelector("#mySeleccion")
    selectorColor.addEventListener("click", selectorColor);
  
    let mostrarOcultar = document.querySelectorAll(".flecha")
    mostrarOcultar.forEach((flecha) =>
      flecha.addEventListener("click", function () {
        mostrarOcultar(flecha.parentElement.id)
      })
    )
  }

 