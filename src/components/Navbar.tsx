import Link from "next/link"
import { signOut } from "next-auth/react"

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link href="/hello" className="text-blue-600 hover:underline">Dashboard</Link>
        <Link href="/orders" className="text-blue-600 hover:underline">Orders</Link>
      </div>
      <button
        onClick={() => signOut()}
        className="text-red-500 hover:underline"
      >
        Sign out
      </button>
    </nav>
  )
}
