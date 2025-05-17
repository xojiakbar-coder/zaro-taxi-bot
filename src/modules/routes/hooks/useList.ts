import axios from "axios";
import { useEffect, useState } from "react";
import type { UseRouteList } from "../types";
import { BASE_URL } from "../../../common/config/api";

export const useList = (): UseRouteList => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/route/routes/`);
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setData([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading };
};
