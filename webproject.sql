-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2020 at 04:43 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `topseller`
--

CREATE TABLE `topseller` (
  `name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `src` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topseller`
--

INSERT INTO `topseller` (`name`, `price`, `src`) VALUES
('key chain darth', '5', 'topS/keychain1.jpg'),
('key chain bmw ', '10', 'topS/keychain2.JPG'),
('key chain rem', '20', 'topS/keychain3.jpg'),
('watch', '30', 'topS/watch.jpg'),
('key chain', '40', 'topS/rem_key.jpg'),
('comic book', '50', 'topS/rezero1.jpg'),
('ps5', '500', 'topS/ps5.jpg'),
('light novel', '60', 'topS/shieldhero1.jpg'),
('harry potter', '100', 'topS/harry.jpg'),
('watch 2', '80', 'topS/watch1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usersinfo`
--

CREATE TABLE `usersinfo` (
  `username` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `telephone` varchar(64) NOT NULL,
  `gender` varchar(64) NOT NULL,
  `FirstName` varchar(64) NOT NULL,
  `LastName` varchar(64) NOT NULL,
  `country` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usersinfo`
--

INSERT INTO `usersinfo` (`username`, `email`, `password`, `telephone`, `gender`, `FirstName`, `LastName`, `country`) VALUES
('kkdd', 'khaled@kk.com', 'sss', '11-111-111', 'Male', 'khaled', 'as', 'Lebanon');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
