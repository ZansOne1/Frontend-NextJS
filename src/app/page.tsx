'use client';
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const backgrounds = [
  "/img/Tempat_Kerja.jpg",
  "/img/paper-3052246.jpg",
  "/img/desk-1868498_1920.jpg",
];

export default function HomePage() {
  // const [bgIndex, setBgIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBgIndex((prev) => (prev + 1) % backgrounds.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);
  const [activeSection, setActiveSection] = useState("hero");



  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: any = null;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);


  return (
    <>
      <Navbar activeSection={activeSection} />

      <main className="text-gray-800">
        {/* Hero Section */}
        <section
          id="hero"
          className="flex flex-col items-center justify-center bg-[url('/img/Tempat_Kerja.jpg')] bg-cover bg-center text-center px-4 min-h-screen py-24"
        >
          <div className="bg-white p-6 md:p-10 rounded-xl flex flex-col items-center justify-center shadow-md w-full max-w-xl space-y-4 opacity-90">
            <Image
              src="/img/zans.jpeg"
              alt="Hero"
              width={200}
              height={100}
              className="object-contain rounded-xl shadow-md mb-6"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Welcome to Zansone1 ADAIS
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-lg">
              Manage your projects and tasks easily with our all-in-one solution.
            </p>
            <Link href="/register">
              <button id="start" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-medium transition cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-screen py-24 bg-gradient-to-b from-white to-blue-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awesome Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Empower your productivity and collaborate seamlessly with features built for modern teams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {[
              {
                icon: "📋",
                title: "Task Management",
                desc: "Create, track, and organize your daily tasks to boost productivity and stay focused.",
              },
              {
                icon: "🤝",
                title: "Team Collaboration",
                desc: "Collaborate in real-time with role-based assignments and shared progress tracking.",
              },
              {
                icon: "📊",
                title: "Project Overview",
                desc: "Visual dashboards for tracking deadlines, workloads, and project health at a glance.",
              },
              {
                icon: "🔔",
                title: "Smart Notifications",
                desc: "Stay updated with real-time alerts and reminders tailored to your workflow.",
              },
              {
                icon: "💾",
                title: "Cloud Sync",
                desc: "Access your tasks and data from any device, anytime — safely stored in the cloud.",
              },
              {
                icon: "📱",
                title: "Mobile Friendly",
                desc: "Designed to work beautifully on mobile so you can manage work on the go.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out text-left flex flex-col items-start"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="min-h-screen py-24 bg-blue-50 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">About Zansone1</h2>

          <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg mb-12">
            <span className="font-semibold">Zansone1 ADAIS</span> is a modern platform crafted to simplify project management by combining powerful tools for
            task tracking, team collaboration, and progress analytics — all in one intuitive interface.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <img src="/img/icons/vision.jpeg" alt="Vision" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To empower teams of all sizes with smarter tools that make project execution effortless and transparent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <img src="/img/icons/mision.jpeg" alt="Mission" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Deliver user-friendly, scalable, and innovative solutions that enhance productivity and foster collaboration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <img src="/img/icons/values.png" alt="Values" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Core Values</h3>
              <p className="text-gray-600">
                Simplicity, transparency, innovation, and a relentless focus on user needs.
              </p>
            </div>
          </div>
        </section>


        {/* Pricing Section */}
        <section id="pricing" className="min-h-screen py-24 bg-gradient-to-b from-white to-blue-50 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Pricing</h2>
          <p className="text-gray-600 mb-12 text-base md:text-lg">Choose a plan that fits your needs.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Free",
                desc: "Basic features for personal use.",
                price: "Rp. 0",
                button: "Get Started",
                highlight: false,
                icon: "/img/icons/free.png",
              },
              {
                title: "Pro",
                desc: "Advanced tools for small teams.",
                price: "Rp. 1000/month",
                button: "Start Pro",
                highlight: true,
                icon: "/img/icons/pro.png",
              },
              {
                title: "Enterprise",
                desc: "All features + premium support.",
                price: "Contact Us",
                button: "Contact Sales",
                highlight: false,
                icon: "/img/icons/enterprise.png",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl shadow-lg transition hover:scale-[1.03] duration-300 ${plan.highlight ? "bg-blue-600 text-white" : "bg-white text-gray-800"
                  }`}
              >
                {plan.highlight && (
                  <span className="absolute top-4 right-4 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                )}

                <img src={plan.icon} alt={plan.title} className="h-12 mx-auto mb-4 rounded-md" />

                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-sm mb-6">{plan.desc}</p>

                <p className="text-3xl font-bold mb-6">{plan.price}</p>

                <button
                  className={`px-6 py-3 rounded-full font-semibold transition ${plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </section>


        {/* FAQ Section */}
        <section
          id="faq"
          className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-100 text-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="text-left max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is ADAIS?",
                a: "ADAIS is a task and project management platform designed to simplify collaboration for teams and individuals.",
              },
              {
                q: "Is there a free plan?",
                a: "Yes! We offer a basic plan for individuals at no cost with essential task management tools.",
              },
              {
                q: "Can I collaborate with my team?",
                a: "Absolutely! You can invite team members, assign tasks, and track progress together in real-time.",
              },
              {
                q: "How secure is my data?",
                a: "We use advanced encryption protocols and regular backups to ensure your data is always safe and secure.",
              },
              {
                q: "Can I upgrade or downgrade my plan anytime?",
                a: "Yes, you can manage your subscription easily from your account settings without any penalties.",
              },
              {
                q: "Does ADAIS support file sharing?",
                a: "Yes, you can upload and share files with your team directly within the platform.",
              },
              {
                q: "Is customer support available?",
                a: "Our support team is available 24/7 via email or chat to assist you with any issues.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white p-6 rounded-xl shadow transition-all duration-300"
              >
                <summary className="cursor-pointer text-lg font-semibold text-gray-900 flex justify-between items-center">
                  {item.q}
                  <span className="transform transition-transform group-open:rotate-180 text-xl text-blue-500">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen py-24 bg-gradient-to-b from-white to-neutral-300 text-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 mb-10 text-base md:text-lg max-w-xl mx-auto">
            We’d love to hear from you. Reach out via email or connect with us on social media.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/3 transition hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">📧 Email Us</h3>
              <p className="text-gray-600 mb-2">For general inquiries or support:</p>
              <a
                href="mailto:support@zansone1.com"
                className="text-blue-600 font-medium underline hover:text-blue-800 transition"
              >
                support@zansone1.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/3 transition hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">🌐 Social Media</h3>
              <p className="text-gray-600 mb-4">Follow us and stay updated:</p>
              <div className="flex justify-center gap-4">
                <a href="https://twitter.com/zansone1" target="_blank" className="text-blue-500 hover:text-blue-700 text-2xl">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://facebook.com/zansone1" target="_blank" className="text-blue-700 hover:text-blue-900 text-2xl">
                  <i className="fab fa-facebook" />
                </a>
                <a href="https://linkedin.com/company/zansone1" target="_blank" className="text-blue-800 hover:text-blue-900 text-2xl">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </section>


      </main>
      {/* Marquee 1 */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-white py-2 mt-2">
        <div className="flex animate-marquee-right space-x-8 w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-8">
              <img src="/img/logo/wa2.png" className="h-12" />
              <img src="/img/logo/tiktok.png" className="h-12" />
              <img src="/img/logo/ig2.jpeg" className="h-12" />
              <img src="/img/logo/capcut.png" className="h-12" />
              <img src="/img/logo/fb.png" className="h-12" />
              <img src="/img/logo/zoom.jpeg" className="h-12" />
              <img src="/img/logo/dropbox.png" className="h-12" />
              <img src="/img/logo/lemineral.jpeg" className="h-12" />
              <img src="/img/logo/gmail.png" className="h-12" />
              <img src="/img/logo/yt.png" className="h-12" />
              <img src="/img/logo/google.png" className="h-12" />
              <img src="/img/logo/tailwindcss.png" className="h-12" />
              <img src="/img/logo/nextjs.png" className="h-12" />
              <img src="/img/logo/angularjs.png" className="h-12" />
              <img src="/img/logo/expressjs.png" className="h-12" />
              <img src="/img/logo/golang.jpeg" className="h-12" />
              <img src="/img/logo/laravel.png" className="h-12" />
              <img src="/img/logo/mongodb.png" className="h-12" />
              <img src="/img/logo/php.png" className="h-12" />
              <img src="/img/logo/postgressql.png" className="h-12" />
              <img src="/img/logo/vuejs.jpeg" className="h-12" />

            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2 */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-white py-2 mt-2">
        <div className="flex animate-marquee-left space-x-8 w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-8">
              <img src="/img/logo/bca.png" className="h-12" />
              <img src="/img/logo/bri2.png" className="h-12" />
              <img src="/img/logo/bni.png" className="h-12" />
              <img src="/img/logo/bi.png" className="h-12" />
              <img src="/img/logo/office.png" className="h-12" />
              <img src="/img/logo/paypall.png" className="h-12" />
              <img src="/img/logo/apple.jpeg" className="h-12" />
              <img src="/img/logo/aqua.jpeg" className="h-12" />
              <img src="/img/logo/diskominfo.jpeg" className="h-12" />
              <img src="/img/logo/bjb.jpeg" className="h-12" />
              <img src="/img/logo/mandiri.png" className="h-12" />
              <img src="/img/logo/nestjs.png" className="h-12" />
              <img src="/img/logo/c.jpeg" className="h-12" />
              <img src="/img/logo/ci.png" className="h-12" />
              <img src="/img/logo/flutter.png" className="h-12" />
              <img src="/img/logo/html.jpeg" className="h-12" />
              <img src="/img/logo/mysql.png" className="h-12" />
              <img src="/img/logo/nodejs.png" className="h-12" />
              <img src="/img/logo/python.png" className="h-12" />
              <img src="/img/logo/react.png" className="h-12" />

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
