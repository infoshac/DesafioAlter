-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Jan-2022 às 05:22
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_cliente`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(40) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `sobrenome` varchar(100) DEFAULT NULL,
  `idade` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id`, `nome`, `sobrenome`, `idade`, `email`, `senha`) VALUES
(1, 'mudando correto', 'sobre', '12', 'muda@muda.com', '$2y$10$rMQpBvO/WPSpADZlVhIM6eUZ7o7Dh75A/JrfnTMiNeYyCOnqWsaxO'),
(2, 'Fatima ', 'Meireles', '20', 'dark977@hotmail.com', ''),
(3, 'Jupira Gomes', 'Falcao', '12', 'test@tes.com', '$2y$10$t.Ic/B7R5x/w5ee3VbsF1uq1b4p3SR9oRR.ygEvGTUikzS9aoZ5ny'),
(5, 'Saulo', 'Carneiro', '12', 'saulo@saulo.com', '123456'),
(6, 'Jupira Gomes', '22630-150', '12', 'jupira@jupira.com', '$2y$10$ov63ci7Vt4SjcmlIuOlvOuMhyJa.KQVWbBBumvhvXAO/GkbMqa0kq'),
(7, 'Joao', 'Jose', '123', 'sa@sa.com', ''),
(8, 'Maria', 'Joaquina', '45', 'maria@maria.com', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
