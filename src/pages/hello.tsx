import { getSession } from "next-auth/react"
import type { GetServerSidePropsContext } from "next"
import Navbar from "../components/Navbar"

type User = {
  name?: string | null
  email?: string | null
  image?: string | null
}

export default function HelloPage({ user }: { user: User }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">Hello, {user?.name}!</h1>
        <p className="text-gray-500 mt-2">Welcome to your dashboard.</p>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: session.user,
    },
  }
}
