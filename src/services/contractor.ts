// import {
//   FindOptionsRelations,
//   FindOptionsSelect,
//   FindOptionsWhere,
// } from "typeorm";
// import { AppDataSource } from "../data-source";
// import { Contractor } from "../entity/Contractor";
// import { User } from "../entity/User";

// const conRepository = AppDataSource.getRepository(Contractor);

// export const createContractor = async (
//   input: Partial<Contractor>,
// //   user: User
// ) => {
//   return await conRepository.save(conRepository.create({ ...input }));
// };

// // export const getContractor = async (contractorId: string) => {
// //   return await conRepository.findOneBy({ id: contractorId });
// // };

// export const findContractors = async (
//   where: FindOptionsWhere<Contractor> = {},
//   select: FindOptionsSelect<Contractor> = {},
//   relations: FindOptionsRelations<Contractor> = {}
// ) => {
//   return await conRepository.find({
//     where,
//     select,
//     relations,
//   });
// };
