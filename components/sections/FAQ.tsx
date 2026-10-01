import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Price } from "@/components/Price";

const faqData = [
  {
    question: "Where can I find scooter or bike rental near me in Kathmandu?",
    answer: "MeroRide is based in Kusunti-13, Lalitpur, centrally located for riders across Kathmandu and Lalitpur. You can book online or reach us directly on WhatsApp. We're one of the most accessible two-wheeler rental services in the valley.",
  },
  {
    question: "Do you offer daily, weekly, and monthly rental plans?",
    answer: "Yes. MeroRide offers flexible daily, weekly, and monthly plans for both scooters and bikes. Monthly rentals are especially popular with students, working professionals, and long-stay visitors in Kathmandu.",
  },
  {
    question: "Do you offer bike rental in Kathmandu?",
    answer: "Yes. MeroRide now offers motorcycle and bike rental alongside our scooter fleet. Whether you need a lightweight scooter for city commuting or a bike for longer rides across the valley, we have options for every kind of rider. Check availability online or contact us on WhatsApp.",
  },
  {
    question: "Are your vehicles petrol or electric?",
    answer: "All MeroRide scooters and bikes are petrol-powered. We currently do not offer electric vehicle rental.",
  },
  {
    question: "Can tourists rent a scooter or bike in Kathmandu?",
    answer: "Absolutely. Tourists with a valid license can rent a scooter or motorcycle from MeroRide. We offer flexible plans for visitors exploring Kathmandu, Lalitpur, Bhaktapur, and beyond.",
  },
  {
    question: "How much does scooter or bike rental cost in Kathmandu?",
    answer: <>MeroRide scooter rental starts from <Price amountNpr={1100} />/day. Bike rental rates vary by model. Weekly and monthly plans offer the best per-day rates, and all pricing is fully transparent with no hidden fees or surprise charges at pickup.</>,
  },
  {
    question: "What documents do I need to rent a scooter or bike?",
    answer: "You'll need a valid two-wheeler driving license, a government-issued ID (citizenship card or passport), and a refundable security deposit. Foreign visitors must carry an international driving permit alongside their home country license.",
  },
  {
    question: "Can I rent a scooter or bike without a driving license?",
    answer: "No. Nepali traffic law requires a valid two-wheeler license to ride any scooter or motorcycle on public roads. MeroRide does not rent vehicles to unlicensed riders, for your safety and legal compliance.",
  },
  {
    question: "Is fuel included in the rental price?",
    answer: "Fuel is not included. You receive the vehicle with a standard fuel level and return it at the same level. Petrol stations are widely available across Kathmandu and Lalitpur.",
  },
  {
    question: "What happens if the vehicle breaks down during my rental?",
    answer: "Maintenance is fully covered during your rental period. Just reach out to our team on WhatsApp and we'll arrange a replacement or assistance as quickly as possible, so your ride stays uninterrupted.",
  },
  {
    question: "Can I take the scooter or bike outside Kathmandu Valley?",
    answer: "Our vehicles are primarily intended for use within Kathmandu and Lalitpur. For nearby areas like Nagarkot, Dhulikhel, or Godavari, just let us know in advance. Rides outside the valley may require prior approval and an updated agreement.",
  },
  {
    question: "How do I book a scooter or bike rental in Kathmandu?",
    answer: "Browse our fleet online, select your dates and preferred plan, and confirm by prepaying or messaging us on WhatsApp. We recommend booking 24 to 48 hours in advance, especially during peak tourist seasons in Nepal.",
  },
  {
    question: "Is there a security deposit?",
    answer: "Yes, documents are necessary while renting, in case of no original documents, lessee need a deposit at pickup. It is returned in full when you bring the vehicle back in its original condition.",
  },
  {
    question: "What areas can I explore on a MeroRide rental?",
    answer: "A MeroRide scooter or bike gives you the freedom to explore all of Kathmandu Valley, from Thamel and Durbar Square to Patan, Bhaktapur, Boudhanath, Pashupatinath, Swayambhunath, and beyond. It's the most affordable and flexible way to get around the valley at your own pace.",
  },
];


export function FAQ() {
  return (
    <section id="faq" className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <ScrollReveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
            Questions?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="rounded-xl border border-white/10 bg-navy-primary/50 p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
