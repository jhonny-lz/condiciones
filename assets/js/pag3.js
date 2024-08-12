document.getElementById('ingresar').addEventListener('click', function() {

    const clave1 = document.getElementById('clave1').value;
    const clave2 = document.getElementById('clave2').value;
    const clave3 = document.getElementById('clave3').value;

    const contraseña = clave1 + clave2 + clave3;

    
    const resultado3 = document.getElementById('resultado3');

    if (contraseña === '911') {
        resultado3.textContent = 'Contraseña 1 correcta';
        resultado3.style.color = 'green';
    } else if (contraseña === '714') {
        resultado3.textContent = 'Contraseña 2 es correcta';
        resultado3.style.color = 'green';
    } else {
        resultado3.textContent = 'Contraseña incorrecta';
        resultado3.style.color = 'red';
    }
});