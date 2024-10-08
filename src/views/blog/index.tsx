"use client"
import React from "react"

import Image from "next/image"

import { twMerge } from "tailwind-merge"

import { TracingBeam } from "@/components/tracing-beam"

const BlogView = () => {
  return (
    <TracingBeam className="px-6">
      <div className="relative mx-auto max-w-2xl pt-4 antialiased">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-10"
          >
            <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">{item.badge}</h2>

            <p className={twMerge("mb-4 text-xl")}>{item.title}</p>

            <div className="prose prose-sm dark:prose-invert text-sm">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="mb-10 rounded-lg object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}
export default BlogView
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum
          reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt
          enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
          reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit
          laborum nostrud fugiat voluptate do Lorem culpa officia sint labore. Tempor consectetur excepteur ut fugiat
          veniam commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit
          adipisicing. Proident duis exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat
          adipisicing officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia
          aliquip deserunt veniam deserunt officia adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image: "https://blog.kiiglobal.io/wp-content/uploads/2024/07/KiiChain-launches-testnet-2.webp",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor
          et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do
          do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum
          occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt
          reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut
          mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7rFLQSKSIgfyPMWc-IIZiA.jpeg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor
          et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do
          do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum
          occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image: "https://blog.kiiglobal.io/wp-content/uploads/2024/04/safeguarding-the-digital-financial-future.webp",
  },
]
