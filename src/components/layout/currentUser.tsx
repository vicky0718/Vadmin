import { Popover, Button } from "antd";
import CustomAvatar from "../customAvatar";

const CurrentUser = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar />
      </Popover>
    </>
  );
};

export default CurrentUser;
