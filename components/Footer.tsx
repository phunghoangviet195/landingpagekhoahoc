'use client';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenRefundModal: () => void;
  onOpenContactModal: () => void;
}

export default function Footer({
  onOpenPrivacyModal,
  onOpenRefundModal,
  onOpenContactModal,
}: FooterProps) {
  return (
    <footer className="mt-auto border-t border-[#D9E1EB] py-8 bg-[#F6F9FC]/60">
      <div className="w-full max-w-[1104px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-[10px]">
          <div className="w-7 h-7 rounded-[7px] bg-[#0F1D33] text-white font-extrabold text-[13px] flex items-center justify-center">
            S
          </div>
          <span className="font-extrabold text-[15px] text-[#0F1D33]">
            SOLOEXPERT
          </span>
          <span className="text-[13px] text-[#5A6B82]">
            © 2026
          </span>
        </div>

        {/* Right: Policy Links */}
        <div className="flex items-center gap-2 text-[13px] text-[#5A6B82] flex-wrap justify-center">
          <button
            type="button"
            onClick={onOpenPrivacyModal}
            className="hover:text-[#0870C4] transition-colors cursor-pointer"
          >
            [Chính sách bảo mật]
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={onOpenRefundModal}
            className="hover:text-[#0870C4] transition-colors cursor-pointer"
          >
            [Chính sách hoàn tiền]
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={onOpenContactModal}
            className="hover:text-[#0870C4] transition-colors cursor-pointer"
          >
            [Email liên hệ]
          </button>
        </div>
      </div>
    </footer>
  );
}
