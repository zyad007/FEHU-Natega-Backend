import { Request } from "express";
import User from "./User";
interface RequestWithUser extends Request {
    user: User
}
export default RequestWithUser;