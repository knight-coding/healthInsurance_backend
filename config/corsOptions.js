const allowedOrigin = [
  "http://localhost:5173",
  "https://truleads-frontend.vercel.app",
  "https://www.truleads.agency"
];

const corsOptions = {
    origin : (origin, callback) => {
        if(allowedOrigin.indexOf(origin) !== -1 || !origin ){
            callback(null, true);
        } else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus : 200
}

export default corsOptions;