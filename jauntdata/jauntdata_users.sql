CREATE DATABASE  IF NOT EXISTS `jauntdata` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `jauntdata`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: jauntdata
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `policyholder_locator` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (41,'alice.lee@zensar.com','alice','lee','$2a$10$KbyxymJBlJPBBsO7734lLuJqboB4eVM3c930OAJuTFDqUiS7n8Fzq','b4f40034-321c-4f8f-b111-6feb567422c76fe4dd12-24af-4cf3-ad08-ca389fe542ad','2022-12-10 10:39:34','ADMIN','alice.lee',NULL),(42,'vijayakumpatla@gmail.com','Vijaya','Kumpatla','$2a$10$MotQuI/p.qNNe0atZXkVleutcYMRzuSA9bEn3omCDK3EaYMCzaWIm',NULL,NULL,'ADMIN','VijayaKumpatla44',NULL),(43,'vijayakumpatla91@gmail.com','Vijaya','Kumpatla','$2a$10$HyWE6e/4LsiJg7SpKi8Ll.FgYLm2y1X2fY80/fOS.J92RitEvDmQ6','bd25ee7e-33b6-4a35-8ace-20adf987d7b7c7b30a89-9049-49e5-855b-359a2e6510be','2022-12-09 18:57:59','ADMIN','VijayaKumpatla91',NULL),(44,'vijayakumpatla11@gmail.com','Vijaya',NULL,'$2a$10$nwJ05P.h7PjVrZFKIg4.mOTHNNbLL53e8DYvIXRDVuJdv.aCpbMGa',NULL,NULL,NULL,'vijayakumpatla11@gmail.com',NULL),(46,'swapnil@zensar.com','Swapnil',NULL,'$2a$10$fATL536P1TSnMX/jXz8q4eicI0qYBlccpHJE5TkZeJPE4WqevxCNe','25c25ef7-b614-44ec-9706-8b700a0bd5511f432296-2b84-4830-9126-dc71e4600141','2022-12-13 21:29:10',NULL,'swapnil@zensar.com',NULL),(47,NULL,'Swapnil',NULL,'swapnil@zensar.com',NULL,NULL,NULL,'swapnil@zensar.com','$2a$10$F0Vdkr0oTcBBSsDSu0utZuRBqyrdWY9bvLx965wBCTOIoBAf.gnbi'),(48,'swapnil2@zensar.com','Swapnil',NULL,'$2a$10$u.Pfn.rujst0pguISXK3wOPVfdyDdu/eLQKKVRNMh7JyZrmWQGE1u','c813b875-21d8-4c13-8bab-cb5f13649af3dd45ef03-d4f2-4868-80ce-7859e142cf3a','2022-12-13 21:33:02',NULL,'swapnil2@zensar.com',NULL),(49,NULL,'Swapnil',NULL,'swapnil2@zensar.com',NULL,NULL,NULL,'swapnil2@zensar.com','$2a$10$tQ0u7TlD0we4u8F7RSibQecGUxomSuw1Opq7ra4PtRZCcsxmoAqSa'),(50,'swapnil3@zensar.com','Swapnil',NULL,'$2a$10$bd4PSakNKIXBeY1QTVDsc.qthJ4zuxzKWrC6SKsZ5Yn1dmJlrbLfa','6a31d9f9-8034-4095-9424-4a8de1c6448542f87574-7650-4d79-b97d-9cd11ea162f9','2022-12-13 21:37:45',NULL,'swapnil3@zensar.com',NULL),(51,NULL,'Swapnil',NULL,'swapnil3@zensar.com',NULL,NULL,NULL,'swapnil3@zensar.com','$2a$10$TWL3CW1yMdIr505wTD1okuQbICKBcr50o0BkPltD2RWZBcAPlBWVG'),(52,'swapnil4@zensar.com','Swapnil',NULL,'$2a$10$1dQYQzU/m0HW5Ce1V0WkjOG2NqJsMAM5rY2wnPCA44xPzbtSdEBiy','c85c3c4a-7608-426f-abb9-e08dc84670b01d7da084-ace5-491b-801e-6a5d8605e471','2022-12-13 21:38:39',NULL,'swapnil4@zensar.com',NULL),(53,NULL,'Swapnil',NULL,'swapnil4@zensar.com',NULL,NULL,NULL,'swapnil4@zensar.com','$2a$10$JFyxqSSGxSYb7GCySCglN.1TizOPKo4obT2jWW0ECrEs83Bn3/m/y'),(54,'swapnil5@zensar.com','Swapnil',NULL,'$2a$10$p5Thr6TVY.uO6QHm6UnkIOJSKjavWfxFdADrAPHtvff9xPgNsv/sO','0a2a5615-08a3-4337-813d-c73fa98cff6603790452-59a9-42ac-bc01-eb706875302e','2022-12-13 21:40:36',NULL,'swapnil5@zensar.com',NULL),(55,NULL,'Swapnil',NULL,'swapnil5@zensar.com',NULL,NULL,NULL,'swapnil5@zensar.com','$2a$10$nlu83HXtaatTdLICaXnR/u8RmsRTJthWqsBlnWKo8F0wHmL2k2lyG'),(56,'swapnil6@zensar.com','Swapnil',NULL,'$2a$10$a5you2XSByZCqwJ1zT1DI.OjsOHhTYBtqoUhykF6SkPldOt.ZeBBa','28c3d42a-bebe-41c9-be40-87941fb87496e4f8575a-cfc6-4996-9c99-03e964c84260','2022-12-13 22:32:34',NULL,'swapnil6@zensar.com',NULL),(57,NULL,'Swapnil',NULL,'swapnil6@zensar.com',NULL,NULL,NULL,'swapnil6@zensar.com','$2a$10$QPIvSRPvcFoah.cnSlUJXepSCFXDaorA54rd6A0lIDBxtFeGKraja'),(58,'swapnil7@zensar.com','Swapnil',NULL,'$2a$10$pSPAreqI/CEdC6by4V.jhOi9mhlKjkihk9VhDYGl7fvBVup/8VGDm','ec1c080c-ca70-4604-8861-140549578b6bc95a4074-5f98-4745-bb0f-eee40281f4a5','2022-12-13 22:51:37',NULL,'swapnil7@zensar.com',NULL),(59,NULL,'Swapnil',NULL,'swapnil7@zensar.com',NULL,NULL,NULL,'swapnil7@zensar.com','$2a$10$IdAwx5.wKemBJr34efcLOOQDwLmTFZXDHLgwLluv7WVuoU5bq8V/.'),(60,'swapnil8@zensar.com','swapnil',NULL,'$2a$10$7a3LkPwwLPEPtuwZf4y2DOh3MlPnuZjlfKrA3ORPbCuqcs3Yu5W8G','c89e417e-e346-4b32-bb15-5ab07f75c42ae61ded4d-515c-4b25-ad49-f34ea394737c','2022-12-13 23:26:31',NULL,'swapnil8@zensar.com',NULL),(61,'swapnil9@zensar.com','swapnil',NULL,'$2a$10$EHqgxdbRBZsw0vczzrcEd./GiGVnzpg3f/ofQ.yMC/f.37pZebZvK','b6996a8b-293c-49db-99fd-107337dab3847db55870-42c0-4fba-b0a4-bf8d2b53c5dd','2022-12-13 23:41:29',NULL,'swapnil9@zensar.com','ac063454-32d4-42ce-97a5-47f851a2afa3'),(62,'rathan@zensar.com','Rathan Kamble',NULL,'$2a$10$Fwq.14M15v/ZWlczkwgLTO6EfbVZ1rkTHSkviObl1.4hJYLjzGUaC','32c4dd42-a462-455d-b7fc-42dc61e3060d9b0b2b1e-d17b-498e-b0bc-fce95c113928','2022-12-14 11:16:26',NULL,'rathan@zensar.com','fa2d991b-016a-4b08-be5c-8f4869c3bc0c'),(63,'jaunt.test@znsar.com','Jaunt Test',NULL,'$2a$10$1ehzFl39F8O92H0G9HzJoubNz1O9Fwt5MAYtQS1/N3YvPQ5C92qsu','959a0255-2b11-41f5-bd9b-5b9520eacbbc7269d349-2779-4e4e-805c-745241f54db1','2022-12-14 17:50:31',NULL,'jaunt.test@znsar.com','c44a4030-8beb-4263-a63c-9fa480e34fc7'),(64,'jaunt.test2@zensar.com','Jaunt Test 2',NULL,'$2a$10$7EYz0d4Fy0vVPNdj/pUXUeWLcjBnkPOLwvx8frYaJzq.XcBNcMr9S','37997fcb-20f1-4e1b-b109-a3217715a7a0aff0dee6-599d-49dc-b163-1bc447dc9273','2022-12-14 18:09:53',NULL,'jaunt.test2@zensar.com','3a9d3b0c-b34d-4225-a4f9-533a6db02f92'),(65,'test.policyholder@zensar.com','Swapnil Testing Policyholder',NULL,'$2a$10$WEfGQsQtFrXZmw/meRYBte13h5k0RytmAjdbSDrXlHB2f41KN0kOa','2e416be1-6d8b-4bc9-93d8-942559715d538c177fed-f20f-453a-9bbd-9a7ff17d7546','2022-12-14 21:25:18',NULL,'test.policyholder@zensar.com','2ac689ff-dcde-47db-9c2d-682cdc470de6'),(66,'swapnil.t.p@zensar.com','Swapnil T P',NULL,'$2a$10$18fFr5I/yRpiOdg7KvYWgurLZlJFF9U3fRIUztxHNSHdXHelqnKT6','2efb335c-1c67-429d-bde9-a9836760e4a9e45867e7-c0e3-4510-ba92-e057c731dd20','2022-12-15 02:17:55',NULL,'swapnil.t.p@zensar.com','7074542b-88b3-4917-b6ce-7b3f78d7f9a5'),(67,'swapnil.t.p2@zensar.com','Swapnil T P 2',NULL,'$2a$10$7n5gdWllHiF9tFvymEysgO31az1e0Swgn9sLmGCJ2Y58JyO1VwQke','c55ccc26-9887-4093-b760-1448d829e015fdde3ad6-0da3-42f1-b738-31756ebb5e14','2022-12-15 02:18:59',NULL,'swapnil.t.p2@zensar.com','b13b9720-6c92-4d9d-a5c5-59352d849b6f'),(68,'swapnil.tp3@zensar.com','swapnil tp3',NULL,'$2a$10$VnM31UJ17C3EJ/0lNHpEW.oRqnYQBA/8gJtinBg1km6Q9zQ2116yG','755e5690-a77a-496c-a480-1742d02f9279a0ad494e-5765-4648-a66e-f83e7e03274f','2022-12-15 02:20:23',NULL,'swapnil.tp3@zensar.com','74c6fa37-e063-44b3-a154-c454239a6a4a'),(69,'swapnil.tp4@zensar.com','Swapnil tp4',NULL,'$2a$10$i7BpcAtk5qsfwpV14VHfveIzM8qiZZnfz60Ys8jn5sLvqxgILPaAO','569a04f0-3cf1-42ae-8c00-65c7893444a8739d62db-a200-4e46-9e03-6412292a2e87','2022-12-15 23:50:18',NULL,'swapnil.tp4@zensar.com','5cd39ec6-ef00-4f86-a812-46f5d7360309'),(70,'swapnil.tp5@zensar.com','Swapnil tp5',NULL,'$2a$10$fNw7P3CE0pRkbmzEdCZY0eJm/JpaMImp.L8voanBCmEJPVM58a1uC','98e27477-bf86-4da5-8fef-d85d3773b09266f53b95-6b69-460b-a7ab-8a8a71ea1005','2022-12-16 00:05:29',NULL,'swapnil.tp5@zensar.com','0295c07b-f1c8-471f-b6de-b06d00963cdc'),(71,'ruchi.test@zensar.com','Ruchi Test',NULL,'$2a$10$y.3QQMr7aFVq6wcmzCf1w.FhUHpkFR/GAaB7KYYZRfNijMU6pZt5e','097ae1eb-1a45-415a-accb-79d10e4e7a243f3ac1aa-0a4e-4efc-bd9b-629634e09f70','2022-12-16 18:46:12',NULL,'ruchi.test@zensar.com','96cfc6cb-d6d8-4331-bff4-01b58c959dab'),(72,'tejunagesh@gmail.com','tejaswini',NULL,'$2a$10$TxZVP0uRDA4ZNmzLZefIFulvMpbi/gb2sSCjcValGY98yBqBcylim','1ed7b8c5-95f7-4632-ae0d-fc770e0fa2523576e82d-a3c3-4703-8f48-6e3123f2daad','2022-12-20 11:46:43',NULL,'tejunagesh@gmail.com','ddf693e4-f4f4-4226-bf41-0d5f300fa979'),(73,'nagesh@mal.com','nagesh',NULL,'$2a$10$RRxDmd9Bda2s53dhY0MpPeAuQIjxrsHw0p4xIqaRI0zz1hAZ7I352','fe28cf28-7658-4f66-9c6b-75d4470d1a18d48cafd9-581d-471a-9706-0e0eba22c4b9','2022-12-20 11:46:43',NULL,'nagesh@mal.com','fb1fb729-74d3-4795-b6f6-0eb8373f8c46'),(74,'nagesh@gmail.com','nagesh',NULL,'$2a$10$w8jO2xo1QR.g6xMMQsqM2u1A.Ey4rCGaRcweQNiGiCUyjb79q.M4u','3ba7b06e-b253-4b83-9416-80b0d05a284a441537c5-bb1b-49aa-a9cc-db7c1d14f314','2022-12-20 11:46:43',NULL,'nagesh@gmail.com','dc3ad385-51c0-4da3-bd6a-1bb2ffb4b084'),(75,'swapnil.tp6@zensar.com','Swapnil tp6',NULL,'$2a$10$..0x9k3jxbJuewMTJFdiT.Xh4FRVsHaFj9pYb9SRN6HoN2WgHDJxC','9b35bbfc-fb73-405c-a1b3-7122654fbe74556e5eaa-503e-44a6-9582-f2694138dcf6','2022-12-22 00:36:09',NULL,'swapnil.tp6@zensar.com','ed4f3d55-a70e-403b-b694-d8a0841d16fc'),(76,'rajrathan@zensar.com','Rajrathan',NULL,'$2a$10$wOk3v0NhN4T3GndQiHbtouqQmUQiPh1nEjFan87gvdfT8egZUIj6a','685e02f4-e6e6-44eb-9b18-115db705fe3a7d096650-ed47-4d0d-85c9-b319a9183a3b','2022-12-22 15:50:50',NULL,'rajrathan@zensar.com','d8d9b7f3-f97f-4d78-a4ad-07b00f32eaa6'),(77,'test.jaunt@zensar.com','test jaunt',NULL,'$2a$10$uHYM3lS7y0AeY6uJs6N8d.rZ9JP7FLyTnpsixcYb8RpURpIA9xgey','b140f838-05d7-4a07-a15b-3781636cc64524d885ca-81c3-458f-b2f6-e4b064307a00','2022-12-23 19:01:11',NULL,'test.jaunt@zensar.com','584816b4-bbfc-49db-8208-9ebf39022b16'),(78,'swapnil.j01@zensar.com','Swapnil J01',NULL,'$2a$10$7.vfrmmzb9qBVzN4U40YMetN5HI3MqPnalW5Dtqrpfi2pK.tjaohq','6011a7b6-39b8-476e-a1c5-ec9f814b8243a1b33be8-5468-43cb-99be-8a31eedd948d','2022-12-27 22:48:40',NULL,'swapnil.j01@zensar.com','7f068c1e-d462-480f-b5e5-3b78077b01c2'),(79,'test01@zensar.com','Test',NULL,'$2a$10$pmhtL3yogzhuNdnrqCEGhuGEGyHJw/X72ELqRUjcTxu/qb1SsDcNe','c65750d5-58f9-42d5-a7ab-f3d409e2f45b67720f5d-950c-4ac2-866d-d0633ccfeac4','2022-12-27 22:58:55',NULL,'test01@zensar.com','9c269931-69ed-49df-a2ee-e7be31f8cfb4'),(80,'swapnil.tp1@zensar.com','swapnil',NULL,'$2a$10$sielWVu4Fyzi6QrnNQWDH.vI8Gn5gE1UknGyqCKP9fUjwCL8cXPJm','a59f9ce8-cecb-42fa-b2b5-f2fe94c2a8dffd7427c1-86ad-41d7-9226-89483c1f2935','2022-12-29 16:48:16',NULL,'swapnil.tp1@zensar.com','8f8e6cf8-3e40-413f-816c-b152762695fb'),(81,'swapnil.j02@zensar.com','Swapnil J02',NULL,'$2a$10$XOSPU0N7DkSILiZ4bHzg6ORkko6pjwtF5ZeyD.qevQIH1uY6uC6nm','a7d0916a-1090-4dd1-b698-bca1e28b0618d999d4af-adf4-4f3d-8aa1-23c34b7452c8','2022-12-29 17:22:50',NULL,'swapnil.j02@zensar.com','0251b736-e084-4bb9-8d52-f02206a8cb08'),(82,'swapnil.j01@zensar','Swapnil ',NULL,'$2a$10$NVCHINkT3ZcPG14AO9YsZ.Eb.q5XLTonnPBfi5BIXL2vEiFH4zryq','2c84e46d-5f11-454c-b5c7-57479f079b6358eee8d5-20ea-4512-98bf-e3b692576890','2023-01-02 15:13:45',NULL,'swapnil.j01@zensar','a87dc005-e7f8-42b4-b250-52127eed28dd');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02 17:13:28
