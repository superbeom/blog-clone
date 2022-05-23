import React, { Fragment } from 'react'
import Image from 'next/image'
import moment from 'moment'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
        )

      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        )

      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h4>
        )

      case 'image':
        return (
          <Image
            key={index}
            src={obj.src}
            alt={obj.title}
            width={obj.width}
            height={obj.height}
          />
        )

      default:
        return modifiedText
    }
  }

  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          className="h-full w-full rounded-t-lg object-top"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>

      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto">
            <Image
              className="rounded-full align-middle"
              src={post.author.photo.url}
              alt={post.author.name}
              width={30}
              height={30}
            />

            <p className="ml-2 inline align-middle text-lg text-gray-700">
              {post.author.name}
            </p>
          </div>

          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>

        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail
