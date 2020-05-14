import Link from 'next/link';

import { Nav } from './nav';
import headerStyles from './header.module.scss';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Link href="/"><a className={headerStyles.logo}>Next.js Weather</a></Link>
      <Nav />
    </header>
  )
}