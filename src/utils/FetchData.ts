export async function fetchData() {
  const query = await fetch('/owid-co2-data.json');
  const res = await query.json();
  

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return res;
}
