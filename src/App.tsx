import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import FormContact from "./components/FormContact";
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <main className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <section className="bg-white w-4/5 grid grid-cols-2 rounded-lg shadow border border-gray-300">
                <section className="relative -mt-10 ml-10 bg-contain shadow rounded-lg -mb-10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                    <article className="flex flex-col px-10 items-center text-white">
                        <figure className="mt-10">
                            <img className="w-40 h-40 object-cover rounded-full" src="foto_francisco-soto.jpg" alt="foto perfil" />
                        </figure>
                        <h2 className="text-4xl text-yellow-500 font-black backdrop-blur-lg px-5 py-1 rounded-lg border my-5">Contáctame</h2>
                        <p className="font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                            impedit! Cupiditate enim officia magni consequatur.
                        </p>
                        <ul className="w-full mt-5">
                            <li className="flex gap-2">
                                <FaSquarePhone className="text-2xl"/>
                                <span>+57 3200000000</span>
                            </li>
                            <li className="flex gap-2">
                                <MdEmail className="text-2xl" />
                                <span>contacto@gmail.com</span>
                            </li>
                        </ul>
                        <div className="w-full flex items-center gap-2 justify-center mt-10">
                            <FaGithubSquare className="text-3xl" />
                            <FaLinkedin className="text-3xl text-blue-500" />                        
                        </div>
                    </article>
                </section>
                <section className="py-5 relative">
                    <FormContact/>
                </section>
            </section>
            <Toaster position="bottom-right"/>
        </main>
    )
}
export default App;
