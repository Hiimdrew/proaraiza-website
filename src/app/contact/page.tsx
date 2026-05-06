import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free painting or remodeling estimate from Pro Araiza. Serving Cumming, GA and the North Atlanta suburbs. Call (843) 415-2437.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get a Free Quote
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Tell us about your project and we will get back to you within 24 hours
            with a free estimate.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-black">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-black">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-black">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-brand-black">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brand-black">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                  >
                    <option value="">Select a service...</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="cabinets">Cabinet Painting</option>
                    <option value="remodeling">Remodeling</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-black transition hover:bg-brand-copper sm:w-auto"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-brand-gray p-8">
                <h2 className="text-xl font-bold text-brand-black">Contact Info</h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm font-medium text-brand-text-light">Phone</p>
                    <a
                      href="tel:8434152437"
                      className="text-lg font-semibold text-brand-black transition hover:text-brand-gold"
                    >
                      (843) 415-2437
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text-light">Email</p>
                    <a
                      href="mailto:Diangel23@hotmail.com"
                      className="text-brand-black transition hover:text-brand-gold"
                    >
                      Diangel23@hotmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text-light">Address</p>
                    <p className="text-brand-black">
                      3419 Preston Pointe Way
                      <br />
                      Cumming, GA 30041
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text-light">Hours</p>
                    <p className="text-brand-black">
                      Monday - Sunday
                      <br />
                      7:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-medium text-brand-text-light">Service Areas</p>
                  <p className="mt-1 text-sm text-brand-text">
                    Cumming, Alpharetta, Gainesville, Buford, Roswell, Woodstock, and
                    the surrounding North Metro Atlanta communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
