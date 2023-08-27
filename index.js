async function main() {
  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    const view = createView(userInfo);
    displayView(view);
  } catch (error) {
    console.error(`エラーが発生しました (${error}`); //通信エラー時の処理
  }
}

function fetchUserInfo(userId) {
  // fetchの返り値のPromiseをreturn
  return fetch(
    `https://api.github.com/users/${encodeURIComponent(userId)}`
  ).then((response) => {
    if (!response.ok) {
      //エラーレスポンスからRejectedなPromiseを作成して返す
      return Promise.reject(
        new Error(`${response.status}:${response.statusText}`)
      );
    } else {
      return response.json();
    }
  });
}

function getUserId() {
  return document.getElementById("userId").value;
}

function createView(userInfo) {
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
    <dt>Location</dt>
    <dt>${userInfo.location}</dt>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
}

function escapeSpecialCharas(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialCharas(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}
