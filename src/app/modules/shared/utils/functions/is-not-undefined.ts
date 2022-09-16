import {Optional} from "../models/optional.type";
import {isUndefined} from "lodash";

export const isNotUndefined = <T>(value: Optional<T>): value is T => {
  return !isUndefined(value);
}
