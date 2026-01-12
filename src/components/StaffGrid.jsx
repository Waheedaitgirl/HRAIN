import React from 'react';
import drAImage from '../assets/Images/dr_A.png';
import mtImage from '../assets/Images/mt.png';
import psyImage from '../assets/Images/psy.png';
import gtImage from '../assets/Images/gt.png';

const staffMembers = [
    {
        id: 1,
        name: "Dr Aftab Khan",
        image: drAImage,
        services: ["Cupping Therapy (Skin, Organs, Joints & Timing)", "Herbal Treatment", "Homeopathic Treatment"]
    },
    {
        id: 2,
        name: "Shahrukh Ghouri",
        image: mtImage,
        services: ["Music Teacher", "Vocal Trainer"]
    },
    {
        id: 3,
        name: "Naseem Sheikh",
        image: psyImage,
        services: ["Clinical Psychologist", "Speech Therapist", "RBT"]
    },
    {
        id: 4,
        name: "Hunain Ahmed",
        image: gtImage,
        services: ["Guitar Teacher", "Vocal Trainer"]
    }
];

const StaffGrid = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-2 pb-12 px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 drop-shadow-md">
                Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {staffMembers.map((member) => (
                    <div key={member.id} className="flex flex-col items-center space-y-4">
                        <div className="relative group">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white/20 hover:scale-105 transition-transform duration-300 bg-white animate-float"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-blue-900 drop-shadow-sm text-center">
                            {member.name}
                        </h3>

                        <div className="flex flex-col items-center space-y-2 mt-2">
                            {member.services.map((service, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <span className="text-gray-900 font-medium text-center text-sm leading-tight max-w-[200px]">
                                        {service}
                                    </span>
                                    {idx < member.services.length - 1 && (
                                        <div className="w-12 h-px bg-white/30 my-1"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffGrid;
