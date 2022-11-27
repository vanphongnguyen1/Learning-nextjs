import { useRouter } from 'next/router';

const ParamsPage = () => {
  const router = useRouter();
  console.log('🚀  ~ router', router);

  return (
    <div>
      <h1>ParamsPage post page</h1>

      <p>Params Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default ParamsPage;
