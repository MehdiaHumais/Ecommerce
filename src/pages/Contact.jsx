import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setSuccess(false);
      return;
    }

    setTimeout(() => {
      setSuccess(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section className="pt-24 px-8 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out for any questions or feedback.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/*Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-700 dark:text-white"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-700 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg w-full transition"
          >
            Send Message
          </button>

          {/* Feedback Messages */}
          {success && (
            <p className="text-green-600 dark:text-green-400 mt-2">
              Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-600 dark:text-red-400 mt-2">
              Please fill in all fields.
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl shadow-md dark:shadow-lg space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+92 300 1234567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">kamran@gmails.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Address</h3>
            <p className="text-gray-600 dark:text-gray-300">
              123 Tech Street, Chniot, Pakistan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
