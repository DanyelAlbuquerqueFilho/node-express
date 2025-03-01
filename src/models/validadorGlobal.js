import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor !== "",
    message: ({ path }) => `o CAMPO ${path} foi fornecido em branco`
});