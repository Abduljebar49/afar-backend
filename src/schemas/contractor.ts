import { object, string, TypeOf } from "zod";

export const createPostSchema = object({
  body: object({
    companyName: string({
      required_error: "CompanyName is required",
    }),
    firstName: string({
      required_error: "FirstName is required",
    }),
    lastName: string({
      required_error: "LastName is required",
    }),
    managerName: string({
      required_error: "ManagerName is required",
    }),
    gender: string({
      required_error: "Gender is required",
    }),
    nationality: string({
      required_error: "Nationality is required",
    }),
    serviceType: string({
      required_error: "Service Type is required",
    }),
    serviceLevel: string({
      required_error: "Competence Level is required",
    }),
    mobilePhone: string({
      required_error: "Mobile phone is required",
    }),
  }),
});

const params = {
  params: object({
    postId: string(),
  }),
};

export const getPostSchema = object({
  ...params,
});

export const updatePostSchema = object({
  ...params,
  body: object({
    companyName: string(),
    firstName: string(),
    lastName: string(),
    gender: string(),
    managerName: string(),
    region: string(),
    zone: string(),
    city: string(),
    subCity: string(),
    kebele: string(),
    photo: string(),
    house_no: string(),
  }).partial(),
});

export const deletePostSchema = object({
  ...params,
});

export type CreatePostInput = TypeOf<typeof createPostSchema>["body"];
export type GetPostInput = TypeOf<typeof getPostSchema>["params"];
export type UpdatePostInput = TypeOf<typeof updatePostSchema>;
export type DeletePostInput = TypeOf<typeof deletePostSchema>["params"];
