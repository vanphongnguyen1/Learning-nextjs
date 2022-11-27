import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../src/Component/Navigation';
import styles from '../styles/Home.module.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('filter', filter);
  }, []);

  return (
    <Container>
      <h1>AAAAAAAAAAAAAAAAAA</h1>
      <br />
      <Navigation />
    </Container>
  );
}
