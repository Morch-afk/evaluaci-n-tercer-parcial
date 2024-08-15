function mostrarFormulario() {
    const figura = document.getElementById('figura').value;
    const formulario = document.getElementById('formulario');
    formulario.innerHTML = ''; // Limpiar el formulario

    if (figura === 'cuadrado') {
        formulario.innerHTML = `
            <img src="./images/pngwing.com.png" alt="Cuadrado" width="100">
            <input type="number" id="lado" placeholder="Lado">
            <button onclick="calcularArea()">Calcular Área</button>
        `;
    } else if (figura === 'triangulo') {
        formulario.innerHTML = `
            <img src="./images/pngwing.com (1).png" alt="Triángulo" width="100">
            <input type="number" id="base" placeholder="Base">
            <input type="number" id="altura" placeholder="Altura">
            <button onclick="calcularArea()">Calcular Área</button>
        `;
    } else if (figura === 'circulo') {
        formulario.innerHTML = `
            <img src="./images/pngwing.com (2).png" alt="Círculo" width="100">
            <input type="number" id="radio" placeholder="Radio">
            <button onclick="calcularArea()">Calcular Área</button>
        `;
    }
}

function calcularArea() {
    const figura = document.getElementById('figura').value;
    let area;
    
    if (figura === 'cuadrado') {
        const lado = document.getElementById('lado').value;
        area = lado * lado;
    } else if (figura === 'triangulo') {
        const base = document.getElementById('base').value;
        const altura = document.getElementById('altura').value;
        area = (base * altura) / 2;
    } else if (figura === 'circulo') {
        const radio = document.getElementById('radio').value;
        area = Math.PI * radio * radio;
    }

    document.getElementById('resultado').innerText = `El área del ${figura} es: ${area}`;
}