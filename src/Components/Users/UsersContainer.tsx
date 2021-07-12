import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from '../Common/Preloader/Preloader';
import Users from './Users';
import { getIsFetching } from '../../redux/Users-selector';

type UsersPagePropsType = {
    pageTitle?: string
}

const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return (
        <>
            <h2>{props.pageTitle}</h2>
            <Preloader isFetching={isFetching} />
            <Users />
        </>
    )
}

export default UsersPage