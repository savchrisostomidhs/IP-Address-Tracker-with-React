import { useContext } from "react"
import Context from "./Context";
import "./Info.css"

function Info() {
    const data = useContext(Context);

    return (
        <div className="info">
            <ul>
                <li>IP Address
                    <div>{data?.ip}</div>
                </li>
                <li>Location
                    <div>{data?.location && `${data?.location.city}, ${data?.location.country}`}</div>
                </li>
                <li>Timezone
                    <div>{data?.location && `UTC ${data?.location.timezone}`}</div>
                </li>
                <li>ISP
                    <div>{data?.isp}</div>
                </li>
            </ul>
        </div>
    )
}

export default Info