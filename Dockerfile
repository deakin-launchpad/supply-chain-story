FROM node:10 

WORKDIR /app 
COPY . . 

EXPOSE 4002

RUN npm install 

CMD ["npm","start" ]

