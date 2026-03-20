import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
  const phone = "2347030616144"
  const email = "support@yourdomain.com"
  const address = "15 Onawale Street, off Ire-Akari Estate Road, Isolo, Lagos"
  const whatsappMessage = "Hello, I'd like to get in touch with you."
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`
  const mapEmbedUrl = `https://www.google.com/maps?q=15+Onawale+Street,+Isolo,+Lagos&output=embed`

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-2xl font-bold text-center mb-2">Contact Us</h2>
      <p className="text-center text-gray-500 text-lg mb-10">
        We'd love to hear from you — reach out through any of the channels below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        {/* WhatsApp */}
        <a         
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition group"
        >
          <div className="bg-green-100 text-green-500 rounded-full p-4 mb-3 group-hover:bg-green-500 group-hover:text-white transition">
            <FaWhatsapp size={24} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
          <p className="text-gray-500 text-sm">+{phone}</p>
          <span className="mt-2 text-green-500 text-sm font-medium group-hover:underline">
            Chat with us →
          </span>
        </a>

        {/* Phone */}
        <a                             
          href={`tel:+${phone}`}
          className="flex flex-col items-center text-center bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition group"
        >
          <div className="bg-blue-100 text-blue-500 rounded-full p-4 mb-3 group-hover:bg-blue-500 group-hover:text-white transition">
            <FaPhone size={24} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
          <p className="text-gray-500 text-sm">+{phone}</p>
          <span className="mt-2 text-blue-500 text-sm font-medium group-hover:underline">
            Call us →
          </span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="flex flex-col items-center text-center bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition group"
        >
          <div className="bg-purple-100 text-purple-500 rounded-full p-4 mb-3 group-hover:bg-purple-500 group-hover:text-white transition">
            <FaEnvelope size={24} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
          <p className="text-gray-500 text-sm">{email}</p>
          <span className="mt-2 text-purple-500 text-sm font-medium group-hover:underline">
            Send an email →
          </span>
        </a>

        {/* Physical Address */}
        <div className="flex flex-col items-center text-center bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-3">
          <div className="bg-red-100 text-red-500 rounded-full p-4 mb-3">
            <FaMapMarkerAlt size={24} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
          <p className="text-gray-500 text-sm mb-4">{address}</p>
          <div className="w-full rounded-xl overflow-hidden border">
            <iframe
              title="Shop Location"
              src={mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

    </section>
  )
}

