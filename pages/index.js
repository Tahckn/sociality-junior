import Head from 'next/head'
import { PostCard, Header } from '../components/'
import myData from '../assets/data.json'

// const data = []
// data.push(myData.posts_by_date['2021-06-17'])

// console.log(Object.values(myData.posts_by_date).map((data) => data))

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sociality</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <PostCard post={myData.posts_by_date} />
      </main>
    </div>
  )
}
