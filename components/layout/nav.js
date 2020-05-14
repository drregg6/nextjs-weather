import Link from 'next/link';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/city/weather?city=philadelphia"><a>Philadelphia, PA</a></Link></li>
        <li><Link href="/city/weather?city=portland"><a>Portland, OR</a></Link></li>
        <li><Link href="/city/weather?city=london"><a>London, UK</a></Link></li>
        <li><Link href="/city/weather?city=seoul"><a>Seoul, SK</a></Link></li>
      </ul>
    </nav>
  )
}