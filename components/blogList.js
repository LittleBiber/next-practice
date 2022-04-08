import BlogItem from "./blogItem";

export default function BlogList({ blogs = [] }) {
  return (
    <>
      <ul className="messages">
        {blogs.map((x) => (
          <BlogItem key={x.id} {...x} />
        ))}
      </ul>
    </>
  );
}
