import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiTextAlignJustify } from "react-icons/ci";
import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from "react";
import toast from 'react-hot-toast';

const FormContact = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_48g8j7w', 'template_03esgx7', form.current, 'wYRCaXw5C3PmN_VpX')
                .then(
                    () => {
                        toast.success('Mensaje enviado correctamente!');
                        form.current?.reset(); 
                    },
                    (error) => {
                        toast.error('Error al enviar el mensaje.');
                        console.log('FAILED...', error);
                    }
                );
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="max-w-sm mx-auto">
            <label htmlFor="name-contact" className="block mb-2 text-sm font-medium text-gray-900">Nombre Completo:</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaRegUserCircle className="text-xl text-gray-500" />
                </div>
                <input required type="text" name="user_name" id="name-contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Tu nombre aqui..." />
            </div>
            <label htmlFor="email" className="block my-2 text-sm font-medium text-gray-900">Email:</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <MdEmail className="text-xl text-gray-500" />
                </div>
                <input required type="email" name="user_email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="example@example.com..." />
            </div>
            <label htmlFor="subject" className="block my-2 text-sm font-medium text-gray-900">Asunto:</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <CiTextAlignJustify className="text-xl text-gray-500" />
                </div>
                <input required type="text" name="subject" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Tu asunto aqui..." />
            </div>
            <label htmlFor="message" className="block my-2 text-sm font-medium text-gray-900">Mensaje:</label>
            <textarea required id="message" name="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu mensaje aqui..." />
            <input className="w-full cursor-pointer text-white font-bold mt-4 bg-gray-800 py-2 rounded-lg" type="submit" value='Enviar mensaje' />
        </form>
    );
}
export default FormContact;