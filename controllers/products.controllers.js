import { Op } from "sequelize";
import Product from "../models/products.js";
import Stock from "../models/stocks.js";

export const findAll = async (req, res) => {
    try {
        let { product_name, model_year, price_min, price_max } = req.query;

        let filtros = {};

        if (product_name) {
            filtros.product_name = {
                [Op.iLike]: `%${product_name}%`,
            };
        }
        if (model_year) {
            filtros.model_year = {
                [Op.eq]: model_year,
            };
        }

        if (price_min && price_max) {
            filtros.list_price = {
                [Op.between]: [price_min, price_max],
            };
        } else if (price_min && !price_max) {
            filtros.list_price = {
                [Op.gte]: price_min,
            };

        } else if (price_max && !price_min) {
             filtros.list_price = {
                 [Op.lte]: price_max,
             };
        }

        let productos = await Product.findAll({
            order: [
                ["product_id", "ASC"]
            ],
            include: [
                {
                    model: Stock,
                    as: "stocks",
                },
            ],

            where: filtros,
        });

        res.json({ code: 200, message: "ok", productos });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error al buscar los productos.",
        });
    }
};
