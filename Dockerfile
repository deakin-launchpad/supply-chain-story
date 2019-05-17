FROM node:10 

WORKDIR /app 
COPY . . 

EXPOSE 4008

RUN npm install 

CMD ["npm","start" ]

