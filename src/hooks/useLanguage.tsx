import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    services: 'Services',
    community: 'Community',
    faq: 'FAQ',
    
    // Hero Section
    welcomeToSisterhood: 'WELCOME TO THE SISTERHOOD',
    youFoundYourTribe: 'You Found Your',
    tribe: 'Tribe.',
    heroDescription: "We saw you on YouTube, TikTok, and Instagram. We're so glad you're here. This is more than a channel; it's a community where you are heard, understood, and empowered.",
    joinOurCommunity: 'Join Our Community',
    
    // Services Section
    whatYouGetHere: "What You'll Get Here",
    safeSpaceDescription: 'This is your safe space to connect, learn, and grow.',
    beHeard: 'Be Heard',
    beHeardDescription: 'Participate in our livestreams, ask our podcast hosts anything, and share your story. Your voice matters here.',
    beUnderstood: 'Be Understood',
    beUnderstoodDescription: 'Join workshops and discussions designed for women. Connect with others who share your experiences and aspirations.',
    beEmpowered: 'Be Empowered',
    beEmpoweredDescription: 'Get exclusive content, join supportive communities, and find the resources you need to thrive personally and professionally.',
    
    // CTA Section
    readyToJoin: 'Ready to Join?',
    ctaDescription: 'Subscribe to our newsletter and be the first to know about new content, workshops, and community events.',
    subscribeNow: 'Subscribe Now',
    welcomeGiftAwaits: 'Your Welcome Gift Awaits!',
    ctaGiftDescription: 'Join our exclusive mailing list to get early access to workshops, receive content made just for you, and truly become part of the sisterhood.',
    subscribeAndGetGift: 'Subscribe & Get My Gift',
    
    // FAQ
    frequentlyAskedQuestions: 'Frequently Asked Questions',
    faqJoinCommunity: 'How can I join the private community group?',
    faqJoinCommunityAnswer: "Once you subscribe to our mailing list, you'll receive a welcome email with an exclusive link to join our private Facebook group and Discord server.",
    faqWorkshopsFree: 'Are the workshops free?',
    faqWorkshopsFreeAnswer: 'We offer a mix of free and paid workshops. All details are announced first to our mailing list subscribers, who often get early-bird discounts!',
    faqNextLivestream: 'When is the next livestream?',
    faqNextLivestreamAnswer: "Our livestream schedule is sent out every Monday via our newsletter. Subscribe so you don't miss it!",
    
    // Footer
    aboutUs: 'About Us',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us'
  },
  vi: {
    // Header
    services: 'Dịch vụ',
    community: 'Cộng đồng',
    faq: 'Câu hỏi thường gặp',
    
    // Hero Section
    welcomeToSisterhood: 'CHÀO MỪNG ĐÉN VỚI CHỊ EM',
    youFoundYourTribe: 'Bạn Đã Tìm Thấy',
    tribe: 'Gia Đình.',
    heroDescription: 'Chúng tôi đã thấy bạn trên YouTube, TikTok và Instagram. Chúng tôi rất vui vì bạn ở đây. Đây không chỉ là một kênh; đây là một cộng đồng nơi bạn được lắng nghe, hiểu và trao quyền.',
    joinOurCommunity: 'Tham Gia Cộng Đồng',
    
    // Services Section
    whatYouGetHere: 'Những Gì Bạn Sẽ Nhận Được',
    safeSpaceDescription: 'Đây là không gian an toàn để bạn kết nối, học hỏi và phát triển.',
    beHeard: 'Được Lắng Nghe',
    beHeardDescription: 'Tham gia livestream, hỏi bất cứ điều gì với người dẫn chương trình podcast và chia sẻ câu chuyện của bạn. Tiếng nói của bạn rất quan trọng ở đây.',
    beUnderstood: 'Được Hiểu',
    beUnderstoodDescription: 'Tham gia các workshop và thảo luận được thiết kế dành cho phụ nữ. Kết nối với những người có chung trải nghiệm và khát vọng.',
    beEmpowered: 'Được Trao Quyền',
    beEmpoweredDescription: 'Nhận nội dung độc quyền, tham gia cộng đồng hỗ trợ và tìm thấy tài nguyên bạn cần để phát triển cá nhân và nghề nghiệp.',
    
    // CTA Section
    readyToJoin: 'Sẵn Sàng Tham Gia?',
    ctaDescription: 'Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về nội dung mới, workshop và sự kiện cộng đồng.',
    subscribeNow: 'Đăng Ký Ngay',
    welcomeGiftAwaits: 'Món Quà Chào Mừng Đang Chờ Bạn!',
    ctaGiftDescription: 'Tham gia danh sách gửi thư độc quyền của chúng tôi để được ưu tiên truy cập workshop, nhận nội dung được tạo riêng cho bạn và thực sự trở thành một phần của tình chị em.',
    subscribeAndGetGift: 'Đăng Ký & Nhận Quà',
    
    // FAQ
    frequentlyAskedQuestions: 'Câu Hỏi Thường Gặp',
    faqJoinCommunity: 'Làm thế nào để tham gia nhóm cộng đồng riêng tư?',
    faqJoinCommunityAnswer: 'Sau khi đăng ký danh sách gửi thư của chúng tôi, bạn sẽ nhận được email chào mừng với liên kết độc quyền để tham gia nhóm Facebook riêng tư và máy chủ Discord.',
    faqWorkshopsFree: 'Các workshop có miễn phí không?',
    faqWorkshopsFreeAnswer: 'Chúng tôi cung cấp hỗn hợp các workshop miễn phí và trả phí. Tất cả chi tiết được thông báo đầu tiên cho người đăng ký danh sách gửi thư, họ thường nhận được giảm giá sớm!',
    faqNextLivestream: 'Khi nào có livestream tiếp theo?',
    faqNextLivestreamAnswer: 'Lịch trình livestream của chúng tôi được gửi ra vào thứ Hai hàng tuần qua bản tin. Đăng ký để không bỏ lỡ!'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};