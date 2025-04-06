//formulario reserva
document.getElementById('enviar-whatsapp').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const personas = document.getElementById('personas').value;

    if (nombre && telefono && fecha && hora && personas) {
        // Formatear el mensaje con saltos de línea
        const mensaje = `Hola, mi nombre es ${nombre}.\nQuisiera reservar una mesa:\nCantida de personas: ${personas} \nFecha: ${fecha}\nHora: ${hora}\nMi teléfono es: ${telefono}.`;
        const url = `https://wa.me/34684792506?text=${encodeURIComponent(mensaje)}`;
    
    
    
        // Redirigir a WhatsApp
        window.open(url, '_blank');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});


// Configuración para evitar fechas pasadas y horas específicas
document.addEventListener('DOMContentLoaded', function () {
    // Configurar el campo de fecha para deshabilitar fechas pasadas
    const fechaInput = document.getElementById('fecha');
    const hoy = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato AAAA-MM-DD
    fechaInput.setAttribute('min', hoy); // Establecer fecha mínima en el input

    // Generar las opciones de hora
    const horaSelect = document.getElementById('hora');
    const inicio = 18; // Hora de inicio (18:00)
    const fin = 21.5; // Hora de fin (21:30, expresado como 21.5)
    
    for (let hora = inicio; hora <= fin; hora += 0.5) {
        const horas = Math.floor(hora); // Parte entera de la hora
        const minutos = hora % 1 === 0 ? '00' : '30'; // Minutos (00 o 30)
        const opcion = document.createElement('option');
        opcion.value = `${horas}:${minutos}`;
        opcion.textContent = `${horas}:${minutos}`;
        horaSelect.appendChild(opcion);
    }
});



    //calendario
    document.addEventListener('DOMContentLoaded', function () {
        const reservas = []; // Array para almacenar las reservas
        const calendarDiv = document.getElementById('calendar');
    
        // Función para actualizar el calendario
        function actualizarCalendario() {
            calendarDiv.innerHTML = ''; // Limpiar el contenido previo del calendario
    
            const days = ['Hoy', 'Mañana', 'Pasado Mañana'];
            const hours = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];
    
            days.forEach(day => {
                const table = document.createElement('table');
                const headerRow = document.createElement('tr');
    
                const thDay = document.createElement('th');
                thDay.colSpan = 2;
                thDay.textContent = `Reservas para ${day}`;
                headerRow.appendChild(thDay);
                table.appendChild(headerRow);
    
                hours.forEach(hour => {
                    const row = document.createElement('tr');
                    const tdHour = document.createElement('td');
                    tdHour.textContent = hour;
    
                    const tdStatus = document.createElement('td');
                    const isReserved = reservas.some(reserva => reserva.fecha === day && reserva.hora === hour);
    
                    // Configurar estado inicial
                    if (isReserved) {
                        tdStatus.textContent = 'Reservado';
                        tdStatus.classList.add('reserved');
                    } else {
                        tdStatus.textContent = 'Disponible';
                        tdStatus.classList.add('available');
                    }
    
                    // Agregar evento para cambiar estado
                    tdStatus.addEventListener('click', function () {
                        if (tdStatus.textContent === 'Disponible') {
                            tdStatus.textContent = 'Reservado';
                            tdStatus.classList.remove('available');
                            tdStatus.classList.add('reserved');
                            reservas.push({ fecha: day, hora: hour });
                        } else {
                            tdStatus.textContent = 'Disponible';
                            tdStatus.classList.remove('reserved');
                            tdStatus.classList.add('available');
                            const index = reservas.findIndex(reserva => reserva.fecha === day && reserva.hora === hour);
                            if (index !== -1) reservas.splice(index, 1);
                        }
                    });
    
                    row.appendChild(tdHour);
                    row.appendChild(tdStatus);
                    table.appendChild(row);
                });
    
                calendarDiv.appendChild(table);
            });
        }
    
        // Inicializar el calendario
        actualizarCalendario();
    });
    