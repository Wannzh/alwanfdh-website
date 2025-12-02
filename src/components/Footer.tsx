export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white block mb-4">Alwan<span className="text-blue-500">Dev</span></span>
            <p className="text-sm max-w-xs">
              Membangun solusi digital berkelas untuk pertumbuhan bisnis Anda. Kualitas kode dan kepuasan klien adalah prioritas utama.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portofolio</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Harga</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Sosial Media</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Alwan Fadhlurrohman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}