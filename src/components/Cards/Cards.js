import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <section class="filter">
        <div class="categorycontainer">
          <div class="filtertext">
            <i class="fa fa-filter"></i>
            <p>Filter by Category</p>
          </div>
          <ul>
            <li>
              <a href="#" class="active">
                All
              </a>
            </li>
            <li>
              <a href="#">Artificial Intelligence</a>
            </li>
            <li>
              <a href="#">Cloud Computing</a>
            </li>
            <li>
              <a href="#">DevOps</a>
            </li>
            <li>
              <a href="#">Programming Languages</a>
            </li>
            <li>
              <a href="#">Mobile Application Development</a>
            </li>
            <li>
              <a href="#">Technology and Tools</a>
            </li>
            <li>
              <a href="#">Get a Job in a Tech Company</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="card">
        <div class="item">
          <a href="#">
            <div class="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"
                alt="Image"
              />
            </div>
            <div class="textsection">
              <h2 class="title">What is Income Share Agreement?</h2>
              <div class="authorcontainer">
                <p class="author">
                  EdYoda
                  <span> | 14 Oct 2019</span>
                </p>
              </div>
              <p class="item_description">
                The term Income Share Agreement has been around for a long time
                since 1955 to be precise. Surprised, eh? It was first introduced
                by Milton Friedman,
              </p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="#">
            <div class="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"
                alt="Image"
              />
            </div>
            <div class="textsection">
              <h2 class="title">
                Practical Machine Learning with Python and Keras
              </h2>
              <div class="authorcontainer">
                <p class="author">
                  Daniel Pyrathon
                  <span> | 16 Oct 2019</span>
                </p>
              </div>
              <p class="item_description">
                Machine learning is a field of artificial intelligence that uses
                statistical techniques to give computer systems the ability to
                “learn” (e.g., progressively
              </p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="#">
            <div class="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
                alt="Image"
              />
            </div>
            <div class="textsection">
              <h2 class="title">
                Challenges of Machine Learning in Big Data Analytics
              </h2>
              <div class="authorcontainer">
                <p class="author">
                  EdYoda
                  <span> | 24 Aug 2019</span>
                </p>
              </div>
              <p class="item_description">
                Machine Learning is a subset of artificial intelligence which is
                an important part of computer science. The revolution of Big
                Data promises to transform the
              </p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="#">
            <div class="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
                alt="Image"
              />
            </div>
            <div class="textsection">
              <h2 class="title">
                Impact of Cloud Computing in various industries
              </h2>
              <div class="authorcontainer">
                <p class="author">
                  EdYoda
                  <span> | 24 Aug 2019</span>
                </p>
              </div>
              <p class="item_description">
                Cloud computing has been rapidly gaining pace in the world of
                information technology. It has been observed that over 90% of
                global enterprises are using cloud
              </p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="#">
            <div class="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
                alt="Image"
              />
            </div>
            <div class="textsection">
              <h2 class="title">Breaking the Myths around Cybersecurity</h2>
              <div class="authorcontainer">
                <p class="author">
                  EdYoda
                  <span> | 26 Aug 2019</span>
                </p>
              </div>
              <p class="item_description">
                Cybersecurity plays an integral role in the process of good
                business models. But even cybersecurity programs built with good
                intentions can fall short in
              </p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="#">
            <div class="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
                alt="Image"
              />
            </div>
            <div class="textsection">
              <h2 class="title">
                LAMP Stack Vs MEAN stack: Choosing the right platform for your
                web application development
              </h2>
              <div class="authorcontainer">
                <p class="author">
                  EdYoda
                  <span> | 24 Aug 2019</span>
                </p>
              </div>
              <p class="item_description">
                In today's dynamic world, developing a rapid application with a
                smooth user interface that can adapt to specific features is the
                main business requirement. Many
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Cards;
