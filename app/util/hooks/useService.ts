"use client"
import axios from "axios";
import { useEffect, useState } from "react";

interface ServiceProps {
  postType: string;
  slug: string;
  endPoint: string;
}

const useService = ({ postType, slug, endPoint }: ServiceProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const userData = {
        postType: postType,
        slug: slug,
      };

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}${endPoint}`,
          userData
        );
        //  console.log("res");
        
        setResponse(res.data); // Assuming your API returns data in the `data` field
      } catch (error: any) {
        setError(error.message || "Error fetching data");
        console.log("error");
        
      } finally {
        setLoading(false);
      }
    };

    // Fetch data when endPoint or other dependencies change
    if (endPoint) {
      fetchData();
    }
  }, [postType, slug, endPoint]); // Trigger the effect when any of these change

  return { response, error, loading };
};

export default useService;
