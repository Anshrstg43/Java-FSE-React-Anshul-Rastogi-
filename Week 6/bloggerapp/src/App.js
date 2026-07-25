import React from 'react';
import './App.css';

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/2021' }
];

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', desc: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', desc: 'You can install React from npm.' }
];

const CourseDetails = (props) => {
  return (
    <div className="mystyle1">
      <h2>Course Details</h2>
      {props.courses.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

const BookDetails = (props) => {
  return (
    <div className="st2">
      <h2>Book Details</h2>
      <ul>
        {props.books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
};

const BlogDetails = (props) => {
  return (
    <div className="v1">
      <h2>Blog Details</h2>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      {/* Rendering the components side-by-side */}
      <CourseDetails courses={courses} />
      <BookDetails books={books} />
      <BlogDetails blogs={blogs} />
    </div>
  );
}

export default App;