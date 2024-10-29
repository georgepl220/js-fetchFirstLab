"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function updateUser(userId, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
}

module.exports = updateUser;
