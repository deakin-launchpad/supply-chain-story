FROM node:10 

WORKDIR /app 
COPY . . 

EXPOSE 3014

RUN npm install 

CMD ["npm","start" ]

