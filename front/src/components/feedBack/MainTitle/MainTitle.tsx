import './MainTitle.css'
import redRibbon from '@assets/imgs/ribbon.webp';
const MainTitle = ({ children }: { children: React.ReactNode | string }) => {
    return (
        <div className="title">
            <h2>
                {children}
            </h2>
            <img src={redRibbon} />
        </div>
    )
}

export default MainTitle
