import { connect } from "react-redux";
import { setMenuActionCreator } from "../redux/menu-reducer";

import MenuDescription from "./MenuDescription";
import { withSetMenu } from "../Hoc/withSetMenu";

let mapStateToProps = (state) => {
  return {
    menu: state.menuPage.menu,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setMenu: (menu) => {
      dispatch(setMenuActionCreator(menu));
    },
  };
};
let setMenu = withSetMenu(MenuDescription);
export default connect(mapStateToProps, mapDispatchToProps)(setMenu);
