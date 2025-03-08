// Make sure to install the 'pg' package 
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const User=pgTable("drizzle",{
    name:text("full_name"),
    email:text("email")
});
