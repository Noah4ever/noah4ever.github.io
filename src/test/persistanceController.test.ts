import {
  LocalStorageController,
  CookiesController,
} from "@utils/PersistanceController";
import { describe, expect, test, beforeEach } from "vitest";

describe("LocalStorageController", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("save and load data", () => {
    const controller = new LocalStorageController();
    controller.save("testKey", "testValue");
    expect(controller.load("testKey")).toBe("testValue");
  });

  test("load non-existent data", () => {
    const controller = new LocalStorageController();
    expect(controller.load("nonExistentKey")).toBeNull();
  });
});

describe("CookiesController", () => {
  beforeEach(() => {
    document.cookie = "testKey=testValue";
  });

  test("save and load data", () => {
    const controller = new CookiesController();
    controller.save("testKey", "newValue");
    expect(controller.load("testKey")).toBe("newValue");
  });

  test("load non-existent data", () => {
    const controller = new CookiesController();
    expect(controller.load("nonExistentKey")).toBeNull();
  });
});
