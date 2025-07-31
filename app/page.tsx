import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Corazon的网络日期
      </h1>
      <p className="mb-4">
        {`记录生活和随笔`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
