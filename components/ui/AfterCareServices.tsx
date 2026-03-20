

export default function AfterCareServices() {
  const phone = "2347030616144"
  const message = "Hello, I want to know more about your after-care services"
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-16 text-center font-bold mt-2">After-Care Services</h2>

      <div className="flex flex-col md:flex-row gap-6">

        {/* Card 1 — Our After-Care Services */}
        <div className="flex-1 bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-center">🛠️ Our After-Care Services</h3>
          <p className="text-gray-500 text-lg text-center mb-4">
            We stay with you long after your purchase.
          </p>
          <ul className="text-gray-700 space-y-3 ml-22">
            <li>✔️ <span className="font-medium ">1–3 Months Warranty</span> on all laptops</li>
            <li>✔️ <span className="font-medium">Free Software Installation</span> — OS, drivers & antivirus</li>
            <li>✔️ <span className="font-medium">Hardware Check & Diagnostics</span></li>
            <li>✔️ <span className="font-medium">Battery & Charger Support</span></li>
            <li>✔️ <span className="font-medium">Free Consultation</span> for any laptop-related issue</li>
          </ul>
        </div>

        {/* Card 2 — Get Support Anytime */}
        <div className="flex-1 bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-center">🎧 Get Support Anytime</h3>
          <p className="text-gray-500 text-lg text-center mb-4">
            We're always a message away.
          </p>
          <ul className="text-gray-700 space-y-3 ml-22 flex-1">
            <li>💬 <span className="font-medium">Fast WhatsApp Response</span> — replies within minutes</li>
            <li>📞 <span className="font-medium">Call Support</span> during business hours</li>
            <li>🕐 <span className="font-medium">Available:</span> Mon – Sat, 9am – 6pm</li>
            <li>📍 <span className="font-medium">Walk-in Support</span> at our location</li>
          </ul>
          
        </div>

      </div>
    </div>
  )
}