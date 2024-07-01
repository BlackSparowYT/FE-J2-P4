import { describe, it, expect, jest, vi } from "vitest";
import user from "../controller/User";

import firebase from "../firebase";

vi.mock("firebase/auth");


describe("user", () => {
  it("should log in", async () => {

    vi.fn().mockImplementation(signInWithEmailAndPassword);



    const logged_in = await user.login("noudjanssen123@gmail.com", "Welkom123");
    console.log("Login status", user.getUserName());
  });
});
