function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((response) => {
      console.log(response.status);
      if (!response.ok) {
        console.error("エラーレスポンス", response); //ユーザーが取得できない時
      } else {
        return response.json().then((userInfo) => {
          const view = escapeHTML`
          <h4>${userInfo.name} (@${userInfo.login})</h4>
          <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
          <dl>
            <dt>Location</dt>
            <dt>${userInfo.location}</dt>
            <dt>Repositories</dt>
            <dd>${userInfo.public_repos}</dd>
          </dl>
          `;

          const result = document.getElementById("result");
          result.innerHTML = view;
        });
      }
    })
    .catch((error) => {
      console.error(error); //通信自体が失敗した時
    });
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
