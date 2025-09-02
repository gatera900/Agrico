import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function OffersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#004d33] to-[#003824] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/placeholder.svg" alt="Background pattern" fill className="object-cover" />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Our <span className="text-[#6ee7b7]">Services</span>
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Discover our comprehensive range of agricultural services
                  designed to empower farmers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Future Season Prediction */}
              <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image src="/placeholder.jpg" alt="Future Season Prediction" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#004d33] mb-2">Future Season Prediction</h3>
                <p className="text-gray-600 mb-4">
                  Uses AI models to predict upcoming weather patterns, rainfall, drought risks, and optimal planting times.
                </p>
                <Button className="mt-auto bg-[#004d33] hover:bg-[#003824] text-white">Learn More</Button>
              </div>

              {/* Farming Recommendations */}
              <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image src="/placeholder-user.jpg" alt="Farming Recommendations" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#004d33] mb-2">Farming Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Tells farmers what to plant, when to plant, and how to prepare soil based on predicted conditions.
                </p>
                <Button className="mt-auto bg-[#004d33] hover:bg-[#003824] text-white">Learn More</Button>
              </div>

              {/* Resource Planning */}
              <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image src="/placeholder-logo.png" alt="Resource Planning" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#004d33] mb-2">Resource Planning</h3>
                <p className="text-gray-600 mb-4">
                  Suggests the quantity and type of fertilizers, seeds, and tools needed for the next season.
                </p>
                <Button className="mt-auto bg-[#004d33] hover:bg-[#003824] text-white">Learn More</Button>
              </div>

              {/* Crop Health Monitoring (Upcoming) */}
              <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image src="/placeholder.jpg" alt="Crop Health Monitoring" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#004d33] mb-2">Crop Health Monitoring (Upcoming)</h3>
                <p className="text-gray-600 mb-4">
                  Will include a module to analyze plant health using image recognition and satellite data.
                </p>
                <Button className="mt-auto bg-[#004d33] hover:bg-[#003824] text-white">Learn More</Button>
              </div>

              {/* Farmer Dashboard */}
              <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image src="/placeholder-logo.svg" alt="Farmer Dashboard" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#004d33] mb-2">Farmer Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Simple interface for viewing alerts, suggestions, and seasonal predictions.
                </p>
                <Button className="mt-auto bg-[#004d33] hover:bg-[#003824] text-white">Learn More</Button>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-[#004d33] mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who are already benefiting from our AI-powered services. Take the first step towards transforming your agricultural business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#004d33] hover:bg-[#003824] text-white">
                  Sign Up Now
                </Button>
                <Button
                  variant="outline"
                  className="border-[#004d33] text-[#004d33] hover:bg-[#004d33] hover:text-white"
                >
                  Contact Sales
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
