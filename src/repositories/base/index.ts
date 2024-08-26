import { type TypeRepository } from "../TypeRepository";
import ProdBaseRepository from "./prodRepository";
import BaseRepository from "./repository";

export function getBaseRepository(
  t: TypeRepository = "fake"
): BaseRepository {
  if (t === "fake") {
    return new BaseRepository();
  }
  return new ProdBaseRepository();
}