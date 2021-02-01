import { GetServerSideProps, NextPage } from 'next';

type PageProps = {};

const Page: NextPage<PageProps> = () => {

  return (
    <>
      <div>Hello world!</div>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const props: PageProps = {};

  return ({ props });
};

export default Page;
