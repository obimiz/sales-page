"use client"

import { useState } from "react"

type Review = {
  name: string
  rating: number
  comment: string
  date: string
}

const initialReviews: Review[] = [
  {
    name: "Chukwuemeka Obi",
    rating: 5,
    comment: "Bought a laptop here and the after-care service has been amazing. They helped me install all my software for free!",
    date: "March 10, 2025",
  },
  {
    name: "Fatima Bello",
    rating: 5,
    comment: "Very trustworthy shop. The laptop was in great condition and they responded on WhatsApp within minutes when I had a question.",
    date: "February 22, 2025",
  },
  {
    name: "Tunde Adeyemi",
    rating: 4,
    comment: "Good experience overall. The hardware check they offered gave me confidence in my purchase. Would recommend.",
    date: "January 15, 2025",
  },
]

function StarRating({ rating, onChange }: { rating: number; onChange?: (r: number) => void }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1 ">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={`text-2xl transition ${
            star <= (hovered || rating) ? "text-yellow-400" : "text-gray-300"
          } ${onChange ? "cursor-pointer" : "cursor-default"}`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" })
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  const handleSubmit = () => {
    if (!form.name.trim() || !form.comment.trim() || form.rating === 0) {
      setError("Please fill in all fields and select a rating.")
      return
    }
    setError("")
    const newReview: Review = {
      name: form.name.trim(),
      rating: form.rating,
      comment: form.comment.trim(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    }
    setReviews([newReview, ...reviews])
    setForm({ name: "", rating: 0, comment: "" })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-1">Customer Reviews</h2>
      <p className="text-center text-gray-500 text-lg mb-2">
        What our customers are saying
      </p>

      {/* Average Rating */}
      <div className="flex flex-col items-center mb-8">
        <span className="text-5xl font-bold text-yellow-400">{averageRating}</span>
        <StarRating rating={Math.round(Number(averageRating))} />
        <span className="text-gray-500 text-lg mt-1">{reviews.length} reviews</span>
      </div>

      {/* Review Cards */}
      <div className="flex flex-col gap-4 mb-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-gray-800">{review.name}</span>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
            <StarRating rating={review.rating} />
            <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Submit Form */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-lg font-medium text-gray-700 mb-1 block">Your Name</label>
            <input
              type="text"
              placeholder="e.g. Amaka Johnson"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-700 mb-1 block">Your Rating</label>
            <StarRating rating={form.rating} onChange={(r) => setForm({ ...form, rating: r })} />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-700 mb-1 block">Your Comment</label>
            <textarea
              placeholder="Share your experience..."
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              rows={4}
              className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {submitted && <p className="text-green-500 text-sm">✅ Review submitted! Thank you.</p>}

          <button
            onClick={handleSubmit}
            className="bg-green-500 w-36 hover:bg-green-600  text-white font-medium py-2.5 rounded-lg transition"
            >
                Submit Review
            </button>
        </div>
      </div>

    </div>
  )
}