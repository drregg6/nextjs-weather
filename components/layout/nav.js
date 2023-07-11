import Link from 'next/link';

import navStyles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={navStyles.container}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/city/weather?city=philadelphia">Philadelphia</Link></li>
        <li><Link href="/city/weather?city=portland">Portland</Link></li>
        <li><Link href="/city/weather?city=london">London</Link></li>
      </ul>
    </nav>
  )
}