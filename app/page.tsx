import { ArrowRight, Brain, Calendar, BarChart3, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#004d33] to-[#003824] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[#6ee7b7]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Your AI-Powered <span className="text-[#6ee7b7]">Agriculture</span>
                    <br />
                    Assistant
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Predict future farming conditions and get actionable insights with <span className="text-[#6ee7b7] font-medium">Agrico</span>.
                    Plan, prepare, and prosper with data-driven farming advice.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#6ee7b7] hover:bg-[#34d399] text-[#004d33] font-medium">
                    Start Predicting Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7]/10">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-[#6ee7b7]/20 to-[#34d399]/20 border border-[#6ee7b7]/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-24 h-24 bg-[#6ee7b7]/20 rounded-full flex items-center justify-center">
                        <Brain className="h-12 w-12 text-[#6ee7b7]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">AI-Powered Predictions</h3>
                        <p className="text-gray-300 text-sm max-w-xs">Weather patterns, crop health, and optimal planting times</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
        <section className="w-full py-12 md:py-24 bg-[#f8fafc] relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image alt="Sustainable farming" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#6ee7b7]/10 px-3 py-1 text-sm text-[#004d33]">
                  Sustainable Agriculture
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#004d33]">
                  Farming in Harmony with Nature
                </h2>
                <p className="text-gray-600 md:text-lg">
                  At Agrico, we believe in sustainable farming practices that protect our environment while maximizing
                  yields. Our platform connects you with buyers who value eco-friendly production methods and are
                  willing to pay premium prices for responsibly grown produce.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#34d399]"></div>
                    <span>Reduced environmental impact</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#34d399]"></div>
                    <span>Conservation of natural resources</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#34d399]"></div>
                    <span>Higher market value for sustainable products</span>
                  </li>
                </ul>
                <Button className="bg-[#004d33] hover:bg-[#003824] text-white mt-2">Learn About Our Practices</Button>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <section className="w-full py-12 md:py-24 bg-[#004d33] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Background pattern" fill className="object-cover" />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Agricultural Business?
                </h2>
                <p className="text-xl text-gray-300">
                  Join thousands of farmers who have increased their profits and streamlined their operations with
                  Agrico.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="bg-[#6ee7b7] hover:bg-[#34d399] text-[#004d33] font-medium text-lg px-8 py-6">
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7]/10 text-lg px-8 py-6"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
