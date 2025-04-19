// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-14 pb-10 px-6 mt-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🚀 ProjectTask</h2>
          <p className="text-sm text-gray-600">
            Solusi manajemen proyek dan tugas yang membantu tim bekerja lebih efisien.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="#about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link></li>
            <li><Link href="#faq" className="hover:text-blue-600 transition">FAQ</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms" className="hover:text-blue-600 transition">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
            <li><Link href="/security" className="hover:text-blue-600 transition">Security</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Newsletter</h3>
          <p className="text-sm text-gray-600 mb-2">Dapatkan update terbaru dari kami langsung ke inbox Anda.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 flex flex-col items-center justify-center text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ProjectTask. All rights reserved.</p>
        <div className="flex items-center space-x-1 mt-2">
          <span>By</span>
          <a
            href="https://github.com/ZansOne1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            @zansone1
          </a>
        </div>
      </div>

    </footer>


  );
}
