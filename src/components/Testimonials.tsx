export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Spice & Nice is my go-to for inspiration. The community is so welcoming, and I've learned so much from the workshops.",
      author: "Sarah L."
    },
    {
      quote: "I finally found a place where I don't feel alone. The conversations are real, raw, and incredibly helpful.",
      author: "Maria G."
    },
    {
      quote: "I asked a question on the livestream and the hosts gave such a thoughtful answer. It really helped me. Thank you!",
      author: "Chloe T."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Community Says</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-border">
              <p className="text-muted-foreground">"{testimonial.quote}"</p>
              <p className="mt-4 font-bold text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};