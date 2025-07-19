import React from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import FormField from "../components/FormField";
import Card from "../components/Card";
import { useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts , setAllPosts] =useState(null)
  const [searchText, setSearchText] = useState('');
 const [searchedResults,setSearchedResults] = useState(null)
 
 const [searchTimeout,setSearchTimeout] = useState(null)

  useEffect(()=>{
 const fetchPosts = async() => {
  setLoading(true)
     try {
       const response = await fetch("https://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
      } })
     if (response.ok){
      const result =await response.json()
      setAllPosts(result.data.reverse())
     }
     }catch(error){
      alert (error)
     }finally {
      setLoading(false)
     }

 }


    fetchPosts()
  },[])



 const handleSearchChange =(e) => {
clearTimeout(searchTimeout)
 setSearchText(e.target.value)
 
 
 setSearchTimeout(
 setTimeout(()=> {
   const searchResults = allPosts.filter ((item) =>DataTransferItemList.name.toLowerCase().includes(searchText.toLowerCase()))


   setSearchedResults(searchResults)
 },500))

 }











  const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post) => <Card key={post.id} {...post} />);
    }

    return <h2>{title}</h2>;
  };

  return (
    <section>

     <h2>Home page</h2>
     <p>welcome to home page</p>


      <div>
        <FormField 
         LabelName ="Search posts"
         type ="text"
         name ="text"
         placeholder ="Search posts"
        value ={searchText}
        handleChange ={handleSearchChange}
        
        
        
        />
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            {" "}
            <Loader />{" "}
          </div>
        ) : (
          <>
            {searchText && (
              <h1 className="font-bold">
                Showing Results for{" "}
                <span className="text-gray-400 ">{searchText}</span>
              </h1>
            )}

            <div>
              {searchText ? (
                <RenderCards data={searchedResults} title="No search results" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
