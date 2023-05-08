-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2023 at 10:14 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kasir_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Makanan', '2023-05-01 13:15:17', '2023-05-01 17:50:24'),
(2, 'Minuman', '2023-05-01 13:50:06', '2023-05-01 17:50:22'),
(3, 'cemilan', '2023-05-01 13:50:24', '2023-05-01 17:43:00'),
(4, 'ice Cream', '2023-05-01 14:05:22', '2023-05-01 17:50:26');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(3) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'makanan'),
(2, 'minuman');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(3) NOT NULL,
  `nama` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `url`, `id_category`, `price`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Nasi Goreng', 'a0570e8c84934aaadc4c4b1d5a0c4d83.jpg', 'http://localhost:3001/images/a0570e8c84934aaadc4c4b1d5a0c4d83.jpg', 0, 15000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-03 13:50:20', '2023-05-03 13:50:20'),
(3, 'Es Cendol', '4abdfb77c6754e13de90a7b14542fb61.jpg', 'http://localhost:3001/images/4abdfb77c6754e13de90a7b14542fb61.jpg', 0, 7000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 17:27:25', '2023-05-05 17:27:25'),
(4, 'Rendang', '8ee5cd284c57fe0b570b86531ffeb2e1.jpg', 'http://localhost:3001/images/8ee5cd284c57fe0b570b86531ffeb2e1.jpg', 0, 17000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 17:28:06', '2023-05-05 17:28:06'),
(5, 'Soto Ayam', '5983a4a5a48a23b566c1d89a779a0f22.jpg', 'http://localhost:3001/images/5983a4a5a48a23b566c1d89a779a0f22.jpg', 0, 14000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 17:33:24', '2023-05-05 17:33:24'),
(6, 'Onde-onde', '6907df480dcb841a277b3ec9fa0dc03e.jpg', 'http://localhost:3001/images/6907df480dcb841a277b3ec9fa0dc03e.jpg', 0, 4000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 18:27:30', '2023-05-05 18:27:30'),
(7, 'Pisang Cokelat', '25923d425c9ccb236876d31e77b66e0b.jpg', 'http://localhost:3001/images/25923d425c9ccb236876d31e77b66e0b.jpg', 0, 5000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', '2023-05-05 18:28:02', '2023-05-05 18:28:02'),
(8, 'Es Teh', 'f0a38f20c2e3d2b52f0d87e85dbde4ba.jpg', 'http://localhost:3001/images/f0a38f20c2e3d2b52f0d87e85dbde4ba.jpg', 0, 5000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 18:28:26', '2023-05-05 18:28:26'),
(9, 'Cucur', '2a033b93bfe440c90bcc7e75692ed5aa.jpg', 'http://localhost:3001/images/2a033b93bfe440c90bcc7e75692ed5aa.jpg', 0, 4000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 18:29:01', '2023-05-05 18:29:01'),
(10, 'Es Jeruk', 'd5757c225b789cc063b8404db6f135e0.jpg', 'http://localhost:3001/images/d5757c225b789cc063b8404db6f135e0.jpg', 0, 6000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 18:30:44', '2023-05-05 18:30:44'),
(11, 'Sate Ayam', '4082ccf33a3e991cbf95f697a5bcd880.jpg', 'http://localhost:3001/images/4082ccf33a3e991cbf95f697a5bcd880.jpg', 0, 16000, 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-05-05 18:31:58', '2023-05-05 18:31:58');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `storename` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `phone`, `storename`) VALUES
(1, 'admin', 'admin@gmail.com', 'Admin123', '089988776655', 'KasirApp');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(3) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `storename` varchar(30) NOT NULL,
  `refresh_token` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `phone`, `storename`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(16, 'admin', 'admin@gmail.com', 'admin', '089988776655', 'KasirApp', '', '2023-04-24 06:44:33', '2023-04-24 06:44:33'),
(17, 'admin', 'admin@mail.com', 'admin', '089988776655', 'KasirApp', '', '2023-04-24 07:06:02', '2023-04-24 07:06:02'),
(18, 'admin', 'admin@gmail.com', 'Admin123', '089988776655', 'KasirApp', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'admin', 'admin@mail.com', 'admin', '089988776655', 'KasirApp', '', '2023-05-02 07:59:16', '2023-05-02 07:59:16'),
(20, 'admin2', 'admin2@mail.com', 'admin2', '089988776655', 'KasirApp', '', '2023-05-02 08:40:26', '2023-05-02 08:40:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
