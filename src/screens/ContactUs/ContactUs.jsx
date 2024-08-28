import Form from "../../components/Form/Form.jsx";
import css from './ContactUs.module.css';

function ContactUs() {
    return (
        <div className={css.contato}>
            <div className={css['contato-superior']}>
                <div className={css.detalhesContato}>
                    <h2>Fale Conosco!</h2>
                    <p>Capture o momento perfeito com a gente! 📸✨ Quer saber mais sobre nossos serviços de locação de cenários para fotografia e como podemos transformar suas memórias em imagens inesquecíveis? Preencha o formulário entre em contato conosco. Estamos prontos para criar algo incrível para você!</p>
                </div>
                <div className={css['secao-form']}>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
