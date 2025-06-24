import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  const query = url.searchParams.get("query");

  if (!query) {
    return new Response(JSON.stringify({ error: "Query parameter is required" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }

  try {
    const deezerApiUrl = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;
    const response = await fetch(deezerApiUrl);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow all origins for development
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching from Deezer API:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch from Deezer API" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});
