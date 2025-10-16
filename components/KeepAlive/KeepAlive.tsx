import { useEffect } from 'react';
import { API_URL } from '../../constants/constants';

const KeepAlive = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${API_URL}/home/ping/`)
        .then(res => {
          if (res.ok) {
            console.log('Ping sent to keep backend alive.');
          } else {
            console.error('Failed to send ping to backend.');
          }
        })
        .catch(err => {
          console.error('Error sending ping to backend:', err);
        });
    }, 14 * 60 * 1000); // 14 minutes

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default KeepAlive;
