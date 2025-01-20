import React from "react";
import { useParams, Link } from "react-router-dom";
import Title from "./Title";

export default function ProductDetail() {
  let params = useParams();
  return (
    <div>
      <Title mainTitle={params.id + "詳細資料"} />
      <h1>Product Detail</h1> {params.id}
      <Link to="/">Back to Main Page</Link>
    </div>
  );
}
