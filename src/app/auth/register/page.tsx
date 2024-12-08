import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role</label>
            <select id="role" name="role" className="w-full px-3 py-2 border rounded-lg" required>
              <option value="tourist">Tourist</option>
              <option value="guide">Local Guide</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link href="/auth/login" className="text-blue-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  )
}

