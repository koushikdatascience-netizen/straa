
export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  // Forward the request to your n8n webhook
  const response = await fetch("https://n8n.agentx360.in/webhook-test/chat", {
    method: event.httpMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: event.body,
  });

  const data = await response.text();

  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: data,
  };
}
