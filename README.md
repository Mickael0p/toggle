# Intro
Generate Toggle timers from monday to friday - 9AM to 6PM non stop with the given config.

# Config

1. Edit the following in toggle.js to match your needs
```js
const token = 'Basic xxx';
const dateFrom = moment('07/11/2022', 'DD/MM/YYYY');
const dateTo = moment('28/04/2023', 'DD/MM/YYYY');

const payload = {
    ...
  "pid": 184479015,
  "tid": 83741823,
  "wid": 6604373,
  "description": "",
};
```

# Run
```sh
npm i && node toggle.js
```
