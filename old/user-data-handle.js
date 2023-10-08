export const postDatahtml = (status) => {
  const msg = status === "ok" ? "Data Sent" : "Server Error";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>File Upload</title>
</head>
<body>
  <h1>${msg}</h1>
  <a href="/">
  <button>Home</button>
  </a>
</body>
</html>`;
};

export const getDataHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>File Upload</title>
</head>
<body>
<form action="/send" method="post" enctype="multipart/form-data">
  <input type="text" name="username" placeholder="enter your username" />
  <input type="file" name="userfiles" />
  <button type="submit">submit</button>
</form>

</body>
</html>

`;
