Steps to test the assesment :
1. Go to assesment_backend and run the command npm run start:dev 
It will start the server and it will connect to mongodb.
This is built using Nestjs.
2. Go to assesment_moralis
3. Open a terminal in which ngrok is supported and run the command ngrok http 5000.
4. Copy the forwarding url and paste it in moralis index,js file in the place of webhook url 
Url must be followed by /users/create(server route)
5.Now run the command node index.js in moralis folder.
6. Now moralis will start listening to our smart contract event and it will be directly stored to our database .
7.The smart contract can be viewed in assesment_contract folder.
8. The frontend can be found in assesment_frontend repository. Run the command npm run dev.
This is a built using nextjs and tailwindcss.
