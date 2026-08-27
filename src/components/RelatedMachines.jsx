import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { machines } from '../data/machines';
import { slugify } from '../utils/stringUtils';

const RelatedMachines = ({ currentMachineId }) => {
    const sliderRef = useRef(null);

    // Logic: Sort machines by ID descending (newest first), exclude current, take top 8
    const relatedMachines = [...machines]
        .sort((a, b) => b.id - a.id)
        .filter(m => m.id !== currentMachineId)
        .slice(0, 8);

    if (relatedMachines.length === 0) return null;

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -344 : 344; // Card width + gap (approx)
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="mt-16 mb-8 border-t border-gray-200 pt-16">
            <div className="flex items-center justify-between mb-8 px-4 sm:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Últimas incorporaciones a nuestra Flota
                </h2>
                <Link to="/#flota" className="hidden md:flex items-center text-julmar-green font-bold hover:text-julmar-green-dark transition-colors">
                    Ver toda la flota <ChevronRight size={20} className="ml-1" />
                </Link>
            </div>

            {/* Slider Container */}
            <div className="relative group/slider">
                <div 
                    ref={sliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 px-4 sm:px-0 scroll-smooth"
                >
                    {relatedMachines.map((machine) => (
                        <div 
                            key={machine.id} 
                            className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-xl group"
                        >
                            <Link to={`/flota/${slugify(machine.name)}`} className="block relative h-48 overflow-hidden bg-gray-50">
                                <img 
                                    src={machine.image} 
                                    alt={machine.name} 
                                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${machine.fit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
                                />
                                <div className="absolute top-4 left-4 bg-julmar-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    {machine.category}
                                </div>
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                                    {machine.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 flex-grow">
                                    {machine.capacity.split('|')[0]}
                                </p>
                                <Link 
                                    to={`/flota/${slugify(machine.name)}`}
                                    className="block w-full text-center bg-gray-50 hover:bg-julmar-green hover:text-white text-julmar-dark font-bold py-3 rounded-xl transition-colors border border-gray-200 hover:border-julmar-green"
                                >
                                    Ver Detalles
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows (Desktop Only) */}
                <button 
                    onClick={() => scroll('left')}
                    className="hidden md:flex absolute left-[-24px] top-[calc(50%-24px)] -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 hover:text-julmar-green transition-all z-10 opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="hidden md:flex absolute right-[-24px] top-[calc(50%-24px)] -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 hover:text-julmar-green transition-all z-10 opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
                    aria-label="Siguiente"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Visual hint for mobile scrolling */}
                <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden z-10"></div>
            </div>
            
            <div className="mt-4 px-4 text-center md:hidden">
                 <Link to="/#flota" className="inline-flex items-center text-julmar-green font-bold hover:text-julmar-green-dark transition-colors">
                    Ver toda la flota <ChevronRight size={20} className="ml-1" />
                </Link>
            </div>
        </section>
    );
};

export default RelatedMachines;
