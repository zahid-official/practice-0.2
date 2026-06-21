"use server";

import { Product } from "../../generated/prisma/client";
import { prisma } from "./prisma";

// Seed the database with products if there are no products
const seedProducts = async () => {
  const count = await prisma.product.count();
  if (!count) {
    await prisma.product.createMany({
      data: [
        {
          title: "Premium Wireless Headphones",
          description:
            "Experience studio-quality sound with active noise cancellation and 40-hour battery life.",
          price: 199,
        },
        {
          title: "Minimalist Leather Wallet",
          description:
            "Sleek RFID-blocking cardholder crafted from premium full-grain leather.",
          price: 49,
        },
        {
          title: "Ergonomic Mechanical Keyboard",
          description:
            "Tactile typing experience with hot-swappable switches and customizable RGB backlighting.",
          price: 129,
        },
      ],
    });
  }
};

try {
  await seedProducts();
} catch (error) {
  console.error("Error seeding products:", error);
}

// getAllProducts function
const getAllProducts = async () => {
  return await prisma.product.findMany();
};

// createProduct
const createProduct = async (payload: Omit<Product, "id">) => {
  return await prisma.product.create({
    data: payload,
  });
};

export { createProduct, getAllProducts };
