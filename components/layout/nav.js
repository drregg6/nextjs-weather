import Link from 'next/link';

import navStyles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={navStyles.container}>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/city/weather?city=philadelphia"><a>Philadelphia</a></Link></li>
        <li><Link href="/city/weather?city=portland"><a>Portland</a></Link></li>
        <li><Link href="/city/weather?city=london"><a>London</a></Link></li>
      </ul>
    </nav>
  )
}