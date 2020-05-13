import Link from 'next/link';

import headerStyles from './header.module.scss';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>Next.js Weather</h1>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/philly"><a>Philly</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}