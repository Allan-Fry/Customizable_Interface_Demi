import React from 'react';
import { useSelector } from 'react-redux';
import { ExpandableLayout } from '../ExpandableLayout/ExpandableLayout.jsx';


export const ContentSpace = () => {
     const gridSpace = useSelector(state => state.grids);

    return (
        <ExpandableLayout 
        gridSpace={gridSpace}
        />

    );
    

}