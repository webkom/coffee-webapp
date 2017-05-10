import 'whatwg-fetch';

// const apiUrl = 'https://kaffe.abakus.no';
const apiUrl = 'http://127.0.0.1:5000';

/**
 * Returns coffee status
 *
 * Example response:
  {
    "coffee": {
      "status": true,
      "last_start": "2012-12-12 12:12",
      "time_since": {
        "hours": 0,
        "minutes": 0
      }
    }
  }
 */
export const getStatus = () => fetch(`${apiUrl}/api/status`).then(res => res.json());


/**
 * Returns coffee stats
 *
 * Example response:
  {
    "stats": {
      "2012-12-12": 3,
      "2012-12-13": 1,
      "2012-12-14": 7
    }
  }
*/
export const getStats = () => fetch(`${apiUrl}/api/stats`).then(res => res.json());
