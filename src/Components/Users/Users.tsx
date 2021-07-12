import React, { FC,useEffect } from 'react';
import StandartUser from "./StandardIconProfile.png"
import { NavLink } from 'react-router-dom';
import Paginator from '../Paginator/Paginator';
// import { UserType } from '../../types/types';
import UserSearchForm from './UsersSearchForm';
import { FilterType, getUsers } from '../../redux/Users_Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalUserCount, GetUsers, getUsersFilter } from '../../redux/Users-selector';
import { getPageSize, getCurrentPage, getFollowingInProgress } from './../../redux/Users-selector';
import { followUnfollowFlou } from './../../redux/Users_Reducer';
type PropsType = {
}
export const Users: FC<PropsType> = (props) => {

  const totalUserCount = useSelector(getTotalUserCount)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const users = useSelector(GetUsers)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize, filter))
  }, [])

  const onPageChanged = (pageNumber:number) => {
    dispatch(getUsers(pageNumber, pageSize, filter))
  }
  const onFilterChanged = (filter:FilterType) => {
    dispatch(getUsers( 1,pageSize, filter))
  }

    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const followUnfollow = (userId: number, act: boolean) => {
      dispatch(followUnfollowFlou( userId, act))
    }
    return (
        <div>
            <Paginator totalItemsCount={totalUserCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} displayedPages={15} />
            <UserSearchForm onFilterChanged={onFilterChanged}/>
            {
               users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'profile/' + u.id}>
                            <img 
                            alt="user icon"
                            style={{width:60}} 
                            src={u.photos.small != null ? u.photos.small : StandartUser}>
                            </img>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed 
                            ?<button disabled={followingInProgress.some(id => id === u.id )} onClick={() => { 
                              followUnfollow(u.id, false)
                                 }}>Unfollow</button>
                            
                            : <button disabled={followingInProgress.some(id => id === u.id )} onClick={() => {  
                              followUnfollow(u.id, true)
                            }}>Follow</button>  }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

}

export default Users 
