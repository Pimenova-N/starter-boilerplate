import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import { fetchClients, removeClient, setSelectedClient, clearSelectedClient, updateClients } from 'redux/actions/Client';
import { connect } from "react-redux";

export class UserList extends Component {

	componentDidMount() {
		if (!this.props.users.length)
			this.props.fetchClients();
	}

	deleteUser = userId => {
		this.props.removeClient(userId)
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}


	showUserProfile = userInfo => {
		this.props.setSelectedClient(userInfo);
		setTimeout(() => this.props.history.push('/app/main/clients/edit-profile'), 300);	
	};


	render() {
		const { users, loading } = this.props;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src='/img/avatars/thumb-1.jpg' name={record.name} subTitle={record.email} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Username',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => a.username.length - b.username.length,
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: {
					compare: (a, b) => {
						a = a.phone.toLowerCase();
						b = b.phone.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => {
						a = a.website.toLowerCase();
						b = b.website.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
						</Tooltip>
					</div>
				)
			}
		];
		return (
			loading
				? <Loading cover="content" />
				:
				<Card bodyStyle={{ 'padding': '0px' }}>
					<Table columns={tableColumns} dataSource={users} rowKey='id' />					
				</Card>
		)
	}
}

const mapStateToProps = ({ client }) => {
	const { clients: users, loading, selectedClient, showMessage } = client;
	return { users, loading, selectedClient, showMessage }
};

const mapDispatchToProps = {
	fetchClients,
	removeClient,
	setSelectedClient,
	clearSelectedClient,
	updateClients,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
