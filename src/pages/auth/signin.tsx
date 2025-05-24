import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => signIn("google", { callbackUrl: "/hello" })}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow"
      >
        Sign in with Google
      </button>
    </div>
  )
}
