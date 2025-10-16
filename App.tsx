
import React, { useState, useEffect, useCallback } from 'react';
import { TeamMember } from './types';
import { TEAM_MEMBERS } from './constants';
import Header from './components/Header';
import TeamList from './components/TeamList';
import ConfirmationModal from './components/ConfirmationModal';

const App: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleSelectMember = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const handleCloseModal = useCallback(() => {
        setSelectedMember(null);
    }, []);

    const handleConfirmAction = () => {
        if (selectedMember) {
            const whatsappUrl = `https://wa.me/${selectedMember.phone.replace(/^0/, '60')}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseModal();
            }
        };

        if (selectedMember) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedMember, handleCloseModal]);


    return (
        <>
            <main className="container mx-auto px-4 py-8 max-w-md">
                <Header />
                <TeamList members={TEAM_MEMBERS} onSelectMember={handleSelectMember} />
            </main>
            {selectedMember && (
                <ConfirmationModal 
                    member={selectedMember} 
                    onClose={handleCloseModal} 
                    onConfirm={handleConfirmAction} 
                />
            )}
        </>
    );
};

export default App;
