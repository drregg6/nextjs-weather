import { useState } from 'react';
import Link from 'next/link';

import searchStyles from './search.module.scss';

const Search = () => {
  const [input, setInput] = useState('')

  const handleChange = ev => {
    setInput(
      ev.target.value
    )
  }

  return (
    <div className={searchStyles.container}>
      <input
        type="text"
        placeholder="City"
        value={input}
        className={searchStyles.input}
        onChange={(ev) => handleChange(ev)}
      />
      <Link href={`/city/weather?city=${input}`}><a className={searchStyles.search}>Search</a></Link>
    </div>
  )
}

export default Search;