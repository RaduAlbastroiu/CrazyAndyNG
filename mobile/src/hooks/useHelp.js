import react, {useEffect, useState} from 'react';
import axios from 'axios';
import {getHelp} from '../api';

export default function (helpType) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getHelp(helpType)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {isLoading, data};
}
