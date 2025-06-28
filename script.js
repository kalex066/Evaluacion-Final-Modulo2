document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openTestModal");
  const modalElement = document.getElementById("testModal");
  const testModal = new bootstrap.Modal(modalElement);

  const form = document.getElementById("securityTestForm");
  const resultDiv = document.getElementById("testResult");

  // Mostrar el modal al hacer clic en el botón
  openModalBtn.addEventListener("click", function () {
    testModal.show();
    // Lógica para el formulario de contacto clásico
  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");

  if (contactForm && contactMessage) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      contactMessage.style.display = "block";
      contactForm.reset();

      setTimeout(() => {
        contactMessage.style.display = "none";
      }, 3000);
    });
  }
  });

  // Evaluar respuestas al enviar el formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let yesCount = 0;

    for (let i = 1; i <= 3; i++) {
      const answer = form.querySelector(`input[name="q${i}"]:checked`);
      if (answer && answer.value === "si") {
        yesCount++;
      }
    }

    let message = "";
    let color = "text-success";

    if (yesCount === 3) {
      message = "✅ Tus datos están seguros en la red.";
    } else if (yesCount === 2) {
      message = "⚠️ Debes tener precaución con tus datos en la red.";
      color = "text-warning";
    } else {
      message = "❌ Necesitas aprender de ciberseguridad.";
      color = "text-danger";
    }

    resultDiv.className = `mt-3 fw-bold text-center ${color}`;
    resultDiv.style.display = "block";
    resultDiv.textContent = message;
  });

  // Reiniciar formulario al cerrar el modal
  modalElement.addEventListener("hidden.bs.modal", function () {
    form.reset();                         // Limpia respuestas
    resultDiv.style.display = "none";     // Oculta el resultado
    resultDiv.textContent = "";           // Borra mensaje
    resultDiv.className = "";             // Limpia clases
  });
});

$(document).ready(function() {
    // Toggle del menú de navegación en móviles
    $('#navbar-toggle').click(function() {
        $('#navbar-menu').toggleClass('hidden');
    });

    // Botón de contacto
    $('#contact-btn').click(function() {
        bootbox.dialog({
            title: '<span class="text-blue-600 font-bold">Formulario de Contacto</span>',
            message: `
                <form id="contact-form">
                    <div class="mb-3">
                        <label for="contact-name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="contact-name" required>
                    </div>
                    <div class="mb-3">
                        <label for="contact-email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="contact-email" required>
                    </div>
                    <div class="mb-3">
                        <label for="contact-message" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="contact-message" rows="4" required></textarea>
                    </div>
                </form>
            `,
            buttons: {
                cancel: {
                    label: 'Cerrar',
                    className: 'btn btn-secondary'
                },
                confirm: {
                    label: 'Enviar',
                    className: 'btn bg-blue-600 text-white hover:bg-red-500',
                    callback: function() {
                        let name = $('#contact-name').val();
                        let email = $('#contact-email').val();
                        let message = $('#contact-message').val();
                        if (name && email && message) {
                            console.log('Formulario de contacto enviado:', { name, email, message });
                            bootbox.alert('¡Mensaje enviado con éxito!');
                            return true;
                        } else {
                            bootbox.alert('Por favor, completa todos los campos.');
                            return false;
                        }
                    }
                }
            }
        });
    });
});
