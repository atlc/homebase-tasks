import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function Profile() {
  return (
    <div>
      <h1>User profile info here lmao</h1>
      <h2>Last logged in at {new Date().toLocaleString()}</h2>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: `/${session.username}`
    }
  };
};
