
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
    member: TeamMember;
    onSelect: (member: TeamMember) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onSelect }) => (
    <button
        className="w-full bg-white/80 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        onClick={() => onSelect(member)}
        aria-label={`Chat with ${member.name} on WhatsApp`}
    >
        <div className="p-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            </div>
            <div className="flex-grow text-left">
                <div className="flex items-center space-x-1.5 mb-0.5">
                    <h2 className="text-sm font-semibold text-gray-900">{member.name}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm3.123 5.467a.75.75 0 00-1.06 1.06l1.25 1.25a.75.75 0 001.06 0l2.5-2.5a.75.75 0 00-1.06-1.06L9.39 9.22l-.722-.722z" clipRule="evenodd" />
                    </svg>
                </div>
                <p className="text-xs text-gray-500">Sales Specialist</p>
            </div>
        </div>
    </button>
);


interface TeamListProps {
    members: TeamMember[];
    onSelectMember: (member: TeamMember) => void;
}

const TeamList: React.FC<TeamListProps> = ({ members, onSelectMember }) => {
    return (
        <div className="grid grid-cols-2 gap-3">
            {members.map((member) => (
                <TeamMemberCard key={member.name} member={member} onSelect={onSelectMember} />
            ))}
        </div>
    );
};

export default TeamList;
