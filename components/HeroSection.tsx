'use client';

import { Shield, Play } from 'lucide-react';

interface HeroSectionProps {
  onScrollToCheckout: () => void;
  onScrollToCurriculum: () => void;
  onOpenVideoModal: () => void;
}

export default function HeroSection({
  onScrollToCheckout,
  onScrollToCurriculum,
  onOpenVideoModal,
}: HeroSectionProps) {
  return (
    <section className="pt-10 pb-16 sm:py-16 lg:py-[72px]">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[540px_520px] gap-8 lg:gap-[44px] items-center justify-between">
          
          {/* Left Column */}
          <div className="flex flex-col gap-[22px]">
            {/* Tag */}
            <div className="self-start inline-flex items-center gap-2 px-[14px] py-[7px] rounded-full bg-[#E3EEF9] border border-[#B9D3EE] font-mono text-[12px] tracking-[0.14em] uppercase text-[#0A5EA3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8900F] animate-pulse" />
              Khóa học cho coach &amp; consultant
            </div>

            {/* Headline */}
            <h1 className="m-0 text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.12] font-extrabold tracking-[-0.025em] text-[#0F1D33]">
              Tự đóng gói và bán{' '}
              <span className="text-[#0870C4]">chương trình đầu tiên</span>, theo tốc độ của bạn.
            </h1>

            {/* Description */}
            <p className="m-0 text-[16px] sm:text-[18px] leading-[1.6] text-[#4E5E75]">
              [6 module · 42 bài · 9 giờ video]. Mỗi bài 10–15 phút, học xong bài nào có ngay một đầu ra dùng được.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-1">
              <button
                type="button"
                onClick={onScrollToCheckout}
                className="h-[58px] px-[30px] rounded-[10px] bg-[#0870C4] hover:bg-[#065A9E] active:scale-[0.98] text-white font-bold text-[17px] transition-all shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
              >
                Vào học ngay
              </button>
              
              <button
                type="button"
                onClick={onScrollToCurriculum}
                className="text-[15px] font-semibold text-[#0870C4] hover:text-[#065A9E] hover:underline flex items-center gap-1 cursor-pointer py-2"
              >
                Xem lộ trình 6 module ↓
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-[18px] text-[13px] sm:text-[14px] text-[#4E5E75] pt-1">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#0870C4] flex-shrink-0" strokeWidth={2.2} />
                <span>Hoàn 100% trong 14 ngày</span>
              </div>
              <span className="hidden sm:inline text-[#C9D5E3]">·</span>
              <div>Truy cập trọn đời</div>
              <span className="hidden sm:inline text-[#C9D5E3]">·</span>
              <div>
                <span className="font-bold text-[#0F1D33]">[2.100+]</span> học viên ·{' '}
                <span className="font-bold text-[#0F1D33]">[4.8/5]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Video & Instructor */}
          <div className="flex flex-col gap-3">
            {/* Video Player Card */}
            <div
              onClick={onOpenVideoModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenVideoModal()}
              className="h-[293px] rounded-[16px] bg-[#0F1D33] relative flex items-center justify-center overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all"
            >
              {/* Subtle background glow & texture */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1D33] via-[#162742] to-[#1c3254] opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(#0870C4_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

              {/* Free Trial Badge */}
              <div className="absolute top-4 left-4 px-[10px] py-[5px] rounded-[6px] bg-[#F2A43A] font-mono text-[11px] tracking-[0.1em] font-bold text-[#0F1D33] shadow-sm z-10">
                HỌC THỬ MIỄN PHÍ
              </div>

              {/* Play Button */}
              <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-[#0870C4] group-hover:bg-[#0983e4] group-hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl">
                <Play className="w-[26px] h-[26px] text-white fill-white ml-1" />
              </div>

              {/* Bottom Video Metadata */}
              <div className="absolute left-5 bottom-4 right-5 z-10 flex justify-between items-center text-[13px] sm:text-[14px] text-[#C8D3E1] font-medium">
                <span className="truncate pr-2">Bài 1.2 · [Viết câu định vị trong 15 phút]</span>
                <span className="font-mono text-[#A9B8CC] flex-shrink-0">[14:20]</span>
              </div>
            </div>

            {/* Instructor Info Box */}
            <div className="flex items-center gap-3 p-[14px_16px] rounded-[12px] bg-[#F8FAFC] border border-[#D9E1EB]">
              <div className="w-10 h-10 rounded-full bg-[#DDE6F0] flex-shrink-0 flex items-center justify-center font-mono text-[10px] font-bold text-[#5A6B82] border border-[#C9D5E3]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5A6B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="text-[13px] sm:text-[14px] leading-[1.45] text-[#3A4A61]">
                <span className="font-bold text-[#0F1D33]">[Tên giảng viên]</span> · [5+] năm bán sản phẩm tri thức, [2.100+] học viên
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
