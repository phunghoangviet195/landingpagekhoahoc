'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CurriculumSectionProps {
  onOpenVideoModal: () => void;
}

interface ModuleItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  output: string;
  hasFreeTrial?: boolean;
  lessons: string[];
}

export default function CurriculumSection({ onOpenVideoModal }: CurriculumSectionProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const modules: ModuleItem[] = [
    {
      id: 'm1',
      number: '01',
      title: 'Định vị',
      duration: '[7 bài · 1 giờ 20 phút]',
      output: '[câu định vị một dòng và chân dung khách hàng]',
      hasFreeTrial: true,
      lessons: [
        'Bài 1.1: Tư duy sản phẩm tri thức & sai lầm thường gặp',
        'Bài 1.2: Viết câu định vị trong 15 phút (Bài học thử miễn phí)',
        'Bài 1.3: Chân dung khách hàng trả tiền cao (ICP)',
        'Bài 1.4: Phân tích 3 rào cản tâm lý của người mua dịch vụ',
        'Bài 1.5: Xác định nỗi đau cấp thiết & lời hứa cốt lõi',
        'Bài 1.6: Hoàn thiện Profile một trang',
        'Bài 1.7: Hướng dẫn điền Template Định vị',
      ],
    },
    {
      id: 'm2',
      number: '02',
      title: 'Thiết kế chương trình',
      duration: '[8 bài · 1 giờ 40 phút]',
      output: '[dàn bài chương trình và lộ trình cho học viên]',
      lessons: [
        'Bài 2.1: Cấu trúc chương trình học để học viên đạt kết quả thật',
        'Bài 2.2: Thiết kế lộ trình 4-6-8 tuần từng bước',
        'Bài 2.3: Công thức bài học 10-15 phút không lan man',
        'Bài 2.4: Đóng gói tài liệu và template kèm theo',
        'Bài 2.5: Tiêu chí kiểm tra đầu ra từng module',
        'Bài 2.6: Cách tạo bài tập thực hành ứng dụng ngay',
        'Bài 2.7: Tránh quá tải kiến thức cho học viên',
        'Bài 2.8: Hướng dẫn xuất bản lộ trình khóa học',
      ],
    },
    {
      id: 'm3',
      number: '03',
      title: 'Định giá & offer',
      duration: '[6 bài · 1 giờ 10 phút]',
      output: '[mức giá, bonus và cam kết của bạn]',
      lessons: [
        'Bài 3.1: Định giá dựa trên giá trị chuyển đổi thay vì giờ làm',
        'Bài 3.2: 3 bậc định giá: Low-ticket, Core offer, High-ticket',
        'Bài 3.3: Thiết kế gói bonus không tốn thêm thời gian vận hành',
        'Bài 3.4: Xây dựng chính sách bảo hiểm & cam kết kết quả',
        'Bài 3.5: Kỹ thuật trình bày bảng giá trên trang bán',
        'Bài 3.6: Bảng tính hoàn vốn và điểm hòa vốn',
      ],
    },
    {
      id: 'm4',
      number: '04',
      title: 'Trang bán hàng',
      duration: '[7 bài · 1 giờ 30 phút]',
      output: '[trang bán hoàn chỉnh từ template]',
      lessons: [
        'Bài 4.1: Cấu trúc 7 phần của một trang bán hàng chuyển đổi cao',
        'Bài 4.2: Viết tiêu đề chính và tiêu đề phụ cuốn hút',
        'Bài 4.3: Trình bày vấn đề và lý do không thể trì hoãn',
        'Bài 4.4: Showcasing kết quả học viên & bằng chứng xã hội',
        'Bài 4.5: Khung câu hỏi thường gặp (FAQ) đập tan do dự',
        'Bài 4.6: Thiết lập form đặt hàng và cổng thanh toán VietQR',
        'Bài 4.7: Hướng dẫn cài đặt nhanh từ Notion/Web Template',
      ],
    },
    {
      id: 'm5',
      number: '05',
      title: 'Nội dung kéo khách',
      duration: '[8 bài · 1 giờ 50 phút]',
      output: '[lịch 30 ngày nội dung và chuỗi 5 email]',
      lessons: [
        'Bài 5.1: 4 trụ cột nội dung thu hút khách hàng tiềm năng',
        'Bài 5.2: Công thức viết bài case study và chia sẻ góc nhìn',
        'Bài 5.3: Lịch 30 ngày đăng bài không bao giờ cạn ý tưởng',
        'Bài 5.4: Viết chuỗi 5 email nuôi dưỡng dẫn dắt đến offer',
        'Bài 5.5: Kêu gọi hành động (CTA) mềm mại nhưng hiệu quả',
        'Bài 5.6: Tối ưu bio cá nhân để chuyển đổi người theo dõi',
        'Bài 5.7: Tương tác và xây dựng quan hệ với khách mục tiêu',
        'Bài 5.8: Hướng dẫn đo lường và tinh chỉnh nội dung',
      ],
    },
    {
      id: 'm6',
      number: '06',
      title: 'Ra mắt & 10 khách đầu',
      duration: '[6 bài · 1 giờ 30 phút]',
      output: '[kế hoạch ra mắt 7 ngày và kịch bản chốt]',
      lessons: [
        'Bài 6.1: Chiến dịch ra mắt 7 ngày từng bước chi tiết',
        'Bài 6.2: Mẫu thông báo mở cổng đăng ký cho người đăng ký sớm',
        'Bài 6.3: Kịch bản tư vấn chốt đơn qua Zalo / Messenger 1-1',
        'Bài 6.4: Xử lý 5 lời từ chối phổ biến nhất',
        'Bài 6.5: Email và tin nhắn giờ chót trước khi đóng ưu đãi',
        'Bài 6.6: Chào mừng 10 học viên đầu tiên & thu thập feedback',
      ],
    },
  ];

  const toggleModule = (id: string) => {
    setExpandedModule(prev => (prev === id ? null : id));
  };

  return (
    <section id="lo-trinh" className="py-[72px] sm:py-[88px] border-t border-[#D9E1EB]">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-4">
        {/* Kicker */}
        <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#0870C4] font-medium">
          (B) Lộ trình
        </div>

        {/* Headline */}
        <h2 className="m-0 text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#0F1D33] max-w-[760px]">
          6 module, mỗi module một đầu ra bạn dùng được ngay.
        </h2>

        {/* Modules Table List */}
        <div className="rounded-[16px] bg-[#F8FAFC] border border-[#D9E1EB] mt-5 overflow-hidden divide-y divide-[#D9E1EB]">
          {modules.map((m) => {
            const isExpanded = expandedModule === m.id;
            return (
              <div key={m.id} className="transition-colors hover:bg-slate-50/70">
                {/* Main Row */}
                <div className="grid grid-cols-1 md:grid-cols-[72px_1fr_300px_150px] gap-3 md:gap-6 items-start md:items-center p-5 sm:p-[22px_28px]">
                  {/* Module Number */}
                  <div className="font-mono text-[22px] font-bold text-[#0870C4] flex items-center justify-between md:block">
                    <span>{m.number}</span>
                    {/* Mobile toggle button */}
                    <button
                      type="button"
                      onClick={() => toggleModule(m.id)}
                      className="md:hidden text-xs text-[#0870C4] flex items-center gap-1 font-sans font-medium"
                    >
                      {isExpanded ? 'Ẩn bài học' : 'Chi tiết'}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Title & Duration */}
                  <div 
                    onClick={() => toggleModule(m.id)}
                    className="cursor-pointer"
                  >
                    <div className="text-[17px] sm:text-[18px] font-bold text-[#0F1D33] flex items-center gap-2">
                      <span>{m.title}</span>
                      <ChevronDown className={`hidden md:inline w-4 h-4 text-[#8A9BB2] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                    <div className="text-[13px] sm:text-[14px] text-[#4E5E75] mt-0.5">
                      {m.duration}
                    </div>
                  </div>

                  {/* Output */}
                  <div className="text-[14px] sm:text-[15px] leading-[1.5] text-[#1B2A41]">
                    <span className="font-bold text-[#0F1D33]">Đầu ra:</span>{' '}
                    <span className="text-[#3A4A61]">{m.output}</span>
                  </div>

                  {/* Action / Free trial badge */}
                  <div className="md:justify-self-end mt-2 md:mt-0 flex items-center gap-2">
                    {m.hasFreeTrial ? (
                      <button
                        type="button"
                        onClick={onOpenVideoModal}
                        className="px-[10px] py-[5px] rounded-[6px] bg-[#FFF1DC] hover:bg-[#ffe3be] text-[#8A4B00] font-mono text-[11px] font-bold tracking-tight transition-colors cursor-pointer border border-[#F6D19E]"
                      >
                        Học thử miễn phí
                      </button>
                    ) : (
                      <div className="w-0 md:w-auto" />
                    )}
                  </div>
                </div>

                {/* Expanded Lesson Drawer */}
                {isExpanded && (
                  <div className="px-5 sm:px-[28px] pb-5 pt-1 bg-[#EEF3F8]/50 border-t border-[#D9E1EB]/60">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#0870C4] font-semibold mb-3">
                      Danh sách bài học trong Module {m.number}:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#3A4A61]">
                      {m.lessons.map((lesson, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg border border-[#D9E1EB]/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0870C4]" />
                          <span className="truncate">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
