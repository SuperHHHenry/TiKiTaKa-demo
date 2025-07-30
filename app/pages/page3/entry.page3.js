import Page3 from "./page3.jsx";
import boot from "@pages/boot.react";
import Test from "@pages/page4/test.jsx";

boot(Page3, {
  routes: [
    {
      path: "/view/page3/test",
      element: <Test />,
    },
  ],
});