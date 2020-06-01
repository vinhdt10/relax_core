import app from "./app";
import AuthenticationLogin from "./authentication/router";
import RouterApp from "./app/api/router";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

new AuthenticationLogin(app).intRouter();
new RouterApp(app).intRouter();
