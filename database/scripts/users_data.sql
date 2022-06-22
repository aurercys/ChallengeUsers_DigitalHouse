-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Tony','Stark','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','iroman@gmail.com','iroman.jpg'),(2,'Steven','Grant Rogers','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','capitanamérica@gmail.com','Capitan america(2).jpg'),(3,'Thor','Odinson','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','thor@gmail.com','Thor(1).jpg'),(4,'Bruce','Banner','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','hulk@gmail.com','hulk (3).jpg'),(5,'Peter','Parker','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','spiderman@gmail.com','spiderman (3).jpg'),(6,'Natalia','Alianovna Romanova','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','blackwidow@gmail.com','Black widor(1).jpg'),(7,'Stephen','Strange','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','drstrange@gmail.com','Dr (2).jpg'),(8,'Wanda','Maximoff','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','scarletwitch@gmail.com','wanda(4).jpg'),(9,'Visión','Ultrón','$2a$10$tv3VSTCeVNP.zBNazPhL3e9T4TkxrD0IzyKrkeDPOKrbTce81YNUC','vision@gmail.com','Vision (1).jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-22  0:50:48
