import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
       <h1 className="text-4xl font-bold underline text-green-400">
      Hello world!
    </h1>
    </main>
  )
}
