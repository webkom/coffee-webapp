import 'whatwg-fetch';

/*
global API_URL
The global API_URL is set by Webpack's DefinePlugin.
If NODE_ENV is production, it equals https://kaffe.abakus.no
If not, it equals http://127.0.0.1:5000
*/

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
export const getStatus = () => fetch(`${API_URL}/api/status`).then(res => res.json());


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
export const getStats = () => fetch(`${API_URL}/api/stats`).then(res => res.json());
