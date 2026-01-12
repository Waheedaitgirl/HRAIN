import React, { useState, useEffect } from 'react';

const coreValues = [
    { title: "Compassionate care", desc: "Providing empathetic and supportive services." },
    { title: "Evidence-based practices", desc: "Using research-backed therapies and approaches." },
    { title: "Empowerment", desc: "Helping individuals achieve their goals and improve their lives." },
    { title: "Inclusivity", desc: "Fostering a welcoming and accepting environment." },
    { title: "Exceptional service", desc: "Delivering high-quality care and support." }
];

const CoreValuesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % coreValues.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div id="services" className="relative w-full max-w-2xl mx-auto py-8">
            <div className="overflow-hidden relative h-48 md:h-40 flex items-center justify-center">
                {coreValues.map((value, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out transform ${index === currentIndex
                            ? "opacity-100 translate-x-0 scale-100"
                            : "opacity-0 translate-x-full scale-95"
                            }`}
                        style={{
                            // Hide non-active slides completely to prevent interaction/overlap issues if any
                            visibility: index === currentIndex ? 'visible' : 'hidden',
                            // Custom transition to handle the 'translate-x-full' for a sliding effect if desired, 
                            // but for a simple fade/center replace, we can remove translate or adjust.
                            // Let's stick to a clean fade and slight scale for elegance.
                            transform: index === currentIndex ? 'scale(1)' : 'scale(0.95)'
                        }}
                    >
                        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg w-full">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-900 font-medium">
                                {value.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
                {coreValues.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-blue-900" : "bg-blue-300 hover:bg-blue-500"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoreValuesCarousel;
