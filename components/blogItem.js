export default function BlogItem({ title, description, userId }) {
  return (
    <li className="blogs__item">
      <h3>{title}</h3>
      <sub>{description}</sub>
    </li>
  );
}
