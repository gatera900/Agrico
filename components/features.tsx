import {
  Brain,
  Calendar,
  Sprout,
  Tractor,
  BarChart3,
  Image as ImageIcon,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#6ee7b7]/10 px-3 py-1 text-sm text-[#004d33]">
              📌 Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#004d33]">
              Intelligent Tools for Modern Farmers
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Agrico empowers you with AI-driven insights, predictions, and
              recommendations to help you plan, prepare, and prosper.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-[#6ee7b7]/50 bg-white">
            <div className="rounded-full bg-[#6ee7b7]/10 p-3">
              <Calendar className="h-6 w-6 text-[#004d33]" />
            </div>
            <h3 className="text-xl font-bold text-[#004d33]">
              Future Season Prediction
            </h3>
            <div className="relative w-full h-32 rounded-lg overflow-hidden my-2">
              <Image
                src="https://images.unsplash.com/photo-1530099488275-844224b6772c?auto=format&fit=crop&w=400&q=80"
                alt="Future season prediction"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-600">
              Uses AI to predict weather, rainfall, drought risks, and optimal
              planting times.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-[#6ee7b7]/50 bg-white">
            <div className="rounded-full bg-[#6ee7b7]/10 p-3">
              <Sprout className="h-6 w-6 text-[#004d33]" />
            </div>
            <h3 className="text-xl font-bold text-[#004d33]">
              Farming Recommendations
            </h3>
            <div className="relative w-full h-32 rounded-lg overflow-hidden my-2">
              <Image
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80"
                alt="Farming recommendations"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-600">
              Personalized advice on what to plant, when to plant, and soil
              preparation.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-[#6ee7b7]/50 bg-white">
            <div className="rounded-full bg-[#6ee7b7]/10 p-3">
              <Tractor className="h-6 w-6 text-[#004d33]" />
            </div>
            <h3 className="text-xl font-bold text-[#004d33]">
              Resource Planning
            </h3>
            <div className="relative w-full h-32 rounded-lg overflow-hidden my-2">
              <Image
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
                alt="Resource planning"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-600">
              Suggests the quantity and type of fertilizers, seeds, and tools
              for the next season.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-[#6ee7b7]/50 bg-white">
            <div className="rounded-full bg-[#6ee7b7]/10 p-3">
              <ImageIcon className="h-6 w-6 text-[#004d33]" />
            </div>
            <h3 className="text-xl font-bold text-[#004d33]">
              Crop Health Monitoring (Upcoming)
            </h3>
            <div className="relative w-full h-32 rounded-lg overflow-hidden my-2">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80"
                alt="Crop health monitoring"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-600">
              Will analyze plant health using image recognition and satellite
              data.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-[#6ee7b7]/50 bg-white">
            <div className="rounded-full bg-[#6ee7b7]/10 p-3">
              <BarChart3 className="h-6 w-6 text-[#004d33]" />
            </div>
            <h3 className="text-xl font-bold text-[#004d33]">
              Farmer Dashboard
            </h3>
            <div className="relative w-full h-32 rounded-lg overflow-hidden my-2">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                alt="Farmer dashboard"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-600">
              Simple interface for viewing alerts, suggestions, and seasonal
              predictions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-[#6ee7b7]/50 bg-white">
            <div className="rounded-full bg-[#6ee7b7]/10 p-3">
              <Smartphone className="h-6 w-6 text-[#004d33]" />
            </div>
            <h3 className="text-xl font-bold text-[#004d33]">
              Smart Alerts & Notifications
            </h3>
            <div className="relative w-full h-32 rounded-lg overflow-hidden my-2">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
                alt="Smart alerts"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-600">
              Get real-time notifications about weather changes, pest outbreaks,
              and optimal action times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
