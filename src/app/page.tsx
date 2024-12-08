import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Local Travel and Tourism</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/tours" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition">
          <h2 className="text-2xl font-semibold mb-2">Explore Tours</h2>
          <p>Discover unique local experiences and book your next adventure.</p>
        </Link>
        <Link href="/guides" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition">
          <h2 className="text-2xl font-semibold mb-2">Find Local Guides</h2>
          <p>Connect with experienced local guides for personalized tours.</p>
        </Link>
        <Link href="/auth/register" className="bg-purple-500 text-white p-6 rounded-lg shadow-md hover:bg-purple-600 transition">
          <h2 className="text-2xl font-semibold mb-2">Join Our Community</h2>
          <p>Register as a tourist or local guide and start your journey.</p>
        </Link>
      </div>
    </div>
  )
}

