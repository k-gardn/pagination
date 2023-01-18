import { useState } from "react";
import CommonForm from "../util/CommonForm";

export interface contentInfo {
  profileUrl: string;
  author: string;
  content: string;
  createdAt: string;
}

// export const EditForm = ({filteredList}) => {
// 	const [cardInfo, setCardInfo] = useState<contentInfo| undefined>(filteredList);

//   return (
//   <div>
//     <CommonForm inputValue={cardInfo}/>
//   </div>)
// }
