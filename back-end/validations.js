import { body } from "express-validator";

export const registerValidation = [
  body("email", "Wrong email formt").isEmail(),
  body("password", "Password requires over 5 symbols").isLength({
    min: 5,
  }),
  body("fullName", "Full Name requires over 3 symbols").isLength({ min: 3 }),
  body("avatarUrl", "The link provided is invalid").optional().isURL(),
];

export const loginValidation = [
  body("email", "Wrong email formt").isEmail(),
  body("password", "Password requires over 5 symbols").isLength({
    min: 5,
  }),
];

export const postCreateValidation = [
  body("title", "Enter the title")
    .isLength({
      min: 3,
    })
    .isString(),
  body("text", "Enter the text")
    .isLength({
      min: 10,
    })
    .isString(),
  body("tags", "Tags foramt is wrong").optional().isArray(),
  body("imageUrl", "The link provided is invalid").optional().isString(),
];
