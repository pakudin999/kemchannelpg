
import React from 'react';
import { TeamMember } from '../types';

interface ConfirmationModalProps {
    member: TeamMember;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ member, onClose, onConfirm }) => {
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-backdrop bg-black/50 absolute inset-0"></div>
            <div 
                className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full m-4 p-6 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.436L3 21l1.436-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Start WhatsApp Chat</h3>
                    <p className="text-gray-600 mb-6">
                        Open WhatsApp to chat with <span className="font-semibold text-gray-900">{member.name}</span>?
                    </p>
                    <div className="flex space-x-3">
                        <button 
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={onConfirm}
                            className="flex-1 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            Open WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
