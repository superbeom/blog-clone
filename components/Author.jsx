import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mb-8 mt-20 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-2 -top-14">
        <Image
          className="rounded-full align-middle"
          src={author.photo.url}
          alt={author.name}
          width={100}
          height={100}
        />
      </div>

      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-lg text-white">{author.bio}</p>
    </div>
  )
}

export default Author
