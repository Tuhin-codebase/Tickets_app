import { Inngest } from "inngest";
import User from "../models/User.model.js";
export const inngest = new Inngest({ id: "movie-ticket-bookings" });

// inngest functon to save date to a database
const syncUserCreation = Inngest.createFunction(
  { id: "sync-user-fom-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;
    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      image: image_url,
    };
    await User.create(userData);
  }
);

// inngest Function to delete user from database
const syncUserDeletion = Inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id);
  }
);
// inngest Function to update data user to database
const syncUserUpdate = Inngest.createFunction(
  { id: "update-user-with-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;
    const userUpdataData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      image: image_url,
    };
    await User.findByIdAndUpdate({ id, userUpdataData });
  }
);

export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdate];
