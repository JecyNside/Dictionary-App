import logo from '../assets/images/logo.svg'
import mode from '../assets/images/icon-moon.svg'

function Header() {
    return (
        <header>
            <nav>
                <div className="header-icon">
                    <img src={logo} alt="logo" />
                </div>

                <div className="header-buttons">

                    <div className="header-buttons-fonts">
                        <p>Serif</p>
                    </div>

                    <div className="header-buttons-mode">
                        <label className="mini-switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                        </label>
                        <img src={mode} alt="modo" />
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header