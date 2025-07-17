export default function About() {
  return (
    <section className="pt-24 px-8 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Welcome to our tech store — where innovation meets affordability.
        </p>
      </div>

      {/* Mission + Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md dark:shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            To provide high-quality, cutting-edge technology products at
            competitive prices, while delivering top-notch customer service.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md dark:shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            We aim to be your trusted online tech destination — empowering
            smarter, more connected lives with the latest gadgets.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Why Shop With Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p>We ship quickly and safely across the country.</p>
          </div>
          <div className="p-6 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>Shop confidently with secure and encrypted checkout.</p>
          </div>
          <div className="p-6 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>We're always here to help with your orders or questions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
