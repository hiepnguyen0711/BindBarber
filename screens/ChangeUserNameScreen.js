import SettingsForm from "../components/SettingsForm";

function ChangeUserNameScreen() {
    return (
        <SettingsForm title={'Tên hiện tại'} titleContent={'Hiệp'} titleInput={'Nhập tên muốn thay đổi'} type={"default"} />
    );
}
export default ChangeUserNameScreen;

