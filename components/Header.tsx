'use client';

interface HeaderProps {
  onScrollToCheckout: () => void;
}

export default function Header({ onScrollToCheckout }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-[72px] flex-shrink-0 border-b border-[#D9E1EB] bg-[#F6F9FC]/95 backdrop-blur-sm transition-all">
      <div className="w-full max-w-[1104px] mx-auto h-full px-4 sm:px-6 lg:px-0 flex items-center justify-between">
        {/* Brand Zone */}
        <a 
          href="#" 
          className="flex items-center gap-[10px] group text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0870C4] rounded-md"
        >
          <div className="w-8 h-8 rounded-[8px] bg-[#0F1D33] text-white font-extrabold text-[15px] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="font-extrabold text-[16px] tracking-tight text-[#0F1D33]">
            SOLOEXPERT
          </span>
        </a>

        {/* Action Zone */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onScrollToCheckout}
            className="h-[44px] px-[22px] rounded-[10px] bg-[#0870C4] hover:bg-[#065A9E] active:scale-[0.98] text-white font-bold text-[15px] transition-all shadow-sm hover:shadow flex items-center justify-center whitespace-nowrap cursor-pointer"
          >
            Vào học ngay
          </button>
        </div>
      </div>
    </header>
  );
}
