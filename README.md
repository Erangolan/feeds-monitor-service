# NodeJS Micro-Service
NodeJS microservice for monitoring folders recieved files from our robots.
When file accepted in /upload-file route, the name of the file is saved in DB.
We have a cron-job running every second, checking if files recieved
in the last minute, if so, it loggs that we are in normal state, otherwise it
loggs warning message.
Additionally, we have 2 routes:
/state - This route shows the last log of the system(Warning message or Back to normal).
/info - This route shows the last timestamp a feed file was received for each robot in our DB.

## Configuration

### .env

```bash
PORT= # port to run on
```
mongodb connection is required:
```bash
DB_HOST='cluster0.enudr.mongodb.net/skyline?retryWriters=true&w=majority'
DB_USER=
DB_PASS=
```

## Installation

```bash
git clone https://github.com/Erangolan/feeds-monitor-service
```

```bash
npm install
```

```bash
npm run dev
```