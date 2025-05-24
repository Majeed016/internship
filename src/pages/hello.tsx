import { getSession } from "next-auth/react"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Navbar from "../components/Navbar"

export default function HelloPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
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
    props: { user: session.user },
  }
}
