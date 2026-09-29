'use client';

import { useState } from 'react';
import { Shield, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenPaymentModal: (orderData: {
    fullName: string;
    email: string;
    phone: string;
    includeOrderBump: boolean;
    totalAmount: number;
  }) => void;
}

export default function PricingSection({ onOpenPaymentModal }: PricingSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [includeOrderBump, setIncludeOrderBump] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const basePrice = 1490000;
  const bumpPrice = 390000;
  const total = includeOrderBump ? basePrice + bumpPrice : basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Vui lòng nhập địa chỉ email hợp lệ để nhận tài khoản học.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Vui lòng nhập số điện thoại / Zalo để nhận hỗ trợ.');
      return;
    }

    setErrorMessage('');
    onOpenPaymentModal({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      includeOrderBump,
      totalAmount: total,
    });
  };

  return (
    <section id="mua" className="py-[72px] sm:py-[88px] border-t border-[#D9E1EB] bg-[#F6F9FC]">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[540px_520px] gap-8 lg:gap-[44px] items-start justify-between">
          
          {/* Left Column: What You Get */}
          <div className="flex flex-col gap-4">
            {/* Kicker */}
            <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#0870C4] font-medium">
              (E) Học phí
            </div>

            {/* Headline */}
            <h2 className="m-0 text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#0F1D33]">
              Bạn nhận được gì.
            </h2>

            {/* Value Stack Card */}
            <div className="rounded-[16px] bg-[#FFFFFF] border border-[#D9E1EB] px-6 py-1 divide-y divide-[#D9E1EB] shadow-xs">
              <div className="py-4">
                <div className="text-[16px] font-bold text-[#0F1D33]">
                  Khóa học 6 module, truy cập trọn đời
                </div>
                <div className="text-[14px] text-[#4E5E75] mt-0.5">
                  42 bài, cập nhật miễn phí khi có bài mới
                </div>
              </div>

              <div className="py-4">
                <div className="text-[16px] font-bold text-[#0F1D33]">
                  [42] template Google Docs &amp; Sheets
                </div>
                <div className="text-[14px] text-[#4E5E75] mt-0.5">
                  Mỗi bài một template, điền vào là dùng
                </div>
              </div>

              <div className="py-4">
                <div className="text-[16px] font-bold text-[#0F1D33]">
                  Nhóm hỏi đáp học viên
                </div>
                <div className="text-[14px] text-[#4E5E75] mt-0.5">
                  [Giảng viên] trả lời trong [48 giờ]
                </div>
              </div>

              <div className="py-4">
                <div className="text-[16px] font-bold text-[#0F1D33]">
                  Bonus: kịch bản ra mắt 7 ngày
                </div>
                <div className="text-[14px] text-[#4E5E75] mt-0.5">
                  Bài đăng, tin nhắn và email viết sẵn cho tuần ra mắt
                </div>
              </div>
            </div>

            {/* 14-Day Guarantee Box */}
            <div className="flex gap-3 p-[16px_18px] rounded-[12px] bg-[#E3EEF9] border border-[#B9D3EE] mt-1">
              <Shield className="w-6 h-6 text-[#0870C4] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div className="text-[14px] leading-[1.55] text-[#0F1D33]">
                <span className="font-bold">Học 14 ngày không rủi ro.</span> Học xong module 1–2 và nộp 2 template đã điền trong 14 ngày mà thấy không đáng: nhắn Zalo, hoàn 100% học phí trong 3 ngày.
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Form */}
          <div className="p-6 sm:p-8 rounded-[18px] bg-[#FFFFFF] border border-[#D9E1EB] shadow-md flex flex-col gap-4">
            {/* Price Box */}
            <div className="p-5 sm:p-[20px_22px] rounded-[14px] bg-[#0F1D33] text-white">
              <div className="flex justify-between items-baseline gap-2">
                <div className="text-[32px] sm:text-[38px] font-extrabold tracking-[-0.02em]">
                  [1.490.000đ]
                </div>
                <div className="text-[13px] sm:text-[14px] text-[#C8D3E1] whitespace-nowrap">
                  Một lần · Học trọn đời
                </div>
              </div>
              <div className="text-[12px] sm:text-[13px] text-[#A9B8CC] mt-1.5">
                Giá hiện tại đến [31/10]. Từ [01/11] là [1.990.000đ] khi thêm module 7.
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-1">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-ten" className="text-[14px] font-semibold text-[#1B2A41]">
                  Họ và tên
                </label>
                <input
                  id="c-ten"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  required
                  className="h-[50px] px-4 rounded-[10px] border border-[#C9D5E3] bg-[#FFFFFF] text-[16px] text-[#0F1D33] focus:outline-none focus:ring-2 focus:ring-[#0870C4] focus:border-transparent transition-all placeholder:text-[#8A9BB2]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-mail" className="text-[14px] font-semibold text-[#1B2A41]">
                  Email đăng nhập khóa học
                </label>
                <input
                  id="c-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ban@email.com"
                  required
                  className="h-[50px] px-4 rounded-[10px] border border-[#C9D5E3] bg-[#FFFFFF] text-[16px] text-[#0F1D33] focus:outline-none focus:ring-2 focus:ring-[#0870C4] focus:border-transparent transition-all placeholder:text-[#8A9BB2]"
                />
              </div>

              {/* Zalo / Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-zalo" className="text-[14px] font-semibold text-[#1B2A41]">
                  Số Zalo
                </label>
                <input
                  id="c-zalo"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09xx xxx xxx"
                  required
                  className="h-[50px] px-4 rounded-[10px] border border-[#C9D5E3] bg-[#FFFFFF] text-[16px] text-[#0F1D33] focus:outline-none focus:ring-2 focus:ring-[#0870C4] focus:border-transparent transition-all placeholder:text-[#8A9BB2]"
                />
              </div>

              {/* Order Bump Box */}
              <label
                htmlFor="c-bump"
                className={`flex gap-3 p-4 rounded-[12px] border-2 border-dashed transition-all cursor-pointer ${
                  includeOrderBump
                    ? 'border-[#0870C4] bg-[#E3EEF9]/60'
                    : 'border-[#E8900F] bg-[#FFF7EC] hover:bg-[#fff2e0]'
                }`}
              >
                <input
                  id="c-bump"
                  type="checkbox"
                  checked={includeOrderBump}
                  onChange={(e) => setIncludeOrderBump(e.target.checked)}
                  className="w-5 h-5 mt-0.5 flex-shrink-0 accent-[#0870C4] cursor-pointer"
                />
                <div>
                  <div className="text-[15px] font-bold text-[#0F1D33]">
                    Thêm gói chấm trang bán hàng — [390.000đ]
                  </div>
                  <div className="text-[14px] leading-[1.5] text-[#4E5E75] mt-1">
                    [Gửi trang bán ở module 4, nhận video góp ý 15 phút từ giảng viên trong 5 ngày.]
                  </div>
                </div>
              </label>

              {/* Error feedback */}
              {errorMessage && (
                <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Total Display if bump is checked */}
              {includeOrderBump && (
                <div className="flex justify-between items-center px-1 text-sm text-[#0F1D33] font-semibold">
                  <span>Tổng thanh toán:</span>
                  <span className="text-[#0870C4] text-lg font-bold">
                    {total.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="h-[58px] w-full rounded-[10px] bg-[#0870C4] hover:bg-[#065A9E] active:scale-[0.99] text-white font-bold text-[17px] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Thanh toán &amp; vào học</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Footnote */}
              <div className="text-[13px] leading-[1.5] text-[#4E5E75] text-center mt-1">
                VietQR, chuyển khoản hoặc thẻ · Tài khoản học kích hoạt tự động trong 5 phút
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
