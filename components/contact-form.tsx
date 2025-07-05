"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSuccess(true)
        setForm({ name: "", phone: "", email: "", details: "" })
      } else {
        const data = await res.json()
        setError(data.error || "Something went wrong")
      }
    } catch (err) {
      setError("Network error")
    }
    setLoading(false)
  }

  return (
    <section className="w-full py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-black dark:text-white">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to start your project? Let's discuss your requirements.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative backdrop-blur-lg bg-white/70 dark:bg-black/70 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-2xl">

              {success ? (
                <div className="text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-500 animate-bounce mx-auto" />
                  <h3 className="text-2xl font-bold text-black dark:text-white">We will contact you soon!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out.</p>
                  <Button onClick={() => setSuccess(false)} className="mt-4">Send Another Message</Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-black dark:text-white">Name</label>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-white/50 text-black dark:bg-black/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-black dark:text-white">Phone Number</label>
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        pattern="\d{10}"
                        placeholder="Your phone number"
                        className="bg-white/50 text-black dark:bg-black/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black dark:text-white">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-white/50 text-black dark:bg-black/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black dark:text-white">Project Details</label>
                    <Textarea
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      className="bg-white/50 text-black dark:text-white dark:bg-black/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm resize-none"
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className={cn(
                      "w-full py-4",
                      "bg-black dark:bg-white text-white dark:text-black",
                      "hover:bg-gray-800 dark:hover:bg-gray-200",
                      "border border-gray-200 dark:border-gray-700",
                      loading && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {loading ? "Sending..." : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
