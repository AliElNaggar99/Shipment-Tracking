USE [master]
GO
/****** Object:  Database [Import_Company]    Script Date: 9/17/2021 2:48:14 PM ******/
CREATE DATABASE [Import_Company]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Import_Company', FILENAME = N'D:\Programes\SQL Server 2019\MSSQL15.SQLEXPRESS\MSSQL\DATA\Import_Company.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Import_Company_log', FILENAME = N'D:\Programes\SQL Server 2019\MSSQL15.SQLEXPRESS\MSSQL\DATA\Import_Company_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Import_Company] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Import_Company].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Import_Company] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Import_Company] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Import_Company] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Import_Company] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Import_Company] SET ARITHABORT OFF 
GO
ALTER DATABASE [Import_Company] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Import_Company] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Import_Company] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Import_Company] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Import_Company] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Import_Company] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Import_Company] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Import_Company] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Import_Company] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Import_Company] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Import_Company] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Import_Company] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Import_Company] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Import_Company] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Import_Company] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Import_Company] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Import_Company] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Import_Company] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Import_Company] SET  MULTI_USER 
GO
ALTER DATABASE [Import_Company] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Import_Company] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Import_Company] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Import_Company] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Import_Company] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Import_Company] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Import_Company] SET QUERY_STORE = OFF
GO
USE [Import_Company]
GO
/****** Object:  Table [dbo].[Clear_Porkers]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clear_Porkers](
	[Porker_ID] [int] IDENTITY(1,1) NOT NULL,
	[Proker_Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Clear_Porkers] PRIMARY KEY CLUSTERED 
(
	[Porker_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Currencies]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Currencies](
	[Curren_ID] [int] IDENTITY(1,1) NOT NULL,
	[Curren_Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Currencies] PRIMARY KEY CLUSTERED 
(
	[Curren_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ports]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ports](
	[Port_ID] [int] IDENTITY(1,1) NOT NULL,
	[Port_Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Ports] PRIMARY KEY CLUSTERED 
(
	[Port_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Prod_ID] [int] IDENTITY(1,1) NOT NULL,
	[Prod_Name] [varchar](50) NOT NULL,
	[Prod_Weight] [int] NOT NULL,
	[Prod_Price] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Prod_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Purchasing_Team]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Purchasing_Team](
	[Purc_Mem_Id] [int] IDENTITY(1,1) NOT NULL,
	[Purc_Mem_Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Purchasing_Team] PRIMARY KEY CLUSTERED 
(
	[Purc_Mem_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shipment_Products]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shipment_Products](
	[Shipment_Id] [int] NOT NULL,
	[Prod_Id] [int] NOT NULL,
	[Quantity] [int] NULL,
	[total_price] [int] NULL,
 CONSTRAINT [PK_Shipment_Products] PRIMARY KEY CLUSTERED 
(
	[Shipment_Id] ASC,
	[Prod_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shipments]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shipments](
	[Shipment_Id] [int] IDENTITY(1,1) NOT NULL,
	[Supplier_Id] [int] NOT NULL,
	[Porker_Id] [int] NOT NULL,
	[Currency_Id] [int] NOT NULL,
	[Storage_Id] [int] NOT NULL,
	[Port_Id] [int] NOT NULL,
	[Current_Status_Id] [int] NOT NULL,
	[Shipping_Company_Id] [int] NOT NULL,
	[Purch_Team_Id] [int] NOT NULL,
	[way_of_transport] [varchar](50) NOT NULL,
	[taxes] [int] NOT NULL,
	[Fines] [int] NOT NULL,
	[taxes_Currency_Id] [int] NOT NULL,
	[estimated_delivery_date] [date] NULL,
	[actual_delivery_date] [date] NULL,
 CONSTRAINT [PK_Shipments] PRIMARY KEY CLUSTERED 
(
	[Shipment_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shipping_Company]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shipping_Company](
	[SH_CP_Id] [int] IDENTITY(1,1) NOT NULL,
	[SH_CP_Name] [varchar](50) NULL,
 CONSTRAINT [PK_Shipping_Company] PRIMARY KEY CLUSTERED 
(
	[SH_CP_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shippment_logs]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shippment_logs](
	[Shippment_Id] [int] NOT NULL,
	[Status_Id] [int] NOT NULL,
	[Start_Date] [date] NULL,
	[End_Date] [date] NULL,
 CONSTRAINT [PK_Shippment_logs] PRIMARY KEY CLUSTERED 
(
	[Shippment_Id] ASC,
	[Status_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[Status_ID] [int] IDENTITY(1,1) NOT NULL,
	[Status_Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[Status_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Storages]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Storages](
	[Storage_ID] [int] IDENTITY(1,1) NOT NULL,
	[Storage_Location] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Storages] PRIMARY KEY CLUSTERED 
(
	[Storage_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Supplier]    Script Date: 9/17/2021 2:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Supplier](
	[SP_ID] [int] IDENTITY(1,1) NOT NULL,
	[SP_Name] [varchar](50) NOT NULL,
	[SP_Loc] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Supplier] PRIMARY KEY CLUSTERED 
(
	[SP_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Shipment_Products]  WITH CHECK ADD  CONSTRAINT [FK_Shipment_Products_Products] FOREIGN KEY([Prod_Id])
REFERENCES [dbo].[Products] ([Prod_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shipment_Products] CHECK CONSTRAINT [FK_Shipment_Products_Products]
GO
ALTER TABLE [dbo].[Shipment_Products]  WITH CHECK ADD  CONSTRAINT [FK_Shipment_Products_Shipments] FOREIGN KEY([Shipment_Id])
REFERENCES [dbo].[Shipments] ([Shipment_Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shipment_Products] CHECK CONSTRAINT [FK_Shipment_Products_Shipments]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Clear_Porkers] FOREIGN KEY([Porker_Id])
REFERENCES [dbo].[Clear_Porkers] ([Porker_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Clear_Porkers]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Currencies] FOREIGN KEY([Currency_Id])
REFERENCES [dbo].[Currencies] ([Curren_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Currencies]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Currencies1] FOREIGN KEY([taxes_Currency_Id])
REFERENCES [dbo].[Currencies] ([Curren_ID])
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Currencies1]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Ports] FOREIGN KEY([Port_Id])
REFERENCES [dbo].[Ports] ([Port_ID])
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Ports]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Purchasing_Team] FOREIGN KEY([Purch_Team_Id])
REFERENCES [dbo].[Purchasing_Team] ([Purc_Mem_Id])
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Purchasing_Team]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Shipping_Company] FOREIGN KEY([Shipping_Company_Id])
REFERENCES [dbo].[Shipping_Company] ([SH_CP_Id])
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Shipping_Company]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Status] FOREIGN KEY([Current_Status_Id])
REFERENCES [dbo].[Status] ([Status_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Status]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Storages] FOREIGN KEY([Storage_Id])
REFERENCES [dbo].[Storages] ([Storage_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Storages]
GO
ALTER TABLE [dbo].[Shipments]  WITH CHECK ADD  CONSTRAINT [FK_Shipments_Supplier] FOREIGN KEY([Supplier_Id])
REFERENCES [dbo].[Supplier] ([SP_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shipments] CHECK CONSTRAINT [FK_Shipments_Supplier]
GO
ALTER TABLE [dbo].[Shippment_logs]  WITH CHECK ADD  CONSTRAINT [FK_Shippment_logs_Shipments] FOREIGN KEY([Shippment_Id])
REFERENCES [dbo].[Shipments] ([Shipment_Id])
GO
ALTER TABLE [dbo].[Shippment_logs] CHECK CONSTRAINT [FK_Shippment_logs_Shipments]
GO
ALTER TABLE [dbo].[Shippment_logs]  WITH CHECK ADD  CONSTRAINT [FK_Shippment_logs_Status] FOREIGN KEY([Status_Id])
REFERENCES [dbo].[Status] ([Status_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shippment_logs] CHECK CONSTRAINT [FK_Shippment_logs_Status]
GO
USE [master]
GO
ALTER DATABASE [Import_Company] SET  READ_WRITE 
GO
