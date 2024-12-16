-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 01:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jollibee_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_category`
--

CREATE TABLE `jollibee_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_image` varchar(20) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_category`
--

INSERT INTO `jollibee_category` (`category_aid`, `category_is_active`, `category_image`, `category_title`, `category_datetime`, `category_created`) VALUES
(6, 1, 'nav-chickenjoy.jpg', 'Chicken Joy', '2024-12-11 15:26:10', 2024),
(7, 1, 'nav-burger.webp', 'Burger', '2024-12-11 15:05:17', 2024),
(8, 1, 'nav-spaghetti.webp', 'Spaghetti', '2024-12-11 15:05:27', 2024),
(9, 1, 'nav-palabok.webp', 'Palabok', '2024-12-11 15:05:36', 2024),
(10, 1, 'nav-sides.webp', 'Sides', '2024-12-11 15:05:45', 2024),
(11, 1, 'nav-value-meal.webp', 'Value Meal', '2024-12-11 15:05:56', 2024),
(12, 1, 'steak-1.webp', 'Burger Steak', '2024-12-11 15:23:30', 2024),
(13, 1, 'nav-desserts.webp', 'Desserts', '2024-12-11 15:06:14', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_food`
--

CREATE TABLE `jollibee_food` (
  `food_aid` int(11) NOT NULL,
  `food_is_active` tinyint(1) NOT NULL,
  `food_image` varchar(20) NOT NULL,
  `food_title` varchar(30) NOT NULL,
  `food_price` int(20) NOT NULL,
  `food_category_id` int(11) NOT NULL,
  `food_datetime` varchar(30) NOT NULL,
  `food_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_food`
--

INSERT INTO `jollibee_food` (`food_aid`, `food_is_active`, `food_image`, `food_title`, `food_price`, `food_category_id`, `food_datetime`, `food_created`) VALUES
(8, 1, 'chicken-1.webp', '2pc Chickenjoy', 100, 6, '2024-12-11 15:49:55', 2024),
(9, 1, 'chicken-2.webp', '3pc Chickenjoy', 300, 6, '2024-12-11 15:49:58', 2024),
(10, 1, 'chicken-6.webp', 'Bucket Chicken', 500, 6, '2024-12-11 15:50:05', 2024),
(11, 1, 'burger-1.webp', 'Yum Burger', 75, 7, '2024-12-11 15:41:39', 2024),
(12, 1, 'burger-2.webp', 'Burger w/ Fries', 90, 7, '2024-12-11 15:41:58', 2024),
(13, 1, 'burger-3.webp', 'Cheesy Yum Burger', 80, 7, '2024-12-11 15:42:18', 2024),
(14, 1, 'spag-1.webp', 'Jolly Spaghetti', 90, 8, '2024-12-11 15:42:41', 2024),
(15, 1, 'spag-2.webp', 'Spaghetti w/ Chicken', 150, 8, '2024-12-11 15:43:02', 2024),
(16, 1, 'spag-3.webp', 'Family Spaghetti', 500, 8, '2024-12-11 15:43:16', 2024),
(17, 1, 'palabok-1.webp', 'Palabok', 90, 9, '2024-12-11 15:43:42', 2024),
(18, 1, 'palabok-2.webp', 'Palabok w/ drink', 120, 9, '2024-12-11 15:44:02', 2024),
(19, 1, 'palabok-3.webp', 'Family Palabok', 500, 9, '2024-12-11 15:44:19', 2024),
(20, 1, 'sides-1.webp', 'Fries', 60, 10, '2024-12-11 15:44:43', 2024),
(21, 1, 'sides-2.webp', 'Mash Potato', 60, 10, '2024-12-11 15:45:03', 2024),
(22, 1, 'sides-3.webp', 'Rice', 35, 10, '2024-12-11 15:45:17', 2024),
(23, 1, 'value-meal-1.webp', 'Value Meal 1', 300, 11, '2024-12-11 15:45:47', 2024),
(24, 1, 'value-meal-2.webp', 'Value Meal 2', 300, 11, '2024-12-11 15:46:12', 2024),
(25, 1, 'value-meal-3.webp', 'Value Meal 3', 300, 11, '2024-12-11 15:46:28', 2024),
(26, 1, 'steak-1.webp', '3pcs Burger Steak', 250, 12, '2024-12-11 15:46:57', 2024),
(27, 1, 'steak-2.webp', 'Family Burger Steaks', 450, 12, '2024-12-11 15:47:20', 2024),
(28, 1, 'steak-3.webp', 'Burger Steak Combo', 800, 12, '2024-12-11 15:47:42', 2024),
(29, 1, 'dessert-1.webp', 'Mango Pie', 40, 13, '2024-12-11 15:48:59', 2024),
(30, 1, 'dessert-2.webp', 'Ube Pie', 40, 13, '2024-12-11 15:48:24', 2024),
(31, 1, 'dessert-3.webp', 'Peach Mango Pie', 40, 13, '2024-12-11 15:48:50', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  ADD PRIMARY KEY (`food_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  MODIFY `food_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
