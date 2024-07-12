 # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
 FROM node:18 as build-stage

 WORKDIR /app
 
 COPY package.json package-lock.json ./
 
 RUN npm install
 #RUN npm audit fix
 
 COPY . .
 RUN npm install react-scripts
 RUN npm run-script build
 #RUN npm run-script start
 
 # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
 FROM nginx:1.15
 ## Remove default nginx index page
 RUN rm -rf /usr/share/nginx/html/*
 COPY --from=build-stage /app/build/ /usr/share/nginx/html
 # COPY  Privacy-Policy.html Term-and-Conditions.html /usr/share/nginx/html/
 COPY --from=build-stage /app/assets /usr/share/nginx/html/assets
 COPY --from=build-stage /app/default.conf /etc/nginx/conf.d/default.conf
 # Verify statics assets exist on /usr/share/nginx/html
 RUN ls -la /usr/share/nginx/html
 
 EXPOSE 80
 
 ENTRYPOINT ["nginx", "-g", "daemon off;"]
 