# docker build -t angular_frontend .
# docker run -d -p 8080:80 angular_frontend

#############################################################################
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx ng build --configuration production

#############################################################################
FROM nginx:1.27-alpine

COPY --from=build /app/dist/angular-frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
