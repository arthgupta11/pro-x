const FAQs = () => {
    const faqs = [
      { question: "What is Next.js?", answer: "Next.js is a React framework for production." },
      { question: "Why Tailwind CSS?", answer: "Tailwind makes styling fast, responsive, and customizable." },
    ];
  
    return (
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-6">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <details className="group">
                <summary className="cursor-pointer text-xl font-semibold">
                  {faq.question}
                  <span className="float-right">+</span>
                </summary>
                <p className="mt-2 text-gray-600 hidden group-open:block">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FAQs;
  