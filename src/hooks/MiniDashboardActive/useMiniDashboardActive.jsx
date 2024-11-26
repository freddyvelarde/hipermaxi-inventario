import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMiniDashboard } from "../../redux/slices/dashboardLayout";

const useMiniDashboardActive = () => {
  const dashboardLayoutActive = useSelector(
    (state) => state.dashboardLayout.value,
  );
  const dispatch = useDispatch();

  const switchDashboardLayoutActive = () =>
    dispatch(setMiniDashboard(!dashboardLayoutActive));

  return { dashboardLayoutActive, switchDashboardLayoutActive };
};

export default useMiniDashboardActive;
