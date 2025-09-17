import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { QuestionSection } from "@/components/QuestionSection";
import { WorkshopIdeas } from "@/components/WorkshopIdeas";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SubscriptionModal } from "@/components/SubscriptionModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      
      <main>
        <HeroSection onJoinCommunity={openModal} />
        <SocialProof />
        <ServicesSection />
        <CTASection onSubscribe={openModal} />
        <QuestionSection />
        <WorkshopIdeas />
        <Testimonials />
        <FAQ />
      </main>
      
      <Footer />
      
      <SubscriptionModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
