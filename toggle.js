const axios = require('axios');
const moment = require('moment');


/** TODO: change these params to match your needs */
const token = 'Basic xxxxxx';
const dateFrom = moment('07/11/2022', 'DD/MM/YYYY');
const dateTo = moment('28/04/2023', 'DD/MM/YYYY');

/** TODO: adapt pid tid wid and description to match your needs */ 
const payload = {
  "pid": 184479015,
  "tid": 83741823,
  "wid": 6604373,
  "description": "",
  "created_with": "Snowball",
  "start": "2023-04-20T07:00:00.000Z",
  "stop": "2023-04-20T16:00:00.000Z",
  "duration": 32400,
  "billable": false,
  "tags": []
};



const isWeekend = (date) => {
  return date.day() === 6 || date.day() === 0;
}

const run = async () => {
  for (let currentDate = dateFrom.clone(); currentDate.diff(dateTo) < 0; currentDate = currentDate.add(1, 'day')) {
    if (isWeekend(currentDate)) {
      continue;
    }

    payload.start = currentDate.clone().hour(9).toISOString();
    payload.stop = currentDate.clone().hour(18).toISOString();

    await axios.post('https://track.toggl.com/api/v9/time_entries', payload, { headers: { Authorization: token } })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

run().then(() => console.log('Done !'));
