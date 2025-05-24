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

  return { props: {} }
}
