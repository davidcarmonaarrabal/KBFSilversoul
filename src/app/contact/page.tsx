    'use client';

    import { useState } from 'react';

    const ContactPage = () => {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });
        const [status, setStatus] = useState<string>(''); 

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                setStatus('Please introduce a valid e-mail');
                return;
            }

            setStatus('Enviando...');

            try {
                const response = await fetch('https://sendemail-3fujvy5ywq-uc.a.run.app/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setStatus('Message sent!');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setStatus('There was a problem sending the message... :(');
                }
            } catch (error) {
                setStatus(`Error at sending the message: ${error instanceof Error ? error.message : 'Desconocido'}`);
            }
        };

        return (
            <div style={{ padding: '2rem' }}>
                <h1 className='text-black text-2xl'>Contact me:</h1>
                <div className='bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] w-[345px] sm:w-[615px] 
                md:w-[740px] lg:w-[1000px] xl:w-[1240px] 2xl:w-[1500px] m-6'>
                    <form onSubmit={handleSubmit} className='p-2'>
                        <div>
                            <div>
                                <label htmlFor="name" className='text-black'>Your Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                required className='text-black border-black border-[2px] bg-yellow-100 rounded-md pl-1 w-full'/>
                            </div>
                            <div>
                                <label htmlFor="email" className='text-black'>Your e-mail:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                required className='text-black border-black border-[2px] bg-yellow-100 rounded-md pl-1 w-full'/>
                            </div>
                            <div>
                                <label htmlFor="message" className='text-black'>Message:</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                required className='text-black border-black border-[2px] bg-yellow-100 rounded-md pl-1 w-full
                                h-[300px] resize-none'/>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button type="submit" className='bg-yellow-200 p-2 rounded-lg border-black border-2 hover:bg-yellow-400
                            transition duration-300 w-full text-2x text-black'>Send message</button>
                        </div>
                        {status && <p className='text-2xl text-black'>{status}</p>}
                    </form>
                </div>
            </div>
        );
    };

    export default ContactPage;
