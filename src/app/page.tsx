import Link from 'next/link'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className='text-4xl font-bold text-center text-white'>Home</h1>
      <p>
        <Link href='/meals'>Meals</Link>
      </p>
      <p>
        <Link href='/community'>Community</Link>
      </p>
      <p>
        <Link href='/meals/share'>Share Meal</Link>
      </p>
    </main>
  )
}
