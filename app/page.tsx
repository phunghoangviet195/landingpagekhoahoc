'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import CurriculumSection from '@/components/CurriculumSection';
import LearningMethodSection from '@/components/LearningMethodSection';
import StudentResultsSection from '@/components/StudentResultsSection';
import FitCheckSection from '@/components/FitCheckSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { VideoModal, PaymentModal, PolicyModal } from '@/components/Modals';

interface OrderData {
  fullName: string;
  email: string;
  phone: string;
  includeOrderBump: boolean;
  totalAmount: number;
}

export default function LandingPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [activeOrderData, setActiveOrderData] = useState<OrderData | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'refund' | 'contact' | 'zalo' | null>(null);

  const scrollToCheckout = () => {
    const el = document.getElementById('mua');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById('lo-trinh');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPaymentModal = (data: OrderData) => {
    setActiveOrderData(data);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EEF3F8] text-[#1B2A41] flex flex-col font-sans selection:bg-[#0870C4] selection:text-white">
      {/* 1. Header */}
      <Header onScrollToCheckout={scrollToCheckout} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <HeroSection
          onScrollToCheckout={scrollToCheckout}
          onScrollToCurriculum={scrollToCurriculum}
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* 3. Section (A) Vấn đề */}
        <ProblemSection />

        {/* 4. Section (B) Lộ trình */}
        <CurriculumSection
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* 5. Section (C) Cách học */}
        <LearningMethodSection />

        {/* 6. Section (D) Kết quả học viên */}
        <StudentResultsSection />

        {/* 7. Fit Check: Dành cho bạn nếu / Chưa phù hợp nếu */}
        <FitCheckSection />

        {/* 8. Section (E) Học phí & Form đăng ký */}
        <PricingSection onOpenPaymentModal={handleOpenPaymentModal} />

        {/* 9. Section (F) Câu hỏi thường gặp */}
        <FaqSection
          onScrollToCheckout={scrollToCheckout}
          onOpenZaloModal={() => setPolicyModalType('zalo')}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenPrivacyModal={() => setPolicyModalType('privacy')}
        onOpenRefundModal={() => setPolicyModalType('refund')}
        onOpenContactModal={() => setPolicyModalType('contact')}
      />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onScrollToCheckout={scrollToCheckout}
      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        orderData={activeOrderData}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}
