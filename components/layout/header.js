import Link from 'next/link';

import { Nav } from './nav';
import headerStyles from './header.module.scss';
import utilStyles from '../../styles/utils.module.scss';

export default function Header() {
  return (
    <header className={`${headerStyles.header} ${utilStyles.aLittleLarger}`}>
      <Link href="/"><a className={`${headerStyles.logo} ${utilStyles.doubleSize}`}>Next.js Weather</a></Link>
      <Nav />
    </header>
  )
}