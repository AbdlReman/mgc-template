import React from 'react';

const SidebarSearch = () => {
    return (
        <>

<div className="sidebar__widget mb-40">
                        <h3 className="sidebar__widget-title">About Me</h3>
                        <div className="sidebar__widget-content">
                           <div className="sidebar__search">
                           <form onSubmit={(e) => e.preventDefault()}>
                <div className="sidebar__search-input">
                <input type="text" placeholder="Search your keyword..." />
                <button type="submit"><i className="far fa-search"></i></button>
                </div>
           </form>
                           </div>
                        </div>
                     </div>
            
        </>
    );
};

export default SidebarSearch;