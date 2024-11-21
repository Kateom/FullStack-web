const { z } = require("zod");

//cerating obeject schemas
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name cannot be empty" })
    .trim()
    .min(2, { message: "Username must be at least 3 characters long" })
    .max(255, { message: "Name must not be more than 255 characters long" }),

  email: z
    .string({ required_error: "Email cannot be empty" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(2, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email must not be more than 255 characters long" }),

  phone: z
    .string({ required_error: "Phone cannot be empty" })
    .trim()
    .min(10, { message: "Phone must be at least 10 digits long" })
    .max(10, { message: "Phone must not be more than 10 digits long" }),

  password: z
    .string({ required_error: "Password mussst not be empty" })
    .min(6, { message: "Password must be of Mimimum of 6 character" })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

// creating login object schemas

module.exports = signupSchema;
