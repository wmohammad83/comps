import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go"
import Button from "../components/Button"

function ButtonPage() {
   return <div>
       <div>
           <Button primary rounded className="mb-5" > <GoBell/> Hello there</Button>
       </div>
       <div>
           <Button secondary ><GoCloudDownload/>Buy Now</Button>
       </div>
       <div>
           <Button success ><GoDatabase/>Add to watch list</Button>
       </div>
       <div>
           <Button warning outline rounded >refund</Button>
       </div>
       <div>
           <Button danger >refund</Button>
       </div>
   </div>
}

export default ButtonPage