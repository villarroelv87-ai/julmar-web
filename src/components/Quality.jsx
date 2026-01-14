import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Award, HardHat, CheckCircle2 } from 'lucide-react';

const Quality = () => {
    const features = [
        {
            icon: <Wrench size={40} />,
            title: "Mantención Preventiva",
            description: "Nuestra flota cuenta con un riguroso programa de mantenimiento para asegurar un 100% de operatividad en faena."
        },
        {
            icon: <HardHat size={40} />,
            title: "Operadores Certificados",
            description: "Personal altamente calificado y con vasta experiencia en proyectos mineros, viales y agrícolas."
        },
        {
            icon: <Award size={40} />,
            title: "Estándares de Seguridad",
            description: "Cumplimos con todas las normativas y certificaciones exigidas por la industria para garantizar obras seguras."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-julmar-green font-bold uppercase tracking-widest mb-2 block text-sm">Por qué elegirnos</span>
                    <h2 className="text-3xl md:text-5xl font-black text-julmar-dark mb-4">COMPROMISO DE CALIDAD</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        En Maquinarias Julmar, no solo arrendamos equipos; entregamos confiabilidad y eficiencia para tu proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="w-16 h-16 bg-julmar-green/10 rounded-2xl flex items-center justify-center mb-6 text-julmar-green group-hover:bg-julmar-green group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="mt-6 flex items-center text-julmar-green font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <CheckCircle2 size={16} className="mr-2" />
                                <span>Garantizado</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quality;
