// import React from 'react'
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Course() {
  //API Integration using Axios and with the help of useState and useEffect;
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-bmwf.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <marquee direction="left">
            <h1 className="text-2x1 md:text-4xl">
              We are delighted to have you
              <span className="text-pink-500">Here! :</span>
            </h1>
          </marquee>
          <p className="mt-12">
            We are an online book store dedicated to bringing you the best books
            from around the world. Our mission is to provide a platform where
            book lovers can discover new titles, authors, and genres, and
            purchase them with ease. Our collection includes a wide range of
            books, from fiction to non-fiction, self-help to biographies, and
            everything in between.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-2 py-4 rounded-md hover:bg-pink-700 duration-300 ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Course;
