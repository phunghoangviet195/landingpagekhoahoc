'use client';

import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onScrollToCheckout: () => void;
  onOpenZaloModal: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection({ onScrollToCheckout, onOpenZaloModal }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'Tôi bận, học không đều thì có theo kịp không?',
      answer:
        'Hoàn toàn theo kịp. Khóa học được thiết kế theo hình thức tự học có hướng dẫn (self-paced) với các bài giảng ngắn chỉ 10–15 phút/bài. Bạn có quyền truy cập trọn đời, có thể học vào giờ nghỉ trưa, buổi tối hoặc cuối tuần. Mỗi bài đều có template điền sẵn nên bạn không mất thời gian suy nghĩ từ đầu.',
    },
    {
      question: 'Khóa này khác gì các khóa dạy bán khóa học khác?',
      answer:
        'Điểm khác biệt lớn nhất là tính "Đầu ra ngay": thay vì giảng 1-2 tiếng lý thuyết bao la, mỗi module của SOLOEXPERT tập trung làm ra một sản phẩm cụ thể (câu định vị, dàn bài, bảng giá, trang bán, lịch bài đăng, kịch bản chốt). Khóa học đi kèm 42 template thực tế bạn chỉ cần điền vào là có thể bán ngay.',
    },
    {
      question: 'Thanh toán bằng những cách nào?',
      answer:
        'Bạn có thể thanh toán qua mã VietQR (quét bằng mọi app ngân hàng), chuyển khoản internet banking trực tiếp, thẻ Visa/Mastercard hoặc ví điện tử (MoMo/ZaloPay). Sau khi thanh toán, hệ thống sẽ gửi thông tin kích hoạt tài khoản qua Email và Zalo trong vòng 5 phút.',
    },
    {
      question: 'Có xuất hóa đơn cho công ty không?',
      answer:
        'Có. Chúng tôi hỗ trợ xuất hóa đơn điện tử (VAT) cho doanh nghiệp hoặc tổ chức theo yêu cầu. Sau khi thanh toán, bạn chỉ cần liên hệ qua Zalo hoặc gửi email thông tin công ty (Tên doanh nghiệp, MST, Địa chỉ) để nhận hóa đơn.',
    },
    {
      question: 'Điều kiện hoàn tiền cụ thể là gì?',
      answer:
        'Chính sách hoàn tiền 100% trong 14 ngày hoàn toàn minh bạch: Bạn chỉ cần học xong Module 1 & 2 và gửi 2 template bài tập đã điền qua Zalo. Nếu bạn cảm thấy nội dung không xứng đáng với số tiền đã bỏ ra, chúng tôi sẽ hoàn trả 100% học phí vào tài khoản ngân hàng của bạn trong vòng 3 ngày làm việc mà không hề gây khó dễ.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-[72px] sm:py-[88px] border-t border-[#D9E1EB]">
      <div className="w-full max-w-[760px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        {/* Kicker */}
        <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#0870C4] font-medium mb-5">
          (F) Câu hỏi thường gặp
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#D9E1EB] border-b border-[#D9E1EB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex justify-between items-center gap-4 text-[16px] sm:text-[17px] font-bold text-[#0F1D33] hover:text-[#0870C4] transition-colors cursor-pointer focus:outline-none"
                >
                  <span className="leading-[1.4]">{faq.question}</span>
                  <span className="text-[#0870C4] font-medium flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#0870C4]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#0870C4]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-[15px] leading-[1.65] text-[#4E5E75] pr-6 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Action Row */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[15px] text-[#3A4A61] flex items-center gap-1.5 text-center sm:text-left">
            <span>Còn phân vân?</span>
            <button
              type="button"
              onClick={onOpenZaloModal}
              className="text-[#0870C4] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Nhắn [tên giảng viên] qua Zalo</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onScrollToCheckout}
            className="h-[54px] px-7 rounded-[10px] bg-[#0870C4] hover:bg-[#065A9E] active:scale-[0.98] text-white font-bold text-[16px] transition-all shadow-md hover:shadow flex items-center justify-center cursor-pointer whitespace-nowrap"
          >
            Vào học ngay
          </button>
        </div>
      </div>
    </section>
  );
}
