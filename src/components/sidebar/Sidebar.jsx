import './sidebar.css'
import dashboard_icon from '/src/assets/dashboard_icon.png'
import dashboard_menu from '/src/assets/dashboard_menu.svg'
import light_icon from '/src/assets/light_icon.svg'
import dark_icon from '/src/assets/dark_icon.svg'
import setting_icon from '/src/assets/setting_icon.svg'
import logout_icon from '/src/assets/logout_icon.svg'
import icon1 from '/src/assets/icon1.svg'
import icon2 from '/src/assets/icon2.svg'
import icon3 from '/src/assets/icon3.svg'
import icon4 from '/src/assets/icon4.svg'
import icon5 from '/src/assets/icon5.svg'
import icon6 from '/src/assets/icon6.svg'

const SideBar = () => {

    return(
        <>
            <aside class="side_bar w-20 h-screen bg-white pt-4 pb-16 flex flex-col items-center justify-between gap-10" >
                <ul class="top flex flex-col items-center gap-1">
                    <li><img src={dashboard_icon} alt="" /></li>
                    <li><img src={dashboard_menu} alt="" /></li>
                    <li><img src={icon1} alt="" /></li>
                    <li><img src={icon2} alt="" /></li>
                    <li><img src={icon3} alt="" /></li>
                    <li><img src={icon4} alt="" /></li>
                    <li><img src={icon5} alt="" /></li>
                        <ul class="theme w-full flex flex-col items-center gap-4">
                            <li><img src={light_icon} alt="" /></li>
                            <li><img src={dark_icon} alt="" /></li>
                        </ul>
                </ul>
                <ul class="bottom flex flex-col items-center gap-1">
                    <li><img src={icon6} alt="" /></li>
                    <li><img src={setting_icon} alt="" /></li>
                    <li><img src={logout_icon} alt="" /></li>
                </ul>
            </aside>
        </>
    )
}

export default SideBar