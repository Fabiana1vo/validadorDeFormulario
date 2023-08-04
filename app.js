class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        });

    }

    handleSubmit(e) {
        e.preventDefault();

        // Validando os campos
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos() {

        let valid = true;
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;
            this.criaErro(campo, `Campo "${label}" não pode estar em branco.`)
            valid = false;
        }
    }

    criaErro(campo, msg) {
        const div = document.createElement("div");
        div.innerHTML = `${msg}`
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); //Faz com que apareça abaixo do campo
    }
}

const valida = new ValidaFormulario();