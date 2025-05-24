import { getSession } from "next-auth/react"
import type { GetServerSideProps } from "next"

export default function Home() {
  return null // Page will redirect immediately
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: "/hello",
        permanent: false,
      },
    }
  }

  return {
    redirect: {
      destination: "/auth/signin",
      permanent: false,
    },
  }
}
