import "./Card.css";
const data = [
  {
    id: 1,
    title: "Fast Performance",
    description:
      "Optimized for speed and efficiency to deliver a smooth user experience.",
    image: "https://picsum.photos/seed/performance/400/300",
  },
  {
    id: 2,
    title: "Modern Design",
    description:
      "Clean, responsive, and visually appealing layouts built with best practices.",
    image: "https://picsum.photos/seed/design/400/300",
  },
  {
    id: 3,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business using reliable and flexible components.",
    image: "https://picsum.photos/seed/scalable/400/300",
  },
];

const Card = () => {
  return data.map((item) => (
    <div key={item.id} className="card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} />
    </div>
  ));
};

export default Card;
