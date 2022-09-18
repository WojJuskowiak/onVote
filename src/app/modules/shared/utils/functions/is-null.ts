import {Nullable} from "../models/nullable.type";

export const isNull = <T>(value: Nullable<T>): value is null => {
  return value === null;
}
