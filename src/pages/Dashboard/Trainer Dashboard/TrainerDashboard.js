import React from 'react'

function TrainerDashboard() {
    return (
        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
            <Link to={``} className="CardBody">
                <div className="">
                    <span className={Styles.shortTitle}  >{shortTitle}</span>
                    <h6>{title}</h6>
                </div>

                <IconButton className="icon_style" >
                    <Icon fontSize="large" className='icon__style__b4card' />
                </IconButton>
            </Link>
        </div>
    )
}

export default TrainerDashboard