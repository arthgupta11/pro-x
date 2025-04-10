const Testimonials = () => {
    return (
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {["Amazing UI!", "Super fast & smooth!", "Love the responsiveness!"].map((review, index) => (
            <div key={index} className="p-6 bg-blue-100 rounded-lg shadow-md">
              <p className="text-lg italic">"{review}"</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  