import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { requestUsers, toggleFollowingProgress, setCurrentPage, follow, unfollow } from '../../redux/usersReducer';
import {getCurrentPage, getFolloingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from '../../redux/usersSelectors';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users setUsersTotalCount={this.props.setUsersTotalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    folloingInProgress={this.props.folloingInProgress} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        folloingInProgress: getFolloingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers }),
)(UsersContainer);