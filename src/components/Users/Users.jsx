import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    return (
        <React.Fragment>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />

            <section>
                {
                    users.map(user =><User user={user}
                                           key={user.id}
                                           folloingInProgress={props.folloingInProgress}
                                           unfollow={props.unfollow}
                                           follow={props.follow} /> )
                }
            </section>
        </React.Fragment>
    )
}

export default Users;