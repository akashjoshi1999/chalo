import Link from 'next/link'

// Mock data for tours
const tours = [
  { id: 1, title: 'City Walking Tour', description: 'Explore the city\'s hidden gems', price: 25 },
  { id: 2, title: 'Mountain Hiking Adventure', description: 'Experience breathtaking views', price: 50 },
  { id: 3, title: 'Local Food Tasting', description: 'Savor authentic local cuisine', price: 35 },
]

export default function ToursPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Available Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{tour.title}</h2>
            <p className="text-gray-600 mb-4">{tour.description}</p>
            <p className="text-lg font-bold mb-4">${tour.price}</p>
            <Link href={`/tours/${tour.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

