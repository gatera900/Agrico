import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsPage() {
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
                  Frequently Asked{" "}
                  <span className="text-[#6ee7b7]">Questions</span>
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Find answers to common questions about our services and
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-40 h-40 mb-4">
                <Image src="/placeholder-logo.png" alt="Agrico AI Assistant" fill className="object-contain" />
              </div>
              <div className="bg-[#6ee7b7]/10 text-[#004d33] rounded-lg px-4 py-2 mb-4 text-center max-w-xl">
                <strong>Agrico is powered by advanced AI</strong> to help you predict, plan, and prosper. Our assistant provides actionable insights, personalized recommendations, and timely alerts for your farm.
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-[#004d33]">
                    What services does Agrico offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Agrico offers a comprehensive suite of agricultural services
                    including sustainable farming solutions, market access
                    platforms, financial services, and educational resources. We
                    help farmers optimize their operations, connect with buyers,
                    and implement sustainable practices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold text-[#004d33]">
                    How can I join Agrico as a farmer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    To join Agrico as a farmer, simply create an account on our
                    platform, complete your profile with farming details, and
                    verify your identity. Our team will review your application
                    and guide you through the onboarding process to get started
                    with our services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold text-[#004d33]">
                    What are the benefits of using Agrico's platform?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Agrico's platform offers numerous benefits including direct
                    market access, fair pricing, sustainable farming guidance,
                    financial services, and a supportive community of farmers.
                    We help farmers increase their profits while promoting
                    sustainable agricultural practices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold text-[#004d33]">
                    How does Agrico ensure sustainable farming practices?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We promote sustainable farming through educational
                    resources, best practice guidelines, and monitoring systems.
                    Our platform provides tools and knowledge to help farmers
                    implement eco-friendly practices while maintaining
                    productivity and profitability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-semibold text-[#004d33]">
                    What payment methods are accepted?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Agrico accepts various payment methods including bank
                    transfers, mobile money, and digital payments. We ensure
                    secure and transparent transactions for all our users, with
                    detailed records and receipts for every transaction.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-semibold text-[#004d33]">
                    How can I get support if I have issues?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our support team is available through multiple channels
                    including email, phone, and live chat. You can reach us
                    during business hours, and we also provide an extensive
                    knowledge base and FAQ section for self-help resources.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center space-y-4 pt-8">
                <h2 className="text-2xl font-bold text-[#004d33]">
                  Still have questions?
                </h2>
                <p className="text-gray-600">
                  Can't find the answer you're looking for? Please chat to our
                  friendly team.
                </p>
                <Button className="bg-[#004d33] hover:bg-[#003824] text-white">
                  Contact Support
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
