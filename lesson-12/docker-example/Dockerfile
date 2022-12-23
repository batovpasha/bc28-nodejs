FROM node:18.12.1-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js
COPY app.js app.js
COPY models/ models/
COPY controllers/ controllers/
COPY helpers/ helpers/
COPY middlewares/ middlewares/
COPY public/ public/
COPY routes/ routes/
COPY schemas/ schemas/
COPY temp/ temp/

RUN npm install --production

CMD ["npm", "start"]