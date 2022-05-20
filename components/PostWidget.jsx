import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((similarPosts) =>
        setRelatedPosts(similarPosts)
      )
    } else {
      getRecentPosts().then((recentPosts) => setRelatedPosts(recentPosts))
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>

      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <Image
              className="rounded-full align-middle"
              src={post.featuredImage.url}
              alt={post.title}
              width={60}
              height={60}
            />
          </div>

          <div className="ml-4 flex-grow">
            <p className="font-light text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>

            <Link href={`/post/${post.slug}`} className="text-medium">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
