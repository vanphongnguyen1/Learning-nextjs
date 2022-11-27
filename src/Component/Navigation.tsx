import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Navi = styled.ul`
  display: flex;
  list-style-type: none;
  border-left: 1px solid #cccc;
`;
const NaviItem = styled.li`
  padding: 5px 15px;
  border: 1px solid #cccc;
  border-left: none;
  cursor: pointer;

  &:hover {
    background: #f1f0f0cc;
  }
`;

const RedLink = styled.div`
  color: red;
`;

const Navigation = () => {
  const router = useRouter();
  const handleNavLinkPostDetail = () => {
    // router.push('About');
    router.push({
      pathname: '/Posts/[postId]',
      query: {
        postId: '123',
        ref: 'news',
      },
    });
  };
  return (
    <Navi>
      <NaviItem>
        <Link href="/">Home</Link>
      </NaviItem>
      <NaviItem>
        <Link href="/About" passHref prefetch={false}>
          <RedLink>About</RedLink>
        </Link>
      </NaviItem>
      <NaviItem>
        <Link as="/posts" href="/Posts" prefetch>
          Posts
        </Link>
      </NaviItem>
      <NaviItem>
        <Link href="/Posts/Create" prefetch={false}>
          Create Post
        </Link>
      </NaviItem>
      <NaviItem>
        <div onClick={handleNavLinkPostDetail}>Post 123</div>
      </NaviItem>
      <NaviItem>
        <Link href="/Posts/new/crypto/NFTs" prefetch={false}>
          NFTs
        </Link>
      </NaviItem>
      <NaviItem>
        <Link href="*">404</Link>
      </NaviItem>
    </Navi>
  );
};

export default Navigation;
