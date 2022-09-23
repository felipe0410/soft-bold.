-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema soft&bold
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema soft&bold
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `soft&bold` DEFAULT CHARACTER SET utf8 ;
USE `soft&bold` ;

-- -----------------------------------------------------
-- Table `soft&bold`.`contacto_compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soft&bold`.`contacto_compra` (
  `ID_compra_inf` INT(11) NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(45) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  `Tipo_documento` VARCHAR(10) NOT NULL,
  ` Ndocumento` INT(11) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `referencia` VARCHAR(70) NOT NULL,
  `Departamento` VARCHAR(45) NOT NULL,
  `Ciudad` VARCHAR(45) NOT NULL,
  `Whatsapp` INT(11) NOT NULL,
  PRIMARY KEY (`ID_compra_inf`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `soft&bold`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soft&bold`.`carrito` (
  `ID_compra` INT(11) NOT NULL,
  `Unidades` INT(11) NOT NULL,
  `Precio` INT(11) NOT NULL,
  `ID_compra_inf` INT(11) NOT NULL,
  PRIMARY KEY (`ID_compra`, `ID_compra_inf`),
  INDEX `fk_carrito_contacto_compra1_idx` (`ID_compra_inf` ASC),
  CONSTRAINT `fk_carrito_contacto_compra1`
    FOREIGN KEY (`ID_compra_inf`)
    REFERENCES `soft&bold`.`contacto_compra` (`ID_compra_inf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `soft&bold`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soft&bold`.`categoria` (
  `idcategoria` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `soft&bold`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soft&bold`.`productos` (
  `ID_producto` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Producto` VARCHAR(50) NOT NULL,
  `Marca` VARCHAR(50) NOT NULL,
  `Precio` INT(11) NOT NULL,
  `Unidades` INT(11) NOT NULL,
  `Descripcion` TEXT NOT NULL,
  `Componentes` TEXT NOT NULL,
  `imagen` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ID_producto`))
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `soft&bold`.`categoria_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soft&bold`.`categoria_has_productos` (
  `IDcategoria` INT(11) NOT NULL,
  `ID_ producto` INT(11) NOT NULL,
  PRIMARY KEY (`IDcategoria`, `ID_ producto`),
  INDEX `fk_categoria_has_productos_productos1_idx` (`ID_ producto` ASC),
  INDEX `fk_categoria_has_productos_categoria1_idx` (`IDcategoria` ASC),
  CONSTRAINT `fk_categoria_has_productos_categoria1`
    FOREIGN KEY (`IDcategoria`)
    REFERENCES `soft&bold`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_categoria_has_productos_productos1`
    FOREIGN KEY (`ID_ producto`)
    REFERENCES `soft&bold`.`productos` (`ID_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `soft&bold`.`productos_carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soft&bold`.`productos_carrito` (
  `ID_ producto` INT(11) NOT NULL,
  `ID_compra` INT(11) NOT NULL,
  PRIMARY KEY (`ID_ producto`, `ID_compra`),
  INDEX `fk_productos_has_carrito_carrito1_idx` (`ID_compra` ASC),
  INDEX `fk_productos_has_carrito_productos1_idx` (`ID_ producto` ASC),
  CONSTRAINT `fk_productos_has_carrito_carrito1`
    FOREIGN KEY (`ID_compra`)
    REFERENCES `soft&bold`.`carrito` (`ID_compra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_has_carrito_productos1`
    FOREIGN KEY (`ID_ producto`)
    REFERENCES `soft&bold`.`productos` (`ID_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Table `soft&bold`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soft&bold`.`usuario` (
  `ID_usuarios` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombres` VARCHAR(50) NOT NULL,
  `Apellidos` VARCHAR(50) NOT NULL,
  `Email` VARCHAR(50) NOT NULL,
  `Contraseña` VARCHAR(12) NOT NULL,
  `admin` TINYTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`ID_usuarios`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
