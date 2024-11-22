
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        // Cerrar cualquier respuesta abierta
        document.querySelectorAll('.faq-answer.open').forEach(answer => {
            if (answer !== question.nextElementSibling) {
                answer.classList.remove('open');
            }
        });

        // Alternar la respuesta seleccionada
        const answer = question.nextElementSibling;
        answer.classList.toggle('open');
    });
});

