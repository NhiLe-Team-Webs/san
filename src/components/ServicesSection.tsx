import { MessageSquare, HeartHandshake, Sparkles } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Be Heard",
      description: "Participate in our livestreams, ask our podcast hosts anything, and share your story. Your voice matters here.",
      bgColor: "bg-secondary",
      iconColor: "text-primary"
    },
    {
      icon: HeartHandshake,
      title: "Be Understood", 
      description: "Join workshops and discussions designed for women. Connect with others who share your experiences and aspirations.",
      bgColor: "bg-red-50",
      iconColor: "text-accent"
    },
    {
      icon: Sparkles,
      title: "Be Empowered",
      description: "Get exclusive content, join supportive communities, and find the resources you need to thrive personally and professionally.",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What You'll Get Here</h2>
          <p className="mt-4 text-muted-foreground">
            This is your safe space to connect, learn, and grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`${service.bgColor} p-8 rounded-2xl text-center`}>
                <div className="inline-block bg-white p-4 rounded-full shadow-md mb-4">
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};