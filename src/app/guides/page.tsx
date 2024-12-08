import Link from 'next/link'

// Mock data for guides
const guides = [
  { id: 1, name: 'John Doe', expertise: 'City Tours', rating: 4.8 },
  { id: 2, name: 'Jane Smith', expertise: 'Mountain Hiking', rating: 4.9 },
  { id: 3, name: 'Mike Johnson', expertise: 'Food Tours', rating: 4.7 },
]

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Local Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{guide.name}</h2>
            <p className="text-gray-600 mb-2">Expertise: {guide.expertise}</p>
            <p className="text-yellow-500 mb-4">Rating: {guide.rating} / 5</p>
            <Link href={`/guides/${guide.id}`} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

