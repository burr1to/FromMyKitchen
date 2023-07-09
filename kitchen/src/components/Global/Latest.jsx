import { useEffect, useState } from "react";
import SecondBox from "./SecondBox";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
function Latest() {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const latestData = await axios.get(
        "http://localhost:8800/api/filter/latest"
      );

      setLatest(latestData.data);
      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center w-[100%] items-center'>
        <ClipLoader
          color={"orange"}
          loading={loading}
          width='100%'
          height='10px'
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );
  } else {
    return (
      <div className='my-12'>
        <SecondBox data={latest} loading={loading} status='latest' />
      </div>
    );
  }
}

export default Latest;
