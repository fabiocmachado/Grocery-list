import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

interface IList {
  product: string;
  section: string;
}

const listSchema = new Schema<IList>({
    product: { type: String, required: true },
    section: { type: String, required: true },
  });

const List = model<IList>('List', listSchema);

export default List;