// pages/order.js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import productsData from "../../Data/productData"; // Adjust path if needed

const OrderPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [includeReport, setIncludeReport] = useState(false);
  const [modification, setModification] = useState(false);
  const [notes, setNotes] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (id) {
      const selected = productsData.find((p) => p.id === parseInt(id));
      setProduct(selected);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      productId: product?.id,
      productName: product?.name,
      includeReport,
      modification,
      notes,
      phone,
      email,
    };
    console.log("Order submitted:", orderDetails);
    alert("Order submitted successfully!");
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <section className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Order Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Product ID:</label>
          <input value={product.id} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div>
          <label className="block font-semibold">Product Name:</label>
          <input value={product.name} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" checked={includeReport} onChange={(e) => setIncludeReport(e.target.checked)} />
          <label>Do you want to include report?</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" checked={modification} onChange={(e) => setModification(e.target.checked)} />
          <label>Do you want modification or consultation?</label>
        </div>

        <div>
          <label className="block font-semibold">Additional Notes:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="border p-2 w-full" rows="3" />
        </div>

        <div>
          <label className="block font-semibold">Phone Number:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Order
        </button>
      </form>
    </section>
  );
};

export default OrderPage;
