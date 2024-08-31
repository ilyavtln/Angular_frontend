FROM node:22.2.0

WORKDIR /app

COPY package.json ./

RUN npm installgi

COPY . .

RUN npm run build --prod

EXPOSE 4200

CMD ["npm", "start"]




