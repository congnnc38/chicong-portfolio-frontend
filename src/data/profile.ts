// Toàn bộ nội dung của website nằm ở file này.
// Muốn sửa chữ, thêm dự án hay đổi link: chỉ cần sửa ở đây.
// Bản này định vị là Frontend Developer: phần giao diện được kể trước, phần backend kể sau và ngắn hơn.

export type Role = 'Frontend' | 'Fullstack' | 'Mobile';
// Loại sản phẩm, dùng cho bộ lọc ở phần Dự án
export type Kind = 'platform' | 'news' | 'mobile';

export type Project = {
  id: string;
  name: string;
  summary: string;
  role: Role;
  kind: Kind;
  period: string;
  link?: { href: string; label: string; note?: string };
  linkNote?: string;
  description: string;
  stack: string[];
  contributions: string[];
};

export type Job = {
  company: string;
  period: string;
  positions: { title: string; period: string }[];
  note?: string;
  projects?: { name: string; period: string; stack: string; description: string }[];
};

export const profile = {
  name: 'Ngô Nguyễn Chí Công',
  shortName: 'Chí Công',
  title: 'Frontend Developer',
  intro:
    'Với 5 năm kinh nghiệm, tôi xây giao diện web và app di động cho toà soạn, doanh nghiệp và các nền tảng nội dung: từ component dùng chung, trình soạn thảo đến render phía server, SEO và hiệu năng.',
  about: [
    'Tôi khởi đầu với vai trò UI/UX Designer rồi chuyển sang viết code. Thế mạnh của tôi là frontend: Next.js, React, TypeScript, component và package dùng chung cho nhiều sản phẩm, render phía server, SEO kỹ thuật, responsive trên nhiều trình duyệt. Nền tảng thiết kế giúp phần giao diện kỹ ở từng chi tiết.',
    'Tôi cũng làm được backend (NestJS, Node.js, Prisma, PostgreSQL, Redis, Socket.IO), nên phối hợp với đội API thuận lợi và tự làm trọn một tính năng khi cần. Từ 2025 tôi làm ở NetSpace, phát triển giao diện hệ sinh thái AntCMS cho các toà soạn (VietPress, Góc Nhìn Mới, phobienphapluat.vn), thư viện template E-magazine dùng chung, cổng thông tin kol.gov.vn và các app di động React Native cho Thiên Khôi Group.',
  ],
  // File CV đặt trong thư mục public/. Thay file mới thì giữ nguyên tên, hoặc sửa đường dẫn ở đây.
  cv: { href: '/CV-Ngo-Nguyen-Chi-Cong.pdf', fileName: 'CV-Ngo-Nguyen-Chi-Cong.pdf' },
  contact: {
    email: 'congnnc38@gmail.com',
    phone: '+84 33 224 9402',
    phoneHref: 'tel:+84332249402',
    linkedin: 'https://www.linkedin.com/in/ngonguyenchicong',
    linkedinLabel: 'in/ngonguyenchicong',
  },
  education: {
    school: 'Đại học Công nghiệp Hà Nội',
    major: 'Công nghệ thông tin',
  },
  languages: [
    { name: 'Tiếng Việt', level: 'Bản ngữ' },
    { name: 'Tiếng Anh', level: 'Trung cấp' },
  ],
};

export const projects: Project[] = [
  {
    id: 'kolhub',
    name: 'KOL Hub',
    summary: 'Sàn kết nối chiến dịch giữa Nhãn hàng và KOL/MCN',
    role: 'Fullstack',
    kind: 'platform',
    period: '10/2026 – nay',
    link: { href: 'https://kolhub-dev.netspace.vn/', label: 'kolhub-dev.netspace.vn', note: 'bản dev' },
    description:
      'Nhãn hàng đăng brief, KOL và MCN ứng tuyển, nộp bản nháp, nộp link bài đăng và xác nhận thanh toán. Super Admin duyệt hồ sơ, kênh, chiến dịch, ticket và khiếu nại vi phạm.',
    stack: ['TanStack Start', 'React 19', 'TypeScript', 'Tailwind 4', 'shadcn/ui', 'oRPC', 'Drizzle', 'Bun'],
    contributions: [
      'Sheet xác thực kênh TikTok/YouTube: hiện tiến độ quét từng nội dung, kết quả đạt hay chưa đạt, chỉ kênh đạt mới vào hàng chờ duyệt.',
      'Trang đồng ý liên kết tài khoản KOL Safety và trang cài đặt cho admin: số nội dung cần quét, thời gian quét, số ngày giữ danh sách.',
      'Phía sau: liên kết tài khoản bằng SSO, nhận kết quả qua webhook, viết tài liệu hợp đồng API giữa hai hệ thống.',
    ],
  },
  {
    id: 'multi-client',
    name: 'AntCMS Multi-client',
    summary: 'Monorepo nhiều trang tin dùng chung một CMS',
    role: 'Frontend',
    kind: 'news',
    period: '10/2026 – nay',
    link: { href: 'https://phobienphapluat-web-dev.antcms.vn/', label: 'phobienphapluat.vn', note: 'bản dev' },
    description:
      'Mỗi trang tin có giao diện riêng nhưng dùng chung AntCMS và một lớp service gọi API chạy phía server. Có script sinh site mới từ site mẫu. Site đầu tiên là phobienphapluat.vn.',
    stack: ['Next.js 16', 'Server Components', 'React 19', 'TypeScript 6', 'Tailwind 4', 'Turborepo', 'pnpm', 'Vitest'],
    contributions: [
      'Dựng lại toàn bộ giao diện phobienphapluat.vn và ghép API AntCMS.',
      'Hiển thị Tạp chí in dạng sách lật toàn màn hình; thêm khối Video, Longform, Podcast và quảng cáo MGID.',
      'Dựng kiến trúc monorepo, package @antcms/api-client gọi API phía server và các package config dùng chung (Tailwind, ESLint, TypeScript).',
      'Script sinh site mới từ site mẫu; Dockerfile dùng chung cho mọi site.',
    ],
  },
  {
    id: 'kol-safety',
    name: 'KOL Safety',
    summary: 'Kiểm duyệt nội dung video tiếng Việt bằng AI',
    role: 'Fullstack',
    kind: 'platform',
    period: '07/2026 – nay',
    link: { href: 'https://safety.netspace.vn/', label: 'safety.netspace.vn' },
    description:
      'Chấm Điểm An toàn 0–100 cho từng video, gắn nhãn An toàn / Vùng xám / Vi phạm kèm lý do, bằng chứng theo từng giây và gợi ý sửa. Kiểm tra video trước khi đăng, khám kênh TikTok/YouTube hàng loạt.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind 4', 'NestJS', 'Prisma', 'BullMQ'],
    contributions: [
      'Khung làm việc kênh TikTok/YouTube theo kiểu YouTube Studio: lọc, chọn nhiều video, xếp hàng quét, phân trang.',
      'Tách thanh kênh (ChannelRail) và logo nền tảng thành component dùng chung cho hai nền tảng; thanh tiến độ cho lượt quét video dài.',
      'Khung xương (skeleton) thay vòng tròn tải, cố định bề rộng cột bảng để danh sách không nhảy khi dữ liệu về.',
      'Phía API: khám kênh YouTube qua 3 giai đoạn, tích hợp crawler Titan, áp Bộ Quy tắc Ứng xử Văn hóa số vào chấm điểm.',
    ],
  },
  {
    id: 'netevent',
    name: 'NetEvent',
    summary: 'Nền tảng SaaS tạo và vận hành sự kiện',
    role: 'Fullstack',
    kind: 'platform',
    period: '07/2026',
    link: { href: 'https://event.netspace.vn/', label: 'event.netspace.vn' },
    description:
      'Thay cho việc ghép Google Form, Excel, landing builder, máy quét QR và email thủ công. Gồm trang đăng ký công khai, CMS quản trị và API chạy trên các subdomain riêng.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Radix UI', 'Tailwind', 'dnd-kit', 'Recharts', 'Prisma 7'],
    contributions: [
      'Landing editor: cắt ảnh bìa, tự chuyển ảnh sang WebP, xem trước font; form đăng ký công khai và trang vé.',
      'Check-in bằng camera quét QR, tách hai bước tra cứu rồi xác nhận, kèm modal thông tin người tham dự.',
      'Trang tổng quan sự kiện với số liệu thật và nhật ký hoạt động; responsive toàn bộ trang quản trị, sửa lỗi cuộn trên Safari di động.',
      'Phía sau: dựng nền monorepo, nhóm quyền cấu hình được, email OTP và nhắc lịch, Dockerfile, migration, CI.',
    ],
  },
  {
    id: 'tkg-mobile',
    name: 'TKG Proptech & Thiên Khôi HRM',
    summary: 'Hai app di động cho đội ngũ môi giới và nhân sự Thiên Khôi Group',
    role: 'Mobile',
    kind: 'mobile',
    period: '06 – 07/2026',
    linkNote: 'Ứng dụng iOS và Android cho đội ngũ Thiên Khôi Group',
    description:
      'TKG Proptech giúp tư vấn viên và môi giới quản lý kho nguồn hàng bất động sản, ký gửi, giao dịch và tranh chấp. Thiên Khôi HRM quản lý nhân sự theo cơ cấu Miền, Kinh đô, chi nhánh, khối, phòng: tuyển dụng, đào tạo, sự kiện và phân quyền. Thiên Khôi Group được vinh danh Top 5 Proptech 2026 với hệ sinh thái gồm hai app này.',
    stack: ['React Native 0.78', 'TypeScript', 'React Navigation', 'TanStack Query', 'Zustand', 'MMKV', 'React Hook Form', 'Firebase'],
    contributions: [
      'TKG Proptech: làm lại màn kho nguồn hàng theo Figma, gồm thẻ nguồn hàng, thanh tìm kiếm, bộ lọc nhanh và sắp xếp, lọc theo loại nguồn và thời gian ký, tag “Triệu đô” và “Dòng tiền ổn định”.',
      'Thiên Khôi HRM: tab lọc nhanh sự kiện có đếm số và ẩn hiện theo quyền; chọn phạm vi người tham gia theo Miền, Kinh đô, Khối, Phòng đúng quyền của từng vai trò; danh sách điểm danh có tìm kiếm, lọc và xuất Excel.',
      'Cảnh báo khi rời màn đang nhập dở cho 28 màn tạo và sửa ở cả hai app; tự điền sẵn form tranh chấp từ dữ liệu vừa nhập.',
      'Mục “Hệ sinh thái Thiên Khôi” trong menu với deep link qua lại giữa hai app; sửa lỗi xem ảnh dạng slide.',
    ],
  },
  {
    id: 'thienviet-id',
    name: 'Thiên Việt ID',
    summary: 'App tài khoản và tiện ích dùng chung cho hệ thống Thiên Việt',
    role: 'Fullstack',
    kind: 'mobile',
    period: '06/2026',
    linkNote: 'Ứng dụng di động iOS và Android',
    description:
      'Một tài khoản cho cả hệ thống: đăng nhập một lần, nạp tiền và lịch sử giao dịch, chat và gọi thoại, đặt món ở nhà hàng và quán cà phê, đào tạo, tin tức.',
    stack: ['Expo 55', 'React Native', 'Expo Router', 'TypeScript', 'TanStack Query', 'Zustand', 'ElysiaJS', 'Drizzle'],
    contributions: [
      'Làm trọn luồng đặt cà phê trên app: menu theo danh mục, món có nhóm tuỳ chọn chọn nhiều và tính thêm tiền, giỏ hàng, thanh toán, nhận voucher.',
      'Sửa lỗi tương thích với engine Hermes trên điện thoại (thay toSorted bằng cách sắp xếp tương đương).',
      'Phía sau: module đơn hàng, menu và voucher (ElysiaJS), schema và migration Drizzle.',
    ],
  },
  {
    id: 'hien-mau',
    name: 'Hiến máu Thiên Khôi',
    summary: 'Quản lý sự kiện hiến máu theo thời gian thực',
    role: 'Fullstack',
    kind: 'platform',
    period: '05 – 06/2026',
    link: { href: 'https://hienmau.netspace.vn/', label: 'hienmau.netspace.vn' },
    description:
      'Đăng ký trên landing page, check-in bằng mã QR, điều phối hàng chờ và màn hình TV gọi số có đọc giọng nói. Quầy check-in, người điều phối và màn hình TV đồng bộ realtime.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'TanStack Table', 'Socket.IO', 'Payload CMS 3', 'Playwright'],
    contributions: [
      'Màn hình TV gọi số: đọc tên bằng giọng nói theo hàng đợi để không chồng tiếng, số ghế, gọi lại, nút bật âm thanh vượt chặn tự phát của trình duyệt.',
      'Giao diện check-in: tra cứu, cập nhật avatar, xử lý xung đột dữ liệu, danh sách chờ, chứng nhận.',
      'Trang admin với bảng nhiều bộ lọc, quà tặng và ghi chú, xuất Excel, thống kê theo đợt.',
      'Phía sau: chuyển realtime từ SSE sang Socket.IO + Redis pub/sub để chạy nhiều pod, cấu hình cho 1.000+ kết nối.',
    ],
  },
  {
    id: 'kol-portal',
    name: 'kol.gov.vn',
    summary: 'Cổng thông tin và bảng xếp hạng KOL, MCN',
    role: 'Frontend',
    kind: 'platform',
    period: '03 – 07/2026',
    link: { href: 'https://kol.gov.vn/', label: 'kol.gov.vn' },
    description:
      'Bảng xếp hạng KOL và MCN theo tăng trưởng tương tác thực, Top 100, hồ sơ chi tiết, khai báo hồ sơ cho KOL và MCN, báo cáo vi phạm, tin tức.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind', 'Turborepo'],
    contributions: [
      'Trang chủ, tìm kiếm, Top 100, trang chi tiết KOL và MCN, ticker bảng xếp hạng.',
      'Form khai báo KOL/MCN: upload media, tự nhận diện nền tảng từ link kênh, kiểm tra dữ liệu nghiệp vụ.',
      'Form báo cáo vi phạm; trang profile và đăng ký chiến dịch trên KOLs Platform; sửa header vỡ layout trên iPad.',
      'Ngoài ra: widget tổng hợp kiểm duyệt theo kỳ cho trang quản trị Laravel Filament.',
    ],
  },
  {
    id: 'antcms-templates',
    name: 'AntCMS Templates',
    summary: 'Một bộ mã giao diện cho nhiều toà soạn trên AntCMS',
    role: 'Frontend',
    kind: 'news',
    period: '03 – 05/2026',
    linkNote: 'Giao diện cho Reatimes, Thế giới Điện ảnh và Góc Nhìn Mới',
    description:
      'Monorepo cho các trang tin chạy trên AntCMS: mỗi toà soạn (tenant) chọn template, màu và font riêng, dùng chung section, component và lớp gọi API.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'Middleware', 'Route Handlers', 'pnpm', 'Turborepo'],
    contributions: [
      'Tách tenant khỏi template để một template dùng được cho nhiều toà soạn; trang chủ theo tenant với độ rộng riêng cho từng site.',
      'Đổi màu và font theo cấu hình của từng site, áp cả cho trang chi tiết.',
      'Template Cinematic, trang chủ Reatimes, làm lại các trang Thế giới Điện ảnh; trang chuyên mục, chuyên trang, tag, tìm kiếm, video, trung tâm hỗ trợ và bảng thao tác nổi cho template Góc Nhìn Mới.',
      'Route handler lấy cấu hình theo tên miền và middleware gắn tenant cho từng request.',
    ],
  },
  {
    id: 'emagazine',
    name: 'AntCMS E-magazine',
    summary: 'Thư viện template và trình soạn E-magazine',
    role: 'Frontend',
    kind: 'news',
    period: '01 – 09/2026',
    linkNote: 'Đang chạy trên VietPress và Góc Nhìn Mới',
    description:
      'Template bài E-magazine và Photo story dùng lại cho mọi trang tin trên AntCMS, đóng gói thành npm package theo mô hình Dependency Injection: type-safe, tree-shakeable, chạy với SSR. Biên tập viên chỉnh từng section ngay trên trang và xem trước theo thiết bị.',
    stack: ['React 19', 'TypeScript', 'tsup', 'Next.js 15', 'React Hook Form', 'Swiper', 'Tailwind'],
    contributions: [
      'Tách template thành package dùng chung: package chỉ lo bố cục, trang host tiêm component ảnh, chữ, upload qua TemplateProvider; viết tài liệu tích hợp cho host.',
      'Các bộ E-magazine 1–4, Business, Sport, Basic, Photo 1–2.',
      'Đổi ảnh, đồng bộ ảnh desktop và mobile, chú thích ảnh cho 19 section, tuỳ chỉnh màu chữ.',
      'Soát chính tả ngay trong editor.',
    ],
  },
  {
    id: 'thienkhoi-cdc',
    name: 'Thiên Khôi CDC',
    summary: 'Website doanh nghiệp thiết kế và thi công nội thất',
    role: 'Frontend',
    kind: 'news',
    period: '11/2025 – 09/2026',
    link: { href: 'https://thienkhoicdc.com/', label: 'thienkhoicdc.com' },
    description:
      'Trang giới thiệu, dịch vụ, dự án, tin tức, tuyển dụng, tìm kiếm và liên hệ. Song ngữ Việt – Anh, tối ưu SEO.',
    stack: ['Next.js 15', 'TypeScript', 'TanStack Query', 'Zustand', 'next-intl', 'Framer Motion', 'Tailwind'],
    contributions: [
      'Dựng gần như toàn bộ website: giao diện, lớp dữ liệu gọi API phía server và đa ngôn ngữ.',
      'Banner video, chữ chạy, animation và skeleton loading.',
      'SEO kỹ thuật: sitemap động cho bài viết, chuyên mục, dự án, tuyển dụng, dịch vụ; canonical và hreflang theo ngôn ngữ, structured data.',
    ],
  },
  {
    id: 'vietpress',
    name: 'VietPress',
    summary: 'Báo điện tử tin tức 24h',
    role: 'Frontend',
    kind: 'news',
    period: '10/2025 – 03/2026',
    link: { href: 'https://vietpress.vn/', label: 'vietpress.vn' },
    description:
      'Báo điện tử chạy trên AntCMS: trang chủ dàn trang theo section, chuyên mục, chủ đề, tag, tìm kiếm, bài E-magazine và video, có giao diện sáng và tối.',
    stack: ['Next.js 15', 'Server Components', 'TanStack Query', 'Zustand', 'Swiper', 'React Player', 'Tailwind'],
    contributions: [
      'Header, megamenu, thanh tìm kiếm, breadcrumb, topbar thời tiết.',
      'Các section trang chủ và 7 theme section mới.',
      'Tích hợp E-magazine rồi tách thành package riêng.',
      'Render phía server qua lớp service gọi API AntCMS; sitemap động, gồm cả Google News sitemap.',
    ],
  },
  {
    id: 'gocnhinmoi',
    name: 'Góc Nhìn Mới',
    summary: 'Tin tức chuyên sâu và cộng đồng độc giả viết bài',
    role: 'Frontend',
    kind: 'news',
    period: '08/2025 – nay',
    link: { href: 'https://gocnhinmoi.com.vn/', label: 'gocnhinmoi.com.vn' },
    description:
      'Độc giả đăng ký, viết bài, gửi ảnh địa điểm, theo dõi tác giả, lưu bài, bình luận, nghe podcast và tạo playlist. Có E-magazine, Photo story, video ngắn và bảng xếp hạng tác giả.',
    stack: ['Next.js 15', 'React 19', 'BlockNote', 'TanStack Query', 'Zustand', 'IndexedDB', 'Tailwind'],
    contributions: [
      'Dựng lại trang chủ, chuyên mục, Khám phá; responsive 3 mốc mobile, tablet, desktop.',
      'Nghe & Xem: podcast có sóng âm theo tiến trình, playlist phát theo hàng đợi, lịch sử nghe lưu trên máy.',
      'Trang cá nhân, trang tác giả và độc giả, theo dõi, bảng xếp hạng Tác giả nổi bật; thông báo cho độc giả, luồng duyệt bài.',
      'Phía server: dựng phiên đăng nhập từ server, middleware chuyển hướng, xử lý lỗi 401 tập trung và đồng bộ avatar.',
    ],
  },
  {
    id: 'antcms',
    name: 'AntCMS',
    summary: 'CMS quản trị cho nhiều toà soạn',
    role: 'Frontend',
    kind: 'platform',
    period: '07 – 10/2025',
    linkNote: 'Hệ thống nội bộ',
    description:
      'Mỗi toà soạn là một tenant riêng. Quản lý bài viết, E-magazine, Photo, Video, Podcast, chuyên mục, tác giả, nhuận bút, page builder, menu, banner, SEO, gói thuê bao và phân quyền.',
    stack: ['React', 'Inertia.js', 'BlockNote', 'Ant Design', 'Tailwind', 'Laravel 12'],
    contributions: [
      'Trình soạn bài viết bằng BlockNote: upload video, đếm ký tự, lưu dạng JSON/HTML.',
      'Thư viện media, upload và chọn ảnh, sửa thumbnail.',
      'Giao diện chấm điểm SEO, hiển thị nhuận bút; popup đổi tác giả, chọn chuyên mục dạng cây; sửa giao diện tối cho trình soạn và khung chat trợ lý.',
      'Sửa lỗi 502 của Inertia SSR bằng cách đổi cách nạp trang ở bản render phía server.',
    ],
  },
  {
    id: 'buddhaworlds',
    name: 'BuddhaWorlds',
    summary: 'Thư viện và cổng thông tin Phật giáo',
    role: 'Frontend',
    kind: 'news',
    period: '06 – 07/2025',
    link: { href: 'https://buddhaworlds.com/', label: 'buddhaworlds.com' },
    description:
      'Thư viện số, bài giảng, video ngắn, tin tức, danh bạ chùa có bản đồ. Mỗi chùa có landing page riêng lấy dữ liệu theo mã chùa.',
    stack: ['Next.js 15', 'Server Components', 'MUI / Joy UI', 'next-intl', 'Leaflet', 'Zustand', 'shadcn/ui'],
    contributions: [
      'Trang video ngắn hỗ trợ YouTube, TikTok, Facebook, chỉ phát một video mỗi lúc.',
      'Tính năng đóng góp, sự kiện và tin nổi bật trong trang chi tiết chùa.',
      'Landing chùa gần như làm trọn: trang chủ, giới thiệu, thư viện ảnh, sự kiện, tin tức, liên hệ.',
      'Các trang landing render phía server theo mã chùa, metadata theo từng trang và robots cho SEO.',
    ],
  },
];

export const jobs: Job[] = [
  {
    company: 'NetSpace',
    period: '06/2025 – nay',
    positions: [{ title: 'Fullstack Developer (thế mạnh Frontend)', period: '06/2025 – nay' }],
    note: 'Các dự án ở phần trên.',
  },
  {
    company: 'Công ty Cổ phần Công nghệ và Dịch vụ Y tế số MED-ON',
    period: '03/2023 – 06/2025',
    positions: [{ title: 'Fullstack Developer', period: '03/2023 – 06/2025' }],
    note: 'Làm giao diện các CMS, ki-ốt và trung tâm cuộc gọi bằng React, Ant Design; kèm phần API bằng Java, PostgreSQL.',
    projects: [
      {
        name: 'Medstation',
        period: '05/2024 – 06/2025',
        stack: 'Vite, React, Ant Design, TanStack Query, Recoil, TypeScript',
        description: 'Ki-ốt khám bệnh qua video call với bác sĩ: CMS tổng, CMS cho bác sĩ và giao diện ki-ốt.',
      },
      {
        name: 'Prodental',
        period: '09/2023 – 05/2024',
        stack: 'React, Ant Design, Redux Toolkit, TypeScript',
        description: 'Quản lý lịch hẹn, lịch bác sĩ, hồ sơ bệnh nhân, kho vật tư, doanh thu và thanh toán cho phòng khám nha.',
      },
      {
        name: 'Cus 360',
        period: '10 – 12/2023',
        stack: 'Next.js, Tailwind',
        description: 'Theo dõi thông tin khách hàng, lịch sử khám, voucher, chỉ số sức khoẻ và chi phí.',
      },
      {
        name: 'Loyalty CMS',
        period: '07 – 10/2023',
        stack: 'Next.js, Ant Design, Redux Toolkit',
        description: 'Quản lý khách hàng, chiến dịch khuyến mãi, hạng thành viên và điểm trung thành.',
      },
      {
        name: 'CCOMED',
        period: '03/2023 – 06/2025',
        stack: 'React, Ant Design, Redux, WebSocket',
        description: 'CMS bệnh nhân và lịch hẹn, có trung tâm cuộc gọi qua WebSocket: nghe, gọi và điều hướng trong khi gọi.',
      },
      {
        name: 'MyMedlatec CMS',
        period: '05 – 07/2023',
        stack: 'React, Ant Design, Redux Toolkit',
        description: 'Quản lý tài khoản, phân quyền và thống kê cài đặt ứng dụng MyMedlatec theo nhân viên, đơn vị.',
      },
      {
        name: '555 CMS',
        period: '08/2023',
        stack: 'React, Ant Design, Redux Toolkit',
        description: 'Quản lý thẻ 555 bán ra và cộng tác viên bán thẻ.',
      },
    ],
  },
  {
    company: 'Công ty Cổ phần Tập đoàn Công nghệ Battech',
    period: '04/2022 – 03/2023',
    positions: [{ title: 'Fullstack Developer', period: '04/2022 – 03/2023' }],
    note: 'Làm giao diện hệ thống ERP bằng React, MUI, Redux Toolkit; kèm phần API bằng Node.js (Express), PostgreSQL.',
    projects: [
      {
        name: 'Battech ERP',
        period: '06/2022 – 03/2023',
        stack: 'React, MUI, Redux Toolkit, TypeScript, Tailwind',
        description: 'Hệ thống ERP nội bộ của công ty, team 4 FE và 2 BE.',
      },
    ],
  },
  {
    company: 'Capi Agency',
    period: '11/2018 – 02/2022',
    positions: [
      { title: 'Fullstack Developer', period: '05/2019 – 02/2022' },
      { title: 'UI/UX Designer', period: '11/2018 – 04/2019' },
    ],
    note: 'Làm giao diện web bằng Next.js, Redux, Tailwind; kèm phần API bằng Node.js (Express), PostgreSQL.',
    projects: [
      {
        name: 'MetaDap',
        period: '11/2021 – 02/2022',
        stack: 'Next.js, Redux, TypeScript, Tailwind',
        description: 'Trang web quản lý tài sản số của người dùng.',
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Frontend',
    items: ['Next.js 15/16', 'React 19', 'TypeScript', 'JavaScript ES6+', 'HTML5 · CSS3', 'Tailwind CSS', 'shadcn/ui · Radix', 'Ant Design', 'MUI', 'Framer Motion', 'TanStack Query', 'Zustand', 'Redux Toolkit', 'React Hook Form · Zod', 'BlockNote', 'next-intl', 'Vite'],
  },
  {
    group: 'Mobile',
    items: ['React Native', 'Expo', 'React Navigation', 'MMKV', 'Firebase'],
  },
  {
    group: 'Backend khi cần',
    items: ['Next.js Route Handlers', 'NestJS', 'Node.js · Express', 'Prisma · Drizzle', 'PostgreSQL', 'Redis', 'Socket.IO', 'REST API'],
  },
  {
    group: 'Công cụ & SEO',
    items: ['Git', 'Docker', 'GitLab CI', 'Turborepo', 'pnpm · Bun', 'Vitest', 'Playwright', 'SEO kỹ thuật', 'Sitemap · Structured data', 'Figma', 'Jira'],
  },
];
