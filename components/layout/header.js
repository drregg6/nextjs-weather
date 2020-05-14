import Link from 'next/link';

import { Nav } from './nav';
import headerStyles from './header.module.scss';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>Next.js Weather</h1>
      <Nav />
    </header>
  )
}