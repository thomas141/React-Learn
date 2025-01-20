import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react"; //React Hook
import Title from "./Title";
//react hook is a function that lets you use state and other React features without writing a class
//react hook可以在不寫class的情況下使用state和其他React功能

export default function ProductList() {
  const productList = [
    {
      id: 1,
      nameEn: "Fuji Apple",
      nameCh: "富士蘋果",
      price: 199,
      unit: "NT$/kg",
      image: "/images/apple.jpg", // This is a placeholder path
      descriptionEn:
        "Sweet and crispy Fuji apples, freshly harvested from the finest orchards. Perfect balance of sweetness and refreshing taste.",
      descriptionCh:
        "香甜脆嫩的富士蘋果，嚴選新鮮採摘，甜度與爽脆度的完美平衡。",
      category: "apple",
      stock: 100,
      isPopular: true,
      origin: "Japan",
      originCh: "日本",
    },
    {
      id: 2,
      nameEn: "Irwin Mango",
      nameCh: "愛文芒果",
      price: 299,
      unit: "NT$/kg",
      image: "/images/mango.jpg",
      descriptionEn:
        "Premium Irwin mangoes with golden flesh, rich in flavor and naturally sweet. Each bite brings tropical satisfaction.",
      descriptionCh:
        "優質愛文芒果，金黃色果肉，香氣濃郁自然甜美，每一口都充滿熱帶水果的satisfaction。",
      category: "mango",
      stock: 50,
      isPopular: true,
      origin: "Taiwan",
      originCh: "台灣",
    },
    {
      id: 3,
      nameEn: "Kyoho Grapes",
      nameCh: "巨峰葡萄",
      price: 399,
      unit: "NT$/kg",
      image: "/images/grapes.jpg",
      descriptionEn:
        "Large and juicy Kyoho grapes with deep purple skin. Sweet and aromatic, perfect for snacking.",
      descriptionCh:
        "顆粒飽滿的巨峰葡萄，深紫色外皮，香甜多汁，是理想的餐間點心。",
      category: "grapes",
      stock: 75,
      isPopular: false,
      origin: "Taiwan",
      originCh: "台灣",
    },
    {
      id: 4,
      nameEn: "Dahu Strawberry",
      nameCh: "大湖草莓",
      price: 599,
      unit: "NT$/kg",
      image: "/images/strawberry.jpg",
      descriptionEn:
        "Premium Dahu strawberries, bright red and naturally sweet. Fresh from the farm to your table.",
      descriptionCh:
        "優質大湖草莓，艷紅飽滿，自然甜美，新鮮直送從農場到您的餐桌。",
      category: "strawberry",
      stock: 30,
      isPopular: true,
      origin: "Taiwan",
      originCh: "台灣",
    },
    {
      id: 5,
      nameEn: "Golden Kiwi",
      nameCh: "黃金奇異果",
      price: 299,
      unit: "NT$/kg",
      image: "/images/kiwi.jpg",
      descriptionEn:
        "Sweet and tender golden kiwi, rich in vitamins. Smooth texture with tropical sweetness.",
      descriptionCh:
        "香甜細緻的黃金奇異果，富含維他命，口感細膩帶有熱帶水果甜味。",
      category: "kiwi",
      stock: 60,
      isPopular: false,
      origin: "New Zealand",
      originCh: "紐西蘭",
    },
    {
      id: 6,
      nameEn: "Dragonfly Longan",
      nameCh: "蜻蜓龍眼",
      price: 299,
      unit: "NT$/kg",
      image: "/images/longan.jpg",
      descriptionEn:
        "Sweet and succulent longan with thin skin and thick flesh. Rich in nutrients and natural sweetness.",
      descriptionCh: "香甜多汁的蜻蜓龍眼，皮薄肉厚，營養豐富，自然清甜。",
      category: "longan",
      stock: 45,
      isPopular: false,
      origin: "Taiwan",
      originCh: "台灣",
    },
  ];

  //let product = fruit

  //now use state test a string change
  const [product, setProduct] = useState("fruit");
  const handleClick = () => {
    setProduct("vegetable");
    console.log("product", product);
  };

  //show and hide product list
  const [showProduct, setShowList] = useState(true);

  return (
    <div>
      <Title mainTitle="請選擇你喜歡的水果" />
      <h2>{product}</h2>
      <button onClick={handleClick}>Change</button>

      {/* Make a button to handle showing the fruit list*/}
      {!showProduct && (
        <button
          onClick={() => {
            setShowList(true);
          }}
        >
          Show Product List
        </button>
      )}
      {showProduct && (
        <button
          onClick={() => {
            setShowList(false);
          }}
        >
          Hide Product List
        </button>
      )}
      <div>
        {showProduct /* if showProduct is false then hide the product list */ &&
          productList.map((product) => (
            <div key={product.id}>
              <h2>
                {product.nameCh} {product.nameEn}
                {product.isPopular && <span> (熱賣中)</span>}
                {product.image && (
                  <Link to={`/product/${product.id}`}>
                    詳細資訊
                    <img
                      src={process.env.PUBLIC_URL + product.image}
                      alt={product.nameEn}
                      style={{ width: 100 }}
                    />
                  </Link>
                )}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
