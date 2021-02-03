-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: servers-managment
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `servers`
--

DROP TABLE IF EXISTS `servers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servers` (
  `server_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `server_name` varchar(45) NOT NULL,
  `server_IP` varchar(45) NOT NULL,
  `server_hosting_company` bigint unsigned NOT NULL,
  `server_online_status` tinyint unsigned NOT NULL,
  `server_creation_time` date NOT NULL,
  PRIMARY KEY (`server_ID`),
  UNIQUE KEY `server_ID_UNIQUE` (`server_ID`),
  KEY `fk_company_ID_idx` (`server_hosting_company`),
  CONSTRAINT `fk_company_ID` FOREIGN KEY (`server_hosting_company`) REFERENCES `servers_companies` (`company_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servers`
--

LOCK TABLES `servers` WRITE;
/*!40000 ALTER TABLE `servers` DISABLE KEYS */;
INSERT INTO `servers` VALUES (1,'Kingston Servers','12.34.56.78',2,1,'2020-03-03'),(2,'Dribble Servers','13.15.25.45',3,0,'2019-05-17'),(3,'Priniplix Servers','15.75.99.89',1,0,'2012-05-17'),(4,'Ben Ashkenazi Servers','58.94.65.66',4,1,'2018-01-15'),(5,'Mashed Servers','45.55.55.12',2,0,'2018-02-05'),(6,'Vhagar Servers','99.99.99.98',1,1,'2005-01-01'),(7,'Fanfair Servers','97.25.14.98',4,1,'2020-07-29'),(8,'The Great Whale Servers','11.12.15.15',3,1,'2013-06-15'),(9,'BATK Servers','99.98.89.63',3,0,'1987-09-26');
/*!40000 ALTER TABLE `servers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servers_companies`
--

DROP TABLE IF EXISTS `servers_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servers_companies` (
  `company_ID` bigint unsigned NOT NULL,
  `company_name` varchar(45) NOT NULL,
  PRIMARY KEY (`company_ID`),
  UNIQUE KEY `company_ID_UNIQUE` (`company_ID`),
  UNIQUE KEY `company_name_UNIQUE` (`company_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servers_companies`
--

LOCK TABLES `servers_companies` WRITE;
/*!40000 ALTER TABLE `servers_companies` DISABLE KEYS */;
INSERT INTO `servers_companies` VALUES (4,'DigitalO'),(3,'GoDaddy'),(2,'IBM'),(1,'Microsoft');
/*!40000 ALTER TABLE `servers_companies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-21  3:03:09
