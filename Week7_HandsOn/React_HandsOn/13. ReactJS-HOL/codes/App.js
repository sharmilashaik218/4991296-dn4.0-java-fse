import React from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import "./App.css";

function App() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/20201" }
  ];

  const books = [
    { id: 1, bname: "Master React", price: 670 },
    { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 3, bname: "Mongo Essentials", price: 450 }
  ];

  const blogs = [
    { title: "React Learning", author: "Stephen Biz", content: "Welcome to learning React!" },
    { title: "Installation", author: "Schwezdenier", content: "You can install React from npm." }
  ];

  return (
    <div className="container">
      <div className="section">
        <h1>Course Details</h1>
        <CourseDetails courses={courses} />
      </div>
      <div className="section">
        <h1>Book Details</h1>
        <BookDetails books={books} />
      </div>
      <div className="section">
        <h1>Blog Details</h1>
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
