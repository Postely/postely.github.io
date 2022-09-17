import './background.scss';

export function Background() {
    return (
        <div className="background">
            <div className='left'>
                <div className="lefttop"></div>
                <div className="leftmiddle"></div>
                <div className="leftbottom"></div>
            </div>
            <div className='right'>
                <div className="righttop"></div>
                <div className="rightmiddle"></div>
                <div className="rightbottom"></div>
            </div>
        </div>
    )
}