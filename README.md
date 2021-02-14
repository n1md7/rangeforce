# How to run

## Manually

Make sure you have NodeJs and NPM installed and run commands below

(_From the project root directory_)

### Development mode

Front-end port **3000**

```bash
npm install --prefix=./app
npm run start --prefix=./app
```

Back-end port **8080**

```bash
npm install --prefix=./server
npm run dev --prefix=./server
```

### Production mode

```bash
npm install --prefix=./app
npm run build --prefix=./app
```

Back-end/front-end port **8080**

```bash
npm install --prefix=./server
npm run prod:build --prefix=./server
npm run prod --prefix=./server
```

Will be accessible from the port 8080, and it serves front-end part as well

## Using docker-compose

```bash
docker-compose up
```