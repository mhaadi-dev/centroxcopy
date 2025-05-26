import { RateLimiterMemory, RateLimiterRes } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 3, 
  duration: 160, 
});

export async function POST(req: Request) {
  const userIP = req.headers.get("x-forwarded-for") || "unknown";

  try {
    await rateLimiter.consume(userIP);

    const body = await req.json();

    const response = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/46946787/14afa6bc-ac3b-4980-9de2-a7874fa6b1f5",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        cache: "no-store"
      }
    );

    if (response.ok) {
      return new Response(
        JSON.stringify({ message: "Form submitted successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to submit form." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    if (error instanceof RateLimiterRes) {
      const retryAfter = Math.ceil(error.msBeforeNext / 1000); // seconds
      return new Response(
        JSON.stringify({
          error: `Too many requests. Please wait ${retryAfter} seconds.`,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": retryAfter.toString(),
          },
        }
      );
    }

    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({ error: "Server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
