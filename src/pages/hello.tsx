import { useSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"


export default function HelloPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>
  }

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Hello, {session?.user?.name}!</h1>
      <p className="text-gray-500 mt-2">Welcome to your dashboard.</p>

      <button
        onClick={() => signOut()}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
      >
        Sign out
      </button>
    </div>
    </>
  )
}
