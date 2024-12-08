import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LocalTravel
        </Link>
        <div className="space-x-4">
          <Link href="/tours" className="text-gray-600 hover:text-blue-600">Tours</Link>
          <Link href="/guides" className="text-gray-600 hover:text-blue-600">Guides</Link>
          <Link href="/auth/login" className="text-gray-600 hover:text-blue-600">Login</Link>
          <Link href="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}

