import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqData = [
  {
    question: "Where can I find a scooter rental near me in Kathmandu?",
    answer: "MeroRide operates across Kathmandu and Lalitpur. You can book a scooter online or visit us directly. We're one of the most accessible scooter hire options near you in the valley.",
  },
  {
    question: "Do you offer monthly scooter rental?",
    answer: "Yes — we offer daily, weekly, and monthly scooter rental plans in Kathmandu. Monthly rentals are popular with students, working professionals, and long-stay tourists.",
  },
  {
    question: "Is this a petrol or electric scooter rental?",
    answer: "All MeroRide scooters are petrol-powered motorized scooters. We currently do not offer electric scooter rental.",
  },
  {
    question: "Can tourists rent a moped or scooty in Kathmandu?",
    answer: "Absolutely. Tourists with a valid license can rent a moped or scooty from MeroRide. We offer flexible plans for visitors exploring Kathmandu, Lalitpur, and beyond.",
  },

  {
    question: "How much does it cost to rent a scooter in Kathmandu?",
    answer: "MeroRide offers some of the most affordable scooter rental rates in Kathmandu and Lalitpur. Our daily scooter rental starts from NPR [X], with discounted weekly and monthly rental packages available. All pricing is transparent — no hidden fees or surprise charges."
  },
  {
    question: "What documents do I need to rent a scooter from MeroRide?",
    answer: "To rent a scooter in Kathmandu, you'll need a valid driving license (two-wheeler), a government-issued ID (citizenship card or passport), and a refundable security deposit. Foreign visitors renting a scooter in Nepal must carry an international driving permit along with their home country license."
  },
  {
    question: "Can I rent a scooter in Kathmandu without a driving license?",
    answer: "No — Nepali traffic law requires a valid two-wheeler driving license to operate a scooter or motorcycle on public roads. MeroRide does not rent vehicles to unlicensed riders for your safety and legal compliance. If you need help understanding Kathmandu's traffic rules, our team is happy to assist."
  },
  {
    question: "Is fuel included in the scooter rental price?",
    answer: "Fuel is not included in the rental price. You receive the scooter with a standard fuel level and are expected to return it at the same level. Petrol stations are widely available across Kathmandu and Lalitpur for easy top-ups during your ride."
  },
  {
    question: "Do you offer monthly scooter rentals in Kathmandu?",
    answer: "Yes — MeroRide offers flexible monthly scooter rental plans ideal for students, working professionals, and long‑stay visitors in Kathmandu. Monthly rentals come with the best per‑day rates and include maintenance coverage. Contact us on WhatsApp to get a custom monthly rental quote."
  },
  {
    question: "What happens if the scooter breaks down during my rental?",
    answer: "Maintenance is fully covered during your rental period with MeroRide. If you experience a breakdown, contact our 24/7 customer support line and we will arrange a replacement or roadside assistance as quickly as possible — so your ride across Kathmandu stays uninterrupted."
  },
  {
    question: "Can I take the rented scooter outside Kathmandu Valley?",
    answer: "MeroRide scooters are primarily intended for use within Kathmandu and Lalitpur. If you'd like to ride to nearby areas such as Nagarkot, Dhulikhel, or Godavari, please inform us beforehand. Rides outside the valley may require prior approval and an adjusted agreement."
  },
  {
    question: "How do I book a scooter rental in Kathmandu?",
    answer: "Booking a scooter with MeroRide is simple: browse our fleet online, select your dates and preferred plan, then confirm your booking by prepaying or contacting us directly on WhatsApp. We recommend booking 24–48 hours in advance, especially during peak tourist seasons in Nepal."
  },
  {
    question: "Is there a security deposit for scooter rentals?",
    answer: "Yes, a refundable security deposit is required at the time of pickup. The deposit amount varies by vehicle and rental duration, and is returned in full upon safe return of the scooter in its original condition."
  },
  {
    question: "What areas of Kathmandu can I explore on a MeroRide scooter?",
    answer: "A MeroRide scooter gives you the freedom to explore all of Kathmandu Valley — from Thamel and Durbar Square to Patan, Bhaktapur, Swayambhunath, Boudhanath, Pashupatinath, and beyond. It's the most convenient and affordable way to navigate Kathmandu's narrow lanes and avoid traffic."
  }
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
