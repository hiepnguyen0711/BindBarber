import {  } from "react-native";
import SettingsForm from "../components/SettingsForm";

function ChangePhoneScreen() {
    
    return (
        <SettingsForm title={'Phone hiện tại'} titleContent={'02324654'} titleInput={'Nhập sđt muốn thay đổi'} type={'numeric'} />
    );
}

export default ChangePhoneScreen;