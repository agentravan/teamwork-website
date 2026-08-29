'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyQuoteCTA from './StickyQuoteCTA';
import WhatsAppButton from './WhatsAppButton';
import QuoteModal from './QuoteModal';
import Analytics from './Analytics';

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedVertical, setSelectedVertical] = useState('General Inquiry');

  const handleOpenQuoteModal = (vertical?: string) => {
    if (vertical) setSelectedVertical(vertical);
    setQuoteModalOpen(true);
  };

  return (
    <>
      <Analytics />
      <Header onOpenQuoteModal={handleOpenQuoteModal} />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <StickyQuoteCTA onOpenModal={() => handleOpenQuoteModal()} />
      <WhatsAppButton />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultVertical={selectedVertical}
      />
    </>
  );
}
