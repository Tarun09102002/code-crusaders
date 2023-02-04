import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
	background: #22223f;
	height: 60px;
	display: flex;
	align-items: center;
`;

const NavIcon = styled.div`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #22223b;
	width: 200px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
	overflow-y: auto;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav className="flex flex-row justify-between w-full px-10">
					<div className="text-white font-semibold text-2xl ">StudyPat</div>
					<div className="flex flex-row mr-8">
						<div className="text-white  text-xl mr-5">Your Notes</div>
						<div className="text-white text-xl mr-5">Quiz</div>
						<div className="text-white text-xl mr-5">Calendar</div>
					</div>
				</Nav>
				{/* <SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon>
							<AiIcons.AiOutlineClose onClick={showSidebar} />
						</NavIcon>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</SidebarWrap>
				</SidebarNav> */}
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
