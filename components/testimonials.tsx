import { Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0fdf4] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/placeholder.svg" alt="Leaf pattern" fill className="object-cover" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#6ee7b7]/20 px-3 py-1 text-sm text-[#004d33]">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#004d33]">Hear From Our Farmers</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how Agrico has transformed agricultural businesses across the country.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
            <div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#6ee7b7] text-[#6ee7b7]" />
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                "Since joining Agrico, my farm's revenue has increased by 40%. The direct connection to buyers has
                eliminated unnecessary costs and improved my profit margins significantly."
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&q=80" alt="Farmer portrait" fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-[#004d33]">Michael Thompson</p>
                <p className="text-sm text-gray-500">Wheat Farmer, Kansas</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
            <div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#6ee7b7] text-[#6ee7b7]" />
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                "The platform's analytics tools have helped me understand market trends better. I can now plan my
                harvests to align with peak demand periods, maximizing my returns."
              </p>
            </div>
                          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&w=256&h=256&q=80" alt="Farmer portrait" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#004d33]">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Organic Vegetable Grower, California</p>
                </div>
              </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
            <div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#6ee7b7] text-[#6ee7b7]" />
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                "As a small-scale farmer, finding reliable buyers was always a challenge. Agrico has connected me with
                premium buyers who value quality produce and are willing to pay fair prices."
              </p>
            </div>
                          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=256&h=256&q=80" alt="Farmer portrait" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#004d33]">David Rodriguez</p>
                  <p className="text-sm text-gray-500">Fruit Orchard Owner, Washington</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
