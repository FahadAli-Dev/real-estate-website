import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const contactData = [
  {
    icon: <MdCall size={25} />,
    title: "Call",
    phone: "999 888 7775",
    actionText: "Call Now",
  },
  {
    icon: <BsFillChatDotsFill size={25} />,
    title: "Chat",
    phone: "989 878 7775",
    actionText: "Chat Now",
  },
  {
    icon: <BsFillChatDotsFill size={25} />,
    title: "Video Call",
    phone: "999 888 7775",
    actionText: "Video Call Now",
  },
  {
    icon: <HiChatBubbleBottomCenter size={25} />,
    title: "Message",
    phone: "989 878 7775",
    actionText: "Message Now",
  },
];

export default contactData;
