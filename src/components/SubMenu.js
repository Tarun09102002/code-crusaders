import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const SidebarLink = styled.div`
	display: flex;
	color: #e1e9fc;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 40px;
	text-decoration: none;
	font-size: 18px;
	&:hover {
		background: #252831;
		border-left: 4px solid #632ce4;
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;

const DropdownLink = styled.div`
	background: #414757;
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #f5f5f5;
	font-size: 18px;
	&:hover {
		background: #632ce4;
		cursor: pointer;
	}
`;

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);
	const navigate = useNavigate();

	const showSubnav = () => setSubnav(!subnav);
	const clickHandler = () => {
		if (item.subNav) {
			showSubnav();
		} else {
			navigate(item.path);
		}
	};

	return (
		<>
			<SidebarLink onClick={clickHandler}>
				<div>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</SidebarLink>
			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink key={index} onClick={() => navigate(item.path)}>
							{item.icon}
							<SidebarLabel onClick={item.path}>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
