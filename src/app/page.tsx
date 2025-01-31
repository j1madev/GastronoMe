import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className='text-3xl font-bold underline text-red-500'>Hello World</h1>
      <p>
        Get started by editing&nbsp;
        <code>src/app/page.tsx</code>
        <button className='block bg-blue-500 text-white px-4 py-2 rounded-md'>Click me</button>
      </p>
    </main>
  )
}
