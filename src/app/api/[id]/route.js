export async function GET(request, { params }) {
  try {
    const response = await fetch(process.env.URL_API + `${params.id}`, {
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

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const response = await fetch(process.env.URL_API + `${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Fetch PUT error:", error);
    throw error;
  }
}

export async function DELETE(id) {
  try {
    const response = await fetch(process.env.URL_API + `${params.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Fetch DELETE error:", error);
    throw error;
  }
}
