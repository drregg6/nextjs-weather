import Link from 'next/link';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/philly"><a>Philadelphia, PA</a></Link></li>
        <li><Link href="/portland"><a>Portland, OR</a></Link></li>
        <li><Link href="/london"><a>London, UK</a></Link></li>
        <li><Link href="/seoul"><a>Seoul, SK</a></Link></li>
      </ul>
    </nav>
  )
}