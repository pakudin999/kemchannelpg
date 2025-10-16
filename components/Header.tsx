
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-8">
            <div className="w-full aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden shadow-lg">
                 <img 
                    src="https://picsum.photos/seed/business/600/338" 
                    alt="Channel Banner"
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">@kemchannelpg</h1>
            <p className="text-gray-600">Connect with our specialists</p>
        </header>
    );
};

export default Header;
