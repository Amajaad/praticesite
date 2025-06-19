import { Card } from "react-bootstrap";
import { FaUser, FaComments } from "react-icons/fa";
export const blogs = [
    {
      id: 1,
      name: "Neon Nights: Inside the Hottest Party of the Year",
      date: "15",
      month: "jan",
      image: "./img/blog-detials/m-blog-1.jpg",
      description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      tags: "Travel, Lifestyle",
    },
    {
      id: 2,
      name: "Capturing Serenity: How Technology Meets Nature",
      date: "17",
      month: "jan",
      image: "./img/blog-detials/m-blog-2.jpg",
      description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      tags: "Technology, Project, design",
    },
    {
      id: 3,
      name: "Step Into Glamour: The Ultimate Girls' Night Out",
      date: "19",
      month: "jan",
      image: "./img/blog-detials/m-blog-3.jpg",
      description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      tags: "design, illustration",
    },
    {
      id: 4,
      name: "A Toast to Love: Celebrating the Bride’s Special Day",
      date: "25",
      month: "jan",
      image: "./img/blog-detials/m-blog-4.jpg",
      description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      tags: "travel, resturant",
    },
    {
      id: 5,
      name: "Sweet Celebrations: A Sprinkle-Filled Party to Remember",
      date: "25",
      month: "jan",

      image: "./img/blog-detials/m-blog-5.jpg",
      description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      tags: "love, resturant",
    },
  ];

const Blog_info = ({blogs}) => {
  return (
    <div className="">
      {blogs.map((blog) => (
        <Card key={blog.id} className="bg-light shadow shadow-sm mb-5">
          <Card.Img src={blog.image} className="img-fluid" />
          <div
            className="position-absolute ms-5 mt-2 d-md-block d-none"
            style={{ top: 301 }}
          >
            <div className="text-bg-warning small px-4 py-1 rounded text-white text-center">
              <h3>{blog.date}</h3>
              <p>{blog.month}</p>
            </div>
          </div>
          <Card.Body>
            <div className="text-bg-warning small px-4 py-1 rounded text-white text-center d-block d-md-none">
              <h3>{blog.date}</h3>
              <p>{blog.month}</p>
            </div>
            <div className="fw-semibold fs-5 mt-3">
             {blog.name}
            </div>
            <small className="text-secondary">{blog.description}</small>
            <div className="d-md-flex mt-md-4 mt-2">
              <div className="text-secondary small d-flex align-items-center">
                <FaUser className="me-2" />
                {blog.tags}
              </div>
              <div className="border-start border-3 border-dark-subtle ms-2 me-2"></div>
              <div className="text-secondary small d-flex align-items-center">
                <FaComments className="me-2" />3 comments
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default Blog_info;
