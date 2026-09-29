'use client';

import { Clock, FileText, MessageSquare, CheckCircle, Download, ExternalLink } from 'lucide-react';

export default function LearningMethodSection() {
  return (
    <section className="py-[72px] sm:py-[88px] border-t border-[#D9E1EB]">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_580px] gap-8 lg:gap-[44px] items-center">
          
          {/* Left Column: Learning Features */}
          <div className="flex flex-col gap-4">
            {/* Kicker */}
            <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#0870C4] font-medium">
              (C) Cách học
            </div>

            {/* Headline */}
            <h2 className="m-0 text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#0F1D33]">
              Thiết kế để bạn học hết, không bỏ dở.
            </h2>

            {/* Feature List */}
            <div className="flex flex-col gap-[18px] mt-2">
              {/* Feature 1 */}
              <div className="flex gap-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#E3EEF9] flex-shrink-0 flex items-center justify-center text-[#0870C4]">
                  <Clock className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="m-0 text-[17px] font-bold text-[#0F1D33]">
                    Bài 10–15 phút
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-[#4E5E75] mt-0.5">
                    Học trong giờ nghỉ trưa, trên điện thoại hoặc máy tính.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#E3EEF9] flex-shrink-0 flex items-center justify-center text-[#0870C4]">
                  <FileText className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="m-0 text-[17px] font-bold text-[#0F1D33]">
                    Mỗi bài một template
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-[#4E5E75] mt-0.5">
                    Xem xong là điền luôn, không phải tự nghĩ từ trang trắng.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#E3EEF9] flex-shrink-0 flex items-center justify-center text-[#0870C4]">
                  <MessageSquare className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="m-0 text-[17px] font-bold text-[#0F1D33]">
                    Nhóm hỏi đáp
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-[#4E5E75] mt-0.5">
                    Kẹt ở đâu hỏi ở đó, [giảng viên] trả lời trong [48 giờ].
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Platform Learning Interface Screenshot Mockup */}
          <div className="relative min-h-[380px] sm:h-[400px] rounded-[16px] bg-[#DDE6F0] border border-[#C9D5E3] overflow-hidden flex flex-col p-4 sm:p-5 shadow-sm">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#C9D5E3]/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FA5252]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FAB005]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#40C057]/80" />
                <span className="ml-2 font-mono text-[11px] text-[#5A6B82] hidden sm:inline">
                  lms.soloexpert.vn/module-03/bai-4
                </span>
              </div>
              <div className="text-[11px] font-mono font-semibold text-[#0870C4] bg-[#E3EEF9] px-2.5 py-0.5 rounded-md">
                Tiến độ: 78% (33/42 bài)
              </div>
            </div>

            {/* Inner Dashboard UI preview */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-[1.2fr_0.9fr] gap-3 pt-3 overflow-hidden">
              {/* Left inner video player */}
              <div className="flex flex-col bg-[#0F1D33] rounded-xl overflow-hidden shadow-inner">
                <div className="flex-1 relative flex items-center justify-center min-h-[140px] bg-gradient-to-br from-[#0F1D33] to-[#1E2D4A]">
                  <div className="w-12 h-12 rounded-full bg-[#0870C4] flex items-center justify-center text-white shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 px-2 py-1 bg-black/40 rounded backdrop-blur-xs text-[10px] text-white">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>08:24 / 12:40 · Định giá gói cốt lõi</span>
                  </div>
                </div>
                <div className="p-2.5 bg-[#0A1424] text-white text-[12px] flex justify-between items-center">
                  <span className="font-medium text-slate-200 truncate pr-2">
                    Bài 3.4 · Bảng tính định giá gói dịch vụ
                  </span>
                  <span className="text-[#F2A43A] text-[10px] font-mono">ĐÃ HOÀN THÀNH</span>
                </div>
              </div>

              {/* Right inner lesson & template list */}
              <div className="flex flex-col gap-2 bg-[#F8FAFC] rounded-xl p-3 border border-[#C9D5E3] text-[12px]">
                <div className="font-bold text-[#0F1D33] flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-[#0870C4]" />
                  Tài liệu &amp; Template đính kèm
                </div>

                {/* Template link 1 */}
                <div className="p-2 rounded-lg bg-[#E3EEF9]/70 border border-[#B9D3EE] flex items-center justify-between text-[#0F1D33] hover:bg-[#E3EEF9] transition-colors">
                  <div className="truncate pr-1">
                    <div className="font-semibold text-[11px] truncate">Template-Dinh-Gia-3-Cap.xlsx</div>
                    <div className="text-[10px] text-[#4E5E75]">Google Sheets · Sẵn công thức</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0870C4] flex-shrink-0" />
                </div>

                {/* Template link 2 */}
                <div className="p-2 rounded-lg bg-white border border-[#D9E1EB] flex items-center justify-between text-[#0F1D33]">
                  <div className="truncate pr-1">
                    <div className="font-semibold text-[11px] truncate">Kich-Ban-Offer-Chot.docx</div>
                    <div className="text-[10px] text-[#4E5E75]">Google Docs · Điền vào là dùng</div>
                  </div>
                  <Download className="w-3.5 h-3.5 text-[#5A6B82] flex-shrink-0" />
                </div>

                {/* Checklist progress */}
                <div className="mt-auto pt-2 border-t border-[#D9E1EB] text-[11px] text-[#4E5E75] flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[#2B8A3E] font-medium">
                    <CheckCircle className="w-3.5 h-3.5" /> 2 template đã nộp
                  </span>
                  <span className="font-mono text-[10px]">Hỏi đáp: 24/7</span>
                </div>
              </div>
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-3 text-center font-mono text-[11px] text-[#5A6B82] bg-white/70 py-1.5 px-3 rounded-lg border border-[#C9D5E3]/60">
              [Ảnh chụp màn hình thật của nền tảng học: danh sách bài, thanh tiến độ, template đính kèm]
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
