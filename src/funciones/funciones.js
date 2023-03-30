function getContrastColor(hexColor) {
    // Convertir el color hexadecimal a RGB
    const rgbColor = hexToRgb(hexColor);
    // Calcular la luminosidad del color de fondo
    const bgLuminosity = getLuminosity(rgbColor);
    // Determinar el mejor color de texto en función del contraste
    if (bgLuminosity > 0.5) {
      return '#000'; // Si el fondo es claro, el texto debe ser oscuro
    } else {
      return '#fff'; // Si el fondo es oscuro, el texto debe ser claro
    }
  }
  
  function hexToRgb(hexColor) {
    // Convertir el color hexadecimal a RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return { r, g, b };
  }
  
  function getLuminosity({ r, g, b }) {
    // Calcular la luminosidad de un color RGB
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  }

  function handleColorChange(event) {
    const input = event.target;
    const color = input.value;
    // Establecer el color de fondo del elemento
    const element = document.getElementById('mi-elemento');
    element.style.backgroundColor = color;
    // Obtener el mejor color de texto en función del contraste
    const textColor = getContrastColor(color);
    // Establecer el color de texto del elemento
    element.style.color = textColor;
  }  
  //
  //import { traerDatos } from '../context/FunctionsFireBase'

export const colorTextoSegunContraste = (colorContraste) =>{
   return getContrastColor(colorContraste);
}