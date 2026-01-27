export async function load({ fetch }) {
  const response = await fetch('/games.json');
  const games = await response.json();
  return { games };
}
