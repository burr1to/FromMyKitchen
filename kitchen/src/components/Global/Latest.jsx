import { useEffect, useState } from "react";
import SecondBox from "./SecondBox";
import axios from "axios";
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

  return (
    <div className='my-12'>
      <SecondBox data={latest} loading={loading} />
    </div>
  );
}

export default Latest;
