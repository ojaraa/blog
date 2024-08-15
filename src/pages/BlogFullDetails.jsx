import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import blogImage from "../assets/blog2.png";
import { LuAlarmClock } from "react-icons/lu";

function BlogFullDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // const selectedBlog = data.find((blog) => blog.id === parseInt(id));
        // setBlog(selectedBlog);
        console.log(data)
        // const post = data.find(p => p.id === parseInt(id));
      })
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const post = blog.find(p => p.id === parseInt(id));

  console.log(post)
  // if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="blogContainer">
        <div className="blog-page">
          <div className="blog-details">
           
            {/* <h1 className="blog-title">{post.blogname}</h1> */}
            <div className="blog-writer-details">
            <div className="blog-date">
              <LuAlarmClock />
              <p>24 Jun , 2024</p>
            </div>
              <p className="writer-name">Adefabi Muminat</p>
            </div>

            <div className="blog-image">
              <img src={blogImage} alt="" />
            </div>

            <div className="blog-content">
              <p className="blog-paragraph">
                In an age where technology evolves at an unprecedented pace, the
                journey through the labyrinth of knowledge and innovation is
                both exhilarating and daunting. Each turn in this intricate maze
                reveals new possibilities and challenges, shaping our
                understanding of the world and our place within it. This blog
                post delves into the dynamic interplay of knowledge and
                innovation, exploring how they fuel each other in a continuous
                cycle of progress.
              </p>

              <h5 className="sub-title">The Foundation of Knowledge</h5>
              <p className="blog-paragraph">
                Knowledge forms the bedrock of innovation. It is through the
                accumulation of information, the synthesis of ideas, and the
                application of critical thinking that we build a foundation
                capable of supporting groundbreaking discoveries. In the digital
                age, access to knowledge has become more democratized than ever
                before. Online courses, digital libraries, and collaborative
                platforms empower individuals to learn and grow irrespective of
                their geographical location or socioeconomic status.
              </p>

              <h5 className="sub-title">The Spark of Innovation</h5>
              <p className="blog-paragraph">
                Innovation is the spark that ignites when knowledge meets
                creativity. It is the process of translating ideas into
                practical applications that address real-world problems.
                Innovations can be incremental, improving upon existing
                technologies, or disruptive, fundamentally altering how we live
                and work.
              </p>

              <p className="blog-paragraph">
                One of the most compelling aspects of innovation is its
                unpredictability. The most transformative ideas often emerge
                from unexpected intersections of disciplines. Consider the
                development of the smartphone, which seamlessly integrates
                advances in computing, telecommunications, and materials
                science. Each innovation not only solves specific problems but
                also opens new avenues for exploration, adding complexity to the
                labyrinth.
              </p>
              <h5 className="sub-title">
                The Synergy Between Knowledge and Innovation
              </h5>

              <p className="blog-paragraph">
                The relationship between knowledge and innovation is symbiotic.
                As we innovate, we generate new knowledge, which in turn fuels
                further innovation. This cycle creates a dynamic environment
                where progress accelerates exponentially. For instance, the
                advent of artificial intelligence (AI) has revolutionized
                numerous fields, from healthcare to finance, by enabling
                unprecedented levels of data analysis and pattern recognition.
                The insights gained from these applications drive further
                advancements in AI, creating a virtuous circle of development.
              </p>

              <p className="blog-paragraph">
                Moreover, the tools and technologies we develop often become
                catalysts for new areas of knowledge. The invention of the
                microscope, for example, unveiled the world of microorganisms,
                leading to profound advancements in biology and medicine.
                Similarly, the internet has not only transformed how we
                communicate but has also given rise to entirely new fields of
                study, such as cybersecurity and digital marketing.
              </p>

              <h5 className="sub-title">Navigating the Labyrinth</h5>
              <p className="blog-paragraph">
                The journey through the labyrinth of knowledge and innovation
                requires a balance of curiosity, perseverance, and adaptability.
                Here are some strategies to navigate this complex landscape
                effectively:
              </p>

              <ol className="blogList">
                <li>
                  Embrace Lifelong Learning: In a rapidly changing world,
                  continuous learning is essential. Stay curious and open to new
                  ideas, and seek out opportunities for professional and
                  personal development.
                </li>

                <li>
                  Foster Interdisciplinary Collaboration: Innovation often
                  occurs at the intersections of different fields. Engage with
                  diverse perspectives and collaborate across disciplines to
                  uncover novel solutions.
                </li>
                <li>
                  Cultivate Critical Thinking: Develop the ability to analyze
                  and evaluate information critically. Question assumptions,
                  consider multiple viewpoints, and make informed decisions.
                </li>
                <li>
                  Leverage Technology: Utilize digital tools and platforms to
                  access information, connect with experts, and streamline your
                  work processes. Technology can amplify your capabilities and
                  broaden your horizons.
                </li>
                <li>
                  Stay Resilient: The path of innovation is fraught with
                  challenges and setbacks. Maintain resilience and perseverance
                  in the face of obstacles, and view failures as learning
                  opportunities.
                </li>

                <h5 className="sub-title">Conclusion</h5>
                <p className="blog-paragraph">
                  As we journey through the labyrinth of knowledge and
                  innovation, we are not merely passive observers but active
                  participants in shaping the future. Each step we take, each
                  idea we explore, and each challenge we overcome contributes to
                  the collective advancement of society. By embracing the
                  dynamic interplay of knowledge and innovation, we can navigate
                  this complex landscape with confidence and purpose, unlocking
                  new possibilities and creating a brighter future for all.
                </p>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogFullDetails;
