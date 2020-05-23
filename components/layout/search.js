import { useState } from 'react';
import Link from 'next/link';

import searchStyles from './search.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const Search = () => {
  const [input, setInput] = useState('')

  const handleChange = ev => {
    setInput(
      ev.target.value
    )
  }

  return (
    <div className={`${searchStyles.container} ${utilStyles.ptb1} ${utilStyles.center} ${utilStyles.jcenter}`}>
      <input
        type="text"
        placeholder="City"
        value={input}
        className={`${searchStyles.input} ${utilStyles.aLittleLarger}`}
        onChange={(ev) => handleChange(ev)}
      />
      <Link href={`/city/weather?city=${input}`}><a className={`${searchStyles.search} ${utilStyles.aLittleLarger}`}>Search</a></Link>
    </div>
  )
}

export default Search;