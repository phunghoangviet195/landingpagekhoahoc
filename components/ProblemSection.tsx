'use client';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Học YouTube rời rạc',
      desc: '[Xem cả trăm video về “bán khóa học” mà vẫn không biết bắt đầu từ bước nào.]',
    },
    {
      title: 'Mua khóa rồi bỏ dở',
      desc: '[Bài giảng 1 tiếng, lý thuyết dày, đến tuần thứ hai là bỏ — tiền mất, sản phẩm chưa có.]',
    },
    {
      title: 'Biết nhiều, chưa có gì để bán',
      desc: '[Người khác kém chuyên môn hơn vẫn bán được, vì họ có một sản phẩm rõ ràng.]',
    },
  ];

  return (
    <section className="py-[72px] sm:py-[88px] border-t border-[#D9E1EB]">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-4">
        {/* Kicker */}
        <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#0870C4] font-medium">
          (A) Vấn đề
        </div>

        {/* Headline */}
        <h2 className="m-0 text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#0F1D33] max-w-[760px]">
          Bạn không thiếu kiến thức. Bạn thiếu một lộ trình làm ra thứ để bán.
        </h2>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[14px] bg-[#F8FAFC] border border-[#D9E1EB] hover:border-[#B9D3EE] transition-colors"
            >
              <h3 className="m-0 text-[18px] font-bold text-[#0F1D33]">
                {prob.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#4E5E75] mt-2">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
