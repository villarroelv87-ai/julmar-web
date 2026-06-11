import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya aceptó las cookies previamente
        const consent = localStorage.getItem('julmar-cookie-consent');
        if (!consent) {
            // Un pequeño delay para que aparezca suavemente después de cargar
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('julmar-cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-julmar-dark/95 backdrop-blur-md border-t border-julmar-green/50 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] z-[200] p-4 md:p-6 text-white animate-fade-in-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                <div className="flex-1 text-sm md:text-base text-gray-300">
                    <p>
                        <strong>Aviso de Cookies:</strong> Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, analizar el rendimiento del sitio y optimizar nuestros servicios. Al hacer clic en "Aceptar", consientes el uso de estas tecnologías de acuerdo con nuestra{' '}
                        <Link to="/politica-de-privacidad" className="text-julmar-green hover:text-white transition-colors font-bold underline decoration-julmar-green/50 underline-offset-2">
                            Política de Privacidad
                        </Link>.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                    <button 
                        onClick={acceptCookies}
                        className="w-full md:w-auto bg-julmar-green hover:bg-[#7abd36] text-julmar-dark font-black py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-julmar-green/20 text-sm uppercase tracking-wide"
                    >
                        Aceptar y Continuar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
