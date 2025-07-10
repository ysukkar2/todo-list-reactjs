const BASE_URL = "http://localhost:5000/api/tasks";

export async function fetchTasks() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function createTask(title) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

export async function updateTask(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteTask(id) {
  return await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
