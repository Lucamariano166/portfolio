import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = async (data) => {
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor
        console.log(data);
        
        // Exemplo de envio usando fetch (adicione a URL e ajuste conforme necessário)
        // await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),
        // });

        // Mostrar uma mensagem de sucesso e limpar o formulário
        alert('Mensagem enviada com sucesso!');
        reset();
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Nome"
                    {...register('name', { required: "Nome é obrigatório" })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
                
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email', { 
                        required: "Email é obrigatório", 
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email inválido"
                        }
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
                
                <textarea
                    placeholder="Mensagem"
                    {...register('message', { required: "Mensagem é obrigatória" })}
                ></textarea>
                {errors.message && <p className="error-message">{errors.message.message}</p>}
                
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
