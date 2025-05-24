import { getSession } from "next-auth/react"
import type { GetServerSideProps } from "next"

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
    props: {},
  }
}
