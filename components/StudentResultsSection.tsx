'use client';

export default function StudentResultsSection() {
  const testimonials = [
    {
      initials: 'VT',
      name: '[Vy T.]',
      role: 'Coach yoga',
      resultHeader: 'Sau module 4:',
      resultDetail: '[trang bán chương trình 6 tuần, 9 người đăng ký trong đợt đầu]',
      quote: '“[Lần đầu tôi học hết một khóa online, vì bài nào cũng ngắn và có việc cụ thể để làm.]”',
    },
    {
      initials: 'BN',
      name: '[Bảo N.]',
      role: 'Tư vấn tài chính cá nhân',
      resultHeader: 'Sau module 3:',
      resultDetail: '[chuyển từ tư vấn theo giờ sang gói 3 tháng, giá gấp 4]',
      quote: '“[Module định giá giúp tôi dám nói giá thật mà không thấy ngại.]”',
    },
    {
      initials: 'QD',
      name: '[Quân Đ.]',
      role: 'Nhiếp ảnh gia',
      resultHeader: 'Sau module 6:',
      resultDetail: '[workshop online đầu tiên, 23 học viên]',
      quote: '“[Kế hoạch ra mắt 7 ngày làm theo y chang là ra đơn.]”',
    },
  ];

  return (
    <section className="py-[72px] sm:py-[88px] border-t border-[#D9E1EB]">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-4">
        {/* Kicker */}
        <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#0870C4] font-medium">
          (D) Kết quả học viên
        </div>

        {/* Headline */}
        <h2 className="m-0 text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#0F1D33] max-w-[760px]">
          Học xong, họ có gì trong tay.
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[14px] bg-[#F8FAFC] border border-[#D9E1EB] flex flex-col gap-[14px] hover:border-[#B9D3EE] transition-colors"
            >
              {/* Header with avatar badge */}
              <div className="flex items-center gap-[10px]">
                <div className="w-10 h-10 rounded-full bg-[#DDE6F0] flex items-center justify-center text-[13px] font-bold text-[#3E5068] border border-[#C9D5E3]">
                  {t.initials}
                </div>
                <div className="text-[14px] text-[#4E5E75]">
                  <span className="font-bold text-[#0F1D33]">{t.name}</span> · {t.role}
                </div>
              </div>

              {/* Outcome */}
              <div className="text-[15px] leading-[1.55] text-[#1B2A41]">
                <span className="font-bold text-[#0F1D33]">{t.resultHeader}</span>{' '}
                <span className="text-[#3A4A61]">{t.resultDetail}</span>
              </div>

              {/* Quote */}
              <p className="m-0 text-[15px] leading-[1.6] text-[#4E5E75] italic">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-[13px] text-[#5A6B82] mt-2">
          Kết quả của từng học viên, công bố với sự đồng ý của họ. Kết quả của bạn phụ thuộc mức độ áp dụng.
        </div>
      </div>
    </section>
  );
}
