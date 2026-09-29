'use client';

import { Check, X } from 'lucide-react';

export default function FitCheckSection() {
  const suitablePoints = [
    'Bạn đã có khách trả tiền cho dịch vụ 1-1 và muốn có sản phẩm bán nhiều lần',
    'Bạn tự học được, chỉ cần lộ trình rõ và template sẵn',
    'Bạn dành được [3 giờ] mỗi tuần',
  ];

  const unsuitablePoints = [
    'Bạn cần người kèm 1-1, sửa bài cho bạn từng bước',
    'Bạn tìm một khóa chuyên sâu về chạy quảng cáo',
  ];

  return (
    <section className="py-[72px] sm:py-[88px] border-t border-[#D9E1EB]">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Dành cho bạn nếu... */}
          <div className="p-7 sm:p-8 rounded-[16px] bg-[#E3EEF9] border border-[#B9D3EE] flex flex-col gap-[14px]">
            <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold text-[#0F1D33]">
              Dành cho bạn nếu…
            </h3>
            <div className="flex flex-col gap-3 mt-1">
              {suitablePoints.map((point, idx) => (
                <div key={idx} className="flex gap-[10px] text-[15px] sm:text-[16px] leading-[1.5] text-[#0F1D33]">
                  <Check className="w-[18px] h-[18px] text-[#0870C4] flex-shrink-0 mt-[3px]" strokeWidth={2.4} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chưa phù hợp nếu... */}
          <div className="p-7 sm:p-8 rounded-[16px] bg-[#F1F4F8] border border-[#D9E1EB] flex flex-col gap-[14px]">
            <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold text-[#0F1D33]">
              Chưa phù hợp nếu…
            </h3>
            <div className="flex flex-col gap-3 mt-1">
              {unsuitablePoints.map((point, idx) => (
                <div key={idx} className="flex gap-[10px] text-[15px] sm:text-[16px] leading-[1.5] text-[#4E5E75]">
                  <X className="w-[18px] h-[18px] text-[#8A9BB2] flex-shrink-0 mt-[3px]" strokeWidth={2.2} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
