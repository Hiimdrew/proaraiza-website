import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
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
            Get a Free Estimate
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
              <ContactForm />
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
                      href="mailto:Proaraiza93@outlook.com"
                      className="text-brand-black transition hover:text-brand-gold"
                    >
                      Proaraiza93@outlook.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text-light">Address</p>
                    <p className="text-brand-black">
                      302A Bald Ridge Rd
                      <br />
                      Cumming, GA 30040
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
