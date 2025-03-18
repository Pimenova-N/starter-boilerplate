import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Avatar, Button, Input, Row, Col, message, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { updateClients } from 'redux/actions/Client';
import { connect } from "react-redux";


export class EditProfile extends Component {

	avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

	state = {
		avatarUrl: '/img/avatars/thumb-6.jpg',
	};

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {

		const { avatarUrl } = this.state;
		const { selectedClient, updateClients } = this.props;

		const onFinish = values => {
			updateClients(
				{
					"id": selectedClient?.id,
					"name": values?.name,
					"username": values?.username,
					"email": values?.email,
					"address": {
						"street": values?.street,
						"suite": values?.suite,
						"city": values?.city,
						"zipcode": values?.postcode,
						"geo": {
							"lat": values?.lat,
							"lng": values?.lng,
						}
					},
					"phone": values?.phoneNumber,
					"website": values?.website,
					"company": {
						"name": values?.companyName,
						"catchPhrase": values?.catchPhrase,
						"bs": values?.companyBs,
					}
				}
			)
			//setTimeout(() => notification.open({ message: '', description: 'Сustomer data is updating...' }), 2000);

			message.loading({ content: `Сustomer data is updating...`, duration: 2 });

			setTimeout(() => this.props.history.push('/app/main/clients/user-list'), 2000);

		};

		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

		return (
			<>
				<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
					<Avatar size={70} src={avatarUrl} icon={<UserOutlined />} />
				</Flex>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						clearOnDestroy="true"
						initialValues={
							{
								'id': selectedClient?.id,
								'name': selectedClient?.name,
								'email': selectedClient?.email,
								'username': selectedClient?.username,
								'phoneNumber': selectedClient?.phone,
								'website': selectedClient?.website,
								'companyName': selectedClient?.company?.name,
								'companyBs': selectedClient?.company?.bs,
								'catchPhrase': selectedClient?.company?.catchPhrase,
								'suite': selectedClient?.address?.suite,
								'city': selectedClient?.address?.city,
								'street': selectedClient?.address?.street,
								'postcode': selectedClient?.address?.zipcode,
								'lat': selectedClient?.address?.geo?.lat,
								'lng': selectedClient?.address?.geo?.lng,
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={24}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{
												required: true,
												type: 'email',
												message: 'Please enter a valid email!'
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phoneNumber"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Company Name"
											name="companyName"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Company Bs"
											name="companyBs"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Company Catch Phrase"
											name="catchPhrase"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Geo lat"
											name="lat"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Geo lng"
											name="lng"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City "
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Street"
											name="street"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Suite"
											name="suite"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Post code"
											name="postcode"
										>
											<Input />
										</Form.Item>
									</Col>

								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		)
	}
}


const mapStateToProps = ({ client }) => {
	const { selectedClient } = client;
	return { selectedClient }
};

const mapDispatchToProps = {
	updateClients
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
