import Head from 'next/head'

import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  { title: 'React Testing 1', excerpt: 'Learn React Testing 1' },
  { title: 'React Testing 2', excerpt: 'Learn React Testing 2' },
  { title: 'React Testing 3', excerpt: 'Learn React Testing 3' },
  { title: 'React Testing 4', excerpt: 'Learn React Testing 4' },
  { title: 'React Testing 5', excerpt: 'Learn React Testing 5' },
]

const Home = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>V Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
