    'use client';

    import { useState } from 'react';

    const ContactPage = () => {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });
        const [status, setStatus] = useState<string>(''); // Definir explicitamente el tipo como string

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            // Validación simple del correo electrónico
            if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                setStatus('Por favor ingrese un correo electrónico válido');
                return;
            }

            setStatus('Enviando...'); // Mostrar mensaje de carga mientras se envía el correo

            try {
                const response = await fetch('https://sendemail-3fujvy5ywq-uc.a.run.app//send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setStatus('Mensaje enviado exitosamente');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setStatus('Hubo un problema al enviar el mensaje');
                }
            } catch (error) {
                setStatus(`Error al enviar el mensaje: ${error instanceof Error ? error.message : 'Desconocido'}`);
            }
        };

        return (
            <div style={{ padding: '2rem' }}>
                <h1>Contacto</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        );
    };

    export default ContactPage;
