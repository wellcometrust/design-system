export default (name, component) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${name} | Components | Wellcome Design System</title>
</head>
<body>
${component}
</body>
</html>`;
