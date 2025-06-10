const ENV = {
  development: {
    API_URL: "http://localhost:3000",
  },
  production: {
    API_URL: "https://api.example.com",
  },
};

const getEnvVars = (env = process.env.NODE_ENV) => {
  if (env === "development") {
    return ENV.development;
  }
  return ENV.production;
};

export default getEnvVars;
