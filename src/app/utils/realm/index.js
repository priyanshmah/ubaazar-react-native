import { createRealmContext } from "@realm/react";
import { AddressSchema } from "./realmSchemas/AddressSchema";
import { FavouriteSchema } from "./realmSchemas/FavouriteSchema";
import { BagSchema } from "./realmSchemas/BagSchema";
import { OrderSchema } from "./realmSchemas/OrderSchema";
import { ProductSchema } from "./realmSchemas/ProductSchema";
import { AppDataSchema } from "./realmSchemas/AppDataSchema";
import { UserDataSchema } from "./realmSchemas/UserDataSchema";
import { CouponSchema } from "./realmSchemas/CouponSchema";


export const RealmContext = createRealmContext({
    schema: [
        FavouriteSchema, 
        AddressSchema, 
        ProductSchema, 
        AppDataSchema, 
        UserDataSchema, 
        CouponSchema,
        OrderSchema, 
        BagSchema
    ],
    schemaVersion: 17
})

export const useRealm = RealmContext.useRealm;
export const useQuery = RealmContext.useQuery;