# NodeJS Micro-Service
NodeJS service for monitoring folders recieved files from our robots

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