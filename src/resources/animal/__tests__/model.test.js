import Animal from "../models";

describe("Animal model", () => {
  describe("schema", () => {
    test("name", () => {
      const { name } = Animal.schema.obj;
      expect(name).toEqual({
        type: String,
        required: true,
        unique: true,
      });
    });
  });
});
