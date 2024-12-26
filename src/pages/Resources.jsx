import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import ResourceCard from "../components/Resourcecard";

function Resources(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get("http://localhost:5000/resources");
        if (res.data.data.length === 0) {
          setData([]);
        } else {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching resources:", err);
        setError("Failed to load resources. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#151719]">
      <Navbar {...props} />
      <main className="flex-grow">
        <h1 className="w-3/4 mx-auto rounded p-3 text-center mt-3 mb-5 bg-slate-200 text-2xl">
          Shared Resources
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <h1 className="text-xl">
              <Spinner className="m-4" size="xl" />
              <br />
              <span>Loading Resources. Please Wait...</span>
            </h1>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-[60vh]">
            <h1 className="text-xl text-red-600">
              {error}
            </h1>
          </div>
        ) : data.length === 0 ? (
          <div className="flex justify-center items-center h-[60vh]">
            <h1 className="text-xl">
              <span>No Resources Found</span>
            </h1>
          </div>
        ) : (
          <div className="p-5 flex flex-wrap justify-center">
            {data.map((resource, index) => (
              <div key={index} className="m-1">
                <ResourceCard data={resource} />
              </div>
            ))}
          </div>
        )}
      </main>
      <footer className="mt-auto bg-gray-800 text-white text-center py-3">
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Resources;


