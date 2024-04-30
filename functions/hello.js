exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const requestBody = JSON.parse(event.body);

  if (requestBody !== "Hi") {
    return {
      statusCode: 400,
      body: "Bad Request",
    };
  }

  return {
    statusCode: 200,
    body: "Hello this is an API",
  };
};
