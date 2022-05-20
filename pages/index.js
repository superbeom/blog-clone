import Head from 'next/head'

import { getPosts } from '../services'

import { PostCard, Categories, PostWidget } from '../components'

const Home = ({ postDatas }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>V Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {postDatas.map((postData) => (
            <PostCard key={postData.cursor} post={postData.node} />
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

export const getStaticProps = async () => {
  const postDatas = (await getPosts()) || []

  return {
    props: {
      postDatas,
    },
  }
}
