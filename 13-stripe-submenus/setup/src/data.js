import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
	{
		page: 'products',
		links: [
			{ label: 'payment', icon: <FaCreditCard />, url: '/products' },
			{ label: 'terminal', icon: <FaCreditCard />, url: '/products' },
			{ label: 'connect', icon: <FaCreditCard />, url: '/products' },
		],
	},
	{
		page: 'developers',
		links: [
			{ label: 'plugins', icon: <FaBook />, url: '/developers' },
			{ label: 'libraries', icon: <FaBook />, url: '/developers' },
			{ label: 'help', icon: <FaBook />, url: '/developers' },
			{ label: 'billing', icon: <FaBook />, url: '/developers' },
		],
	},
	{
		page: 'company',
		links: [
			{ label: 'about', icon: <FaBriefcase />, url: '/company' },
			{ label: 'customers', icon: <FaBriefcase />, url: '/company' },
		],
	},
];

export default sublinks;
