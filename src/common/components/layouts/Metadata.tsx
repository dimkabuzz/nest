import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
};

const Metadata = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/imgs/theme/favicon.svg" />
    </Head>
  );
};

export default Metadata;
