import { useRouter } from 'next/router';

const PostDetailPage = () => {
  const router = useRouter();
  console.log('🚀  ~ router', router);

  return (
    <div>
      <h1>PostDetailPage post page</h1>

      <p>Params Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default PostDetailPage;
