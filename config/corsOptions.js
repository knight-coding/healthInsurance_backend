const allowedOrigin = [
  "http://localhost:5173",
  "https://www.truhealthinsurance.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigin.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // 🔥 THIS IS THE FIX
  optionsSuccessStatus: 200,
};

export default corsOptions;
