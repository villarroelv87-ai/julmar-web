import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Politica = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Política de Privacidad | Maquinarias Julmar SpA</title>
                <meta name="description" content="Política de privacidad de Maquinarias Julmar SpA. Información sobre recopilación de datos, cookies y uso de canales de contacto." />
            </Helmet>

            <div className="min-h-screen bg-white font-sans selection:bg-julmar-green selection:text-julmar-dark">
                <Navbar />
                
                <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-julmar-dark mb-8 uppercase tracking-tight">Política de Privacidad</h1>
                    <p className="text-gray-600 mb-12"><strong>Fecha de última actualización:</strong> Junio 2026<br/><strong>Empresa:</strong> Maquinarias Julmar SpA</p>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>En <strong>Maquinarias Julmar SpA</strong> valoramos y respetamos la privacidad de nuestros clientes, proveedores y usuarios que visitan nuestro sitio web. La presente Política de Privacidad ha sido elaborada en estricto cumplimiento con la legislación chilena vigente, incluyendo la <strong>Ley N° 21.719 sobre Protección de Datos Personales</strong>, para informar de manera clara, transparente y directa sobre cómo recopilamos, utilizamos, protegemos y tratamos la información personal obtenida a través de nuestra plataforma web y canales de contacto.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">1. ¿Quiénes Somos y Qué Hacemos?</h2>
                        <p><strong>Maquinarias Julmar SpA</strong> es una empresa dedicada a la comercialización, arriendo y gestión de maquinarias industriales y equipos afines. A través de nuestro sitio web, facilitamos un catálogo de nuestros productos y servicios para que empresas y particulares puedan solicitar cotizaciones, contactar con nuestro equipo comercial y resolver dudas técnicas.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">2. ¿Qué Datos Personales Recopilamos?</h2>
                        <p>Al navegar por nuestro sitio web o utilizar nuestros canales de atención (formularios, correos electrónicos, WhatsApp), podríamos solicitar los siguientes datos estrictamente necesarios para brindarle un servicio de calidad:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Datos de Identificación:</strong> Nombre completo.</li>
                            <li><strong>Datos de Contacto:</strong> Correo electrónico, número de teléfono (fijo o celular).</li>
                            <li><strong>Datos Comerciales:</strong> Nombre de la empresa a la que representa, cargo (si aplica), y detalles específicos sobre la maquinaria de su interés.</li>
                            <li><strong>Datos de Navegación:</strong> A través de herramientas analíticas (cookies), podemos recopilar datos anónimos como su dirección IP truncada, tipo de navegador, tiempo de visita y páginas consultadas, para mejorar el rendimiento técnico de la web.</li>
                        </ul>
                        <p>Este sitio web no está dirigido a menores de edad y no recopila deliberadamente información personal de personas menores de 18 años.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">3. ¿Para Qué Propósitos Utilizamos Sus Datos? (Finalidad)</h2>
                        <p>Los datos que usted nos proporciona voluntariamente son utilizados <strong>exclusivamente</strong> para las siguientes finalidades ligadas al giro de nuestra empresa:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Gestión Comercial:</strong> Elaboración y envío de cotizaciones personalizadas de las maquinarias solicitadas.</li>
                            <li><strong>Soporte y Atención al Cliente:</strong> Responder a sus consultas técnicas, dudas sobre disponibilidad de equipos o arriendos.</li>
                            <li><strong>Seguimiento de Ventas:</strong> Coordinación operativa para la entrega de equipos, facturación y servicios postventa.</li>
                            <li><strong>Mejora del Servicio:</strong> Analizar el tráfico de nuestro sitio web para optimizar la experiencia de usuario y el rendimiento de la plataforma.</li>
                        </ul>
                        <p className="italic bg-gray-50 p-4 rounded-lg border-l-4 border-julmar-green">En ningún caso Maquinarias Julmar SpA venderá, alquilará o cederá sus datos personales a terceros con fines publicitarios o ajenos a nuestra operación.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">4. Canales Oficiales de Contacto y Riesgos de Terceros</h2>
                        <p>Nuestra empresa utiliza múltiples canales para facilitar la comunicación ágil con nuestros clientes:</p>
                        
                        <h3 className="text-xl font-bold text-julmar-dark mt-6 mb-3">A. Uso de WhatsApp y Botones de Contacto Rápido</h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Terceros:</strong> WhatsApp es un servicio operado por un proveedor externo (<em>Meta Platforms Inc.</em>). Al usar los enlaces de tipo <code>wa.me</code> o nuestro botón de chat flotante, el tratamiento de la conversación queda sujeto también a las políticas de privacidad de Meta.</li>
                            <li><strong>Uso Seguro:</strong> Le instamos a <strong>NO enviar</strong> a través de WhatsApp información sensible como números de tarjetas de crédito, contraseñas, o datos financieros confidenciales. Utilice este canal exclusivamente para consultas operativas, solicitar catálogos o coordinar atención comercial.</li>
                            <li>Los mensajes precargados en el sitio web tienen fines de comodidad, siendo textos genéricos de aproximación comercial sin contener su información personal.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-julmar-dark mt-6 mb-3">B. Correos Electrónicos</h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Si usted nos contacta mediante enlaces <code>mailto</code> o al correo oficial de la empresa, los datos proporcionados serán gestionados mediante servicios de correo electrónico utilizados por la empresa y accesibles únicamente por personal autorizado.</li>
                            <li>No envíe copias de documentos de identidad no solicitados o información bancaria no encriptada a través del cuerpo de un correo electrónico regular.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">5. Medidas de Seguridad y Protección de la Información</h2>
                        <p>El sitio web de <strong>Maquinarias Julmar SpA</strong> cuenta con protocolos de seguridad técnicos y administrativos (Cifrado HTTPS/TLS, despliegue en infraestructura segura, medidas destinadas a reducir riesgos de ataques comunes contra aplicaciones web y políticas de contraseñas para administradores) orientados a evitar la pérdida, mal uso, alteración, acceso no autorizado o robo de los datos facilitados. Sin embargo, la transmisión de datos por Internet nunca es 100% segura, por lo que el usuario asume el riesgo inherente de las plataformas de telecomunicación.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">6. Uso de Cookies</h2>
                        <p>Nuestro sitio web puede utilizar "cookies" (pequeños archivos de texto almacenados en su navegador) para facilitar la navegación y ofrecer estadísticas de tráfico. Usted puede configurar su navegador en cualquier momento para rechazar estas cookies o ser avisado cuando se envían. Bloquearlas no afectará su capacidad para leer el catálogo de maquinarias, pero podría limitar ciertas funciones analíticas de la página.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">7. Retención de Datos</h2>
                        <p>La información recopilada será conservada únicamente durante el tiempo necesario para gestionar su cotización, mantener el registro histórico de operaciones comerciales para cumplir obligaciones legales y comerciales aplicables, o hasta que usted solicite su eliminación, tras lo cual será borrada de forma segura.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">8. Derechos del Titular de los Datos (Derechos ARCO y Portabilidad)</h2>
                        <p>En conformidad con la Ley N° 21.719, usted como titular de los datos personales tiene derecho en todo momento a:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Acceder</strong> a los datos que poseemos sobre usted y conocer los fines de su tratamiento.</li>
                            <li><strong>Rectificar</strong> aquellos datos que sean inexactos o incompletos.</li>
                            <li><strong>Solicitar la cancelación o eliminación</strong> de sus datos de nuestros registros comerciales.</li>
                            <li><strong>Oponerse</strong> a ser contactado para fines específicos no relacionados directamente con una cotización activa.</li>
                            <li><strong>Portabilidad:</strong> Solicitar una copia de sus datos personales en un formato estructurado y de uso común.</li>
                        </ul>
                        <p>Para ejercer cualquiera de estos derechos, o si tiene dudas sobre el tratamiento de su información, por favor dirija un correo electrónico al encargado de Privacidad a: <strong>jgalvez@julmarspa.com</strong>.</p>

                        <h2 className="text-2xl font-bold text-julmar-dark mt-10 mb-4">9. Actualizaciones a esta Política</h2>
                        <p>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento para adaptarla a novedades legislativas o corporativas. Recomendamos visitar esta página periódicamente para informarse sobre cualquier cambio. La fecha de la última actualización siempre será visible en la parte superior del documento.</p>
                    </div>
                </div>
                
                <Footer />
            </div>
        </>
    );
};

export default Politica;
