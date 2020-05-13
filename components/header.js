import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>Next.js Weather</h1>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}