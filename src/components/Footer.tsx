import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">Local Travel and Tourism Platform connects tourists with unique local experiences and expert guides.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/tours" className="text-gray-600 hover:text-blue-600">Tours</Link></li>
              <li><Link href="/guides" className="text-gray-600 hover:text-blue-600">Guides</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">Email: info@localtravel.com</p>
            <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2023 Local Travel and Tourism Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

