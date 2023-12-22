export async function GET() {
  try {
    const response = await fetch(process.env.URL_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error(`Fetch GET error:`, error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const response = await fetch(
      `https://riah3nvfx2.execute-api.us-east-1.amazonaws.com/dev/data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.error("Fetch POST error:", error);
    throw error;
  }
}
