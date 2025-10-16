
import React, { useState, useEffect, useCallback } from 'react';

// --- TYPE DEFINITIONS ---
interface TeamMember {
    name: string;
    phone: string;
}

interface TeamMemberCardProps {
    member: TeamMember;
    onClick: (member: TeamMember) => void;
}

interface TeamListProps {
    members: TeamMember[];
    onMemberClick: (member: TeamMember) => void;
}


// --- DATA ---
const TEAM_MEMBERS: TeamMember[] = [
    { name: 'FASYA', phone: '0143839582' },
    { name: 'LIEN', phone: '0162659190' },
    { name: 'LISA', phone: '01110516455' },
    { name: 'ECA', phone: '01116179190' },
    { name: 'FARAH', phone: '0146499190' },
    { name: 'FIFI', phone: '0168019190' },
    { name: 'AYU', phone: '0143839682' },
    { name: 'IREEN', phone: '0173744553' },
    { name: 'JIHA', phone: '0174044557' }
];

// --- HELPER CONSTANTS & FUNCTIONS ---
const COLORS = [
    'bg-red-200 text-red-700', 'bg-orange-200 text-orange-700',
    'bg-amber-200 text-amber-700', 'bg-yellow-200 text-yellow-700',
    'bg-lime-200 text-lime-700', 'bg-green-200 text-green-700',
    'bg-emerald-200 text-emerald-700', 'bg-teal-200 text-teal-700',
    'bg-cyan-200 text-cyan-700', 'bg-sky-200 text-sky-700',
    'bg-blue-200 text-blue-700', 'bg-indigo-200 text-indigo-700',
    'bg-violet-200 text-violet-700', 'bg-purple-200 text-purple-700',
    'bg-fuchsia-200 text-fuchsia-700', 'bg-pink-200 text-pink-700',
    'bg-rose-200 text-rose-700',
];

const getAvatarColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % COLORS.length);
    return COLORS[index];
};


// --- COMPONENTS ---
const Avatar: React.FC<{ name: string }> = ({ name }) => {
    const initial = name.charAt(0).toUpperCase();
    const colorClasses = getAvatarColor(name);

    return (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses}`}>
            <span className="font-semibold text-lg">{initial}</span>
        </div>
    );
};

const Header: React.FC = () => {
    return (
        <header className="text-center mb-8">
            <div className="w-full aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden shadow-lg">
                <img 
                    src="https://i.imgur.com/3tq8TU6.jpeg" 
                    alt="Channel Banner"
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-2">
                <span>@kemchannelpg</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm3.123 5.467a.75.75 0 00-1.06 1.06l1.25 1.25a.75.75 0 001.06 0l2.5-2.5a.75.75 0 00-1.06-1.06L9.39 9.22l-.722-.722z" clipRule="evenodd" />
                </svg>
            </h1>
            <p className="text-gray-600">Your direct line to our expert team.</p>
        </header>
    );
};

const SearchBar: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => (
    <div className="relative mb-6">
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Find a specialist..."
            className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition-shadow shadow-sm"
            aria-label="Search for a team member"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </div>
    </div>
);

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onClick }) => (
    <button
        className="w-full bg-white/80 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 p-3 flex items-center space-x-3"
        onClick={() => onClick(member)}
        aria-label={`Contact ${member.name} on WhatsApp`}
    >
        <Avatar name={member.name} />
        <div className="flex-grow text-left">
            <div className="flex items-center space-x-1.5">
                <h2 className="text-base font-semibold text-gray-900">{member.name}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm3.123 5.467a.75.75 0 00-1.06 1.06l1.25 1.25a.75.75 0 001.06 0l2.5-2.5a.75.75 0 00-1.06-1.06L9.39 9.22l-.722-.722z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-xs text-gray-500">Sales Specialist</p>
        </div>
    </button>
);

const TeamList: React.FC<TeamListProps> = ({ members, onMemberClick }) => {
    if (members.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500 font-medium">No specialist found.</p>
                <p className="text-sm text-gray-400 mt-1">Try a different name.</p>
            </div>
        );
    }
    
    return (
        <div className="grid grid-cols-2 gap-3">
            {members.map((member) => (
                <TeamMemberCard 
                    key={member.name} 
                    member={member} 
                    onClick={onMemberClick}
                />
            ))}
        </div>
    );
};


// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMembers = TEAM_MEMBERS.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const openWhatsApp = (member: TeamMember) => {
        const whatsappUrl = `https://wa.me/${member.phone.replace(/^0/, '60')}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="p-4 sm:p-8">
            <main className="w-full max-w-md mx-auto bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg px-4 sm:px-6 py-8">
                <Header />
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <TeamList 
                    members={filteredMembers} 
                    onMemberClick={openWhatsApp} 
                />
            </main>
        </div>
    );
};

export default App;
