'use client';

import { useState, useEffect } from 'react';
import { X, Play, Pause, Check, Copy, ExternalLink, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

/* ---------------- VIDEO MODAL ---------------- */
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToCheckout: () => void;
}

export function VideoModal({ isOpen, onClose, onScrollToCheckout }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1D33]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-[800px] bg-[#0F1D33] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#0A1424]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#F2A43A] text-[#0F1D33] font-mono text-[11px] font-bold">
              HỌC THỬ MIỄN PHÍ
            </span>
            <span className="font-semibold text-sm sm:text-base text-slate-200">
              Bài 1.2 · Viết câu định vị trong 15 phút
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-[#090F1A] flex flex-col justify-between p-6 overflow-hidden">
          {/* Background visuals of slide */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#0e1929] to-[#080d16]">
            <div className="max-w-[540px] space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#0870C4]">
                Module 01: Định Vị · Công thức 1 Dòng
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                &ldquo;Tôi giúp [Đối tượng khách hàng] đạt được [Kết quả mong muốn] trong [Thời gian] mà không phải [Nỗi sợ lớn nhất]&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Ví dụ thực tế cho Coach &amp; Consultant: Cách chuyển từ bán theo giờ sang bán gói kết quả cụ thể.
              </p>
            </div>
          </div>

          {/* Central Play/Pause Trigger */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 m-auto w-16 h-16 rounded-full bg-[#0870C4]/90 hover:bg-[#0870C4] flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-white" />
            ) : (
              <Play className="w-7 h-7 fill-white ml-1" />
            )}
          </button>

          {/* Bottom Video Controls */}
          <div className="relative z-10 w-full flex flex-col gap-2 pt-2 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-lg">
            {/* Seekbar */}
            <div
              className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPct = Math.round((clickX / rect.width) * 100);
                setProgress(newPct);
              }}
            >
              <div
                className="h-full bg-[#0870C4] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white"
                >
                  {isPlaying ? 'Tạm dừng' : 'Phát tiếp'}
                </button>
                <span>
                  {Math.floor((14.33 * progress) / 100)}:{String(Math.floor(((14.33 * 60 * progress) / 100) % 60)).padStart(2, '0')} / 14:20
                </span>
              </div>
              <div className="font-mono text-[#F2A43A]">HD 1080p · Giảng viên SOLOEXPERT</div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#0A1424] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Đây là 1 trong 42 bài học thực chiến kèm template có sẵn trong khóa học trọn đời.
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onScrollToCheckout();
            }}
            className="h-10 px-5 rounded-lg bg-[#0870C4] hover:bg-[#065A9E] text-white font-bold text-sm transition-all whitespace-nowrap"
          >
            Đăng ký học trọn bộ 6 module
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- PAYMENT MODAL (VietQR) ---------------- */
interface OrderDataPayload {
  fullName: string;
  email: string;
  phone: string;
  includeOrderBump: boolean;
  totalAmount: number;
}

interface PaymentModalProps {
  isOpen: boolean;
  orderData: OrderDataPayload | null;
  onClose: () => void;
}

function PaymentModalInner({
  orderData,
  onClose,
}: {
  orderData: OrderDataPayload;
  onClose: () => void;
}) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isPaid, setIsPaid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15:00 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const transferCode = `SE ${orderData.phone.replace(/\D/g, '').slice(-6) || '883921'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1D33]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-[620px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#D9E1EB] text-[#1B2A41]">
        
        {/* Modal Top */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0F1D33] text-white rounded-t-2xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0870C4]" />
            <h3 className="text-base font-bold text-white m-0">
              Thanh toán &amp; Kích hoạt khóa học
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isPaid ? (
          /* Payment Success State */
          <div className="p-8 flex flex-col items-center text-center gap-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#0F1D33] m-0">
              Ghi nhận thanh toán thành công!
            </h4>
            <p className="text-sm text-[#4E5E75] max-w-md">
              Hệ thống SOLOEXPERT đang tự động kích hoạt tài khoản học cho <strong>{orderData.email}</strong>.
              Bạn sẽ nhận được email hướng dẫn đăng nhập cùng lời mời vào nhóm hỏi đáp trong vòng 5 phút.
            </p>
            <div className="p-4 rounded-xl bg-[#EEF3F8] w-full text-left text-xs text-[#3A4A61] space-y-1">
              <div><strong>Học viên:</strong> {orderData.fullName}</div>
              <div><strong>Số Zalo:</strong> {orderData.phone}</div>
              <div><strong>Gói học:</strong> SOLOEXPERT trọn đời {orderData.includeOrderBump ? '+ Gói chấm bài 1-1' : ''}</div>
              <div><strong>Tổng tiền:</strong> {orderData.totalAmount.toLocaleString('vi-VN')}đ</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 h-11 px-6 rounded-lg bg-[#0870C4] hover:bg-[#065A9E] text-white font-bold text-sm transition-all"
            >
              Đóng cửa sổ
            </button>
          </div>
        ) : (
          /* Normal QR Code & Bank Transfer Information */
          <div className="p-6 flex flex-col gap-5">
            {/* Timer Banner */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF7EC] border border-[#F6D19E] text-xs sm:text-sm text-[#8A4B00]">
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-[#E8900F]" />
                <span>Mã VietQR có hiệu lực trong:</span>
              </div>
              <span className="font-mono font-bold text-base text-[#E8900F]">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>

            {/* QR Code and Bank Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-5 items-center">
              {/* VietQR Graphic */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold text-[#0870C4] font-mono tracking-wider mb-2">
                  VIETQR CHUYỂN KHOẢN
                </div>
                
                {/* Simulated clean QR SVG */}
                <div className="w-[180px] h-[180px] bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                    <rect x="5" y="5" width="25" height="25" rx="3" fill="#0F1D33" />
                    <rect x="10" y="10" width="15" height="15" rx="1" fill="white" />
                    <rect x="13" y="13" width="9" height="9" fill="#0870C4" />
                    
                    <rect x="70" y="5" width="25" height="25" rx="3" fill="#0F1D33" />
                    <rect x="75" y="10" width="15" height="15" rx="1" fill="white" />
                    <rect x="78" y="13" width="9" height="9" fill="#0870C4" />

                    <rect x="5" y="70" width="25" height="25" rx="3" fill="#0F1D33" />
                    <rect x="10" y="75" width="15" height="15" rx="1" fill="white" />
                    <rect x="13" y="78" width="9" height="9" fill="#0870C4" />

                    <rect x="35" y="10" width="8" height="8" />
                    <rect x="48" y="15" width="12" height="6" />
                    <rect x="40" y="25" width="6" height="10" />
                    <rect x="50" y="30" width="10" height="8" />

                    <rect x="15" y="40" width="12" height="6" />
                    <rect x="30" y="42" width="6" height="12" />
                    <rect x="10" y="52" width="15" height="6" />

                    <rect x="40" y="45" width="20" height="20" rx="3" fill="#0870C4" />
                    <circle cx="50" cy="55" r="5" fill="white" />

                    <rect x="70" y="40" width="10" height="10" />
                    <rect x="85" y="45" width="8" height="18" />
                    <rect x="72" y="60" width="14" height="6" />
                    
                    <rect x="40" y="72" width="12" height="8" />
                    <rect x="60" y="70" width="8" height="15" />
                    <rect x="45" y="85" width="22" height="8" />
                    <rect x="75" y="82" width="18" height="10" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-white/95 px-1.5 py-0.5 rounded text-[9px] font-bold text-[#0F1D33] shadow-xs">
                      SOLOEXPERT
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-[#5A6B82] mt-2 text-center">
                  Mở ứng dụng ngân hàng và quét mã QR
                </div>
              </div>

              {/* Bank Transfer Details */}
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#D9E1EB]">
                  <div className="text-[#5A6B82] text-xs">Ngân hàng thụ hưởng</div>
                  <div className="font-bold text-[#0F1D33]">MBBank (Ngân hàng Quân Đội)</div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#D9E1EB] flex justify-between items-center">
                  <div>
                    <div className="text-[#5A6B82] text-xs">Số tài khoản</div>
                    <div className="font-mono font-bold text-[#0F1D33] text-base">99248888999</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('99248888999', 'stk')}
                    className="p-1.5 rounded bg-white hover:bg-slate-100 text-[#0870C4] border border-slate-200 transition-colors"
                  >
                    {copiedField === 'stk' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#D9E1EB] flex justify-between items-center">
                  <div>
                    <div className="text-[#5A6B82] text-xs">Số tiền cần thanh toán</div>
                    <div className="font-bold text-[#0870C4] text-base">
                      {orderData.totalAmount.toLocaleString('vi-VN')}đ
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(String(orderData.totalAmount), 'amount')}
                    className="p-1.5 rounded bg-white hover:bg-slate-100 text-[#0870C4] border border-slate-200 transition-colors"
                  >
                    {copiedField === 'amount' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FFF7EC] border border-[#F6D19E] flex justify-between items-center">
                  <div>
                    <div className="text-[#8A4B00] text-xs font-medium">Nội dung chuyển khoản (bắt buộc)</div>
                    <div className="font-mono font-bold text-[#0F1D33] text-sm sm:text-base">{transferCode}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(transferCode, 'memo')}
                    className="p-1.5 rounded bg-white hover:bg-slate-100 text-[#0870C4] border border-slate-200 transition-colors"
                  >
                    {copiedField === 'memo' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Note & Action Buttons */}
            <div className="pt-2 border-t border-[#D9E1EB] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setIsPaid(true)}
                className="h-12 w-full rounded-lg bg-[#0870C4] hover:bg-[#065A9E] text-white font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Tôi đã chuyển khoản xong</span>
              </button>
              
              <div className="text-[12px] text-center text-[#5A6B82]">
                Sau khi chuyển khoản, hệ thống sẽ xác nhận và gửi thông tin khóa học qua Email ({orderData.email}) &amp; Zalo ({orderData.phone}) trong 5 phút.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export function PaymentModal({ isOpen, orderData, onClose }: PaymentModalProps) {
  if (!isOpen || !orderData) return null;
  return <PaymentModalInner orderData={orderData} onClose={onClose} />;
}

/* ---------------- POLICY MODALS ---------------- */
interface PolicyModalProps {
  type: 'privacy' | 'refund' | 'contact' | 'zalo' | null;
  onClose: () => void;
}

export function PolicyModal({ type, onClose }: PolicyModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1D33]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-[560px] bg-white rounded-2xl shadow-2xl border border-[#D9E1EB] overflow-hidden text-[#1B2A41]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9E1EB] bg-[#F8FAFC]">
          <h3 className="font-bold text-lg text-[#0F1D33] m-0">
            {type === 'privacy' && 'Chính sách bảo mật'}
            {type === 'refund' && 'Chính sách hoàn tiền 100% trong 14 ngày'}
            {type === 'contact' && 'Email liên hệ & Hỗ trợ'}
            {type === 'zalo' && 'Tư vấn trực tiếp cùng giảng viên'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-[#5A6B82] hover:text-[#0F1D33] hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-sm leading-relaxed text-[#4E5E75] space-y-3 max-h-[70vh] overflow-y-auto">
          {type === 'privacy' && (
            <>
              <p>
                SOLOEXPERT cam kết bảo mật tuyệt đối mọi thông tin cá nhân của học viên bao gồm Họ tên, Số điện thoại/Zalo và Địa chỉ Email.
              </p>
              <p>
                Thông tin của bạn chỉ được sử dụng cho mục đích:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cung cấp tài khoản truy cập hệ thống học tập LMS trọn đời.</li>
                <li>Gửi thông báo cập nhật bài học mới và template bổ sung.</li>
                <li>Hỗ trợ giải đáp chuyên môn qua nhóm hỏi đáp kín.</li>
              </ul>
              <p>
                Chúng tôi cam kết không chia sẻ hay bán thông tin cho bất kỳ bên thứ ba nào dưới mọi hình thức.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <div className="p-3 rounded-lg bg-[#E3EEF9] border border-[#B9D3EE] text-[#0F1D33] font-medium">
                Cam kết 100% không rủi ro cho học viên trong vòng 14 ngày kể từ ngày đăng ký.
              </div>
              <p>
                <strong>Điều kiện hoàn tiền rất đơn giản:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>Hoàn thành việc xem video của Module 1 và Module 2.</li>
                <li>Nộp 2 template bài tập đã điền thông tin (Câu định vị &amp; Dàn bài chương trình).</li>
                <li>Nếu bạn cảm thấy chất lượng khóa học không đúng như cam kết, chỉ cần gửi tin nhắn Zalo kèm 2 file template đã làm.</li>
              </ol>
              <p>
                SOLOEXPERT sẽ hoàn trả 100% học phí về số tài khoản của bạn trong vòng tối đa 3 ngày làm việc, không truy vấn hay làm phiền.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p>
                Đội ngũ hỗ trợ học viên SOLOEXPERT luôn sẵn sàng đồng hành cùng bạn trên hành trình đóng gói và bán sản phẩm tri thức.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div><strong>Email hỗ trợ học viên:</strong> hotro@soloexpert.vn</div>
                <div><strong>Email giảng viên:</strong> giangvien@soloexpert.vn</div>
                <div><strong>Thời gian phản hồi:</strong> Trong vòng 24–48 giờ làm việc</div>
              </div>
            </>
          )}

          {type === 'zalo' && (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#E3EEF9] text-[#0870C4] flex items-center justify-center mx-auto">
                <ExternalLink className="w-6 h-6" />
              </div>
              <p>
                Bạn có câu hỏi riêng về mô hình đào tạo, ngách dịch vụ của mình hoặc cần xác nhận mức độ phù hợp trước khi đăng ký?
              </p>
              <div className="p-4 rounded-xl bg-[#FFF7EC] border border-[#F6D19E] text-left text-xs text-[#8A4B00]">
                💬 <strong>Nhắn trực tiếp qua Zalo:</strong> Nhận phản hồi tư vấn 1-1 từ giảng viên trong giờ hành chính.
              </div>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-[#0870C4] hover:bg-[#065A9E] text-white font-bold text-sm transition-all shadow-sm"
              >
                Mở Zalo nhắn tin ngay
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F8FAFC] border-t border-[#D9E1EB] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-4 rounded-lg bg-slate-200 hover:bg-slate-300 text-[#0F1D33] text-sm font-semibold transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
