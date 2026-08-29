'use client';

import React from 'react';

export default function WhatsAppButton() {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX';
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  const isPlaceholder = cleanNumber.includes('X') || cleanNumber.length < 10;

  const defaultMessage = encodeURIComponent(
    'Hello TeamWork Group! I am reaching out from your website to get a quote for your services.'
  );

  const whatsappUrl = isPlaceholder
    ? '#'
    : `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  const handleClick = (e: React.MouseEvent) => {
    if (isPlaceholder) {
      e.preventDefault();
      alert(
        'WhatsApp Business Number Placeholder: Please update NEXT_PUBLIC_WHATSAPP_NUMBER in your environment variables (.env) before launch!'
      );
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-30 flex items-center gap-2">
      <a
        href={whatsappUrl}
        target={isPlaceholder ? '_self' : '_blank'}
        rel="noopener noreferrer"
        onClick={handleClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-400 group"
        aria-label="Chat with TeamWork Group on WhatsApp"
        title={
          isPlaceholder
            ? 'WhatsApp Business Number Placeholder (Update in .env)'
            : 'Chat on WhatsApp'
        }
      >
        {/* WhatsApp Icon */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.279.444-1.156 4.22 4.32-1.132.3.185z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold text-xs pl-0 group-hover:pl-2">
          WhatsApp Us
        </span>
      </a>

      {isPlaceholder && (
        <span className="hidden sm:inline-block bg-slate-900/90 text-amber-300 text-[10px] font-mono px-2 py-1 rounded border border-amber-500/30">
          [WhatsApp # Pending]
        </span>
      )}
    </div>
  );
}
