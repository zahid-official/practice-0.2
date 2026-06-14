// static config
export const dynamic = "force-static"; // caching only working in production, not in development
export const revalidate = 10; // in seconds

// GET Function
const GET = async () => {
  return Response.json({ Time: new Date().toLocaleTimeString() });
};

export { GET };
