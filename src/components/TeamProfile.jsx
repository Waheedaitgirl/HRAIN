import React from 'react';
import ceoImage from '../assets/Images/ceo.png';

const TeamProfile = () => {
    const services = [
        "Stammering, CP",
        "Post Stroke conditions",
        "Delayed Speech",
        "Autism",
        "Hearing Impairments",
        "Intellectual Disabilities",
        "ADHD",
        "English/Urdu Language Courses",
        "IELTS",
        "Visa Interview Preparation",
        "Others"
    ];

    return (
        <div className="flex flex-col items-center w-full pt-8 pb-2 space-y-6">
            <div className="relative group">
                <img
                    src={ceoImage}
                    alt="CEO Sofia Raheel"
                    className="w-64 h-64 object-cover object-top rounded-3xl shadow-lg border-4 border-white/20 animate-float hover:scale-105 transition-transform duration-300 relative z-10"
                />
                <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-2xl opacity-20 -z-0 animate-pulse"></div>
            </div>

            <h2 className="text-4xl font-bold text-blue-900 drop-shadow-sm mt-4">
                CEO Sofia Raheel
            </h2>

            <h3 className="text-2xl font-semibold text-blue-800">
                Speech Therapies for:
            </h3>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl px-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-white/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-sm text-gray-900 font-semibold hover:bg-white/60 hover:scale-105 transition-all duration-300 transform cursor-default">
                        {service}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamProfile;
