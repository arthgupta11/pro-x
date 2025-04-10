const WhatWeDo = () => {
  return (
    <section className="py-20 px-6 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {["Fast Performance", "Modern UI", "Fully Responsive"].map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{feature}</h3>
            <p className="mt-2 text-gray-600">We ensure high performance and smooth UX.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
