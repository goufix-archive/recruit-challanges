const { decode } = require("../index");
const data =
  "bmefuzs oapq rday ftq uzfqdzqf uzfa bdapgofuaz oapq ue xuwq otqiuzs sgy ragzp uz ftq efdqqf. gzwzaiz";

test('It should return "pasting code"', () => {
  expect(decode(data)).toBe(
    "pasting code from the internet into production code is like chewing gum found in the street. unknown"
  );
});
