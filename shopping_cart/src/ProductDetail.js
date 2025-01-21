import {useParams, Link , useLoaderData} from "react-router-dom"
import Title from "./Title"

export default function ProductDetail() {

    // let params = useParams()
    const loaderData =  useLoaderData();


    return (
        <div>
            {/* <Title mainTitle={params.id+'產品資料'} /> */}
            <Title mainTitle={loaderData.id+'產品資料'} />

            <Link to="/">回到產品列表</Link>
        </div>
    )
}
