import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#004d33] to-[#003824] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  About <span className="text-[#6ee7b7]">Agrico</span>
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Our mission is to revolutionize agriculture through technology
                  and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#6ee7b7]/10 px-3 py-1 text-sm text-[#004d33]">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#004d33]">
                  Empowering Farmers, Nourishing Communities
                </h2>
                <p className="text-gray-600 md:text-lg">
                  At Agrico, we believe that sustainable agriculture is the key
                  to a better future. Our platform connects farmers with buyers
                  who value quality, sustainability, and fair trade practices.
                </p>
                <p className="text-gray-600 md:text-lg">
                  We're committed to helping farmers maximize their yields while
                  minimizing environmental impact, creating a win-win situation
                  for everyone involved.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                  alt="Farmers in a field"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#f8fafc]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1517486803000-000000000000"
                  alt="Agrico founders"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-[#6ee7b7]/10 px-3 py-1 text-sm text-[#004d33]">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#004d33]">
                  From Farm to Table, Digitally
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Agrico was founded by a team of agricultural experts and
                  technology innovators who saw the need for a more efficient
                  and sustainable way to connect farmers with buyers.
                </p>
                <p className="text-gray-600 md:text-lg">
                  What started as a small project to help local farmers has
                  grown into a comprehensive platform that serves thousands of
                  farmers and buyers across the country.
                </p>
                <Button
                  asChild
                  className="bg-[#004d33] hover:bg-[#003824] text-white mt-4"
                >
                  <Link href="/contact" className="flex items-center">
                    Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Agrico Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#6ee7b7]/10 px-3 py-1 text-sm text-[#004d33]">
                  Why Agrico?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#004d33]">
                  Maximize Yield, Reduce Risk
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Agrico helps farmers make informed decisions ahead of time, maximizing yield and reducing risk. Built for small to medium-scale farmers, cooperatives, extension officers, and NGOs supporting rural farming.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Small to medium-scale farmers</li>
                  <li>Farming cooperatives</li>
                  <li>Agricultural extension officers</li>
                  <li>NGOs supporting rural farming</li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1517486803000-000000000000" alt="Why Agrico" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-[#f8fafc]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image src="https://images.unsplash.com/photo-1517486803000-000000000000" alt="How Agrico Works" fill className="object-cover" />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-[#6ee7b7]/10 px-3 py-1 text-sm text-[#004d33]">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#004d33]">
                  Data, AI, and Actionable Insights
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-semibold text-[#004d33]">Data Collection:</span> Gathers historical and current weather, soil, and crop data.</li>
                  <li><span className="font-semibold text-[#004d33]">Prediction Engine:</span> Uses machine learning models trained on agricultural datasets.</li>
                  <li><span className="font-semibold text-[#004d33]">Recommendation Engine:</span> Translates predictions into simple, personalized actions.</li>
                  <li><span className="font-semibold text-[#004d33]">Alerts:</span> Notifies the user via SMS or dashboard if immediate action is needed.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#004d33] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Join the Agricultural Revolution?
                </h2>
                <p className="text-xl text-gray-300">
                  Whether you're a farmer looking to expand your market or a
                  buyer seeking quality produce, Agrico is here to help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  asChild
                  className="bg-[#6ee7b7] hover:bg-[#34d399] text-[#004d33] font-medium text-lg px-8 py-6"
                >
                  <Link href="/offers">Explore Our Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7]/10 text-lg px-8 py-6"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
